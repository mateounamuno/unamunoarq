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
    <div className="tp-hero-area tp-hero-ptb main-slider">
      {/* Fondo del hero con opacidad */}
      <div className="tp-hero-bg-image">
        <Image
          src="/assets/img/home-01/hero/hero-1-2.png"
          alt="hero background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  );
};

export default HeroBannerTwo;
