"use client";
import { gsap } from "gsap";
import React, { useRef } from "react";
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


// Importa el tipo de dato para que TypeScript valide la prop.
import type { Showcase2Project } from '@/data/projects-showcase-2';

// Define que este componente recibirá una prop llamada 'project' de tipo Showcase2Project.
type Props = { project: Showcase2Project | undefined };

const PortfolioDetailsShowcaseTwoMain = ({ project }: Props) => {
  // Validar que project existe antes de renderizar
  if (!project) {
    return (
      <Wrapper>
        <HeaderEleven transparent={true} />
        <div className="container pt-120 pb-120">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <h2>Proyecto no encontrado</h2>
              <p>El proyecto solicitado no está disponible.</p>
            </div>
          </div>
        </div>
        <FooterTwo topCls="" />
      </Wrapper>
    );
  }
  const componentRef = useRef<HTMLDivElement>(null);
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      movingImageSlider();
    }, 100);
    return () => clearTimeout(timer);
  });


  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <PortfolioDetailsShowcaseTwoArea project={project} />
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsShowcaseTwoMain;