import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsotop } from "@/hooks/use-isotop";
import { projects, Project } from "@/data/project-data";
import { UpArrow } from "../svg";

// Función para generar el enlace correcto según el template
const getProjectLink = (slug: string, template: string): string => {
  switch (template) {
    case "details-2":
      return `/portfolio/details/${slug}`;
    case "showcase-2":
      return `/portfolio/details2/${slug}`;
    case "showcase":
      return `/portfolio/details3/${slug}`;
    default:
      return `/portfolio/details/${slug}`;
  }
};

// data
const portfolio_masonry_data = projects.filter(p => p.showInGrid).slice(0, 6).map((p, index) => ({
  id: index + 1,
  title: p.title,
  subtitle: p.category,
  img: p.thumbnail,
  slug: p.slug,
  template: p.template,
}));
export default function PortfolioMasonryArea() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="pm-project-masonary-area">
      <div className="container container-1800">
        <div className="row gx-0 grid-2" ref={isotopContainer}>
          {portfolio_masonry_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-${item.id === 6 ? 12 : 6} grid-item`}
            >
              <div className="pm-project-masonary-item p-relative">
                <div className="fix">
                  <Image
                    src={item.img}
                    alt="masonry-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="pm-project-masonary-content">
                  <span className="pm-project-masonary-subtitle">
                    {item.subtitle}
                  </span>
                  <h4 className="pm-project-masonary-title">
                    <Link href={getProjectLink(item.slug, item.template)}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/portfolio-grid-col-4"
                >
                  <span className="tp-btn-circle-text">
                    More
                    <br />
                    Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
