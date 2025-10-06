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
import PortfolioDetailsShowcaseArea from "@/components/portfolio/details/portfolio-details-showcase-area";
import FooterTwo from "@/layouts/footers/footer-two";
import { showcaseProjects, ShowcaseProject } from '@/data/projects-showcase';

// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

export default function ShowcaseDetailsPage({ params }: { params: { slug: string } }) {
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

    const project = showcaseProjects.find((p: ShowcaseProject) => p.slug === params.slug);

    if (!project) {
        return (
            <div className="text-center pt-100">
                Project not found with slug: {params.slug}
            </div>
        );
    }

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
                        <PortfolioDetailsShowcaseArea project={project} />
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

