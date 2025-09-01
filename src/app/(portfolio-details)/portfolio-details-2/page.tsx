import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { showcase2Projects } from "@/data/projects-showcase-2";

export const metadata: Metadata = {
  title: "Portfolio Details 2 - Liko",
  description: "Explore our showcase 2 portfolio projects",
};

const PortfolioDetailsTwoPage = () => {
  return (
    <div className="container py-120">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-60">Portfolio Showcase 2 Projects</h1>
          <div className="row">
            {showcase2Projects.map((project) => (
              <div key={project.slug} className="col-lg-4 col-md-6 mb-30">
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="portfolio-content p-20">
                    <h4>{project.title}</h4>
                    <p>{project.subtitle}</p>
                    <Link
                      href={`/portfolio/details2/${project.slug}`}
                      className="btn btn-primary"
                    >
                      Ver Proyecto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsTwoPage;
