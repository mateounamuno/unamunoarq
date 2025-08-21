// pages/portfolio/[slug].js

import { Projects } from '@/data/projects'; // Asegúrate de que esta sea la ruta correcta a tu archivo de datos
import PortfolioDetailsTwoMain from '@/pages/portfolio/details/portfolio-details-2-main'; // Asegúrate de que esta ruta sea correcta

// Función que le dice a Next.js qué rutas dinámicas debe generar
export async function getStaticPaths() {
    const paths = Projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false, // Esto significa que cualquier ruta no generada mostrará un 404
    };
}

// Función que carga los datos de un proyecto específico basado en el slug
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const project = Projects.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}
// El componente principal de la página
import type { FC } from 'react';

interface PortfolioShowcaseDetailsProps {
    project: typeof Projects[number];
}

const PortfolioShowcaseDetails: FC<PortfolioShowcaseDetailsProps> = ({ project }) => {
    return <PortfolioDetailsTwoMain project={project} />;
};

export default PortfolioShowcaseDetails;