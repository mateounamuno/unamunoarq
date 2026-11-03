"use client";
import React, { useState } from "react";
import ImageCarousel from "@/components/portfolio/details/image-carousel";
import ImageLightbox from "@/components/modal/image-lightbox";
import styles from "./apuntes-area.module.scss";

const APUNTES_IMAGES = [
  "/assets/img/inner-blog/blog-details/1.webp",
  "/assets/img/inner-blog/blog-details/2.webp",
  "/assets/img/inner-blog/blog-details/3.webp",
  "/assets/img/inner-blog/blog-details/4.webp",
  "/assets/img/inner-blog/blog-details/5.webp",
  "/assets/img/inner-blog/blog-details/6.webp",
  "/assets/img/inner-blog/blog-details/7.webp",
  "/assets/img/inner-blog/blog-details/14.webp",
  "/assets/img/inner-blog/blog-details/15.webp",
  "/assets/img/inner-blog/blog-details/13.webp",
  "/assets/img/inner-blog/blog-details/16.webp",
  "/assets/img/inner-blog/blog-details/8.webp",
  "/assets/img/inner-blog/blog-details/8a.webp",
  "/assets/img/inner-blog/blog-details/9.webp",
  "/assets/img/inner-blog/blog-details/10.webp",
  "/assets/img/inner-blog/blog-details/11.webp",
  "/assets/img/inner-blog/blog-details/12.webp",
];

const APUNTES_PARAGRAPHS = [
  "El dibujo y la pintura son la antesala de la arquitectura: en ellos se gesta la intuición primera, el gesto que aún no conoce la materia pero ya anuncia el espacio. El trazo, como línea suspendida en el vacío, abre la posibilidad de un muro; la mancha, como extensión de color, prefigura la atmósfera de un recinto.",
  "Pintar y dibujar son modos de pensar con la mano, de imaginar con la mirada, de explorar un mundo todavía abstracto que la arquitectura más tarde vuelve habitable.",
  "Dibujo para abstraerme del tiempo y de lo coyuntural, como quien se refugia en un estado más puro de la atención. Me interesa la libertad de los dibujos de los niños: desestructurados, espontáneos, con errores y, a su manera, profundamente serios. El dibujo para ellos no es un medio, sino un fin en sí mismo: lo hacen por diversión, y en esa aparente ligereza se esconde una sabiduría despojada y sincera.",
  "Quizás por eso la arquitectura nace del dibujo como la vida del juego: porque en ese trazo inocente se revela la esencia de lo humano, una búsqueda de cobijo y de belleza sin necesidad de explicación. Dibujar es esbozar el mundo antes de que exista, es acercarse a lo inasible. Y tal vez, en esa fugacidad, residen verdades de la arquitectura: la que nos recuerda que toda forma, todo espacio, no es más que un intento de atrapar un instante de libertad.",
];

export default function BlogDetailsAreaTwo() {
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  const openLightbox = (imageSrc: string, imageAlt: string) => {
    setLightboxImage(imageSrc);
    setLightboxAlt(imageAlt);
    setShowLightbox(true);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.carousel}>
            <ImageCarousel
              images={APUNTES_IMAGES}
              title="Apuntes"
              autoplay={!showLightbox}
              paddingX="20px"
              height="min(68vh, 640px)"
              heightMobile="min(55vh, 480px)"
              onImageClick={openLightbox}
            />
          </div>
          <div className={styles.text}>
            {APUNTES_PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        showModal={showLightbox}
        setShowModal={setShowLightbox}
        imageSrc={lightboxImage}
        imageAlt={lightboxAlt}
      />
    </section>
  );
}
