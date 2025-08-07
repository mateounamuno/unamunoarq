"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./project-one.module.scss";
import { useScreenSize, applyProjectStyles } from "./screen-detector";

// project images
import p_1 from "@/assets/img/home-01/project/project-1-1.jpg";
import p_2 from "@/assets/img/home-01/project/project-1-2.jpg";
import p_3 from "@/assets/img/home-01/project/project-1-3.jpg";
import p_4 from "@/assets/img/home-01/project/project-1-4.jpg";
import p_5 from "@/assets/img/home-01/project/project-1-5.jpg";
import p_6 from "@/assets/img/home-01/project/project-1-6.jpg";

// type
type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: StaticImageData;
};

const project_data: IProject[] = [
  {
    id: 1,
    cls: "tp-project-mr",
    cls_2: "height-1",
    img: p_1,
  },
  {
    id: 2,
    cls: "text-end",
    cls_2: "height-2 d-inline-flex justify-content-end",
    img: p_2,
  },
  {
    id: 3,
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: p_3,
  },
  {
    id: 4,
    cls: "",
    cls_2: "height-4",
    img: p_4,
  },
  {
    id: 5,
    cls: "tp-project-ml",
    cls_2: "height-5",
    img: p_5,
  },
  {
    id: 6,
    cls: "",
    cls_2: "height-6",
    img: p_6,
  },
];

function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-200 ${styles.projectItem}`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor ${styles.projectImg}`}
        data-cursor="View<br>Demo"
      >
        <Link className="cursor-hide" href="/portfolio-details-3">
          <Image data-speed=".8" src={item.img} alt="project-img" style={{ height: "auto" }} />
        </Link>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
};
const ProjectOne = ({ style_2 = false }: IProps) => {
  const screenSize = useScreenSize();
  applyProjectStyles(screenSize);

  // Force styles after component mounts
  React.useEffect(() => {
    const forceStyles = () => {
      const projectArea = document.querySelector('.tp-project-area');
      if (projectArea) {
        const container = projectArea.querySelector('.container-1630') as HTMLElement;
        const leftWrap = projectArea.querySelector('.tp-project-left-wrap') as HTMLElement;
        const rightWrap = projectArea.querySelector('.tp-project-right-wrap') as HTMLElement;

        if (container && leftWrap && rightWrap) {
          // Force centering
          container.style.margin = '0 auto';
          container.style.maxWidth = '1630px';

          // Apply responsive styles
          if (window.innerWidth >= 1400) {
            container.style.maxWidth = '1630px';
            container.style.padding = '0 30px';
            leftWrap.style.paddingRight = '100px';
            rightWrap.style.paddingLeft = '100px';
          } else if (window.innerWidth >= 1200) {
            container.style.maxWidth = '100%';
            container.style.padding = '0 40px';
            leftWrap.style.paddingRight = '60px';
            rightWrap.style.paddingLeft = '60px';
          } else if (window.innerWidth >= 992) {
            container.style.maxWidth = '100%';
            container.style.padding = '0 30px';
            leftWrap.style.paddingRight = '40px';
            rightWrap.style.paddingLeft = '40px';
          } else if (window.innerWidth >= 768) {
            container.style.maxWidth = '100%';
            container.style.padding = '0 20px';
            leftWrap.style.paddingRight = '20px';
            rightWrap.style.paddingLeft = '20px';
          } else {
            container.style.maxWidth = '100%';
            container.style.padding = '0 15px';
            leftWrap.style.paddingRight = '0';
            rightWrap.style.paddingLeft = '0';
          }

          console.log('Styles applied:', {
            width: window.innerWidth,
            containerMaxWidth: container.style.maxWidth,
            containerPadding: container.style.padding,
            leftPadding: leftWrap.style.paddingRight,
            rightPadding: rightWrap.style.paddingLeft
          });
        }
      }
    };

    // Apply immediately
    forceStyles();

    // Apply after a short delay to ensure DOM is ready
    const timer = setTimeout(forceStyles, 100);

    // Apply on window resize
    window.addEventListener('resize', forceStyles);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', forceStyles);
    };
  }, []);

  return (
    <>
      <div className={`${style_2 ? "tp-project-area-2" : "tp-project-area"} fix ${styles.projectArea}`}>
        {!style_2 && (
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <ProjectTextLine />
              </div>
            </div>
          </div>
        )}
        <div className={`tp-project-gallery-wrapper ${styles.projectGalleryWrapper}`}>
          <div className={`container container-1630 ${styles.container1630}`}>
            <div className={`tp-project-gallery-top pb-50 ${styles.projectGalleryTop}`}>
              <div className={`row ${styles.row}`}>
                <div className={`col-xl-6 col-lg-6 col-md-6 ${styles.col}`}>
                  <div className={`tp-project-left-wrap ${styles.leftWrap}`}>
                    {project_data.slice(0, 3).map((item, i) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className={`col-xl-6 col-lg-6 col-md-6 ${styles.col}`}>
                  <div className={`tp-project-right-wrap ${styles.rightWrap}`}>
                    {project_data.slice(3, 6).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger">
                      <div className="tp-btn-bounce">
                        <Link
                          className="tp-btn-border"
                          href="/portfolio-grid-col-3"
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1">View all projects</span>
                            <span className="text-2">View all projects</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <div className="tp-project-full-img-wrap p-relative fix">
                    <div
                      className="tp-project-full-img"
                      data-speed="auto"
                      style={{
                        backgroundImage:
                          "url(/assets/img/inner-service/hero/hero-1-2.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;