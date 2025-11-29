"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import Link from 'next/link';

// Importa el tipo de dato correcto y la data de los proyectos.
import { showcaseProjects, ShowcaseProject } from '@/data/projects-showcase';
import { findUnifiedPrevNext } from '@/utils/unified-projects';
import ImageLightbox from '@/components/modal/image-lightbox';

// Define los tipos de las props que este componente espera.
// Ya no necesitamos prevSlug y nextSlug aquí, los calcularemos internamente.
type Props = { project: ShowcaseProject };

export default function PortfolioDetailsShowcaseArea({ project }: Props) {
  // State for lightbox modal
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // Evita desajustes entre SSR y cliente: renderiza solo tras montar en cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculamos los slugs de navegación unificada
  const { prevSlug, nextSlug, prevType, nextType } = findUnifiedPrevNext(project.slug, 'showcase');

  // Function to open lightbox
  const openLightbox = (imageSrc: string, imageAlt: string) => {
    setLightboxImage(imageSrc);
    setLightboxAlt(imageAlt);
    setShowLightbox(true);
  };

  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  // Desestructuramos las propiedades del objeto project con valores por defecto para mayor seguridad.
  const {
    showcaseHeroBg = "/assets/img/inner-project/showcase/showcase-1.jpg",
    heroOverlayOpacity = 0.5,
    subtitle = "",
    title = "",
    overview = "",
    autores = '',
    category = '',
    location = '',
    fotografia = "",
    showcaseThumbs,
    fullWidthImage,
  } = project;

  // Usa la data real si existe, de lo contrario, usa un array de fallback.
  const thumbs = showcaseThumbs && showcaseThumbs.length > 0
    ? showcaseThumbs
    : [
      "/assets/img/inner-project/showcase/showcase-details-1.jpg",
      "/assets/img/inner-project/showcase/showcase-details-2.jpg",
      "/assets/img/inner-project/showcase/showcase-details-3.jpg",
    ];

  // Normalizar fullWidthImage a un array para manejar tanto string como array
  const fullWidthImages = fullWidthImage
    ? Array.isArray(fullWidthImage)
      ? fullWidthImage
      : [fullWidthImage]
    : [];

  // Evita hidratación hasta que el cliente esté listo
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* details area */}
      <div className="tp-showcase-details-area">
        <div className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" style={{ backgroundImage: `url(${showcaseHeroBg})` }}>
          {/* Overlay con opacidad */}
          <div
            className="tp-showcase-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(0, 0, 0, ${heroOverlayOpacity})`,
              zIndex: 1
            }}
          ></div>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row">
              <div className="col-12">
                <div className="tp-showcase-details-content text-center">
                  <span className="port-showcase-slider-subtitle tp_title_anim">
                    {subtitle}
                  </span>
                  <h4 className="port-showcase-slider-title tp_title_anim">{title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details overview */}
      <div id="xyz" className="showcase-details-overview pt-100 pb-100">
        <div className="container">
          <div className="row">

            <div className="col-xl-4" >
              <div className="showcase-details-overview-info">
                {autores && (
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="showcase-details-overview-info-left">
                      <span className="tp_title_anim">Por</span>
                    </div>
                    <div className="showcase-details-overview-info-right">
                      <span className="tp_title_anim">{autores}</span>
                    </div>
                  </div>
                )}
                {category && (
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="showcase-details-overview-info-left">
                      <span className="tp_title_anim">Categoría</span>
                    </div>
                    <div className="showcase-details-overview-info-right">
                      <span className="tp_title_anim">{category}</span>
                    </div>
                  </div>
                )}
                {location && (
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="showcase-details-overview-info-left">
                      <span className="tp_title_anim">Ubicación</span>
                    </div>
                    <div className="showcase-details-overview-info-right">
                      <span className="tp_title_anim">{location}</span>
                    </div>
                  </div>
                )}
                {fotografia && (
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="showcase-details-overview-info-left">
                      <span className="tp_title_anim">Fotografía</span>
                    </div>
                    <div className="showcase-details-overview-info-right">
                      <span className="tp_title_anim">{fotografia}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-8">
              <div className="showcase-details-overview-right">
                <p className="tp_title_anim showcase-overview-text" style={{ fontSize: '1.15rem' }} data-fade-offset="30" data-duration="1.2" dangerouslySetInnerHTML={{ __html: overview?.replace(/\n/g, '<br/>') || '' }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details overview */}

      {/* details thumb */}
      <div className="showcase-details-thumb-wrap pb-40">
        <div className="container">
          {/* Grid de 2 columnas para hasta 12 fotos */}
          {thumbs.length > 0 && (
            <div className="row gx-80">
              {thumbs.slice(0, 12).map((src: string, i: number) => {
                // Usar unoptimized para todas las imágenes para evitar problemas de optimización
                return (
                  <div key={i} className="col-xl-6 col-lg-6">
                    <div className="showcase-details-thumb tp_img_fade_in" data-delay={i * 0.1} style={{
                      // Evitar !important en inline styles, no es soportado en React
                      marginBottom: "70px",
                      height: "auto"
                    }}>
                      <div className="thumb-container" style={{
                        width: "100%",
                        height: "400px",
                        overflow: "hidden",
                        position: "relative"
                      }}>
                        <Image
                          src={src}
                          alt={`${title} details thumb ${i + 1}`}
                          width={800}
                          height={400}
                          unoptimized={true}
                          priority={i < 2}
                          sizes="(min-width: 1200px) 800px, (min-width: 768px) 50vw, 100vw"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer"
                          }}
                          onClick={() => openLightbox(src, `${title} details thumb ${i + 1}`)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Fotos full width opcionales - puede ser una o múltiples */}
          {fullWidthImages.length > 0 && fullWidthImages.map((imgSrc, index) => (
            <div key={index} className="row">
              <div className="col-xl-12">
                <div className="showcase-details-thumb tp_img_fade_in" data-delay={`${0.8 + index * 0.1}`} style={{
                  marginBottom: "70px",
                  height: "auto"
                }}>
                  <div className="fullwidth-container" style={{
                    width: "100%",
                    height: "600px",
                    overflow: "hidden"
                  }}>
                    <Image
                      src={imgSrc}
                      alt={`${title} details full width ${index + 1}`}
                      width={1200}
                      height={600}
                      priority={index === 0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        cursor: "pointer"
                      }}
                      onClick={() => openLightbox(imgSrc, `${title} details full width ${index + 1}`)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* details thumb */}

      {/* navigation after thumbs */}
      <div className="container">
        <div className="project-details-1-navigation d-flex justify-content-between align-items-center pb-60">
          <Link className="project-details-1-prev tp_title_anim" href={prevSlug ? `/portfolio/showcase/${prevSlug}` : '#'}>
            <i className="fa-sharp fa-regular fa-arrow-left"></i>
          </Link>
          <a href="#" className="tp_title_anim">
            <span>• • •</span>
          </a>
          <Link className="project-details-1-next tp_title_anim" href={nextSlug ? `/portfolio/showcase/${nextSlug}` : '#'}>
            <i className="fa-sharp fa-regular fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <ImageLightbox
        showModal={showLightbox}
        setShowModal={setShowLightbox}
        imageSrc={lightboxImage}
        imageAlt={lightboxAlt}
      />
    </>
  );
}