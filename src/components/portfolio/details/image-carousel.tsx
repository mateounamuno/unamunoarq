"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { NextIcon, PrevIcon } from "@/components/svg";
import styles from "./image-carousel.module.scss";

type Props = {
  /** Lista de rutas de imágenes a mostrar (una por slide). */
  images: string[];
  /** Título del proyecto, usado para construir los `alt`. */
  title: string;
  /** Habilita el loop infinito. Por defecto: false (sin loop). */
  loop?: boolean;
  /** Altura del contenedor en desktop (CSS). Default: min(75vh, 800px). */
  height?: string;
  /** Altura del contenedor en mobile (CSS). Default: min(60vh, 520px). */
  heightMobile?: string;
  /** Callback opcional al hacer click en una imagen (p. ej. abrir lightbox). */
  onImageClick?: (src: string, alt: string) => void;
};

// Detecta prefers-reduced-motion en cliente (el componente solo se monta en cliente).
function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ImageCarousel({
  images,
  title,
  loop = false,
  height,
  heightMobile,
  onImageClick,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(images.length <= 1);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [prefersReduced] = useState<boolean>(getPrefersReducedMotion);

  if (!images || images.length === 0) return null;

  const total = images.length;

  const handleUpdate = (sw: SwiperType) => {
    setActiveIndex(sw.realIndex ?? sw.activeIndex);
    setIsBeginning(sw.isBeginning);
    setIsEnd(sw.isEnd);
  };

  // Precarga: imagen activa y adyacentes (anterior/siguiente) en modo eager,
  // el resto lazy. Con loop, también se precargan los extremos.
  const shouldEager = (index: number): boolean => {
    if (Math.abs(index - activeIndex) <= 1) return true;
    if (loop && (index === 0 || index === total - 1)) return true;
    return false;
  };

  const containerStyle = {
    ...(height ? { ["--carousel-height" as string]: height } : {}),
    ...(heightMobile ? { ["--carousel-height-mobile" as string]: heightMobile } : {}),
  } as React.CSSProperties;

  // Flechas: con loop nunca se deshabilitan; sin loop se deshabilitan en los extremos.
  const prevDisabled = !loop && isBeginning;
  const nextDisabled = !loop && isEnd;

  return (
    <div className={styles.carousel} style={containerStyle}>
      <div className={styles.viewport}>
        <Swiper
          modules={[Navigation, Keyboard, A11y, EffectFade]}
          slidesPerView={1}
          loop={loop && total > 1}
          speed={prefersReduced ? 0 : 300}
          effect={prefersReduced ? "slide" : "fade"}
          fadeEffect={{ crossFade: true }}
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
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {total > 1 && (
          <>
            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              aria-label="Imagen anterior"
              onClick={() => swiper?.slidePrev()}
              disabled={prevDisabled}
            >
              <PrevIcon />
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              aria-label="Imagen siguiente"
              onClick={() => swiper?.slideNext()}
              disabled={nextDisabled}
            >
              <NextIcon />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className={styles.counter} aria-live="polite">
          <span aria-hidden="true">
            {activeIndex + 1} / {total}
          </span>
          <span className="visually-hidden">
            Imagen {activeIndex + 1} de {total}
          </span>
        </div>
      )}
    </div>
  );
}
