export type ShowcaseProject = {
    template: "showcase";
    slug: string;
    title: string;
    category: string;
    year: string;
    homeGrid?: string;
    showOnHome?: boolean;
    showInGrid?: boolean;
    subtitle: string;
    overview?: string;
    autores?: string;
    services?: string;
    location?: string;
    fotografia?: string;
    showcaseHeroBg: string;
    heroOverlayOpacity?: number; // 0 to 1
    showcaseThumbs: string[]; // length 3 recommended
};

export const showcaseProjects: ShowcaseProject[] = [
    {
        template: "showcase",
        slug: "casa-al-lado-1",
        title: "La casa de al lado.",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/casa-al-lado/grid.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Una vivienda que se desarrolla en tira. Una casa que ocupa un lugar en desuso al lado de una residencia existente. Una extensión independiente de la misma. Una propuesta para pensar como re-densificar. Un diálogo material entre lo que hay y lo que vendrá. Una casa al lado de la casa.",
        autores: "Unamuno Arq.",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "",
        showcaseHeroBg: "/assets/img/inner-project/casa-al-lado/banner.jpg",
        heroOverlayOpacity: 0.20,
        showcaseThumbs: [
            "/assets/img/inner-project/casa-al-lado/detail-1.jpg",
            "/assets/img/inner-project/casa-al-lado/detail-2.jpg",
            "/assets/img/inner-project/casa-al-lado/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "casa-nina",
        title: "Casa Nina",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/casa-nina/dibujo.png",
        showOnHome: true,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "En esta vivienda ubicada en un lote de 250 m² en la localidad de Malageño, se busca integrar de manera armónica los árboles existentes del terreno, acompañando con una orientación estratégica para optimizar la luz solar y garantizar una flexibilidad funcional en los espacios interiores. En lugar de desarrollar un volumen compacto con un único patio trasero, se optó por una disposición que incorpora dos patios de casi igual jerarquía. <br/> Esta configuración no solo permite aprovechar al máximo el lote, sino que también, integrar el exterior al interior de la vivienda en ambos sentidos. En planta baja, el espacio social se integra con el exterior y una doble altura en la que balconea la circulación de planta alta. En esta, el volumen privado de dormitorios, intenta leerse como un bloque independiente simplemente apoyado.",
        autores: "Unamuno Arq.",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "",
        showcaseHeroBg: "/assets/img/inner-project/casa-nina/frente.png",
        heroOverlayOpacity: 0.2,
        showcaseThumbs: [
            "/assets/img/inner-project/casa-nina/render1.jpg",
            "/assets/img/inner-project/casa-nina/dibujo-horizontal.png",
            "/assets/img/inner-project/casa-nina/render3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "refugio-para-el-viento",
        title: "Refugio para el Viento.",
        category: "Residencial",
        year: "2022",
        homeGrid: "/assets/img/inner-project/refugio-para-el-viento/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Se trata de una vivienda en las sierras de Córdoba, para una persona que intenta encontrar en la espiritualidad y su conexión con el cielo, el sentido de las cosas. La arquitectura no hace más que representar esta forma de ver el mundo y dialogar desde su materialidad y composición con el paisaje circundante.",
        autores: "Unamuno Arq. & Estudio RARE & Monte Arq.",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "Nicolás Godoy",
        showcaseHeroBg: "/assets/img/inner-project/refugio-para-el-viento/banner.jpg",
        heroOverlayOpacity: 0.05,
        showcaseThumbs: [
            "/assets/img/inner-project/refugio-para-el-viento/detail-1.jpg",
            "/assets/img/inner-project/refugio-para-el-viento/detail-2.jpg",
            "/assets/img/inner-project/refugio-para-el-viento/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "unidades-vb",
        title: "Unidades VB",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/unidades-vb/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Un proyecto que prioriza la flexibilidad de uso (apto para viviendas u oficinas) y optimiza la ocupación del lote.\nLa privacidad hacia el exterior, la relación con las visuales y un espacio verde en común terminan de configurar los volúmenes.",
        autores: "Unamuno Arq.",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "",
        showcaseHeroBg: "/assets/img/inner-project/unidades-vb/banner.jpg",
        heroOverlayOpacity: 0.4,
        showcaseThumbs: [
            "/assets/img/inner-project/unidades-vb/detail-1.jpg",
            "/assets/img/inner-project/unidades-vb/detail-2.jpg",
            "/assets/img/inner-project/unidades-vb/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "la-barranca",
        title: "Habitar la Barranca",
        category: "Residencial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/la-barranca/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Ejercicio para conversar con la barranca, una vivienda unifamiliar en la localidad de Cuesta Blanca. \n La vivienda se despliega siguiendo el pulso del terreno, adaptándose a su relieve como si siempre hubiera estado allí. \n Su geometría se inclina, buscando la luz y enmarcando las mejores vistas, dialogando con el horizonte. \n Flexible en su interior, la casa se transforma para acompañar distintos modos de habitar, respirando al ritmo del paisaje que la rodea.",
        autores: "Unamuno Arq., Estudio RARE, B. Marinelli",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "",
        showcaseHeroBg: "/assets/img/inner-project/la-barranca/banner.jpg",
        heroOverlayOpacity: 0.4,
        showcaseThumbs: [
            "/assets/img/inner-project/la-barranca/detail-1.jpg",
            "/assets/img/inner-project/la-barranca/detail-2.jpg",
            "/assets/img/inner-project/la-barranca/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "bros-comedor",
        title: "Bros Comedor",
        category: "Comercial",
        year: "2023",
        homeGrid: "/assets/img/inner-project/bros-comedor/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "La extensión hacia la planta alta de @broscomedor, resultó en un laboratorio con vista al paseo sobremonte. Propusimos un espacio dinámico, como su cocina. Una experimesa, que es una gran mesa y a la vez muchas mesas. Y una cava, como una lámpara. Trabajamos junto a @estudioparvas, quienes desarollaron para este espacio, dispositivos lumínicos capaces de adaptarse y replegarse junto a las partes de la “experimesa” acompañando sus movimientos. ",
        autores: "Unamuno Arq., Estudio RARE, B. Marinelli",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "Ana Salazar",
        showcaseHeroBg: "/assets/img/inner-project/bros-comedor/banner.jpg",
        heroOverlayOpacity: 0.3,
        showcaseThumbs: [
            "/assets/img/inner-project/bros-comedor/detail-1.jpg",
            "/assets/img/inner-project/bros-comedor/detail-2.jpg",
            "/assets/img/inner-project/bros-comedor/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "cafe-laprida",
        title: "Café Laprida",
        category: "Comercial",
        year: "2024",
        homeGrid: "/assets/img/inner-project/cafe-laprida/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Esto no es un café, sino una instalación efímera y flexible que propone una actitud más que una forma: una gran barra de servicios como pieza esencial, mesas móviles que funcionan tanto para el consumo como para usos expositivos, y una plataforma exterior que dialoga con el árbol existente. Con materiales simples y económicos, de fácil montaje y posibilidad de reciclaje, la propuesta se plantea concreta, ligera y adaptable, buscando abrir el espacio a múltiples situaciones y estimular la imaginación, más allá de lo planificado.",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "Lorenzo Egues",
        showcaseHeroBg: "/assets/img/inner-project/cafe-laprida/banner.jpg",
        heroOverlayOpacity: 0.4,
        showcaseThumbs: [
            "/assets/img/inner-project/cafe-laprida/detail-1.jpg",
            "/assets/img/inner-project/cafe-laprida/detail-2.jpg",
            "/assets/img/inner-project/cafe-laprida/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "the-fav",
        title: "The Fav",
        category: "Comercial",
        year: "2023",
        homeGrid: "/assets/img/inner-project/the-fav/grid.jpg",
        showOnHome: false,
        showInGrid: true,
        subtitle: "[ Arquitectura ]",
        overview:
            "Lo espontáneo, lo efímero, el punto de encuentro, la esquina, la expresión individual, el gesto colectivo, el ruido, los autos, las chapas, las luces… La calle. <br/> Un conjunto de acciones (de afuera hacia adentro) direccionadas a generar lógicas diferentes de relación entre lo que antes era una vidriera, con el espacio público. Un manifiesto, usar la vereda, ocupar la calle y una vez más, comenzar a borrar los márgenes entre el interior y el exterior previamente inexistente.",
        autores: "Unamuno Arq.",
        services: "Arquitectura",
        location: "Córdoba, AR",
        fotografia: "Ana Salazar",
        showcaseHeroBg: "/assets/img/inner-project/the-fav/banner.jpg",
        heroOverlayOpacity: 0.4,
        showcaseThumbs: [
            "/assets/img/inner-project/the-fav/detail-1.jpg",
            "/assets/img/inner-project/the-fav/detail-2.jpg",
            "/assets/img/inner-project/the-fav/detail-3.jpg",
        ],
    },
    {
        template: "showcase",
        slug: "la-otra-forma",
        title: "La otra forma.",
        category: "Experimentaciones",
        year: "2024",
        homeGrid: "/assets/img/inner-project/la-otra-forma/grid.jpg",
        showOnHome: true,
        showInGrid: true,
        subtitle: "[ Arquitectura y Arte ]",
        overview:
            "Una intervención artística/arquitectónica de sitio específico en el espacio público, de escala y carácter temporal habitable, realizada en colaboración con el artista Dino Valentini en el marco de la 3ra Bienal de Diseño Córdoba. <br/> IRREGULAR – IMPERFECTO- ORGÁNICO- ASIMETRICO – TANSPARENTE – LIVIANO- RECICLABLE – HABITABLE. <br/> Propone a través de una serie de elementos, operaciones y programas, la construcción de una FORMA con acceso a su interior, pero sin acceso a su centro. Una forma OTRA, no binaria. <br/> Ofreciendo una tensión ante la posibilidad de habitar y hacer un recorrido por un espacio que no tiene centro, en el centro de la ciudad de Córdoba. <br/> Suprimiendo la promesa de lo que significa acceder al núcleo, eliminando las apariencias y habilitando un mismo portal de acceso y escape de un territorio segmentado.",
        services: "Arquitectura y Arte",
        location: "Córdoba, AR",
        fotografia: "Mila Gonzalez Ruso, Jorge Barucco",
        showcaseHeroBg: "/assets/img/inner-project/la-otra-forma/banner.jpg",
        heroOverlayOpacity: 0.4,
        showcaseThumbs: [
            "/assets/img/inner-project/la-otra-forma/detail-1.jpg",
            "/assets/img/inner-project/la-otra-forma/detail-2.jpg",
            "/assets/img/inner-project/la-otra-forma/detail-3.jpg",
        ],
    },

];


