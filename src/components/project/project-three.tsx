"use client";
import React from "react";
import Image from "next/image";
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
const portfolio_data = projects.filter(p => p.showInGrid).slice(0, 4).map((p, index) => ({
  id: index + 1,
  title: p.title,
  img: p.thumbnail,
  slug: p.slug,
  template: p.template,
}));
export default function ProjectThree() {
  return (
    <div
      className="tp-project-4-area pb-120 project-panel-area"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {portfolio_data.map((item) => (
              <div key={item.id} className="tp-project-4-bg project-panel">
                <Link href={getProjectLink(item.slug, item.template)}>
                  <div className="tp-project-4-thumb">
                    <Image src={item.img} alt="port-thumb" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-project-4-content z-index">
                    <h4 className="tp-project-4-title tp_reveal_anim-2">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
