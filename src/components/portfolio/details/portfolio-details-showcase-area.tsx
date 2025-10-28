"use client";
import React, { useState } from 'react';
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
    subtitle = "[ UI, Web Design ]",
    title = "Top Paddock",
    overview = "Eagle Films is an active player on the entertainment scene as a major Hollywood movies distributor and co-producer. They reach out to me to not only redesign their website but also to change the look and feel of their brand.",
    autores = 'LikoTheme',
    services = 'UI / UX Design',
    location = 'USA',
    fotografia = "October '2024",
    showcaseThumbs,
  } = project;

  // Usa la data real si existe, de lo contrario, usa un array de fallback.
  const thumbs = showcaseThumbs && showcaseThumbs.length > 0
    ? showcaseThumbs
    : [
      "/assets/img/inner-project/showcase/showcase-details-1.jpg",
      "/assets/img/inner-project/showcase/showcase-details-2.jpg",
      "/assets/img/inner-project/showcase/showcase-details-3.jpg",
    ];

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
      <div id="xyz" className="showcase-details-overview pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle tp_title_anim">Resumen</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right">
                <p className="tp_title_anim" style={{ fontSize: '1.15rem' }} data-fade-offset="30" data-duration="1.2" dangerouslySetInnerHTML={{ __html: overview?.replace(/\n/g, '<br/>') || '' }}></p>
                <div className="showcase-details-overview-info">
                  {autores && (
                    <div className="showcase-details-overview-info-item tp_fade_bottom">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="showcase-details-overview-info-left">
                            <span className="tp_title_anim">Por</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="showcase-details-overview-info-right">
                            <span className="tp_title_anim">{autores}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {services && (
                    <div className="showcase-details-overview-info-item tp_fade_bottom">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="showcase-details-overview-info-left">
                            <span className="tp_title_anim">Servicios</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="showcase-details-overview-info-right">
                            <span className="tp_title_anim">{services}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {location && (
                    <div className="showcase-details-overview-info-item tp_fade_bottom">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="showcase-details-overview-info-left">
                            <span className="tp_title_anim">Ubicación</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="showcase-details-overview-info-right">
                            <span className="tp_title_anim">{location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {fotografia && (
                    <div className="showcase-details-overview-info-item tp_fade_bottom">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="showcase-details-overview-info-left">
                            <span className="tp_title_anim">Fotografía</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="showcase-details-overview-info-right">
                            <span className="tp_title_anim">{fotografia}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details overview */}

      {/* details thumb */}
      <div className="showcase-details-thumb-wrap pb-40">
        <div className="container container-1430">
          <div className="row gx-80">
            {thumbs.slice(0, 2).map((src: string, i: number) => (
              <div key={i} className="col-xl-6 col-lg-6">
                <div className="showcase-details-thumb mb-80 tp_img_fade_in" data-delay={i * 0.3}>
                  <Image
                    src={src}
                    alt={`${title} details thumb ${i + 1}`}
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "auto", objectFit: "cover", cursor: "pointer" }}
                    onClick={() => openLightbox(src, `${title} details thumb ${i + 1}`)}
                  />
                </div>
              </div>
            ))}
            {thumbs[2] && (
              <div className="col-xl-12">
                <div className="showcase-details-thumb mb-80 tp_img_fade_in" data-delay="0.6">
                  <Image
                    src={thumbs[2]}
                    alt={`${title} details thumb 3`}
                    width={1200}
                    height={800}
                    style={{ width: "100%", height: "auto", objectFit: "cover", cursor: "pointer" }}
                    onClick={() => openLightbox(thumbs[2], `${title} details thumb 3`)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* navigation after thumbs */}
      <div className="project-details-1-navigation d-flex justify-content-between align-items-center pb-60">
        <Link className="project-details-1-prev tp_title_anim" href={prevSlug ? `/portfolio/${prevType === 'showcase-2' ? 'showcase-2' : 'showcase'}/${prevSlug}` : '#'}>
          <i className="fa-sharp fa-regular fa-arrow-left"></i>
        </Link>
        <a href="#" className="tp_title_anim">
          <span>• • •</span>
        </a>
        <Link className="project-details-1-next tp_title_anim" href={nextSlug ? `/portfolio/${nextType === 'showcase-2' ? 'showcase-2' : 'showcase'}/${nextSlug}` : '#'}>
          <i className="fa-sharp fa-regular fa-arrow-right"></i>
        </Link>
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