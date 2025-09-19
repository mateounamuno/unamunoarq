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

    // Calcular los slugs de navegación
    const prevProject = projectIndex > 0 ? showcase2Projects[projectIndex - 1] : null;
    const nextProject = projectIndex < showcase2Projects.length - 1 ? showcase2Projects[projectIndex + 1] : null;

    const prevSlug = prevProject ? prevProject.slug : null;
    const nextSlug = nextProject ? nextProject.slug : null;

    return {
        props: {
            project, // Pasa el objeto 'project' a la página.
            prevSlug,
            nextSlug,
        },
    };
}

// El componente de la página recibe 'project' y se lo pasa al componente de UI.
const ProjectDetailsPage = ({ project, prevSlug, nextSlug }: { project: Showcase2Project; prevSlug: string | null; nextSlug: string | null }) => {
    return <PortfolioDetailsShowcaseTwoMain project={project} prevSlug={prevSlug} nextSlug={nextSlug} />;
};

export default ProjectDetailsPage;