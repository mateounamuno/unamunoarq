"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import Social from "@/components/social/social";
import { Dots } from "@/components/svg";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import type { Projects as ProjectType } from "@/data/projects";

// image slider setting 
const slider_setting: SwiperOptions = {
   slidesPerView: 1,
   loop: false,
   autoplay: false,
   spaceBetween: 0,
   speed: 1000,
   effect: 'fade',
   navigation: {
      prevEl: '.project-details-2-prev',
      nextEl: '.project-details-2-next',
   },
}

type Props = { project?: ProjectType };

const PortfolioDetailsTwoMain = ({ project }: Props) => {
   useScrollSmooth();

   useGSAP(() => {
      const timer = setTimeout(() => {
         charAnimation();
         titleAnimation();
      }, 100);
      return () => clearTimeout(timer);
   });

   // Early return if project is undefined
   if (!project) {
      return (
         <Wrapper>
            <HeaderEleven />
            <div id="smooth-wrapper">
               <div id="smooth-content">
                  <main>
                     <div className="container py-120">
                        <div className="row">
                           <div className="col-12 text-center">
                              <h2>Proyecto no encontrado</h2>
                              <p>El proyecto que buscas no existe o no está disponible.</p>
                           </div>
                        </div>
                     </div>
                  </main>
                  <FooterTwo topCls="" />
               </div>
            </div>
         </Wrapper>
      );
   }

   return (
      <Wrapper>
         {/* header area start */}
         <HeaderEleven />
         {/* header area end */}
         <div id="smooth-wrapper">
            <div id="smooth-content">
               <main>
                  {/* portfolio details area */}
                  <div className="project-details-2-area pt-190">
                     <div className="container container-1430">
                        <div className="row">
                           <div className="col-xl-12">
                              <div className="project-details-2-slider-wrap" style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
                                 <Swiper
                                    {...slider_setting}
                                    modules={[Navigation, EffectFade]}
                                    className="swiper-container project-details-2-slider p-relative fix"
                                    style={{ height: '100%' }}
                                 >
                                    {(project.sliderImages || []).map((imgSrc: string, i: number) => (
                                       <SwiperSlide key={i} className="swiper-slide">
                                          <div className="project-details-2-slider-thumb" style={{
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'center',
                                             width: '100%',
                                             height: '100%'
                                          }}>
                                             <Image
                                                src={imgSrc}
                                                alt={project.title}
                                                width={1400}
                                                height={900}
                                                style={{
                                                   width: '100%',
                                                   height: '100%',
                                                   objectFit: 'cover',
                                                   objectPosition: 'center'
                                                }}
                                             />
                                          </div>
                                       </SwiperSlide>
                                    ))}
                                    <div className="project-details-2-arrow-box" style={{ zIndex: 10, position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%', pointerEvents: 'none' }}>
                                       <button
                                          className="project-details-2-prev"
                                          style={{
                                             position: 'absolute',
                                             left: '20px',
                                             pointerEvents: 'auto',
                                             background: 'rgba(128,128,128,0.8)',
                                             border: 'none',
                                             borderRadius: '50%',
                                             width: '50px',
                                             height: '50px',
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'center',
                                             color: 'white',
                                             boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                             transition: 'all 0.3s ease',
                                             cursor: 'pointer'
                                          }}
                                          onMouseEnter={(e) => {
                                             e.currentTarget.style.background = 'rgba(80,80,80,0.9)';
                                             e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4)';
                                             e.currentTarget.style.transform = 'scale(1.05)';
                                          }}
                                          onMouseLeave={(e) => {
                                             e.currentTarget.style.background = 'rgba(128,128,128,0.8)';
                                             e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
                                             e.currentTarget.style.transform = 'scale(1)';
                                          }}
                                       >
                                          <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                       </button>
                                       <button
                                          className="project-details-2-next"
                                          style={{
                                             position: 'absolute',
                                             right: '20px',
                                             pointerEvents: 'auto',
                                             background: 'rgba(128,128,128,0.8)',
                                             border: 'none',
                                             borderRadius: '50%',
                                             width: '50px',
                                             height: '50px',
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'center',
                                             color: 'white',
                                             boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                             transition: 'all 0.3s ease',
                                             cursor: 'pointer'
                                          }}
                                          onMouseEnter={(e) => {
                                             e.currentTarget.style.background = 'rgba(80,80,80,0.9)';
                                             e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.4)';
                                             e.currentTarget.style.transform = 'scale(1.05)';
                                          }}
                                          onMouseLeave={(e) => {
                                             e.currentTarget.style.background = 'rgba(128,128,128,0.8)';
                                             e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
                                             e.currentTarget.style.transform = 'scale(1)';
                                          }}
                                       >
                                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                       </button>
                                    </div>
                                 </Swiper>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-xl-12">
                              <div className="project-details-2-info-style">
                                 <div className="row align-items-start">
                                    <div className="col-xl-6">
                                       <div className="project-details-1-title-box">
                                          <span className="project-details-1-subtitle"><i>01</i>{project.category || 'Categoría no definida'}</span>
                                          <h4 className="project-details-1-title">{project.title || 'Título no definido'}</h4>
                                       </div>
                                    </div>
                                    <div className="col-xl-6">
                                       <div className="project-details-1-info-wrap">
                                          <div className="project-details-1-info">
                                             <span>Client</span>
                                             <h4>{project.client || "—"}</h4>
                                          </div>
                                          <div className="project-details-1-info">
                                             <span>Date</span>
                                             <h4>{project.date || "—"}</h4>
                                          </div>
                                          <div className="project-details-1-info">
                                             <span>Services</span>
                                             <h4>{project.services || "—"}</h4>
                                          </div>
                                          <div className="project-details-1-info">
                                             <span>Redes Sociales </span>
                                             <div className="project-details-2-social">
                                                <Social />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 {/* project summary */}
                                 <div className="row align-items-start">
                                    <div className="col-xl-12">
                                       <div className="project-details-1-title-box pb-50">
                                          <p>{project.summary || " "}</p>
                                       </div>
                                    </div>
                                 </div>
                                 {/* project summary */}
                              </div>
                              {/* portfolio details area */}
                              <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                                 <a className="project-details-1-prev" href="#">
                                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                    <span>Prev</span>
                                 </a>
                                 <a href="#">
                                    <span>
                                       <Dots />
                                    </span>
                                 </a>
                                 <a className="project-details-1-next" href="#">
                                    <span>Next</span>
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </main>
               <FooterTwo topCls="" />
            </div>
         </div>
      </Wrapper>
   );
};

export default PortfolioDetailsTwoMain;