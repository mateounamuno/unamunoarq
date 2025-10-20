export type Showcase2Project = {
    template: "showcase-2";
    slug: string;
    title: string;
    category: string;
    year: string;
    homeGrid?: string;
    showOnHome?: boolean;
    showInGrid?: boolean;
    summary?: string;
    autores?: string;
    services?: string;
    industries?: string;
    release_date?: string;
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
        showOnHome: true,
        showInGrid: true,
        summary: "Una casa que conecta el cielo y la tierra, diseñada para maximizar la luz natural y crear espacios que fluyen armoniosamente con el entorno natural.",
        autores: "Unamuno Arq.",
        services: "Diseño Arquitectónico",
        industries: "Río Cuarto, Córdoba, AR",
        release_date: "Abril 2024",
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
        },
        sectionContents: {
            section1: "La Casa Cielo y Tierra nació de la necesidad de crear un espacio que respete y celebre la conexión entre el ser humano y la naturaleza. El diseño busca maximizar la luz natural y crear espacios que fluyan armoniosamente con el entorno, utilizando materiales sostenibles y técnicas de construcción tradicionales.",
            section2: "El objetivo principal era diseñar una casa que no solo fuera funcional y estéticamente atractiva, sino que también promoviera un estilo de vida más consciente y conectado con la naturaleza. Cada elemento del diseño fue pensado para crear una experiencia sensorial completa que invite a la contemplación y el bienestar. <br/> La casa se encuentra ubicada en un terreno de 1000 metros cuadrados, con una vista panorámica a la ciudad y al río. El diseño se basa en la idea de que la casa es un elemento que sea en el entorno, no solo una estructura que se levanta sobre él.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "casa-para-andar",
        title: "Casa andar",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/casa-andar/draw-1.png",
        showOnHome: true,
        showInGrid: true,
        summary: "A cada paso se repite: “Caminante no hay camino, se hace camino al andar”.",
        autores: "Unamuno Arq. & Willnecker & Ferrrero & Marinelli",
        services: "Diseño Arquitectónico",
        industries: "Río Cuarto, Córdoba, AR",
        release_date: "2022",
        showcaseHeroBg: "/assets/img/inner-project/casa-andar/banner.jpg",
        heroOverlayOpacity: 0.25,
        movingGalleryTop: [
            "/assets/img/inner-project/casa-andar/aerea.jpg",
            "/assets/img/inner-project/casa-andar/draw-1.png",
            "/assets/img/inner-project/casa-andar/frente.jpg",
            "/assets/img/inner-project/casa-andar/aerea.jpg"
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/casa-andar/draw-2.png",
            "/assets/img/inner-project/casa-andar/arriba.jpg",
            "/assets/img/inner-project/casa-andar/draw-3.png",
            "/assets/img/inner-project/casa-andar/draw-2.png"
        ],
        fullWidthImage: "/assets/img/inner-project/casa-andar/banner.jpg",
        gridImages: [
            "/assets/img/inner-project/casa-andar/planta.JPEG",
            "/assets/img/inner-project/casa-andar/draw-1.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Andar y descubrir",
        },
        sectionContents: {
            section1: "En casa para andar no hay comienzo y no hay final. Si no se anda, no se descubre. Si no se descubre, no se encuentra el interior. Porque el andar es dinámico, la casa es dinámica. Porque es dinámica, puede cambiar. El andar a pie es primitivo, es por ello que la casa para andar es vernácula. La casa para andar es una performance artística. La casa es paisaje, porque en el paisaje andamos, anduvimos y andaremos. ",
            section2: "Es un conjunto de piedras y ladrillos que un artista del land art encontró, parte en la montaña y parte en la ciudad. Luego las desparramó, según su orgánico y racional criterio, a pie de un cerro. <br/> En el andar hay paradas, porque quien no descansa no anda. Sin pausa, pero sin prisa. Si andar es de máquina, esta máquina funciona a sol y luna. <br/> No es una imagen, son muchas imágenes,más bien diría que es un film. Es deriva y es errar, errar de errante y errar de error. Se amasó con paisaje y se quemó en un horno ladrillero.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "edificio-recova",
        title: "Edificio Recova",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/edificio-recova/grid.jpg",
        showOnHome: true,
        showInGrid: true,
        summary: "Un proyecto vigente, que indagó sobre cuestiones historicistas de la arquitectura colonial y del siglo XIX de nuestro país, en relación con una tipología contemporánea.",
        autores: "Unamuno Arq.",
        services: "Diseño Arquitectónico",
        industries: "Salta, AR",
        release_date: "2019",
        showcaseHeroBg: "/assets/img/inner-project/edificio-recova/banner.png",
        heroOverlayOpacity: 0.25,
        movingGalleryTop: [
            "/assets/img/inner-project/edificio-recova/moving-top-1.jpg",
            "/assets/img/inner-project/edificio-recova/moving-top-2.png",
            "/assets/img/inner-project/edificio-recova/moving-top-3.jpg",
            "/assets/img/inner-project/edificio-recova/moving-top-1.jpg"
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/edificio-recova/moving-bottom-1.jpg",
            "/assets/img/inner-project/edificio-recova/moving-bottom-2.png",
            "/assets/img/inner-project/edificio-recova/moving-bottom-3.png",
            "/assets/img/inner-project/edificio-recova/moving-bottom-1.jpg"
        ],
        fullWidthImage: "/assets/img/inner-project/edificio-recova/banner.png",
        gridImages: [
            "/assets/img/inner-project/edificio-recova/grid-1.jpg",
            "/assets/img/inner-project/edificio-recova/grid-2.png",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Colonial y Contemporáneo.",
        },
        sectionContents: {
            section1: "Uno de mis primeros encargos en el año 2019 que lamentablemente quedó en proyecto y la obra nunca se ejecutó. Sin embargo, un proyecto vigente, que indagó sobre cuestiones historicistas de la arquitectura colonial y del siglo XIX de nuestro país, en relación con una tipología contemporánea.",
            section2: "Ubicado en Vicente López esquina con Pje. La Tablada de la ciudad de Salta, el encargo comenzó como un pequeño “hotel”. Ese hotel se transformó en un conjunto de unidades para alquiler transitorio (turismo), 18 tipologías mínimas, por encima de una planta libre que contiene estacionamiento, un local comercial y un patio. <br/> Ingresar por una recova, encontrarse con materiales y texturas nobles y pesadas, y recorrer un tiempo por el espacio intermedio hasta llegar a un volumen de circulación permeable como mirador, fueron algunas ideas que pretendían hacer alusión a situaciones espaciales de nuestra arquitectura del pasado. <br/> Otra idea consciente es la llegada de la escalera a un espacio “múltiple”. No es un “palier”, no es un espacio de distribución/circulación… es una expansión de las tipologías, un espacio donde mirar, donde ventilar, donde encontrarse con los vecinos… Las tipologías son mínimas… quizás demasiadas compactas a pedido del cliente, pero con una contemporaneidad explícita en su flexibilidad y compacidad.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "remodelacion-ar",
        title: "Remodelación AR",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/remodelacion-ar/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        summary: "Con intervenciones mínimas, la vivienda volvió a respirar.",
        autores: "Unamuno Arq.",
        services: "Diseño Arquitectónico",
        industries: "Río Cuarto, Córdoba, AR",
        release_date: "Abril 2024",
        showcaseHeroBg: "/assets/img/inner-project/remodelacion-ar/banner.jpg",
        heroOverlayOpacity: 0.15,
        movingGalleryTop: [
            "/assets/img/inner-project/remodelacion-ar/moving-top-1.jpg",
            "/assets/img/inner-project/remodelacion-ar/moving-top-2.jpg",
            "/assets/img/inner-project/remodelacion-ar/moving-top-3.jpg",
            "/assets/img/inner-project/remodelacion-ar/moving-top-1.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/remodelacion-ar/moving-bottom-1.jpg",
            "/assets/img/inner-project/remodelacion-ar/moving-bottom-2.jpg",
            "/assets/img/inner-project/remodelacion-ar/moving-bottom-3.jpg",
            "/assets/img/inner-project/remodelacion-ar/moving-bottom-1.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/remodelacion-ar/full-width.jpg",
        gridImages: [
            "/assets/img/inner-project/remodelacion-ar/grid-1.jpg",
            "/assets/img/inner-project/remodelacion-ar/grid-2.jpg",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Ser presente.",
        },
        sectionContents: {
            section1: "Una casa llena de memoria, nos pidió poco. <br/> Solo dejar entrar la luz. <br/> Solo abrirle el paso al aire y al tiempo.",
            section2: "Con intervenciones mínimas, casi susurradas, la vivienda volvió a respirar. <br/> Los muros se volvieron más permeables, los espacios más libres, más vivos.",
            section3: "No hizo falta borrar lo que fue. Bastó con escuchar. <br/> Y permitir que, con lo justo, la casa vuelva a ser presente.",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "atelier-artista",
        title: "Atelier Artista",
        category: "Residencial",
        year: "2021",
        homeGrid: "/assets/img/inner-project/atelier-artista/grid.png",
        showOnHome: false,
        showInGrid: true,
        summary: "Un proyecto que parte de entrelazar la luz y la forma, para que, en su conjunto, generen un espacio dinámico y flexible.",
        autores: "Unamuno Arq. & RARE",
        services: "Diseño Arquitectónico",
        industries: "Río Cuarto, Córdoba, AR",
        release_date: "2021",
        showcaseHeroBg: "/assets/img/inner-project/atelier-artista/banner.jpg",
        heroOverlayOpacity: 0.25,
        movingGalleryTop: [
            "/assets/img/inner-project/atelier-artista/moving-top-1.jpg",
            "/assets/img/inner-project/atelier-artista/moving-top-2.png",
            "/assets/img/inner-project/atelier-artista/moving-top-3.jpg",
            "/assets/img/inner-project/atelier-artista/moving-top-1.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/atelier-artista/moving-bottom-1.png",
            "/assets/img/inner-project/atelier-artista/moving-bottom-2.png",
            "/assets/img/inner-project/atelier-artista/moving-bottom-3.png",
            "/assets/img/inner-project/atelier-artista/moving-bottom-1.png"
        ],
        fullWidthImage: "/assets/img/inner-project/atelier-artista/full-width.jpg",
        gridImages: [
            "/assets/img/inner-project/atelier-artista/grid-1.png",
            "/assets/img/inner-project/atelier-artista/grid-2.jpg",
        ],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Tiempo y espacio.",
        },
        sectionContents: {
            section1: "Mientras la estructura se conforma como un elemento estático, la dinámica de la luz expresa distintas figuras y atmósferas en el interior, reflejando así, el tiempo en el espacio.",
            section2: "El desafío también estaba condicionado por una antigua cancha de padel sobre la cual, se asentó el nuevo volumen. Los antiguos muros perimetrales, de la cancha, funcionaban como soporte del terreno desnivelado, por lo cual, hubo que conservarlos como parte de la estructura. <br/> 'La arquitectura es el juego sabio, correcto y magnífico de los volúmenes bajo la luz' - Le Corbusier.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "patio-con-casa",
        title: "Patio con casa",
        category: "Residencial",
        year: "2021",
        homeGrid: "/assets/img/inner-project/patio-con-casa/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        summary: "Un encargo especial, una vivienda de vacaciones para varias familias.",
        autores: "Unamuno Arq. & RARE & S. Maglioni.",
        services: "Diseño Arquitectónico",
        industries: "Río Cuarto, Córdoba, AR",
        release_date: "Abril 2024",
        showcaseHeroBg: "/assets/img/inner-project/patio-con-casa/banner.jpg",
        heroOverlayOpacity: 0.25,
        movingGalleryTop: [
            "/assets/img/inner-project/patio-con-casa/moving-top-1.jpg",
            "/assets/img/inner-project/patio-con-casa/moving-top-2.jpg",
            "/assets/img/inner-project/patio-con-casa/moving-top-3.jpg",
            "/assets/img/inner-project/patio-con-casa/moving-top-1.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/patio-con-casa/moving-bottom-1.jpg",
            "/assets/img/inner-project/patio-con-casa/moving-bottom-2.jpg",
            "/assets/img/inner-project/patio-con-casa/moving-bottom-3.jpg",
            "/assets/img/inner-project/patio-con-casa/moving-bottom-1.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/patio-con-casa/full-width.jpg",
        gridImages: [],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Encuentro y zaguán.",
        },
        sectionContents: {
            section1: "Una serie de dormitorios vinculados directamente a un patio central. Ese patio es encuentro y es reunión, al mismo tiempo que es zaguán, ingreso, circulación, articulación y distribución. Es el patio del limonero.",
            section2: "Se propone un diálogo con la antigua arquitectura cordobesa, con las viviendas andaluzas y la villa romana. Estar “afuera” en un interior fue lo que desató una serie de ideas para esta casa, cuya sucesión de patios es el partido. Un diálogo continuo con la historia y un particular contexto a veras de dique Los Molinos.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },

    },
    {
        template: "showcase-2",
        slug: "molt",
        title: "Molt",
        category: "Comercial",
        year: "2023",
        homeGrid: "/assets/img/inner-project/molt/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        summary: "Una experiencia sintética, atemporal y unificadora.",
        autores: "Unamuno Arq. & Estudio Parvas",
        services: "Diseño Arquitectónico",
        industries: "Córdoba, AR",
        release_date: "Abril 2024",
        showcaseHeroBg: "/assets/img/inner-project/molt/banner.jpg",
        heroOverlayOpacity: 0.25,
        movingGalleryTop: [
            "/assets/img/inner-project/molt/moving-top-1.jpg",
            "/assets/img/inner-project/molt/moving-top-2.jpg",
            "/assets/img/inner-project/molt/moving-top-3.jpg",
            "/assets/img/inner-project/molt/moving-top-4.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/molt/moving-bottom-1.jpg",
            "/assets/img/inner-project/molt/moving-bottom-2.jpg",
            "/assets/img/inner-project/molt/moving-bottom-3.jpg",
            "/assets/img/inner-project/molt/moving-bottom-4.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/molt/full-width.jpg",
        gridImages: [],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Atemporal y Surreal",
        },
        sectionContents: {
            section1: "Molt propone un espacio abstracto. Una experiencia sintética, atemporal y unificadora. <br/> Con un material translúcido como predominante, el espacio se transforma en una gran lámpara que destaca por sobre el espacio público corriente. <br/> Casi como una invitación a una cápsula del tiempo, una realidad paralela o surreal.",
            section2: "La forma de exhibir los productos de manera provocativa, también potencian la experiencia peculiar con los clientes.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "cafe-del-popolo",
        title: "Caffè del Popolo",
        category: "Comercial",
        year: "2023",
        homeGrid: "/assets/img/inner-project/cafe-popolo/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        summary: "Una experiencia sintética, atemporal y unificadora.",
        autores: "Unamuno Arq. & Estudio Parvas",
        services: "Diseño Arquitectónico",
        industries: "Córdoba, AR",
        release_date: "Abril 2024",
        showcaseHeroBg: "/assets/img/inner-project/cafe-popolo/banner.jpg",
        heroOverlayOpacity: 0.25,
        movingGalleryTop: [
            "/assets/img/inner-project/cafe-popolo/moving-top-1.jpg",
            "/assets/img/inner-project/cafe-popolo/moving-top-2.jpg",
            "/assets/img/inner-project/cafe-popolo/moving-top-3.jpg",
            "/assets/img/inner-project/cafe-popolo/moving-top-1.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/cafe-popolo/moving-bottom-1.jpg",
            "/assets/img/inner-project/cafe-popolo/moving-bottom-2.jpg",
            "/assets/img/inner-project/cafe-popolo/moving-bottom-3.jpg",
            "/assets/img/inner-project/cafe-popolo/moving-bottom-1.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/cafe-popolo/full-width.jpg",
        gridImages: [],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Atemporal y Surreal",
        },
        sectionContents: {
            section1: "Molt propone un espacio abstracto. Una experiencia sintética, atemporal y unificadora. <br/> Con un material translúcido como predominante, el espacio se transforma en una gran lámpara que destaca por sobre el espacio público corriente. <br/> Casi como una invitación a una cápsula del tiempo, una realidad paralela o surreal.",
            section2: "La forma de exhibir los productos de manera provocativa, también potencian la experiencia peculiar con los clientes.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "tregua",
        title: "Tregua",
        category: "Comercial",
        year: "2023",
        homeGrid: "/assets/img/inner-project/tregua/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        summary: "Un restaurante de comida con coctelería.",
        autores: "Unamuno Arq. & Estudio Parvas",
        services: "Diseño Arquitectónico",
        industries: "Córdoba, AR",
        release_date: "2023",
        showcaseHeroBg: "/assets/img/inner-project/tregua/banner.jpg",
        heroOverlayOpacity: 0.15,
        movingGalleryTop: [
            "/assets/img/inner-project/tregua/moving-top-1.jpg",
            "/assets/img/inner-project/tregua/moving-top-2.jpg",
            "/assets/img/inner-project/tregua/moving-top-3.jpg",
            "/assets/img/inner-project/tregua/moving-top-1.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/tregua/moving-bottom-1.jpg",
            "/assets/img/inner-project/tregua/moving-bottom-2.jpg",
            "/assets/img/inner-project/tregua/moving-bottom-3.jpg",
            "/assets/img/inner-project/tregua/moving-bottom-1.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/tregua/full-width.jpg",
        gridImages: [],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Un diálogo entre rubros.",
        },
        sectionContents: {
            section1: "Tregua es un restaurante de comida con coctelería, ubicado en barrio General Paz de la ciudad de Córdoba. Se intentó generar un ambiente que pueda dialogar con los dos rubros que interactúan en la cocina, combinando materiales pulidos y brillosos, con otros más opacos y nobles como el hormigón.",
            section2: "El revestimiento predominante está compuesto por placas de hormigón prefabricadas de manera artesanal, que de algún modo intentan dialogar con la fachada del edificio donde se encuentra el local. Al mismo tiempo, identificar ese revestimiento como derivado del Banco RARX. <br/> Mobiliario diseñado en el año 2021",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "la-macarena",
        title: "La Macarena",
        category: "Concursos",
        year: "2023",
        homeGrid: "/assets/img/inner-project/la-macarena/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        summary: "Un ecosistema de encuentro y sociabilización.",
        autores: "Unamuno Arq. & otros colaboradores.",
        services: "Diseño Arquitectónico",
        industries: "Córdoba, AR",
        release_date: "2023",
        showcaseHeroBg: "/assets/img/inner-project/la-macarena/banner.jpg",
        heroOverlayOpacity: 0.15,
        movingGalleryTop: [
            "/assets/img/inner-project/la-macarena/moving-top-1.jpg",
            "/assets/img/inner-project/la-macarena/moving-top-2.jpg",
            "/assets/img/inner-project/la-macarena/moving-top-3.jpg",
            "/assets/img/inner-project/la-macarena/moving-top-1.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/la-macarena/moving-bottom-1.jpg",
            "/assets/img/inner-project/la-macarena/moving-bottom-2.jpg",
            "/assets/img/inner-project/la-macarena/moving-bottom-3.jpg",
            "/assets/img/inner-project/la-macarena/moving-bottom-1.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/la-macarena/full-width.png",
        gridImages: [],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Ecuentro y sociabilización.",
        },
        sectionContents: {
            section1: "Entendimos al sitio del presente concurso, como un sector estratégico que forma parte no sólo de la ciudad sino también, de un extenso corredor verde de escala regional. Con el objetivo de fortalecer esta continuidad paisajística entre el campo de golf existente y el cinturón verde urbano circundante.",
            section2: "Nuestro proyecto busca crear un nuevo parque, que no solo responda a los requisitos del concurso, sino que también actúe como un ecosistema de encuentro y socialización, convirtiéndose en un referente para la ciudad y la región.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    },
    {
        template: "showcase-2",
        slug: "banco-rarx",
        title: "Banco RARX",
        category: "Experimentaciones",
        year: "2021",
        homeGrid: "/assets/img/inner-project/banco-rarx/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        summary: " Un “banquito” que, en homenaje a la arquitecta, tiene vocación de lo público.",
        autores: "Unamuno Arq. & Estudio RARE & Tomas Barros",
        services: "Diseño Arquitectónico",
        industries: "Córdoba, AR",
        release_date: "2021",
        showcaseHeroBg: "/assets/img/inner-project/banco-rarx/banner.jpg",
        heroOverlayOpacity: 0.15,
        movingGalleryTop: [
            "/assets/img/inner-project/banco-rarx/moving-top-1.jpg",
            "/assets/img/inner-project/banco-rarx/moving-top-2.jpg",
            "/assets/img/inner-project/banco-rarx/moving-top-3.jpg",
            "/assets/img/inner-project/banco-rarx/moving-top-1.jpg",
        ],
        movingGalleryBottom: [
            "/assets/img/inner-project/banco-rarx/moving-bottom-1.jpg",
            "/assets/img/inner-project/banco-rarx/moving-bottom-2.jpg",
            "/assets/img/inner-project/banco-rarx/moving-bottom-3.jpg",
            "/assets/img/inner-project/banco-rarx/moving-bottom-1.jpg",
        ],
        fullWidthImage: "/assets/img/inner-project/banco-rarx/full-width.jpg",
        gridImages: [],
        // Specific texts for this project
        visitWebsiteText: "Ver Proyecto",
        sectionTitles: {
            section1: "Formal y material.",
        },
        sectionContents: {
            section1: "Una exploración formal  material inspirado en la arquitecta Lina Bo Bardi, que derivó en un mobiliario único. ",
            section2: "Un “banquito” que, en homenaje a la arquitecta, tiene vocación de lo público. Con su materialidad sólida y resistente a la intemperie, tiene como objetivo, poder estar en cualquier sector de la ciudad para ser apropiado libremente.",
            section3: "",
            section4: "",
        },
        navigationTexts: {
            prev: "Anterior",
            next: "Siguiente",
        },
    }
];


