import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import details_thumb_1 from '@/assets/img/inner-project/showcase/showcase-details-1.jpg';
import details_thumb_2 from '@/assets/img/inner-project/showcase/showcase-details-2.jpg';
import details_thumb_3 from '@/assets/img/inner-project/showcase/showcase-details-3.jpg';
import { Project } from '@/data/project-data';
import Link from 'next/link';

type Props = { project?: Project; prevSlug?: string | null; nextSlug?: string | null };

export default function PortfolioDetailsShowcaseArea({ project, prevSlug, nextSlug }: Props) {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  const heroBg = (project as any)?.showcaseHeroBg || "/assets/img/inner-project/showcase/showcase-1.jpg";
  const subtitle = (project as any)?.subtitle || "[ UI, Web Design ]";
  const title = project?.title || "Top Paddock";
  const thumbs = (project as any)?.showcaseThumbs && (project as any).showcaseThumbs.length > 0
    ? (project as any).showcaseThumbs as string[]
    : [
      "/assets/img/inner-project/showcase/showcase-details-1.jpg",
      "/assets/img/inner-project/showcase/showcase-details-2.jpg",
      "/assets/img/inner-project/showcase/showcase-details-3.jpg",
    ];
  return (
    <>
      {/* details area */}
      <div className="tp-showcase-details-area">
        <div className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative" style={{ backgroundImage: `url(${heroBg})` }}>
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
                <p className="tp_title_anim">{(project as any)?.overview || "Eagle Films is an active player on the entertainment scene as a major Hollywood movies distributor and co-producer. They reach out to me to not only redesign their website but also to change the look and feel of their brand."}</p>
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
                          <span>{(project as any)?.client || 'LikoTheme'}</span>
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
                          <span>{(project as any)?.services || 'UI / UX Design'}</span>
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
                          <span>{(project as any)?.location || 'USA'}</span>
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
                          <span>{(project as any)?.releaseDate || "October '2024"}</span>
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
        <a className="project-details-1-prev" href={prevSlug ? `/portfolio/${prevSlug}` : '#'}>
          <i className="fa-sharp fa-regular fa-arrow-left"></i>
          <span>Prev</span>
        </a>
        <a href="#">
          <span>• • •</span>
        </a>
        <a className="project-details-1-next" href={nextSlug ? `/portfolio/${nextSlug}` : '#'}>
          <span>Next</span>
          <i className="fa-sharp fa-regular fa-arrow-right"></i>
        </a>
      </div>

      {/* details overview */}
      {/* <div className="showcase-details-overview pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle fs-40 tp-char-animation">The challenge</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right tp_title_anim">
                <p>Blue Marine Foundation challenged us to create a digital experience that successfully educates people on the importance of our oceans and the solutions we can implement to mitigate climate change. The health of the ocean affects us all and for that reason, the site needed to connect with as many people as possible, from students to policymakers. The journey begins with an introduction to ocean preservation, in the form of a meditative breathing exercise. This aims to reduce tension and in-turn improve concentration and memory.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* details overview */}
    </>
  )
}
