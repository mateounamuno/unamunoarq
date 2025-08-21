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
import PortfolioDetailsShowcaseArea from "@/components/portfolio/details/portfolio-details-showcase-area";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";

// Importa el tipo de dato para que TypeScript valide la prop.
import type { ShowcaseProject } from '@/data/projects-showcase';

// Define que este componente recibirá una prop llamada 'project' de tipo ShowcaseProject.
type Props = { project: ShowcaseProject | undefined };

// Modifica el componente para que acepte la prop 'project' como argumento.
const PortfolioDetailsShowcaseMain = ({ project }: Props) => {

  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
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
      {/* header area start */}
      <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            {/* Ahora, pasas el objeto 'project' al componente hijo. */}
            <PortfolioDetailsShowcaseArea project={project} />
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

export default PortfolioDetailsShowcaseMain;