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
    const projectIndex = showcase2Projects.findIndex((p) => p.slug === params.slug);

    if (projectIndex === -1) {
        notFound();
    }

    const project = showcase2Projects[projectIndex];

    // Calcular los slugs de navegación con lógica circular
    const totalProjects = showcase2Projects.length;

    // Navegación circular: si estamos en el primer proyecto, prev va al último
    const prevIndex = projectIndex === 0 ? totalProjects - 1 : projectIndex - 1;
    const nextIndex = projectIndex === totalProjects - 1 ? 0 : projectIndex + 1;

    const prevSlug = showcase2Projects[prevIndex].slug;
    const nextSlug = showcase2Projects[nextIndex].slug;


    return <PortfolioDetailsShowcaseTwoMain project={project} />;
};

export default PortfolioDetailsTwoPage;
