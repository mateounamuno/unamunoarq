"use client";
import React from "react";
import ProjectTextLine from "./project-text-line";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/project-data";
import styles from "./project-one.module.scss";
import { useScreenSize, useProjectStyles } from "./screen-detector";

// project images (no longer used; data-driven from src/data/project-data)

// type
type IProject = {
  slug: string;
  template: string;
  cls: string;
  cls_2: string;
  img: StaticImageData | string;
};

// Función para generar el enlace correcto según el template
const getProjectLink = (slug: string, template: string): string => {
  switch (template) {
    case "showcase-2":
      return `/portfolio/details2/${slug}`;
    case "showcase":
      return `/portfolio/details3/${slug}`;
    default:
      return `/portfolio/details2/${slug}`;
  }
};

const project_data: IProject[] = (
  projects.filter(p => p.showOnHome).slice(0, 6).map((p, index) => ({
    slug: p.slug,
    template: p.template,
    cls: index === 0 || index === 2 ? "tp-project-mr" : index === 4 ? "tp-project-ml" : (index === 1 ? "text-end" : ""),
    cls_2: "height-uniform" + (index === 1 ? " d-inline-flex justify-content-end" : ""),
    img: p.thumbnail,
  }))
) as IProject[];

function ProjectItem({ item, isLast }: { item: IProject; isLast: boolean }) {
  // Función para obtener la altura responsiva
  const getResponsiveHeight = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return '500px';
      if (window.innerWidth >= 992) return '450px';
      if (window.innerWidth >= 768) return '400px';
      return '350px';
    }
    return '500px'; // altura por defecto
  };

  const [height, setHeight] = React.useState(getResponsiveHeight());

  React.useEffect(() => {
    const updateHeight = () => {
      setHeight(getResponsiveHeight());
    };

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      className={`tp-project-item ${styles.projectItem}`}
      style={{
        width: '100%',
        marginBottom: isLast ? '70px' : '200px'
      }}
    >
      <div
        className={`tp-project-img height-uniform fix not-hide-cursor ${styles.projectImg}`}
        data-cursor="Ver<br>Proyecto"
        style={{
          height: height,
          width: '100%',
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          maxWidth: '100%'
        }}
      >
        <Link className="cursor-hide" href={getProjectLink(item.slug, item.template)} style={{ display: 'block', height: '100%', width: '100%' }}>
          <Image
            data-speed=".8"
            src={item.img}
            alt="project-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            width={800}
            height={600}
          />
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
  useProjectStyles(screenSize);

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
        <div className={`tp-project-gallery-wrapper pt-100 ${styles.projectGalleryWrapper}`}>
          <div className={`container container-1630 ${styles.container1630}`}>
            <div className={`tp-project-gallery-top pb-50 ${styles.projectGalleryTop}`}>
              <div className={`row ${styles.row}`}>
                <div className={`col-xl-6 col-lg-6 col-md-6 ${styles.col}`}>
                  <div className={`tp-project-left-wrap ${styles.leftWrap}`}>
                    {project_data.slice(0, 3).map((item, i) => (
                      <ProjectItem
                        key={item.slug}
                        item={item}
                        isLast={false}
                      />
                    ))}
                  </div>
                </div>
                <div className={`col-xl-6 col-lg-6 col-md-6 ${styles.col}`}>
                  <div className={`tp-project-right-wrap ${styles.rightWrap}`}>
                    {project_data.slice(3, 6).map((item, index) => (
                      <ProjectItem
                        key={item.slug}
                        item={item}
                        isLast={index === 2} // El último proyecto de la segunda columna
                      />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger" style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      marginTop: '10px'
                    }}>
                      <div className="tp-btn-bounce" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                      }}>
                        <Link
                          className="tp-btn-border"
                          href="/portfolio-grid-col-4"
                          style={{
                            margin: '0 auto',
                            display: 'inline-block'
                          }}
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1"> Más proyectos</span>
                            <span className="text-2"> Más proyectos</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          (
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
          )
        </div>
      </div>
    </>
  );
};

export default ProjectOne;