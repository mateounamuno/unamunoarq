"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import styles from "./image-carousel.module.scss";

/** Elemento de la galería: imagen o video. */
export type CarouselMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string };

type Props = {
  /** Lista de rutas de imágenes a mostrar (una por slide). */
  images?: string[];
  /** Alternativa a `images`: lista de medios (imágenes y/o videos). Tiene prioridad sobre `images`. */
  media?: CarouselMedia[];
  /** Título del proyecto, usado para construir los `alt`. */
  title: string;
  /** Habilita el loop infinito. Por defecto: false (sin loop). */
  loop?: boolean;
  /** Autoplay en ms. `true` usa 4500ms. Por defecto: off. */
  autoplay?: boolean | number;
  /** Altura del contenedor en desktop (CSS). Default: min(75vh, 800px). */
  height?: string;
  /** Altura del contenedor en mobile (CSS). Default: min(60vh, 520px). */
  heightMobile?: string;
  /** Padding horizontal del slide (CSS). */
  paddingX?: string;
  /** Flechas siempre debajo, alineadas con el contador. */
  navBelow?: boolean;
  /** Callback opcional al hacer click en una imagen (p. ej. abrir lightbox). */
  onImageClick?: (src: string, alt: string) => void;
};

type NavLayout = {
  below: boolean;
  left: number;
  right: number;
};

const DEFAULT_NAV: NavLayout = { below: false, left: 16, right: 16 };

function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type MediaSize = { width: number; height: number };

function getContainedSize(nw: number, nh: number, wrapW: number, wrapH: number) {
  const scale = Math.min(wrapW / nw, wrapH / nh);
  return { width: nw * scale, height: nh * scale };
}

