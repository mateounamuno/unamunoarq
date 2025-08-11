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
      {/* Fondo del hero con opacidad */}
      <div className="tp-hero-bg-image">
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
                  <span className="p-relative">
                    Unamuno

                    <span className="tp-hero-shape-2 d-none d-md-block">
                      <Image
                        src="/assets/img/home-01/hero/hero-shape-1-1.png"
                        alt="shape"
                        width={40}
                        height={40}
                      />
                    </span>
                  </span>
                  <br />

                  <span className="tp-hero-title-img">

                    <Image
                      className="tp-zoom-img"
                      src="/assets/img/home-01/hero/hero-1-1.png"
                      alt="hero-img"
                      width={325}
                      height={400}
                      style={{ height: "auto" }}
                    />
                  </span>
                  Arq.
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp_fade_bottom">
              <p>
                <span></span>
                Global digital design studio partnering with brands and
                businesses that create exceptional experiences. We are design
                and development agency based in Netherland.
              </p>
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
