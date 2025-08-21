import { showcase2Projects } from '@/data/projects-showcase-2';
import PortfolioDetailsShowcaseTwoMain from '@/pages/portfolio/details/portfolio-showcase-details-2-main';
import type { Showcase2Project } from '@/data/projects-showcase-2';

// Esta función genera todas las rutas estáticas para los proyectos.
export async function getStaticPaths() {
    const paths = showcase2Projects.map((project: Showcase2Project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

// Esta función carga los datos del proyecto que coincida con el slug.
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const project = showcase2Projects.find((p: Showcase2Project) => p.slug === params.slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project, // <--- Este objeto 'project' es el que tu página recibe.
        },
    };
}

// Este componente de página recibe 'project' como una prop de `getStaticProps`.
const ShowcaseDetailsPage = ({ project }: { project: Showcase2Project | undefined }) => {
    // Aquí, le pasas esa misma prop a tu componente principal.
    return <PortfolioDetailsShowcaseTwoMain project={project} />;
};

export default ShowcaseDetailsPage;