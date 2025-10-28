"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";

// Only register plugins on client side
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import PortfolioDetailsShowcaseTwoArea from "@/components/portfolio/details/portfolio-details-showcase-2-area";
import FooterTwo from "@/layouts/footers/footer-two";
import { showcaseProjects, ShowcaseProject } from '@/data/projects-showcase';

// animation
import { useShowcase2Animations } from "@/hooks/use-showcase-2-animations";

export default function ShowcaseTwoDetailsPage({ params }: { params: { slug: string } }) {
    useScrollSmooth();
    useShowcase2Animations(); // Aplica todas las animaciones incluido movingImageSlider

    useEffect(() => {
        document.body.classList.add("tp-magic-cursor");
        return () => {
            document.body.classList.remove("tp-magic-cursor");
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
            cursorAnimation();
        }
    }, []);

    const projectIndex = showcaseProjects.findIndex((p: ShowcaseProject) => p.slug === params.slug);

    if (projectIndex === -1) {
        return (
            <div className="text-center pt-100">
                Project not found with slug: {params.slug}
            </div>
        );
    }

    const project = showcaseProjects[projectIndex];

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
                        {/* portfolio showcase details */}
                        <PortfolioDetailsShowcaseTwoArea project={project} />
                        {/* portfolio showcase details */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
}

