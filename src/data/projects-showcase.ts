export type ShowcaseProject = {
    template: "showcase";
    slug: string;
    title: string;
    category: string;
    year: string;
    cover: string;
    thumbnail: string;
    gridThumbnail?: string;
    showOnHome?: boolean;
    showInGrid?: boolean;
    subtitle: string;
    overview?: string;
    client?: string;
    services?: string;
    location?: string;
    releaseDate?: string;
    showcaseHeroBg: string;
    showcaseThumbs: string[]; // length 3 recommended
};

export const showcaseProjects: ShowcaseProject[] = [
    {
        template: "showcase",
        slug: "casa-al-lado",
        title: "La casa de al lado.",
        category: "Arquitectura",
        year: "2024",
        cover: "/assets/img/inner-project/casa-al-lado/banner.jpg",
        thumbnail: "/assets/img/inner-project/casa-al-lado/detail-3.jpg",
        gridThumbnail: "/assets/img/inner-project/casa-al-lado/banner.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Una vivienda que se desarrolla en tira. Una casa que ocupa un lugar en desuso al lado de una residencia existente. Una extensión independiente de la misma. Una propuesta para pensar como re-densificar. Un diálogo material entre lo que hay y lo que vendrá. Una casa al lado de la casa.",
        client: "Unamuno Arq. & Estudio RARE & Flesia Bertoya",
        services: "Arquitectura",
        location: "Córdoba, AR",
        releaseDate: "Lorenzo Egues",
        showcaseHeroBg: "/assets/img/inner-project/casa-al-lado/banner.jpg",
        showcaseThumbs: [
            "/assets/img/inner-project/casa-al-lado/detail-1.jpg",
            "/assets/img/inner-project/casa-al-lado/detail-2.jpg",
            "/assets/img/inner-project/casa-al-lado/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "casa-al-lado",
        title: "La casa de al lado.",
        category: "Arquitectura",
        year: "2024",
        cover: "/assets/img/inner-project/casa-al-lado/banner.jpg",
        thumbnail: "/assets/img/inner-project/casa-al-lado/detail-3.jpg",
        gridThumbnail: "/assets/img/inner-project/casa-al-lado/banner.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Una vivienda que se desarrolla en tira. Una casa que ocupa un lugar en desuso al lado de una residencia existente. Una extensión independiente de la misma. Una propuesta para pensar como re-densificar. Un diálogo material entre lo que hay y lo que vendrá. Una casa al lado de la casa.",
        client: "Unamuno Arq. & Estudio RARE & Flesia Bertoya",
        services: "Arquitectura",
        location: "Córdoba, AR",
        releaseDate: "Lorenzo Egues",
        showcaseHeroBg: "/assets/img/inner-project/casa-al-lado/banner.jpg",
        showcaseThumbs: [
            "/assets/img/inner-project/casa-al-lado/detail-1.jpg",
            "/assets/img/inner-project/casa-al-lado/detail-2.jpg",
            "/assets/img/inner-project/casa-al-lado/detail-3.jpg",
        ],
    },
];


