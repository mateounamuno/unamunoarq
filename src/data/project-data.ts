import { showcaseProjects, ShowcaseProject } from "./projects-showcase";

export type ProjectTemplate = "showcase";

export type Project = ShowcaseProject;

export const projects: Project[] = [
    ...showcaseProjects,
];


