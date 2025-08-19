export type Showcase2Project = {
    template: "showcase-2";
    slug: string;
    title: string;
    category: string;
    year: string;
    cover: string;
    thumbnail: string;
    gridThumbnail?: string;
    showOnHome?: boolean;
    showInGrid?: boolean;
    subtitle?: string;
    summary?: string;
    client?: string;
    services?: string;
    industries?: string;
    date?: string;
    showcaseHeroBg: string;
    movingGalleryTop: string[]; // 4
    movingGalleryBottom: string[]; // 4
    fullWidthImage: string;
    gridImages: string[]; // 2
};

export const showcase2Projects: Showcase2Project[] = [
    {
        template: "showcase-2",
        slug: "world-fashion",
        title: "World Fashion",
        category: "Web Development",
        year: "2024",
        cover: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        thumbnail: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
        gridThumbnail: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "Effortless chic lifestyle",
        summary: "Lorem ipsum dolor sit amet consectetur. Ultrices malesuada sed volutpat elit cum.",
        client: "Castro Capital",
        services: "Web Development",
        industries: "Photography",
        date: "April 2024",
        showcaseHeroBg: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        movingGalleryTop: [
            "/assets/img/inner-project/showcase/showcase-details-2-2.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2-3.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2-4.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2-5.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/showcase/showcase-details-2-6.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2-7.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2-8.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2-9.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/showcase/showcase-details-2-10.jpg",
        gridImages: [
            "/assets/img/inner-project/showcase/showcase-details-2-11.jpg",
            "/assets/img/inner-project/showcase/showcase-details-2-12.jpg",
        ],
    },
];


