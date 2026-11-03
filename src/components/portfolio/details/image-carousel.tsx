"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import styles from "./image-carousel.module.scss";

type Props = {
  /** Lista de rutas de imágenes a mostrar (una por slide). */
  images: string[];
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

function getContainedBox(img: HTMLImageElement, wrap: DOMRect) {
  const nw = img.naturalWidth;
  const nh = img.naturalHeight;
  if (!nw || !nh) return wrap;
  const scale = Math.min(wrap.width / nw, wrap.height / nh);
  const width = nw * scale;
  const height = nh * scale;
  const left = wrap.left + (wrap.width - width) / 2;
  const top = wrap.top + (wrap.height - height) / 2;
  return { left, right: left + width, top, bottom: top + height, width, height };
}

export default function ImageCarousel({
  images,
  title,
  loop = false,
  autoplay = false,
  height,
  heightMobile,
  paddingX,
  onImageClick,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(images.length <= 1);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [prefersReduced] = useState<boolean>(getPrefersReducedMotion);
  const [navLayout, setNavLayout] = useState<NavLayout>(DEFAULT_NAV);
  const viewportRef = useRef<HTMLDivElement>(null);

  const total = images?.length ?? 0;
  const autoplayDelay = autoplay === true ? 4500 : autoplay || 0;
  const autoplayEnabled = Boolean(autoplayDelay) && !prefersReduced && total > 1;

  const handleUpdate = (sw: SwiperType) => {
    setActiveIndex(sw.realIndex ?? sw.activeIndex);
    setIsBeginning(sw.isBeginning);
    setIsEnd(sw.isEnd);
  };

  const updateNavFromImage = useCallback(() => {
    const viewport = viewportRef.current;
    const img = viewport?.querySelector(".swiper-slide-active img") as HTMLImageElement | null;
    if (!viewport || !img) return;

    const view = viewport.getBoundingClientRect();
    const wrap = img.getBoundingClientRect();
    const box = getContainedBox(img, wrap);
    const arrowW = window.innerWidth <= 768 ? 40 : 48;
    const gap = 8;
    const spaceLeft = box.left - view.left;
    const spaceRight = view.right - box.right;
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
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const ro = new ResizeObserver(() => updateNavFromImage());
    ro.observe(viewport);

    const img = viewport.querySelector(".swiper-slide-active img") as HTMLImageElement | null;
    if (img) {
      if (img.complete) updateNavFromImage();
      else img.addEventListener("load", updateNavFromImage);
    }

    const timer = window.setTimeout(updateNavFromImage, 50);
    return () => {
      ro.disconnect();
      img?.removeEventListener("load", updateNavFromImage);
      window.clearTimeout(timer);
    };
  }, [activeIndex, images, updateNavFromImage]);

  if (!images || total === 0) return null;

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

  const navButtons = total > 1 && (
    <>
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
    </>
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
          onTransitionEnd={updateNavFromImage}
          className={styles.swiper}
        >
          {images.map((src, i) => {
            const alt = `${title} — imagen ${i + 1} de ${total}`;
            return (
              <SwiperSlide key={`${src}-${i}`} className={styles.slide}>
                <div
                  className={styles.imageWrap}
                  onClick={onImageClick ? () => onImageClick(src, alt) : undefined}
                  style={onImageClick ? { cursor: "pointer" } : undefined}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    unoptimized
                    loading={shouldEager(i) ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                    onLoad={updateNavFromImage}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {total > 1 && !navLayout.below && navButtons}
      </div>

      {total > 1 && (
        navLayout.below ? (
          <div className={styles.controls}>
            {navButtons}
            {counter}
          </div>
        ) : (
          counter
        )
      )}
    </div>
  );
}
