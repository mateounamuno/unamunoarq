import { IMenuDT } from "@/types/menu-d-t";
import { projects } from "./project-data";

// Función para obtener proyectos por categoría
const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

// Función para generar el enlace correcto según el template (igual que en portfolio-grid-col-4)
const getProjectLink = (slug: string, template: string): string => {
  switch (template) {
    case "showcase-2":
      return `/portfolio/showcase-2/${slug}`;
    case "showcase":
      return `/portfolio/showcase/${slug}`;
    default:
      return `/portfolio/showcase2/${slug}`;
  }
};

// Función para crear enlaces de proyectos
const createProjectLinks = (category: string) => {
  const categoryProjects = getProjectsByCategory(category);
  return categoryProjects.map(project => ({
    title: project.title,
    link: getProjectLink(project.slug, project.template)
  }));
};

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'Proyectos',
    link: '/portfolio-grid-col-4',
    portfolio_mega_menus: {
      first: {
        title: 'RESIDENCIAL',
        submenus: [
          {
            id: 1,
            menu_lists: [
              ...createProjectLinks('Residencial'),
            ]
          }
        ]
      },
      second: {
        submenus: [
          {
            id: 1,
            title: 'COMERCIAL',
            menu_lists: [
              ...createProjectLinks('Comercial'),
            ]
          },
          {
            id: 2,
            title: 'CONCURSOS',
            menu_lists: [
              ...createProjectLinks('Concursos'),
            ]
          },
          {
            id: 3,
            title: 'EXPERIMENTACIONES',
            menu_lists: [
              ...createProjectLinks('Experimentaciones'),
            ]
          },
        ]
      }
    }
  },
  {
    id: 3,
    title: 'Artículos',
    link: '/blog-modern',
    dropdown_menus: [
      { title: 'Modern', link: '/blog-modern' },
      { title: 'Classic Sidebar', link: '/blog-classic' },
      { title: 'Minimal List', link: '/blog-list' },
      { title: 'Post Single', link: '/blog-details/1' },
      { title: 'Post With Sidebar', link: '/blog-details-2' },
    ]
  },
  {
    id: 4,
    title: 'Contacto',
    link: '/contact-2'
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
    title: string;
    link: string;
  }[];
}[] = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      dropdown_menus: [
        { title: 'MAIN HOME', link: '/' },
        { title: 'Fashion STUDIO', link: '/home-2' },
        { title: 'CREATIVE AGENCY', link: '/home-3' },
        { title: 'Digital Agency', link: '/home-4' },
        { title: 'DESIGN STUDIO', link: '/home-5' },
        { title: 'Minimal Shop', link: '/home-6' },
        { title: 'DESIGN STUDIO', link: '/home-7' },
        { title: 'showcase carousel', link: '/home-8' },
        { title: 'INTERACTIVE LINKS', link: '/home-9' },
        { title: 'wrapper slider', link: '/home-10' },
        { title: 'showcase parallax', link: '/home-11' },
        { title: 'horizontal', link: '/home-12' },
      ]
    },
    {
      id: 2,
      title: 'Pages',
      link: '#',
      dropdown_menus: [
        { title: 'ABOUT US', link: '/about-us' },
        { title: 'FAQ Page', link: '/faq' },
        { title: 'ABOUT ME', link: '/about-me' },
        { title: 'Pricing', link: '/pricing' },
        { title: 'Team Page', link: '/team' },
        { title: 'OUR CLIENTS', link: '/brand' },
        { title: 'Team Details', link: '/team-details/1' },
        { title: 'Register', link: '/register' },
        { title: 'OUR SERVICES', link: '/service' },
        { title: 'LogIn', link: '/login' },
        { title: 'SERVICES DETAILS', link: '/service-details' },
        { title: 'ERROR PAGE', link: '/error' },
        { title: 'Shop Page', link: '/shop' },
        { title: 'Shop Details One', link: '/shop-details/1' },
        { title: 'Shop Details Two', link: '/shop-details-2' },
        { title: 'my account', link: '/account' },
        { title: 'Cart', link: '/cart' },
        { title: 'Checkout', link: '/checkout' },
        { title: 'Wishlist', link: '/wishlist' },
      ]
    },
    {
      id: 3,
      title: 'Proyectos',
      link: '/portfolio-grid-col-4',
      dropdown_menus: [
        { title: 'Ver Todos', link: '/portfolio-grid-col-4' },
        ...createProjectLinks('Residencial'),
        ...createProjectLinks('Comercial'),
        ...createProjectLinks('Concursos'),
        ...createProjectLinks('Experimentaciones'),
      ]
    },
    {
      id: 4,
      title: 'Blog',
      link: '/blog-modern',
      dropdown_menus: [
        { title: 'Modern', link: '/blog-modern' },
        { title: 'Classic Sidebar', link: '/blog-classic' },
        { title: 'Minimal List', link: '/blog-list' },
        { title: 'Post Single', link: '/blog-details/1' },
        { title: 'Post With Sidebar', link: '/blog-details-2' },
      ]
    },
    {
      id: 5,
      title: 'Contact',
      link: '/contact',
      dropdown_menus: [
        { title: 'Contact', link: '/contact' },
        { title: 'Get IN touch', link: '/contact-2' },
      ]
    }
  ]