"use client";
import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import Link from 'next/link';

// Importa el tipo de dato correcto y la data de los proyectos.
import { showcaseProjects, ShowcaseProject } from '@/data/projects-showcase';

// Función para encontrar el slug del proyecto anterior y siguiente.
const findPrevNextSlugs = (currentSlug: string) => {
  const currentIndex = showcaseProjects.findIndex((project) => project.slug === currentSlug);
  const prevProject = currentIndex > 0 ? showcaseProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < showcaseProjects.length - 1 ? showcaseProjects[currentIndex + 1] : null;

  return {
    prevSlug: prevProject ? prevProject.slug : null,
    nextSlug: nextProject ? nextProject.slug : null,
  };
};

// Define los tipos de las props que este componente espera.
// Ya no necesitamos prevSlug y nextSlug aquí, los calcularemos internamente.
type Props = { project: ShowcaseProject };

export default function PortfolioDetailsShowcaseArea({ project }: Props) {
  // Calculamos los slugs de navegación a partir de la data del proyecto actual.
  const { prevSlug, nextSlug } = findPrevNextSlugs(project.slug);

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
    subtitle = "[ UI, Web Design ]",
    title = "Top Paddock",
    overview = "Eagle Films is an active player on the entertainment scene as a major Hollywood movies distributor and co-producer. They reach out to me to not only redesign their website but also to change the look and feel of their brand.",
    client = 'LikoTheme',
    services = 'UI / UX Design',
    location = 'USA',
    releaseDate = "October '2024",
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
          <div className="port-showcase-slider-social tp-hover-btn-wrapper">
            <a className="tp-hover-btn-item tp-hover-btn" href="https://www.instagram.com/unamuno.arq/">Fb</a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-showcase-details-content text-center">
                  <span className="port-showcase-slider-subtitle tp_title_anim">
                    {subtitle}
                  </span>
                  <h4 className="port-showcase-slider-title tp-char-animation">{title}</h4>
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
                <span className="showcase-details-subtitle">Resumen</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right">
                <p className="tp_title_anim">{overview}</p>
                <div className="showcase-details-overview-info">
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Por</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>{client}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Servicios</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>{services}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Ubicación</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>{location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span>Fotografía</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span>{releaseDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div className="showcase-details-thumb mb-80">
                  <Image data-speed=".8" src={src} alt="details-thumb" width={800} height={600} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>
              </div>
            ))}
            {thumbs[2] && (
              <div className="col-xl-12">
                <div className="showcase-details-thumb mb-80">
                  <Image data-speed=".8" src={thumbs[2]} alt="details-thumb" width={1200} height={800} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* navigation after thumbs */}
      <div className="project-details-1-navigation d-flex justify-content-between align-items-center pb-60">
        <Link className="project-details-1-prev" href={prevSlug ? `/portfolio/${prevSlug}` : '#'}>
          <i className="fa-sharp fa-regular fa-arrow-left"></i>
          <span>Prev</span>
        </Link>
        <a href="#">
          <span>• • •</span>
        </a>
        <Link className="project-details-1-next" href={nextSlug ? `/portfolio/${nextSlug}` : '#'}>
          <span>Next</span>
          <i className="fa-sharp fa-regular fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}