import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { showcase2Projects } from "@/data/projects-showcase-2";
import PortfolioDetailsShowcaseTwoArea from "@/components/portfolio/details/portfolio-details-showcase-2-area";

interface PageProps {
    params: {
        slug: string;
    };
}

// Generar metadata dinámica para cada proyecto
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const project = showcase2Projects.find(p => p.slug === params.slug);

    if (!project) {
        return {
            title: "Proyecto no encontrado",
            description: "El proyecto solicitado no existe.",
        };
    }

    return {
        title: `${project.title} - Liko Portfolio`,
        description: project.summary || `Detalles del proyecto ${project.title}`,
    };
}

// Generar rutas estáticas para todos los proyectos
export async function generateStaticParams() {
    return showcase2Projects.map((project) => ({
        slug: project.slug,
    }));
}

const PortfolioDetailsShowcaseTwoSlugPage = ({ params }: PageProps) => {
    const projectIndex = showcase2Projects.findIndex(p => p.slug === params.slug);

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


    return <PortfolioDetailsShowcaseTwoArea project={project} />;
};

export default PortfolioDetailsShowcaseTwoSlugPage;
