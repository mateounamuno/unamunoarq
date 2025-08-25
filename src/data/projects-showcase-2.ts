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
    heroOverlayOpacity?: number; // 0 to 1
    movingGalleryTop: string[]; // 4
    movingGalleryBottom: string[]; // 4
    fullWidthImage: string;
    gridImages: string[]; // 2
    // New text fields for specific content
    visitWebsiteText?: string;
    sectionTitles?: {
        section1?: string;
        section2?: string;
        section3?: string;
    } | null;
    sectionSubtitles?: {
        section1?: string;
        section2?: string;
        section3?: string;
        section4?: string;
    } | null;
    sectionContents?: {
        section1?: string;
        section2?: string;
        section3?: string;
        section4?: string;
    };
    navigationTexts?: {
        prev?: string;
        next?: string;
    };
};

export const showcase2Projects: Showcase2Project[] = [
    {
        template: "showcase-2",
        slug: "cielo-y-tierra",
        title: "Casa: Cielo y Tierra",
        category: "Arquitectura",
        year: "2024",
        cover: "/assets/img/inner-project/cielo-y-tierra/banner.jpg",
        thumbnail: "/assets/img/inner-project/cielo-y-tierra/banner.jpg",
        gridThumbnail: "/assets/img/inner-project/cielo-y-tierra/banner.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "Diseño arquitectónico sostenible",
        summary: "Una casa que conecta el cielo y la tierra, diseñada para maximizar la luz natural y crear espacios que fluyen armoniosamente con el entorno natural.",
        client: "Unamuno Arq.",
        services: "Diseño Arquitectónico",
        industries: "Río Cuarto, Córdoba, AR",
        date: "Abril 2024",
        showcaseHeroBg: "/assets/img/inner-project/cielo-y-tierra/banner.jpg",
        heroOverlayOpacity: 0.35,
        movingGalleryTop: [
            "/assets/img/inner-project/cielo-y-tierra/moving-top-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/moving-top-2.png",
            "/assets/img/inner-project/cielo-y-tierra/moving-top-3.jpg",
            "/assets/img/inner-project/cielo-y-tierra/moving-top-4.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/cielo-y-tierra/moving-bottom-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/moving-bottom-2.png",
            "/assets/img/inner-project/cielo-y-tierra/moving-bottom-3.jpg",
            "/assets/img/inner-project/cielo-y-tierra/moving-bottom-4.png",
        ],
        fullWidthImage: "/assets/img/inner-project/cielo-y-tierra/full-width.jpg",
        gridImages: [
            "/assets/img/inner-project/cielo-y-tierra/moving-top-2.png",
            "/assets/img/inner-project/cielo-y-tierra/moving-top-4.jpg",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "",
            section3: "Mapeando el viaje",
            section4: "Detalles del Caso",
        },
        sectionContents: {
            section1: "La Casa Cielo y Tierra nació de la necesidad de crear un espacio que respete y celebre la conexión entre el ser humano y la naturaleza. El diseño busca maximizar la luz natural y crear espacios que fluyan armoniosamente con el entorno, utilizando materiales sostenibles y técnicas de construcción tradicionales.",
            section2: "El objetivo principal era diseñar una casa que no solo fuera funcional y estéticamente atractiva, sino que también promoviera un estilo de vida más consciente y conectado con la naturaleza.",
            section3: "Cada elemento del diseño fue pensado para crear una experiencia sensorial completa que invite a la contemplación y el bienestar.",
            section4: "Cada detalle del proyecto fue cuidadosamente considerado, desde la selección de materiales hasta la disposición de los espacios. El resultado es una casa que no solo cumple con las necesidades funcionales de sus habitantes, sino que también crea un ambiente que promueve la conexión con la naturaleza y el bienestar emocional.",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "edificio-moderno",
        title: "Edificio Moderno",
        category: "Arquitectura Comercial",
        year: "2024",
        cover: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        thumbnail: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        gridThumbnail: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "Innovación en espacios comerciales",
        summary: "Un edificio comercial que redefine los estándares de diseño moderno, combinando funcionalidad empresarial con estética contemporánea.",
        client: "Corporación Inmobiliaria",
        services: "Arquitectura Comercial",
        industries: "Desarrollo Inmobiliario",
        date: "Marzo 2024",
        showcaseHeroBg: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        heroOverlayOpacity: 0.25,
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
        // Specific texts for this project
        visitWebsiteText: "Explorar Proyecto",
        sectionTitles: {
            section1: "Moderno y Funcional",
            section2: "La Visión",
            section3: "El Proceso",
        },
        sectionSubtitles: {
            section1: "Propósito",
            section2: "Concepto inicial",
            section3: "Desarrollo del proyecto",
            section4: "Resultados Finales",
        },
        sectionContents: {
            section1: "El Edificio Moderno representa la evolución de los espacios comerciales contemporáneos. Diseñado para maximizar la eficiencia operativa mientras mantiene un ambiente atractivo para empleados y visitantes, este proyecto establece nuevos estándares en arquitectura corporativa.",
            section2: "La visión era crear un espacio que no solo cumpliera con las necesidades funcionales de una empresa moderna, sino que también reflejara los valores de innovación y sostenibilidad. El diseño incorpora tecnologías de vanguardia y materiales eco-friendly para crear un ambiente de trabajo excepcional.",
            section3: "El desarrollo del proyecto involucró un equipo multidisciplinario que trabajó en estrecha colaboración para asegurar que cada aspecto del edificio cumpliera con los más altos estándares de calidad. Desde la planificación inicial hasta la finalización, cada detalle fue cuidadosamente considerado.",
            section4: "El resultado final es un edificio que no solo cumple con todas las expectativas funcionales, sino que también supera las aspiraciones estéticas. El espacio promueve la colaboración, la creatividad y el bienestar, creando un ambiente de trabajo verdaderamente excepcional.",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "proyecto-simple",
        title: "Proyecto Simple",
        category: "Diseño Minimalista",
        year: "2024",
        cover: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        thumbnail: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        gridThumbnail: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "Diseño limpio y minimalista",
        summary: "Un proyecto que demuestra la belleza del diseño simple y la funcionalidad pura.",
        client: "Cliente Privado",
        services: "Diseño Interior",
        industries: "Residencial",
        date: "Febrero 2024",
        showcaseHeroBg: "/assets/img/inner-project/showcase/showcase-details-2-1.jpg",
        heroOverlayOpacity: 0.3,
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
        // Example with empty strings for sectionTitles and sectionSubtitles for full-width content
        visitWebsiteText: "Ver Más",
        sectionTitles: {
            section1: "",
            section2: "",
            section3: "",
        },
        sectionSubtitles: {
            section1: "",
            section2: "",
            section3: "",
            section4: "",
        },
        sectionContents: {
            section1: "Este proyecto demuestra cómo el diseño minimalista puede crear espacios extraordinarios. La filosofía de 'menos es más' se aplica en cada detalle, desde la selección de materiales hasta la disposición de los elementos. El resultado es un ambiente que respira calma y serenidad, donde cada elemento tiene un propósito y contribuye al todo.",
            section2: "La simplicidad no significa falta de sofisticación. Por el contrario, este proyecto muestra cómo el diseño minimalista puede ser increíblemente sofisticado y funcional. Cada decisión de diseño fue tomada con cuidado, considerando tanto la estética como la funcionalidad.",
            section3: "El proceso de diseño se centró en la eliminación de elementos innecesarios, manteniendo solo lo esencial. Esta aproximación resultó en un espacio que no solo es visualmente atractivo, sino que también promueve el bienestar y la claridad mental.",
            section4: "El resultado final es un testimonio del poder del diseño minimalista. El espacio se siente abierto, luminoso y sereno, creando un ambiente perfecto para la contemplación y el descanso.",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
];


