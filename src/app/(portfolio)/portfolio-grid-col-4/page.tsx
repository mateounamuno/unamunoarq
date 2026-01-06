"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";

// Register plugins only on client side
if (typeof window !== 'undefined') {
  const pluginsToRegister = [useGSAP];
  if (ScrollTrigger) pluginsToRegister.push(ScrollTrigger);
  if (ScrollSmoother) pluginsToRegister.push(ScrollSmoother);
  if (SplitText) pluginsToRegister.push(SplitText);
  gsap.registerPlugin(...pluginsToRegister);
}

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import PortfolioGridFourColArea from "@/components/portfolio/portfolio-grid-4-col-area";
import ProjectListPage from "@/components/portfolio/project-list-page";
import FooterOne from "@/layouts/footers/footer-one";
// animation
import { hoverBtn } from "@/utils/hover-btn";
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";

const PortfolioGridColFourPage = () => {
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
      charAnimation();
      titleAnimation();
      hoverBtn();
      imageRevealAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

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

            {/* project list area */}
            <ProjectListPage />
            {/* project list area */}

          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioGridColFourPage;
