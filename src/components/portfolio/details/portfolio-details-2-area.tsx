"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Social from "@/components/social/social";
import { Dots } from "@/components/svg";
import { Project } from "@/data/project-data";
import type { Details2Project } from "@/data/projects-details-2";

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

type Props = { project?: Project; prevSlug?: string | null; nextSlug?: string | null };

export default function PortfolioDetailsTwoArea({ project, prevSlug, nextSlug }: Props) {
    const slides =
        (project as Details2Project)?.sliderImages || [
            "/assets/img/inner-project/portfolio-details-2/slide-1.jpg",
            "/assets/img/inner-project/portfolio-details-2/slide-2.jpg",
            "/assets/img/inner-project/portfolio-details-2/slide-3.jpg",
        ];

    return (
        <>
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
                                    {slides.map((imgSrc, i) => (
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
                                                {project?.category || "Shooting"}
                                            </span>
                                            <h4 className="project-details-1-title">
                                                {project?.title || "Roadtrip"}
                                            </h4>
                                            <p>
                                                {(project as Details2Project)?.summary ||
                                                    "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.!"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="project-details-1-info-wrap">
                                            <div className="project-details-1-info">
                                                <span>Client</span>
                                                <h4>{(project as Details2Project)?.client || "LikoTheme"}</h4>
                                            </div>
                                            <div className="project-details-1-info">
                                                <span>Date</span>
                                                <h4>{(project as Details2Project)?.date || "October '2022"}</h4>
                                            </div>
                                            <div className="project-details-1-info">
                                                <span>Services</span>
                                                <h4>{(project as Details2Project)?.services || "UI / UX Design"}</h4>
                                            </div>
                                            <div className="project-details-1-info">
                                                {/* <span>Share</span>
                                                <div className="project-details-2-social">
                                                    <Social />
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project summary */}
                <div className="project-details-2-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="project-details-1-title-box text-center">
                                    <p style={{ fontSize: '1.5em', margin: 0 }}>
                                        {(project as Details2Project)?.summary ||
                                            "We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences.!"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* project summary */}
            </div>


            <div className="project-details-2-area">
                <div className="container">
                    <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                        <a className="project-details-1-prev" href={prevSlug ? `/portfolio/${prevSlug}` : "#"}>
                            <i className="fa-sharp fa-regular fa-arrow-left"></i>
                            <span>Prev</span>
                        </a>
                        <a href="#">
                            <span>
                                <Dots />
                            </span>
                        </a>
                        <a className="project-details-1-next" href={nextSlug ? `/portfolio/${nextSlug}` : "#"}>
                            <span>Next</span>
                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}


