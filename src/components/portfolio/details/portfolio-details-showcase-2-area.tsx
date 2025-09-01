import React from 'react';
import Image from 'next/image';
import { Leaf } from '@/components/svg';
import { Showcase2Project } from '@/data/projects-showcase-2';

interface PortfolioDetailsShowcaseTwoAreaProps {
  project: Showcase2Project;
}

export default function PortfolioDetailsShowcaseTwoArea({ project }: PortfolioDetailsShowcaseTwoAreaProps) {
  const {
    title,
    subtitle,
    summary,
    client,
    services,
    industries,
    date,
    showcaseHeroBg,
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

        <div className="showcase-details-2-wrapper" data-lag="0.2" data-stagger="0.08">
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
                  <p>{sectionContents.section1}</p>
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
                  <p className="pb-25">{sectionContents.section2}</p>
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
            <div className="row">
              <div className="col-xl-8">
                <div className="showcase-details-2-section-box">
                  <h4 className="showcase-details-2-section-title tp-char-animation">{sectionTitles.section3}</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {sectionSubtitles?.section3 || "Mapping the journey"}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  <p>{sectionContents.section3}</p>
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
            <div className="row">
              <div className="col-xl-3">
                <div className="showcase-details-2-section-left">
                  <span className="ab-inner-subtitle mb-25">
                    <Leaf />
                    {sectionSubtitles?.section4 || "Case Details"}
                  </span>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="showcase-details-2-content-right tp_title_anim">
                  <p>{sectionContents.section4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* details title 4 */}
    </>
  )
}