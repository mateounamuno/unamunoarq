"use client";
import React from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import { charAnimation, titleAnimation, fadeAnimation } from "@/utils/title-animation";
import PortfolioDetailsShowcaseArea from "@/components/portfolio/details/portfolio-details-showcase-area";
import { projects } from "@/data/project-data";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function PortfolioShowcaseDynamicPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug || typeof slug !== 'string') return null;

    const showcaseProjects = projects.filter(p => p.template === 'showcase');
    const index = showcaseProjects.findIndex(p => p.slug === slug);
    const project = index >= 0 ? showcaseProjects[index] : undefined;
    if (!project) return null;
    const prevSlug = index > 0 ? showcaseProjects[index - 1].slug : null;
    const nextSlug = index < showcaseProjects.length - 1 ? showcaseProjects[index + 1].slug : null;

    useScrollSmooth();
    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            fadeAnimation();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper>
            <HeaderEleven transparent={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <PortfolioDetailsShowcaseArea project={project as any} prevSlug={prevSlug} nextSlug={nextSlug} />
                    </main>
                    <FooterTwo topCls="" />
                </div>
            </div>
        </Wrapper>
    );
}


