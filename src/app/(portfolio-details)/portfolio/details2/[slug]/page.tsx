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
    const project = showcase2Projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    // Debug temporal
    console.log("Proyecto encontrado:", project);
    console.log("Section titles:", project.sectionTitles);
    console.log("Section contents:", project.sectionContents);
    console.log("Moving gallery top:", project.movingGalleryTop);
    console.log("Moving gallery bottom:", project.movingGalleryBottom);

    return <PortfolioDetailsShowcaseTwoArea project={project} />;
};

export default PortfolioDetailsShowcaseTwoSlugPage;
