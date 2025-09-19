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
    const projectIndex = showcase2Projects.findIndex((p: Showcase2Project) => p.slug === params.slug);

    if (projectIndex === -1) {
        return {
            notFound: true,
        };
    }

    const project = showcase2Projects[projectIndex];

    // Calcular los slugs de navegación con lógica circular
    const totalProjects = showcase2Projects.length;

    // Navegación circular: si estamos en el primer proyecto, prev va al último
    const prevIndex = projectIndex === 0 ? totalProjects - 1 : projectIndex - 1;
    const nextIndex = projectIndex === totalProjects - 1 ? 0 : projectIndex + 1;

    const prevSlug = showcase2Projects[prevIndex].slug;
    const nextSlug = showcase2Projects[nextIndex].slug;


    return {
        props: {
            project, // Pasa el objeto 'project' a la página.
            prevSlug,
            nextSlug,
        },
    };
}

// El componente de la página recibe 'project' y se lo pasa al componente de UI.
const ProjectDetailsPage = ({ project, prevSlug, nextSlug }: { project: Showcase2Project; prevSlug: string; nextSlug: string }) => {
    return <PortfolioDetailsShowcaseTwoMain project={project} prevSlug={prevSlug} nextSlug={nextSlug} />;
};

export default ProjectDetailsPage;