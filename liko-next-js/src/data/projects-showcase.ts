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
        slug: "top-paddock",
        title: "Top Paddock",
        category: "UI / Web Design",
        year: "2024",
        cover: "/assets/img/inner-project/showcase/showcase-1.jpg",
        thumbnail: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
        gridThumbnail: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "[ UI, Web Design ]",
        overview:
            "Eagle Films is an active player on the entertainment scene as a major Hollywood movies distributor and co-producer. They reached out to redesign their website and refresh their brand.",
        client: "LikoTheme",
        services: "UI / UX Design",
        location: "USA",
        releaseDate: "October '2024",
        showcaseHeroBg: "/assets/img/inner-project/showcase/showcase-1.jpg",
        showcaseThumbs: [
            "/assets/img/inner-project/showcase/showcase-details-1.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2.jpg",
            "/assets/img/inner-project/showcase/showcase-details-3.jpg",
        ],
    },
];


