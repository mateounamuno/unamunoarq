'use client';
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";


const HeroBannerTwo = () => {
  const heroAreaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 100)
    }
  }, {});

  useGSAP(() => {
    if (!heroAreaRef.current || !imageRef.current) return;

    const heroArea = heroAreaRef.current;
    const image = imageRef.current;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = heroArea.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      // Zoom while keeping the area under mouse visible
      gsap.to(image, {
        scale: 1.3,
        x: (50 - x) * 0.3,
        y: (50 - y) * 0.3,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      gsap.to(image, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    heroArea.addEventListener('mousemove', handleMouseMove);
    heroArea.addEventListener('mouseenter', handleMouseEnter);
    heroArea.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroArea.removeEventListener('mousemove', handleMouseMove);
      heroArea.removeEventListener('mouseenter', handleMouseEnter);
      heroArea.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: heroAreaRef, dependencies: [] });

  return (
    <div ref={heroAreaRef} className="tp-hero-area tp-hero-ptb main-slider">
      {/* Fondo del hero con opacidad */}
      <div ref={imageRef} className="tp-hero-bg-image">
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
