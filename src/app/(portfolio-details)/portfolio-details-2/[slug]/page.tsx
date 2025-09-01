import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioDetailsShowcaseTwoMain from "@/pages/portfolio/details/portfolio-showcase-details-2-main";
import { showcase2Projects } from "@/data/projects-showcase-2";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    return showcase2Projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = showcase2Projects.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: "Proyecto no encontrado",
        };
    }

    return {
        title: `${project.title} - Liko Portfolio`,
        description: project.summary || "Proyecto de arquitectura y diseño",
    };
}

const PortfolioDetailsTwoPage = ({ params }: Props) => {
    const project = showcase2Projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    // Debug: Log the project data
    console.log("Rendering project:", project.slug, project.title);

    return <PortfolioDetailsShowcaseTwoMain project={project} />;
};

export default PortfolioDetailsTwoPage;
