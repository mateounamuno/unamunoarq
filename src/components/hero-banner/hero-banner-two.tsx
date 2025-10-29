'use client';
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import GridDistortion from '@/components/GridDistortion';


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
        <GridDistortion
          imageSrc="/assets/img/home-01/hero/hero-1-2.png"
          grid={25}
          mouse={0.1}
          strength={0.10}
          relaxation={0.9}
          className="custom-class"
        />
      </div>
    </div>
  );
};

export default HeroBannerTwo;
