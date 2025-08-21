import { showcaseProjects } from '@/data/projects-showcase';
import PortfolioDetailsShowcaseMain from '@/pages/portfolio/details/portfolio-showcase-details-main';
import type { ShowcaseProject } from '@/data/projects-showcase';

// Esta función genera las rutas estáticas para los proyectos.
export async function getStaticPaths() {
    const paths = showcaseProjects.map((project: ShowcaseProject) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false, // Cualquier ruta que no esté en 'paths' mostrará un 404.
    };
}

// Esta función carga los datos del proyecto que coincida con el slug.
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const project = showcaseProjects.find((p: ShowcaseProject) => p.slug === params.slug);

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
const ProjectDetailsPage = ({ project }: { project: ShowcaseProject }) => {
    return <PortfolioDetailsShowcaseMain project={project} />;
};

export default ProjectDetailsPage;