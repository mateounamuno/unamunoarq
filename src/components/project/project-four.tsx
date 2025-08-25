import React from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import Link from "next/link";
import { projects, Project } from "@/data/project-data";

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

// portfolio data
const project_data = projects.filter(p => p.showInGrid).slice(0, 4).map((p, index) => ({
  id: index + 1,
  img_1: p.thumbnail,
  img_2: p.cover,
  meta: `${p.year} . ${p.category}`,
  title: p.title,
  slug: p.slug,
  template: p.template,
}));

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/portfolio-wrapper"
                  >
                    <span className="zikzak-content">
                      See <br /> All Project
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta} </span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href={getProjectLink(item.slug, item.template)}>{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href={getProjectLink(item.slug, item.template)}
                      >
                        See Project
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
