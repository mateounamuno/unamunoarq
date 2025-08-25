import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
import { useIsotop } from "@/hooks/use-isotop";
import { projects, Project } from "@/data/project-data";

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

// Función para generar las clases de filtro basadas en la categoría
const getFilterClasses = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    'Arquitectura': 'cat1',
    'Branding': 'cat2',
    'Arquitectura Comercial': 'cat3',
    'Diseño Minimalista': 'cat4',
    'Concept': 'cat1',
    'Creative': 'cat2',
    'Studio': 'cat3',
    'Agency': 'cat4',
    'Visual': 'cat1',
    'Shooting': 'cat2',
  };

  return categoryMap[category] || 'cat1';
};

// data
const portfolio_data = projects.filter(p => p.showInGrid).slice(0, 9).map((p, index) => ({
  id: index + 1,
  img: p.thumbnail,
  category: p.category,
  title: p.title,
  year: p.year,
  show: getFilterClasses(p.category),
  slug: p.slug,
  template: p.template,
}));

// prop type
type IProps = {
  style_2?: boolean;
};
export default function PortfolioGridColThreeArea({ style_2 = false }: IProps) {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? "1800" : "1530"}`}>
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-60">
                <button data-filter="*" className="active">
                  <span>SHOW ALL</span>
                </button>
                <button data-filter=".cat1">
                  <span>AGENCY</span>
                </button>
                <button data-filter=".cat2">
                  <span>Visual</span>
                </button>
                <button data-filter=".cat3">
                  <span>SHOOTING</span>
                </button>
                <button data-filter=".cat4">
                  <span>STUDIO</span>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-4 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="Ver<br>Proyecto">
                <Link href={getProjectLink(item.slug, item.template)} className="cursor-hide">
                  <Image
                    className="anim-zoomin"
                    src={item.img}
                    alt="port-img"
                    width={style_2 ? 573 : 486}
                    height={style_2 ? 683 : 576}
                    style={{ height: "100%" }}
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
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
                    More <br /> Projects
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
