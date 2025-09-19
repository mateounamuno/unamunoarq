'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";

const HeroBannerOne = () => {
  useGSAP(() => {

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 100)
    }
  }, {});
  return (
    <div className="tp-hero-area tp-hero-ptb main-slider">
      {/* Fondo del hero con opacidad y efecto Ken Burns */}
      <div className="tp-hero-bg-image ken-burns-pan">
        <Image
          src="/assets/img/home-01/hero/hero-1-bg.jpg.jpeg"
          alt="hero background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">

              <div className="tp-hero-title-box text-center p-relative">
                <h1 className="tp-hero-title tp_fade_bottom">


                  <span className="tp-hero-title-img">

                    <Image
                      className="tp-zoom-img"
                      src="/assets/img/home-01/hero/hero-1-1.png"
                      alt="hero-img"
                      width={400}
                      height={500}
                      style={{ height: "auto" }}
                    />
                  </span>

                </h1>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;
