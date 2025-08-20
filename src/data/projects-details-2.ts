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
        slug: "casa-nina",
        title: "Casa Nina",
        category: "Arquitectura",
        year: "2022",
        cover: "/assets/img/inner-project/casa-nina/frente.png",
        thumbnail: "/assets/img/inner-project/casa-nina/frente.png",
        gridThumbnail: "/assets/img/inner-project/casa-nina/frente.png",
        showOnHome: true,
        showInGrid: true,
        summary: "En esta vivienda ubicada en un lote de 250 m2 en la localidad de Malageño, se busca integrar de manera armónica los árboles existentes del terreno, acompañando con una orientación estratégica para optimizar la luz solar y garantizar una flexibilidad funcional en los espacios interiores. En lugar de desarrollar un volumen compacto con un único patio trasero, se optó por una disposición que incorpora dos patios de casi igual jerarquía. Esta configuración no solo permite aprovechar al máximo el lote, sino que también, integrar el exterior al interior de la vivienda en ambos sentidos. En planta baja, el espacio social se integra con el exterior y una doble altura en la que balconea la circulación de planta alta. En esta, el volumen privado de dormitorios, intenta leerse como un bloque independiente simplemente apoyado.",
        client: "LikoTheme",
        date: "October '2022",
        services: "UI / UX Design",
        sliderImages: [
            "/assets/img/inner-project/casa-nina/frente.png",
            "/assets/img/inner-project/casa-nina/dibujo.png",
            "/assets/img/inner-project/casa-nina/render.jpg",
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
        summary: "We provide digital experience services to startups and small businesses.",
        client: "LikoTheme",
        date: "May '2024",
        services: "UI / UX Design",
        sliderImages: [
            "/assets/img/inner-project/portfolio-details-2/slide-1.jpg",
            "/assets/img/inner-project/portfolio-details-2/slide-2.jpg",
        ],
    },
];


