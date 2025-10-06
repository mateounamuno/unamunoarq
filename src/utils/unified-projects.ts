import { showcaseProjects, ShowcaseProject } from '@/data/projects-showcase';
import { showcase2Projects, Showcase2Project } from '@/data/projects-showcase-2';

// Tipo unificado para todos los proyectos
export type UnifiedProject = {
    slug: string;
    title: string;
    type: 'showcase' | 'showcase-2';
    originalProject: ShowcaseProject | Showcase2Project;
};

// Función para obtener todos los proyectos unificados ordenados alfabéticamente
export function getAllUnifiedProjects(): UnifiedProject[] {
    const showcaseUnified: UnifiedProject[] = showcaseProjects.map(project => ({
        slug: project.slug,
        title: project.title,
        type: 'showcase' as const,
        originalProject: project
    }));

    const showcase2Unified: UnifiedProject[] = showcase2Projects.map(project => ({
        slug: project.slug,
        title: project.title,
        type: 'showcase-2' as const,
        originalProject: project
    }));

    // Combinar y ordenar alfabéticamente por título
    const allProjects = [...showcaseUnified, ...showcase2Unified];
    return allProjects.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
}

// Función para encontrar el proyecto anterior y siguiente en la lista unificada
export function findUnifiedPrevNext(currentSlug: string, currentType: 'showcase' | 'showcase-2') {
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
