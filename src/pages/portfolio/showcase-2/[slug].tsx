import { showcase2Projects } from '@/data/projects-showcase-2';
import PortfolioDetailsShowcaseTwoMain from '@/pages/portfolio/details/portfolio-showcase-details-2-main';
import type { Showcase2Project } from '@/data/projects-showcase-2';

// Esta función genera las rutas estáticas para los proyectos.
export async function getStaticPaths() {
    const paths = showcase2Projects.map((project: Showcase2Project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false, // Cualquier ruta que no esté en 'paths' mostrará un 404.
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
            project, // Pasa el objeto 'project' a la página.
        },
    };
}

// El componente de la página recibe 'project' y se lo pasa al componente de UI.
const ProjectDetailsPage = ({ project }: { project: Showcase2Project }) => {
    return <PortfolioDetailsShowcaseTwoMain project={project} />;
};

export default ProjectDetailsPage;