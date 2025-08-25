import { showcaseProjects, ShowcaseProject } from "./projects-showcase";
import { showcase2Projects, Showcase2Project } from "./projects-showcase-2";

export type ProjectTemplate = "showcase" | "showcase-2";

export type Project = ShowcaseProject | Showcase2Project;

export const projects: Project[] = [
    ...showcaseProjects,
    ...showcase2Projects,
];


