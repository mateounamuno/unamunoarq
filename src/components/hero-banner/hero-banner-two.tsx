'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";


const HeroBannerTwo = () => {
  useGSAP(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 100)
    }
  }, {});

  return (
    <div className="tp-hero-area tp-hero-ptb main-slider" style={{ minHeight: '100vh' }}>
      {/* Fondo del hero con opacidad */}
      <div className="tp-hero-bg-image">
        <Image
          src="/assets/img/home-01/hero/hero-1-2.png"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default HeroBannerTwo;
