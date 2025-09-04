"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import PortfolioDetailsShowcaseArea from "@/components/portfolio/details/portfolio-details-showcase-area";
import FooterTwo from "@/layouts/footers/footer-two";

// Importa el tipo de dato para que TypeScript valide la prop.
import type { ShowcaseProject } from '@/data/projects-showcase';


// Define que este componente recibirá una prop llamada 'project' de tipo ShowcaseProject.
type Props = { project: ShowcaseProject | undefined };

// Modifica el componente para que acepte la prop 'project' como argumento.
const PortfolioDetailsShowcaseMain = ({ project }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useScrollSmooth();

  useGSAP(() => {
    if (!componentRef.current) return;

    // Configurar las animaciones iniciales
    const tl = gsap.timeline();

    // Animación del hero
    tl.fromTo(".tp-showcase-details-bg",
      {
        scale: 1.1,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      }
    );

    // Animación del título y subtítulo
    tl.fromTo(".port-showcase-slider-subtitle",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.5"
    );

    tl.fromTo(".port-showcase-slider-title",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Configurar ScrollTrigger para las animaciones de scroll
    gsap.utils.toArray(".tp_title_anim").forEach((element: any) => {
      gsap.fromTo(element,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animaciones para los elementos con clase tp_fade_bottom
    gsap.utils.toArray(".tp_fade_bottom").forEach((element: any, index: number) => {
      gsap.fromTo(element,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animación para las imágenes
    gsap.utils.toArray(".showcase-details-thumb").forEach((element: any, index: number) => {
      gsap.fromTo(element,
        {
          y: 100,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animación para la navegación
    gsap.fromTo(".project-details-1-navigation",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-details-1-navigation",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: componentRef });

  // Early return if project is undefined
  if (!project) {
    return (
      <Wrapper>
        <HeaderOne transparent={true} />
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
      <HeaderOne transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main ref={componentRef}>
            {/* portfolio details area */}
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