"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Componentes SVG
import { UpArrow, Dots } from '@/components/svg';
import { Leaf, UpArrowTwo } from '@/components/svg';

// Importamos la data para la navegación dinámica
import { showcase2Projects } from '@/data/projects-showcase-2';

// Importamos el tipo de dato que me proporcionaste.
import type { Showcase2Project } from '@/data/projects-showcase-2';

// image data
const img_data_default = [
  "/assets/img/inner-project/showcase/showcase-details-2-2.jpg",
  "/assets/img/inner-project/showcase/showcase-details-2-3.jpg",
  "/assets/img/inner-project/showcase/showcase-details-2-4.jpg",
  "/assets/img/inner-project/showcase/showcase-details-2-5.jpg",
  "/assets/img/inner-project/showcase/showcase-details-2-6.jpg",
  "/assets/img/inner-project/showcase/showcase-details-2-7.jpg",
  "/assets/img/inner-project/showcase/showcase-details-2-8.jpg",
  "/assets/img/inner-project/showcase/showcase-details-2-9.jpg",
];

// Función para encontrar el slug anterior y siguiente para la navegación.
const findPrevNextSlugs = (currentSlug: string) => {
  const currentIndex = showcase2Projects.findIndex(p => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? showcase2Projects[currentIndex - 1] : null;
  const nextProject = currentIndex < showcase2Projects.length - 1 ? showcase2Projects[currentIndex + 1] : null;

  return {
    prevSlug: prevProject?.slug || null,
    nextSlug: nextProject?.slug || null,
  };
};

// El componente ahora espera recibir una prop 'project' con el tipo Showcase2Project
type Props = { project: Showcase2Project | undefined };

export default function PortfolioDetailsShowcaseTwoArea({ project }: Props) {
  // Early return if project is undefined
  if (!project) {
    return (
      <div className="container py-120">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Proyecto no encontrado</h2>
            <p>El proyecto que buscas no existe o no está disponible.</p>
          </div>
        </div>
      </div>
    );
  }

  const { prevSlug, nextSlug } = findPrevNextSlugs(project.slug);

  // Extraemos la data del objeto 'project', con fallbacks por si acaso
  const {
    showcaseHeroBg,
    heroOverlayOpacity = 0,
    title,
    subtitle,
    summary,
    client,
    services,
    industries,
    date,
    movingGalleryTop,
    movingGalleryBottom,
    fullWidthImage,
    gridImages,
    visitWebsiteText = "Visit Website",
    sectionTitles,
    sectionSubtitles,
    sectionContents,
    navigationTexts = { prev: "Prev", next: "Next" }
  } = project;

  const isSection1Empty = !sectionTitles?.section1 && !sectionSubtitles?.section1;
  const isSection2Empty = !sectionTitles?.section2 && !sectionSubtitles?.section2;
  const isSection3Empty = !sectionTitles?.section3 && !sectionSubtitles?.section3;
  const isSection4Empty = !sectionSubtitles?.section4;

  return (
    <>
      {/* portfolio hero */}
      <div className="showcase-details-2-area showcase-details-2-bg p-relative" style={{ backgroundImage: `url(${showcaseHeroBg})` }}>
        <div
          aria-hidden
          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: `rgba(0,0,0, ${heroOverlayOpacity})`, pointerEvents: 'none', zIndex: 0 }}
        />
        <div className="showcase-details-2-link" style={{ position: 'relative', zIndex: 1 }}>
          <a className="project-details-custom-link" href="#">
            {visitWebsiteText}
            <span><UpArrow /></span>
          </a>
        </div>
        <div className="showcase-details-2-wrapper" data-lag="0.2" data-stagger="0.08" style={{ position: 'relative', zIndex: 1 }}>
          <div className="container container-1550">
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-title-box">
                  <h5 className="showcase-details-2-title mb-20 tp-char-animation">{title}</h5>
                  <span className="showcase-details-2-subtitle tp_title_anim">{subtitle}</span>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-10">
                <div className="showcase-details-2-content tp_title_anim">
                  <p>{summary}</p>
                </div>
                <div className="showcase-details-2-info-wrap d-flex align-items-center justify-content-between">
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>CLIENT</span>
                    <h5>{client}</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>Services</span>
                    <h5>{services}</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>INDUSTRIES</span>
                    <h5>{industries}</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>Date</span>
                    <h5>{date}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio hero */}

      {/* details title */}
      <div className="showcase-details-2-area pt-120 pb-120">
        <div className="container">
          {sectionTitles?.section1 || sectionSubtitles?.section1 ? (
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">{sectionTitles?.section1}</h4>
                </div>
              </div>
              <div className="col-xl-10">
                <div className="showcase-details-2-section-right tp_title_anim">
                  <p>{sectionContents?.section1}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="showcase-details-2-section-right tp_title_anim">
                  <p style={{ fontSize: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit' }}>{sectionContents?.section1}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* details title */}

      {/* moving image */}
      <div className="showcase-details-2-slider-area pb-120">
        <div className="moving-gallery">
          <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-top d-flex align-items-end mb-20">
            {movingGalleryTop.map((imgSrc, i) => (
              <div key={i} className="showcase-details-2-slider-item" style={{ height: 420 }}>
                <Image src={imgSrc} alt="port-img" width={800} height={600} style={{ height: 420, width: 'auto', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
        <div className="moving-gallery">
          <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-bottom d-flex align-items-start">
            {movingGalleryBottom.map((imgSrc, i) => (
              <div key={i} className="showcase-details-2-slider-item" style={{ height: 420 }}>
                <Image src={imgSrc} alt="port-img" width={800} height={600} style={{ height: 420, width: 'auto', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* moving image */}

      {/* details title 2 */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          {sectionTitles?.section2 || sectionSubtitles?.section2 ? (
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="showcase-details-2-section-right tp_title_anim text-center">
                  <p style={{ fontSize: '1.7em' }}>{sectionContents?.section2}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="showcase-details-2-section-right tp_title_anim">
                  <p style={{ fontSize: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit' }}>{sectionContents?.section2}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* details title 2 */}

      {/* full width image */}
      <div className="showcase-details-2-fullwidth-img">
        <Image data-speed=".8" src={fullWidthImage} alt="fullwidth_img" width={1600} height={900} style={{ height: 'auto' }} />
      </div>
      {/* full width image */}

      {/* detail title 3 */}
      <div className="showcase-details-2-area pt-120 pb-120">
        <div className="container">
          {sectionTitles?.section3 || sectionSubtitles?.section3 ? (
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="showcase-details-2-section-right tp_title_anim text-center">
                  <p style={{ fontSize: '1.7em' }}>{sectionContents?.section3}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="showcase-details-2-content-right tp_title_anim">
                  <p style={{ fontSize: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit' }}>{sectionContents?.section3}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* detail title 3 */}

      {/* grid images */}
      <div className="showcase-details-2-grid-area">
        <div className="container-fluid p-0">
          <div className="row g-0">
            {gridImages.map((src, i) => (
              <div key={i} className="col-6">
                <div
                  className="showcase-details-2-grid-img mb-30"
                  style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}
                >
                  <Image
                    className={i === 0 ? 'img-left' : 'img-right'}
                    src={src}
                    alt="details-img"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* grid images */}

      {/* details title 4 */}
      <div className="showcase-details-2-area pb-120">
        <div className="container">
          {sectionSubtitles?.section4 ? (
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {sectionSubtitles?.section4}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  <p>{sectionContents?.section4}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="showcase-details-2-content-right tp_title_anim">
                  <p style={{ fontSize: 'inherit', lineHeight: 'inherit', fontWeight: 'inherit' }}>{sectionContents?.section4}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* details title 4 */}

      <div className="project-details-1-navigation d-flex justify-content-between align-items-center pt-120 pb-60">
        <Link className="project-details-1-prev" href={prevSlug ? `/showcase/${prevSlug}` : '#'}>
          <i className="fa-sharp fa-regular fa-arrow-left"></i>
          <span>{navigationTexts.prev}</span>
        </Link>
        <Link href="#">
          <span><Dots /></span>
        </Link>
        <Link className="project-details-1-next" href={nextSlug ? `/showcase/${nextSlug}` : '#'}>
          <span>{navigationTexts.next}</span>
          <i className="fa-sharp fa-regular fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
}