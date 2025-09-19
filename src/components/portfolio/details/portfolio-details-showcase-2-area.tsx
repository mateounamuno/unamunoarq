import React from 'react';
import Image from 'next/image';
import { Leaf } from '@/components/svg';
import { Showcase2Project } from '@/data/projects-showcase-2';
import Link from 'next/link';

interface PortfolioDetailsShowcaseTwoAreaProps {
  project: Showcase2Project | undefined;
  prevSlug?: string | null;
  nextSlug?: string | null;
}

export default function PortfolioDetailsShowcaseTwoArea({ project, prevSlug, nextSlug }: PortfolioDetailsShowcaseTwoAreaProps) {
  // Validar que project existe antes de renderizar
  if (!project) {
    return null;
  }
  const {
    title,
    subtitle,
    summary,
    client,
    services,
    industries,
    date,
    showcaseHeroBg,
    heroOverlayOpacity = 0.5,
    movingGalleryTop,
    movingGalleryBottom,
    fullWidthImage,
    gridImages,
    sectionTitles,
    sectionSubtitles,
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
                  <p>{summary}</p>
                </div>
                <div className="showcase-details-2-info-wrap d-flex align-items-center justify-content-between showcase-details-2-project-info">
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>ARQUITECTURA</span>
                    <h5>{client}</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>CATEGORIA</span>
                    <h5>{services}</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>LUGAR</span>
                    <h5>{industries}</h5>
                  </div>
                  <div className="showcase-details-2-info tp_fade_bottom">
                    <span>FECHA</span>
                    <h5>{date}</h5>
                  </div>
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
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">{sectionTitles.section1}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-10">
                <div className="showcase-details-2-section-left">
                  <p className="fs-5">{sectionContents.section1}</p>
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
              {movingGalleryTop.map((imgSrc, i) => (
                <div key={i} className="showcase-details-2-slider-item">
                  <Image src={imgSrc} alt={`${title} gallery image ${i + 1}`} width={400} height={300} style={{ height: "auto" }} />
                </div>
              ))}
            </div>
          </div>

          {movingGalleryBottom && movingGalleryBottom.length > 0 && (
            <div className="moving-gallery">
              <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-bottom d-flex align-items-start">
                {movingGalleryBottom.map((imgSrc, i) => (
                  <div key={i} className="showcase-details-2-slider-item">
                    <Image src={imgSrc} alt={`${title} gallery image ${i + 1}`} width={400} height={300} style={{ height: "auto" }} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {/* moving image */}

      {/* details title 2 */}
      {sectionTitles?.section2 && sectionContents?.section2 && (
        <div className="showcase-details-2-area pb-120 showcase-details-2-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="showcase-details-2-content-center tp_title_anim text-center">
                  <p className="pb-25 fs-5">{sectionContents.section2}</p>
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
          <Image data-speed=".8" src={fullWidthImage} alt={`${title} full width image`} width={1920} height={1080} style={{ height: 'auto' }} />
        </div>
      )}
      {/* full width image */}

      {/* detail title 3 */}
      {sectionTitles?.section3 && sectionContents?.section3 && (
        <div className="showcase-details-2-area pt-120 pb-120 showcase-details-2-section">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="showcase-details-2-content-center tp_title_anim text-center">
                  <p className="fs-5">{sectionContents.section3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* detail title 3 */}

      {/* grid images */}
      {gridImages && gridImages.length >= 2 && (
        <div className="showcase-details-2-grid-area pb-90 showcase-details-2-gallery">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="showcase-details-2-grid-img mb-30">
                  <Image className="img-left" src={gridImages[0]} alt={`${title} grid image 1`} width={600} height={400} style={{ height: 'auto' }} />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="showcase-details-2-grid-img mb-30">
                  <Image className="img-right" src={gridImages[1]} alt={`${title} grid image 2`} width={600} height={400} style={{ height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* grid images */}

      {/* details title 4 */}
      {sectionContents?.section4 && (
        <div className="showcase-details-2-area pb-120 showcase-details-2-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="showcase-details-2-content-center tp_title_anim text-center">
                  <p className="fs-5">{sectionContents.section4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* details title 4 */}

      {/* navigation after thumbs */}
      <div className="project-details-1-navigation d-flex justify-content-between align-items-center pb-60">
        <Link className="project-details-1-prev tp_title_anim" href={prevSlug ? `/portfolio/showcase-2/${prevSlug}` : '#'}>
          <i className="fa-sharp fa-regular fa-arrow-left"></i>
          <span>Prev</span>
        </Link>
        <a href="#" className="tp_title_anim">
          <span>• • •</span>
        </a>
        <Link className="project-details-1-next tp_title_anim" href={nextSlug ? `/portfolio/showcase-2/${nextSlug}` : '#'}>
          <span>Next</span>
          <i className="fa-sharp fa-regular fa-arrow-right"></i>
        </Link>
      </div>
    </>
  )
}