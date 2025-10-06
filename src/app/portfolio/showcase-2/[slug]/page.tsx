"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import PortfolioDetailsShowcaseTwoArea from "@/components/portfolio/details/portfolio-details-showcase-2-area";
import FooterTwo from "@/layouts/footers/footer-two";
import { showcase2Projects, Showcase2Project } from '@/data/projects-showcase-2';

// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

export default function ShowcaseTwoDetailsPage({ params }: { params: { slug: string } }) {
    useScrollSmooth();

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

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    const projectIndex = showcase2Projects.findIndex((p: Showcase2Project) => p.slug === params.slug);

    if (projectIndex === -1) {
        return (
            <div className="text-center pt-100">
                Project not found with slug: {params.slug}
            </div>
        );
    }

    const project = showcase2Projects[projectIndex];

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

