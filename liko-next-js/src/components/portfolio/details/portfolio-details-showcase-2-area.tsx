import React from 'react';
import Image from 'next/image';
import { Leaf, UpArrow, UpArrowTwo } from '@/components/svg';
import { Project } from '@/data/project-data';
import Link from 'next/link';

// images 
import port_d_1 from '@/assets/img/inner-project/showcase/showcase-details-2-2.jpg';
import port_d_2 from '@/assets/img/inner-project/showcase/showcase-details-2-3.jpg';
import port_d_3 from '@/assets/img/inner-project/showcase/showcase-details-2-4.jpg';
import port_d_4 from '@/assets/img/inner-project/showcase/showcase-details-2-5.jpg';
import port_d_5 from '@/assets/img/inner-project/showcase/showcase-details-2-6.jpg';
import port_d_6 from '@/assets/img/inner-project/showcase/showcase-details-2-7.jpg';
import port_d_7 from '@/assets/img/inner-project/showcase/showcase-details-2-8.jpg';
import port_d_8 from '@/assets/img/inner-project/showcase/showcase-details-2-9.jpg';

import fullwidth_img from '@/assets/img/inner-project/showcase/showcase-details-2-10.jpg';
import d_g_img_1 from '@/assets/img/inner-project/showcase/showcase-details-2-11.jpg';
import d_g_img_2 from '@/assets/img/inner-project/showcase/showcase-details-2-12.jpg';

// img data
const img_data_default = [port_d_1, port_d_2, port_d_3, port_d_4, port_d_5, port_d_6, port_d_7, port_d_8];

type Props = { project?: Project; prevSlug?: string | null; nextSlug?: string | null };

export default function PortfolioDetailsShowcaseTwoArea({ project, prevSlug, nextSlug }: Props) {
  const heroBg = project?.showcaseHeroBg || "/assets/img/inner-project/showcase/showcase-details-2-1.jpg";
  const title = project?.title || "World Fashion";
  const subtitle = project?.subtitle || "Effortless chic lifestyle";
  const content = project?.summary || "Lorem ipsum dolor sit amet consectetur. Ultrices malesuada sed volutpat elit cum. Viverra dolor maecenas amet dui Netus aliquet.!";
  const client = project?.client || "Castro Capital";
  const services = project?.services || "Web Development";
  const industries = project?.industries || "Photography";
  const date = project?.date || "April 2024";
  const movingTop = project?.movingGalleryTop || img_data_default.slice(0, 4);
  const movingBottom = project?.movingGalleryBottom || img_data_default.slice(4, 8);
  const fullWidthImage = project?.fullWidthImage || "/assets/img/inner-project/showcase/showcase-details-2-10.jpg";
  const gridImages = project?.gridImages || [
    "/assets/img/inner-project/showcase/showcase-details-2-11.jpg",
    "/assets/img/inner-project/showcase/showcase-details-2-12.jpg",
  ];
  return (
    <>
      {/* portfolio hero */}
      <div className="showcase-details-2-area showcase-details-2-bg p-relative" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="showcase-details-2-link">
          <a className="project-details-custom-link" href="#">
            Visit Website
            <span>
              <UpArrow />
            </span>
          </a>
        </div>
        <div className="showcase-details-2-wrapper" data-lag="0.2" data-stagger="0.08">
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
                  <p>{content}</p>
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

      {/* details title  */}
      <div className="showcase-details-2-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">Simple & Significant</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  Objective
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-section-right tp_title_anim">
                <p>Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details title  */}

      {/* moving image */}
      <div className="showcase-details-2-slider-area pb-120">
        <div className="moving-gallery">
          <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-top d-flex align-items-end mb-20">
            {movingTop.map((imgSrc, i) => (
              <div key={i} className="showcase-details-2-slider-item" style={{ height: 420 }}>
                <Image src={imgSrc} alt="port-img" width={800} height={600} style={{ height: 420, width: 'auto', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="moving-gallery">
          <div className="showcase-details-2-slider-wrap wrapper-gallery slider-wrap-bottom d-flex align-items-start">
            {movingBottom.map((imgSrc, i) => (
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
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">The Goal</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  An introduction
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p className="pb-25">Liko website was using a generic template, felt quite outdated and not in-line with the quality of his work. The main goal was to translate his high-end photography into a digital experience that would honor and present his work in a memorable and contemporary way.</p>
                <p>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined</p>
              </div>
            </div>
          </div>
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
          <div className="row">
            <div className="col-xl-8">
              <div className="showcase-details-2-section-box">
                <h4 className="showcase-details-2-section-title tp-char-animation">The planning..</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  Mapping the journey
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p>The journey of visiting Khajuraho and mapping out all temples for the Khajuraho Digital Expo by HASPR was a truly immersive experience. Our team was tasked with capturing the essence of the UNESCO World Heritage Site and bringing it to life through digital technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* detail title 3 */}

      {/* grid images */}
      <div className="showcase-details-2-grid-area pb-90">
        <div className="container">
          <div className="row">
            {gridImages.slice(0, 2).map((src, i) => (
              <div key={i} className="col-xl-6 col-lg-6">
                <div className="showcase-details-2-grid-img mb-30">
                  <Image className={i === 0 ? 'img-left' : 'img-right'} src={src} alt="details-img" width={800} height={600} style={{ height: 'auto' }} />
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
          <div className="row">
            <div className="col-xl-3">
              <div className="showcase-details-2-section-left">
                <span className="ab-inner-subtitle mb-25">
                  <Leaf />
                  Case Details
                </span>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="showcase-details-2-content-right tp_title_anim">
                <p>Each case study gets its own identity through the styling options in the custom content management system. The styling options are pre-defined by our design team to makes sure the website looks amazing in every composition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details title 4 */}

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
    </>
  )
}
