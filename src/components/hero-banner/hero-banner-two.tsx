'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import GridDistortion from "@/components/GridDistortion";


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
        <GridDistortion src="/assets/img/home-01/hero/hero-1-2.png" trigger="hover" resetOnLeave={true} />
      </div>
    </div>
  );
};

export default HeroBannerTwo;
