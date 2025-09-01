"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother, SplitText } from "@/plugins";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { movingImageSlider } from "@/utils/scroll-marque";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

interface PortfolioDetailsShowcaseTwoWrapperProps {
    children: React.ReactNode;
}

export default function PortfolioDetailsShowcaseTwoWrapper({ children }: PortfolioDetailsShowcaseTwoWrapperProps) {
    useScrollSmooth();

    useEffect(() => {
        // Inicializar animaciones después de que el componente se monte
        const initShowcaseAnimations = () => {
            // Ejecutar animaciones globales una sola vez
            titleAnimation();
            charAnimation();
            movingImageSlider();

            // Animaciones para secciones
            const sections = document.querySelectorAll('.showcase-details-2-section');
            sections.forEach((section, index) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Animaciones para galerías
            const galleries = document.querySelectorAll('.showcase-details-2-gallery');
            galleries.forEach((gallery, index) => {
                gsap.fromTo(gallery,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1.2,
                        delay: index * 0.3,
                        scrollTrigger: {
                            trigger: gallery,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Animaciones para imagen full-width
            const fullWidthImg = document.querySelector('.showcase-details-2-fullwidth-img');
            if (fullWidthImg) {
                gsap.fromTo(fullWidthImg,
                    { opacity: 0, scale: 1.1 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: fullWidthImg,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animaciones para imágenes de grid
            const gridImages = document.querySelectorAll('.showcase-details-2-grid-img img');
            gridImages.forEach((img, index) => {
                gsap.fromTo(img,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: img,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Animaciones para información del proyecto
            const projectInfo = document.querySelector('.showcase-details-2-project-info');
            if (projectInfo) {
                gsap.fromTo(projectInfo,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: projectInfo,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animaciones para títulos de sección
            const sectionTitles = document.querySelectorAll('.showcase-details-2-section-title');
            sectionTitles.forEach((title, index) => {
                gsap.fromTo(title,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: title,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Animaciones para elementos con tp_fade_bottom
            const fadeBottomElements = document.querySelectorAll('.tp_fade_bottom');
            fadeBottomElements.forEach((element, index) => {
                gsap.fromTo(element,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 90%",
                            end: "bottom 10%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        };

        // Pequeño delay para asegurar que el DOM esté listo
        const timer = setTimeout(initShowcaseAnimations, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    );
}
