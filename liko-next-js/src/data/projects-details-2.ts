export type Details2Project = {
    template: "details-2";
    slug: string;
    title: string;
    category: string;
    year: string;
    cover: string;
    thumbnail: string;
    gridThumbnail?: string;
    showOnHome?: boolean;
    showInGrid?: boolean;
    summary?: string;
    client?: string;
    date?: string;
    services?: string;
    sliderImages: string[];
};

export const details2Projects: Details2Project[] = [
    {
        template: "details-2",
        slug: "roadtrip",
        title: "Roadtrip",
        category: "Shooting",
        year: "2022",
        cover: "/assets/img/inner-project/portfolio-details-2/slide-1.jpg",
        thumbnail: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
        gridThumbnail: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
        showOnHome: true,
        showInGrid: true,
        summary: "We provide digital experience services to startups and small businesses.",
        client: "LikoTheme",
        date: "October '2022",
        services: "UI / UX Design",
        sliderImages: [
            "/assets/img/inner-project/portfolio-details-2/slide-1.jpg",
            "/assets/img/inner-project/portfolio-details-2/slide-2.jpg",
            "/assets/img/inner-project/portfolio-details-2/slide-3.jpg",
        ],
    },
    {
        template: "details-2",
        slug: "the-stage",
        title: "The Stage",
        category: "Branding",
        year: "2024",
        cover: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
        thumbnail: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
        gridThumbnail: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
        showOnHome: true,
        showInGrid: true,
        client: "LikoTheme",
        date: "May '2024",
        services: "UI / UX Design",
        sliderImages: [
            "/assets/img/inner-project/portfolio-details-2/slide-1.jpg",
            "/assets/img/inner-project/portfolio-details-2/slide-2.jpg",
        ],
    },
];


