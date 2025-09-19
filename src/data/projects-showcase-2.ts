export type Showcase2Project = {
    template: "showcase-2";
    slug: string;
    title: string;
    category: string;
    year: string;
    cover: string;
    thumbnail: string;
    gridThumbnail?: string;
    homeGrid?: string;
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
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cielo-y-tierra/grid.png",
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
        heroOverlayOpacity: 0.25,
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
            "/assets/img/inner-project/cielo-y-tierra/grid-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "El Objetivo",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "Propósito del Proyecto",
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
        slug: "cielo-y-tierra",
        title: "Casa: Cielo y Tierra",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cielo-y-tierra/grid.png",
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
        heroOverlayOpacity: 0.25,
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
            "/assets/img/inner-project/cielo-y-tierra/grid-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "El Objetivo",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "Propósito del Proyecto",
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
        slug: "cielo-y-tierra",
        title: "Casa: Cielo y Tierra",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cielo-y-tierra/grid.png",
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
        heroOverlayOpacity: 0.25,
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
            "/assets/img/inner-project/cielo-y-tierra/grid-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "El Objetivo",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "Propósito del Proyecto",
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
        slug: "cielo-y-tierra",
        title: "Casa: Cielo y Tierra",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cielo-y-tierra/grid.png",
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
        heroOverlayOpacity: 0.25,
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
            "/assets/img/inner-project/cielo-y-tierra/grid-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "El Objetivo",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "Propósito del Proyecto",
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
        slug: "cielo-y-tierra",
        title: "Casa: Cielo y Tierra",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cielo-y-tierra/grid.png",
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
        heroOverlayOpacity: 0.25,
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
            "/assets/img/inner-project/cielo-y-tierra/grid-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "El Objetivo",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "Propósito del Proyecto",
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
        slug: "cielo-y-tierra",
        title: "Casa: Cielo y Tierra",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cielo-y-tierra/grid.png",
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
        heroOverlayOpacity: 0.25,
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
            "/assets/img/inner-project/cielo-y-tierra/grid-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "El Objetivo",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "Propósito del Proyecto",
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
        slug: "cielo-y-tierra",
        title: "Casa: Cielo y Tierra",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cielo-y-tierra/grid.png",
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
        heroOverlayOpacity: 0.25,
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
            "/assets/img/inner-project/cielo-y-tierra/grid-1.jpg",
            "/assets/img/inner-project/cielo-y-tierra/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Simple y Significativo",
            section2: "El Objetivo",
            section3: "La Planificación",
        },
        sectionSubtitles: {
            section1: "Objetivo",
            section2: "Propósito del Proyecto",
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
    }

];


