"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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

const project_data = projects.filter(p => p.showInGrid).slice(0, 7).map((p, index) => ({
  id: index + 1,
  img: p.thumbnail,
  subtitle: p.category,
  title: p.title,
  slug: p.slug,
  template: p.template,
}));

export default function ProjectTwo() {
  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt="p-img" width={890} height={700} />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link href={getProjectLink(item.slug, item.template)}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
