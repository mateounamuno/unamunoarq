"use client";
import React from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import Social from "@/components/social/social";
import { Dots } from "@/components/svg";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { projects } from "@/data/project-data";
import PortfolioDetailsShowcaseTwoArea from "@/components/portfolio/details/portfolio-details-showcase-2-area";
import PortfolioDetailsShowcaseArea from "@/components/portfolio/details/portfolio-details-showcase-area";
import { movingImageSlider } from "@/utils/scroll-marque";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// image slider setting (same as portfolio-details-2)
const slider_setting: SwiperOptions = {
    slidesPerView: 1,
    loop: false,
    autoplay: false,
    spaceBetween: 0,
    speed: 1000,
    effect: "fade",
    navigation: {
        prevEl: ".project-details-2-prev",
        nextEl: ".project-details-2-next",
    },
};

export default function PortfolioDynamicDetailsPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug || typeof slug !== "string") return null;

    const index = projects.findIndex((p) => p.slug === slug);
    const project = index >= 0 ? projects[index] : undefined;
    if (!project) return null;

    const isShowcase2 = project.template === "showcase-2";
    const isDetails2 = project.template === "details-2";
    const isShowcase = project.template === "showcase";

    const slider_images =
        isDetails2 && (project as any).sliderImages?.length
            ? ((project as any).sliderImages as string[])
            : [
                "/assets/img/inner-project/portfolio-details-2/slide-1.jpg",
                "/assets/img/inner-project/portfolio-details-2/slide-2.jpg",
                "/assets/img/inner-project/portfolio-details-2/slide-3.jpg",
            ];

    useScrollSmooth();
    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            if (isShowcase2) {
                movingImageSlider();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [isShowcase2]);

    if (isShowcase2) {
        // Render exactly like showcase-details-2 for showcase-2 projects
        return (
            <Wrapper>
                <HeaderEleven transparent={true} />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <PortfolioDetailsShowcaseTwoArea project={project as any} />
                        </main>
                        <FooterTwo topCls="" />
                    </div>
                </div>
            </Wrapper>
        );
    }

    if (isShowcase) {
        // Render exactly like showcase-details for showcase projects
        return (
            <Wrapper>
                <HeaderEleven transparent={true} />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <PortfolioDetailsShowcaseArea project={project as any} />
                        </main>
                        <FooterTwo topCls="" />
                    </div>
                </div>
            </Wrapper>
        );
    }

    // Default: render exactly like portfolio-details-2 (e.g., portfolio/roadtrip)
    return (
        <Wrapper>
            {/* header area start */}
            <HeaderEleven />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* portfolio details area (exact like portfolio-details-2) */}
                        <div className="project-details-2-area pt-190">
                            <div className="container container-1430">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="project-details-2-slider-wrap">
                                            <Swiper
                                                {...slider_setting}
                                                modules={[Navigation, EffectFade]}
                                                className="swiper-container project-details-2-slider p-relative fix"
                                            >
                                                {slider_images.map((imgSrc, i) => (
                                                    <SwiperSlide key={i} className="swiper-slide">
                                                        <div className="project-details-2-slider-thumb">
                                                            <Image
                                                                src={imgSrc}
                                                                alt="port-img"
                                                                width={1400}
                                                                height={900}
                                                                style={{ height: "auto" }}
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                                <div className="project-details-2-arrow-box">
                                                    <button className="project-details-2-prev">
                                                        <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                                    </button>
                                                    <button className="project-details-2-next">
                                                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="project-details-2-info-style">
                                            <div className="row align-items-start">
                                                <div className="col-xl-6">
                                                    <div className="project-details-1-title-box pb-50">
                                                        <span className="project-details-1-subtitle">
                                                            <i>01</i>
                                                            {(project as any).category}
                                                        </span>
                                                        <h4 className="project-details-1-title">
                                                            {(project as any).title}
                                                        </h4>
                                                        <p>{(project as any).summary || " "}</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="project-details-1-info-wrap">
                                                        <div className="project-details-1-info">
                                                            <span>Client</span>
                                                            <h4>{(project as any).client || "—"}</h4>
                                                        </div>
                                                        <div className="project-details-1-info">
                                                            <span>Date</span>
                                                            <h4>{(project as any).date || "—"}</h4>
                                                        </div>
                                                        <div className="project-details-1-info">
                                                            <span>Services</span>
                                                            <h4>{(project as any).services || "—"}</h4>
                                                        </div>
                                                        <div className="project-details-1-info">
                                                            <span>Share</span>
                                                            <div className="project-details-2-social">
                                                                <Social />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                                                <a className="project-details-1-prev" href="#">
                                                    <i className="fa-sharp fa-regular fa-arrow-left"></i>
                                                    <span>Prev</span>
                                                </a>
                                                <a href="#">
                                                    <span>
                                                        <Dots />
                                                    </span>
                                                </a>
                                                <a className="project-details-1-next" href="#">
                                                    <span>Next</span>
                                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* portfolio details area */}
                    </main>

                    {/* footer area */}
                    <FooterTwo topCls="" />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
}


