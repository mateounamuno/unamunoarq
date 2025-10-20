'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Leaf } from '@/components/svg';
import { Showcase2Project } from '@/data/projects-showcase-2';
import Link from 'next/link';
import { findUnifiedPrevNext } from '@/utils/unified-projects';
import ImageLightbox from '@/components/modal/image-lightbox';

interface PortfolioDetailsShowcaseTwoAreaProps {
  project: Showcase2Project | undefined;
}

export default function PortfolioDetailsShowcaseTwoArea({ project }: PortfolioDetailsShowcaseTwoAreaProps) {
  // State for lightbox modal
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  // Calculamos los slugs de navegación unificada
  const { prevSlug, nextSlug, prevType, nextType } = findUnifiedPrevNext(project?.slug || '', 'showcase-2');

  // Function to open lightbox
  const openLightbox = (imageSrc: string, imageAlt: string) => {
    setLightboxImage(imageSrc);
    setLightboxAlt(imageAlt);
    setShowLightbox(true);
  };

  // Animation is now handled by GSAP movingImageSlider() function

  // Validar que project existe antes de renderizar
  if (!project) {
    return null;
  }
  const {
    title,
    summary,
    autores,
    services,
    industries,
    release_date,
    showcaseHeroBg,
    heroOverlayOpacity = 0.5,
    movingGalleryTop,
    movingGalleryBottom,
    fullWidthImage,
    gridImages,
    sectionTitles,
    sectionContents,
    navigationTexts,
    visitWebsiteText
  } = project;

  return (
    <>
      {/* portfolio hero */}
      <div className="showcase-details-2-area showcase-details-2-bg p-relative" style={{ backgroundImage: `url(${showcaseHeroBg})` }}>
        {/* Overlay con opacidad */}
        <div
          className="showcase-details-2-overlay"
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

        <div className="showcase-details-2-wrapper" data-lag="0.2" data-stagger="0.08" style={{ position: 'relative', zIndex: 2 }}>
          <div className="container container-1550">
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-title-box showcase-details-2-title">
                  <h5 className="showcase-details-2-title mb-20 tp-char-animation">{title}</h5>

                </div>
              </div>
              <div className="col-xxl-7 col-xl-10">
                <div className="showcase-details-2-content tp_title_anim">
                  <p style={{ fontSize: '1.15rem' }}>{summary}</p>
                </div>
                <div className="showcase-details-2-info-wrap d-flex align-items-center justify-content-between showcase-details-2-project-info">
                  {autores && (
                    <div className="showcase-details-2-info tp_fade_bottom">
                      <span>ARQUITECTURA</span>
                      <h5>{autores}</h5>
                    </div>
                  )}
                  {services && (
                    <div className="showcase-details-2-info tp_fade_bottom">
                      <span>CATEGORIA</span>
                      <h5>{services}</h5>
                    </div>
                  )}
                  {industries && (
                    <div className="showcase-details-2-info tp_fade_bottom">
                      <span>LUGAR</span>
                      <h5>{industries}</h5>
                    </div>
                  )}
                  {release_date && (
                    <div className="showcase-details-2-info tp_fade_bottom">
                      <span>FECHA</span>
                      <h5>{release_date}</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio hero */}

      {/* details title  */}
      {sectionTitles?.section1 && sectionContents?.section1 && (
        <div className="showcase-details-2-area pt-120 pb-120 showcase-details-2-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">{sectionTitles.section1}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-10">
                <div className="showcase-details-2-section-left">
                  <p className="fs-5" dangerouslySetInnerHTML={{ __html: sectionContents.section1 }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
      {/* details title  */}

      {/* moving image */}
      {movingGalleryTop && movingGalleryTop.length > 0 && (
        <div className="showcase-details-2-slider-area pb-120 showcase-details-2-gallery">
          <div className="moving-gallery">
            <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-top d-flex align-items-end mb-20">
              {/* Original images */}
              {movingGalleryTop.map((imgSrc, i) => (
                <div key={`top-${i}`} className="showcase-details-2-slider-item">
                  <Image
                    src={imgSrc}
                    alt={`${title} gallery image ${i + 1}`}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                    onClick={() => openLightbox(imgSrc, `${title} gallery image ${i + 1}`)}
                  />
                </div>
              ))}
              {/* Duplicate images for smooth scrolling */}
              {movingGalleryTop.map((imgSrc, i) => (
                <div key={`top-dup-${i}`} className="showcase-details-2-slider-item duplicate-for-animation">
                  <Image
                    src={imgSrc}
                    alt={`${title} gallery image ${i + 1}`}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                    onClick={() => openLightbox(imgSrc, `${title} gallery image ${i + 1}`)}
                  />
                </div>
              ))}
            </div>
          </div>

          {movingGalleryBottom && movingGalleryBottom.length > 0 && (
            <div className="moving-gallery">
              <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-bottom d-flex align-items-start">
                {/* Original images */}
                {movingGalleryBottom.map((imgSrc, i) => (
                  <div key={`bottom-${i}`} className="showcase-details-2-slider-item">
                    <Image
                      src={imgSrc}
                      alt={`${title} gallery image ${i + 1}`}
                      width={300}
                      height={420}
                      style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                      onClick={() => openLightbox(imgSrc, `${title} gallery image ${i + 1}`)}
                    />
                  </div>
                ))}
                {/* Duplicate images for smooth scrolling */}
                {movingGalleryBottom.map((imgSrc, i) => (
                  <div key={`bottom-dup-${i}`} className="showcase-details-2-slider-item duplicate-for-animation">
                    <Image
                      src={imgSrc}
                      alt={`${title} gallery image ${i + 1}`}
                      width={300}
                      height={420}
                      style={{ width: "100%", height: "100%", objectFit: "cover", cursor: "pointer" }}
                      onClick={() => openLightbox(imgSrc, `${title} gallery image ${i + 1}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {/* moving image */}

      {/* details title 2 */}
      {sectionContents?.section2 && (
        <div className="showcase-details-2-area pb-120 showcase-details-2-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-10">
                <div className="showcase-details-2-section-left">
                  <p className="fs-5" dangerouslySetInnerHTML={{ __html: sectionContents.section2 }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
      {/* details title 2 */}


      {/* full width image */}
      {fullWidthImage && (
        <div className="showcase-details-2-fullwidth-img">
          <Image
            data-speed=".8"
            src={fullWidthImage}
            alt={`${title} full width image`}
            width={1920}
            height={1080}
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => openLightbox(fullWidthImage, `${title} full width image`)}
          />
        </div>
      )}
      {/* full width image */}


      {/* grid images */}
      {gridImages && gridImages.length >= 2 && (
        <div className="showcase-details-2-grid-area pt-120 pb-90 showcase-details-2-gallery">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="showcase-details-2-grid-img mb-30">
                  <Image
                    className="img-left"
                    src={gridImages[0]}
                    alt={`${title} grid image 1`}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
                    onClick={() => openLightbox(gridImages[0], `${title} grid image 1`)}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="showcase-details-2-grid-img mb-30">
                  <Image
                    className="img-right"
                    src={gridImages[1]}
                    alt={`${title} grid image 2`}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
                    onClick={() => openLightbox(gridImages[1], `${title} grid image 2`)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* grid images */}



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
  )
}