import { showcaseProjects, ShowcaseProject } from '@/data/projects-showcase';

// Tipo unificado para todos los proyectos
export type UnifiedProject = {
    slug: string;
    title: string;
    type: 'showcase';
    originalProject: ShowcaseProject;
};

// Función para obtener todos los proyectos unificados ordenados alfabéticamente
export function getAllUnifiedProjects(): UnifiedProject[] {
    const showcaseUnified: UnifiedProject[] = showcaseProjects.map(project => ({
        slug: project.slug,
        title: project.title,
        type: 'showcase' as const,
        originalProject: project
    }));

    // Combinar y ordenar alfabéticamente por título
    return showcaseUnified.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
}

// Función para encontrar el proyecto anterior y siguiente en la lista unificada
export function findUnifiedPrevNext(currentSlug: string, currentType: 'showcase') {
    const allProjects = getAllUnifiedProjects();
    const currentIndex = allProjects.findIndex(project =>
        project.slug === currentSlug && project.type === currentType
    );

    if (currentIndex === -1) {
        return { prevSlug: null, nextSlug: null, prevType: null, nextType: null };
    }

    const totalProjects = allProjects.length;

    // Navegación circular
    const prevIndex = currentIndex === 0 ? totalProjects - 1 : currentIndex - 1;
    const nextIndex = currentIndex === totalProjects - 1 ? 0 : currentIndex + 1;

    const prevProject = allProjects[prevIndex];
    const nextProject = allProjects[nextIndex];

    return {
        prevSlug: prevProject.slug,
        nextSlug: nextProject.slug,
        prevType: prevProject.type,
        nextType: nextProject.type
    };
}
