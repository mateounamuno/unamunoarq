import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
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

const project_data = projects.filter(p => p.showInGrid).slice(0, 6).map((p, index) => ({
  id: index + 1,
  title: p.title,
  category: p.category,
  img: p.thumbnail,
  year: p.year,
  slug: p.slug,
  template: p.template,
}));

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-130 ${style_2 ? "" : "tp-project-5-2-pt black-bg"
        }`}
    >
      {!style_2 && (
        <div className="row">
          <div className="col-xl-12">
            <LineTextFour />
          </div>
        </div>
      )}
      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor="Ver<br>Proyecto"
              >
                <Link className="cursor-hide" href={getProjectLink(item.slug, item.template)}>
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <Image
                        src={item.img}
                        alt="project-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </span>
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
        <div className="row" style={{ position: 'relative' }}>
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box d-flex justify-content-end" style={{
              position: 'absolute',
              right: '15px',
              bottom: '0',
              marginTop: '0'
            }}>
              <div className="tp-hover-btn-wrapper">
                <Link
                  className={`tp-btn-circle ${style_2 ? "style-2" : ""
                    } tp-hover-btn-item tp-hover-btn`}
                  href="/portfolio-standard"
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
