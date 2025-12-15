'use client';
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from '@/plugins';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import PortfolioGridFourColArea from "@/components/portfolio/portfolio-grid-4-col-area";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import FooterOne from "@/layouts/footers/footer-one";

// animation
import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { bounceAnimation, charAnimation, fadeAnimation } from "@/utils/title-animation";




const HomePageTwo = () => {
  useScrollSmooth();
  useEffect(() => {
    if (typeof window === 'undefined' || !document.body) return;

    document.body.classList.add("tp-magic-cursor");
    return () => {
      if (typeof document !== 'undefined' && document.body) {
        document.body.classList.remove("tp-magic-cursor");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
      cursorAnimation();
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100)
    return () => clearTimeout(timer);
  });


  return (
    <Wrapper showBackToTop={false}>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}


      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>


            {/* portfolio grid area */}
            <PortfolioGridFourColArea />
            {/* portfolio grid area */}

          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePageTwo;