function loadImageSize(src: string): Promise<MediaSize | null> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export default function ImageCarousel({
  images,
  media,
  title,
  loop = false,
  autoplay = false,
  height,
  heightMobile,
  paddingX,
  navBelow = false,
  onImageClick,
}: Props) {
  // Normaliza las props a una lista única de medios. `media` tiene prioridad;
  // si solo llega `images`, se tratan todas como imágenes (retrocompatibilidad).
  const slides = useMemo<CarouselMedia[]>(
    () => media ?? (images ?? []).map((src) => ({ type: "image" as const, src })),
    [media, images]
  );
  const total = slides.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(total <= 1);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [prefersReduced] = useState<boolean>(getPrefersReducedMotion);
  const [navLayout, setNavLayout] = useState<NavLayout>(
    navBelow ? { below: true, left: 0, right: 0 } : DEFAULT_NAV
  );
  const viewportRef = useRef<HTMLDivElement>(null);
  // Dimensiones naturales de todos los slides; las flechas se fijan a la imagen más ancha.
  const mediaSizesRef = useRef<MediaSize[]>([]);
  const autoplayDelay = autoplay === true ? 4500 : autoplay || 0;
  const autoplayEnabled = Boolean(autoplayDelay) && !prefersReduced && total > 1;

  const handleUpdate = (sw: SwiperType) => {
    setActiveIndex(sw.realIndex ?? sw.activeIndex);
    setIsBeginning(sw.isBeginning);
    setIsEnd(sw.isEnd);
  };

  const updateNavFromLargest = useCallback(() => {
    if (navBelow) {
      setNavLayout({ below: true, left: 0, right: 0 });
      return;
    }
    const viewport = viewportRef.current;
    if (!viewport) return;

    const wrapEl =
      (viewport.querySelector(`.${styles.imageWrap}`) as HTMLElement | null) ??
      (viewport.querySelector(".swiper-slide-active") as HTMLElement | null);
    if (!wrapEl) return;

    const view = viewport.getBoundingClientRect();
    const wrap = wrapEl.getBoundingClientRect();
    const sizes = mediaSizesRef.current;
    if (sizes.length === 0) return;

    // Usar el ancho visual máximo (imagen más grande en el viewport con object-fit: contain).
    let maxWidth = 0;
    for (const size of sizes) {
      if (!size.width || !size.height) continue;
      const contained = getContainedSize(size.width, size.height, wrap.width, wrap.height);
      if (contained.width > maxWidth) maxWidth = contained.width;
    }
    if (maxWidth <= 0) return;

    const boxLeft = wrap.left + (wrap.width - maxWidth) / 2;
    const boxRight = boxLeft + maxWidth;
    const arrowW = window.innerWidth <= 768 ? 40 : 48;
    const gap = 8;
    const spaceLeft = boxLeft - view.left;
    const spaceRight = view.right - boxRight;
    const need = arrowW + gap;

    if (spaceLeft < need || spaceRight < need) {
      setNavLayout({ below: true, left: 0, right: 0 });
      return;
    }

    setNavLayout({
      below: false,
      left: Math.max(0, spaceLeft - arrowW - gap),
      right: Math.max(0, spaceRight - arrowW - gap),
    });
  }, [navBelow]);

  // Precargar tamaños de todos los slides y fijar flechas a la imagen más ancha.
  // Solo se recalcula al cambiar slides/resize — no al cambiar de foto activa.
  useEffect(() => {
    if (navBelow) {
      setNavLayout({ below: true, left: 0, right: 0 });
      return;
    }

    let cancelled = false;

    (async () => {
      const sizes = await Promise.all(
        slides.map(async (item) => {
          if (item.type === "video") {
            // Sin metadata de video aún: tratar como 16:9 para no bloquear el layout.
            return { width: 1920, height: 1080 } as MediaSize;
          }
          return (await loadImageSize(item.src)) ?? { width: 0, height: 0 };
        })
      );
      if (cancelled) return;
      mediaSizesRef.current = sizes.filter((s) => s.width > 0 && s.height > 0);
      updateNavFromLargest();
    })();

    const viewport = viewportRef.current;
    const ro = viewport ? new ResizeObserver(() => updateNavFromLargest()) : null;
    if (viewport && ro) ro.observe(viewport);

    return () => {
      cancelled = true;
      ro?.disconnect();
    };
  }, [slides, navBelow, updateNavFromLargest]);

  if (total === 0) return null;

  const shouldEager = (index: number): boolean => {
    if (Math.abs(index - activeIndex) <= 1) return true;
    if ((loop || autoplayEnabled) && (index === 0 || index === total - 1)) return true;
    return false;
  };

  const containerStyle = {
    ...(height ? { ["--carousel-height" as string]: height } : {}),
    ...(heightMobile ? { ["--carousel-height-mobile" as string]: heightMobile } : {}),
    ...(paddingX ? { ["--carousel-pad-x" as string]: paddingX } : {}),
  } as React.CSSProperties;

  const loopEnabled = (loop || autoplayEnabled) && total > 1;
  const prevDisabled = !loopEnabled && isBeginning;
  const nextDisabled = !loopEnabled && isEnd;

  const prevButton = total > 1 && (
    <button
      type="button"
      className={`${styles.nav} ${styles.navPrev}`}
      aria-label="Imagen anterior"
      onClick={() => swiper?.slidePrev()}
      disabled={prevDisabled}
      style={navLayout.below ? undefined : { left: navLayout.left }}
    >
      <i className="fa-sharp fa-regular fa-arrow-left" aria-hidden="true"></i>
    </button>
  );

  const nextButton = total > 1 && (
    <button
      type="button"
      className={`${styles.nav} ${styles.navNext}`}
      aria-label="Imagen siguiente"
      onClick={() => swiper?.slideNext()}
      disabled={nextDisabled}
      style={navLayout.below ? undefined : { right: navLayout.right }}
    >
      <i className="fa-sharp fa-regular fa-arrow-right" aria-hidden="true"></i>
    </button>
  );

  const counter = total > 1 && (
    <div className={styles.counter} aria-live="polite">
      <span aria-hidden="true">
        {activeIndex + 1} / {total}
      </span>
      <span className="visually-hidden">
        Imagen {activeIndex + 1} de {total}
      </span>
    </div>
  );

  return (
    <div className={styles.carousel} style={containerStyle}>
      <div className={styles.viewport} ref={viewportRef}>
        <Swiper
          modules={[Navigation, Keyboard, A11y, EffectFade, Autoplay]}
          slidesPerView={1}
          loop={loopEnabled}
          speed={prefersReduced ? 0 : 300}
          effect={prefersReduced ? "slide" : "fade"}
          fadeEffect={{ crossFade: true }}
          autoplay={
            autoplayEnabled
              ? {
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{
            prevSlideMessage: "Imagen anterior",
            nextSlideMessage: "Imagen siguiente",
          }}
          onSwiper={(sw) => {
            setSwiper(sw);
            handleUpdate(sw);
          }}
          onSlideChange={handleUpdate}
          className={styles.swiper}
        >
          {slides.map((item, i) => {
            const alt = `${title} — imagen ${i + 1} de ${total}`;

            if (item.type === "video") {
              return (
                <SwiperSlide key={`${item.src}-${i}`} className={styles.slide}>
                  <div className={styles.imageWrap}>
                    <video
                      className={styles.video}
                      src={item.src}
                      poster={item.poster}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={`${title} — video ${i + 1} de ${total}`}
                    />
                  </div>
                </SwiperSlide>
              );
            }

            return (
              <SwiperSlide key={`${item.src}-${i}`} className={styles.slide}>
                <div
                  className={styles.imageWrap}
                  onClick={onImageClick ? () => onImageClick(item.src, alt) : undefined}
                  style={onImageClick ? { cursor: "pointer" } : undefined}
                >
                  <Image
                    src={item.src}
                    alt={alt}
                    fill
                    unoptimized
                    loading={shouldEager(i) ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {total > 1 && !navLayout.below && (
          <>
            {prevButton}
            {nextButton}
          </>
        )}
      </div>

      {total > 1 && (
        navLayout.below ? (
          <div className={styles.controls}>
            {prevButton}
            {counter}
            {nextButton}
          </div>
        ) : (
          counter
        )
      )}
    </div>
  );
}
