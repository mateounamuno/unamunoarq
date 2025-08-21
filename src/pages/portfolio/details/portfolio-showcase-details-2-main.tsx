"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import PortfolioDetailsShowcaseTwoArea from "@/components/portfolio/details/portfolio-details-showcase-2-area";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { movingImageSlider } from "@/utils/scroll-marque";
import type { Showcase2Project } from "@/data/projects-showcase-2";

// Define los tipos de las props que este componente espera.
type Props = { project: Showcase2Project | undefined };

const PortfolioDetailsShowcaseTwoMain = ({ project }: Props) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      movingImageSlider();
    }, 100);
    return () => clearTimeout(timer);
  });

  // Early return if project is undefined
  if (!project) {
    return (
      <Wrapper>
        <HeaderEleven transparent={true} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="container py-120">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Proyecto no encontrado</h2>
                    <p>El proyecto que buscas no existe o no está disponible.</p>
                  </div>
                </div>
              </div>
            </main>
            <FooterTwo topCls="" />
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <HeaderEleven transparent={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Aquí, le pasas el objeto 'project' al componente que lo necesita */}
            <PortfolioDetailsShowcaseTwoArea project={project} />
          </main>
          <FooterTwo topCls="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsShowcaseTwoMain;