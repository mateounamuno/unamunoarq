import React from "react";
import { UpArrow } from "../svg";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/project-data";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import { useGSAP } from "@gsap/react";

// Función para generar el enlace correcto según el template
const getProjectLink = (slug: string, template: string): string => {
  switch (template) {
    case "showcase":
      return `/portfolio/showcase/${slug}`;
    default:
      return `/portfolio/showcase/${slug}`;
  }
};

// prop type 
type IProps = {
  style_2?: boolean;
}

export default function PortfolioGridFourColArea({ style_2 = false }: IProps) {
  const [active, setActive] = React.useState<string>('All');
  const [visibleCount, setVisibleCount] = React.useState<number>(12);

  // Configurar animaciones de fade para los elementos del portfolio y sticky image
  useGSAP(() => {
    if (typeof window === 'undefined') return;

    const animatePortfolioItems = () => {
      const fadeElements = document.querySelectorAll('.tp-project-5-2-area .tp_fade_anim:not(.project-title)');

      fadeElements.forEach((element: any) => {
        // Configurar estado inicial
        gsap.set(element, {
          y: 50,
          opacity: 0
        });

        // Crear animación con ScrollTrigger
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        });
      });
    };

    const setupStickyImage = () => {
      // Limpiar ScrollTriggers existentes para la imagen sticky
      ScrollTrigger.getAll().forEach((trigger: any) => {
        if (trigger.trigger === document.querySelector('.tp-project-full-img-wrap')) {
          trigger.kill();
        }
      });

      // Configurar la animación sticky para la imagen completa
      const stickyImageWrap = document.querySelector('.tp-project-full-img-wrap');
      const stickyImage = document.querySelector('.tp-project-full-img');

      if (stickyImageWrap && stickyImage) {
        gsap.timeline({
          scrollTrigger: {
            trigger: stickyImageWrap,
            start: "top 65",
            end: "bottom 0%",
            pin: stickyImage,
            pinSpacing: false,
            refreshPriority: -1, // Prioridad baja para que se actualice después de otros elementos
          }
        });
      }
    };

    // Ejecutar animaciones después de un pequeño delay para asegurar que los elementos estén renderizados
    const timer = setTimeout(() => {
      animatePortfolioItems();
      setupStickyImage();
    }, 150);

    return () => clearTimeout(timer);
  }, [active, visibleCount]); // Re-ejecutar cuando cambien los filtros o la cantidad visible

  const categories = React.useMemo(() => {
    const cats = Array.from(new Set(projects.filter(p => p.showInGrid).map(p => p.category)));
    return ['All', ...cats];
  }, []);

  const items = React.useMemo(() => {
    const filtered = projects.filter(p => p.showInGrid && (active === 'All' || p.category === active));
    // Ordenar alfabéticamente por título
    return filtered.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));
  }, [active]);

  // Reset visible count when category changes
  React.useEffect(() => {
    setVisibleCount(12);
  }, [active]);

  // render paginated items
  const gridItems = React.useMemo(() => {
    if (items.length === 0) return [] as typeof items;

    // Mostrar solo los primeros 'visibleCount' proyectos únicos
    return items.slice(0, visibleCount);
  }, [items, visibleCount]);

  const hasMoreProjects = visibleCount < items.length;

  const loadMoreProjects = () => {
    setVisibleCount(prev => Math.min(prev + 12, items.length));
  };
  return (
    <div className="tp-project-5-2-area tp-project-5-2-p pt-100 pb-50">
      <div className="container-1480">
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex gap-4 justify-content-center mb-50 flex-wrap p-60">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px 0',
                    fontSize: '16px',
                    fontWeight: active === cat ? 'bold' : 'normal',
                    color: active === cat ? 'var(--tp-common-black)' : 'var(--tp-common-black)',
                    textDecoration: active === cat ? 'underline' : 'none',
                    textUnderlineOffset: '4px',
                    textDecorationThickness: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.opacity = '0.7';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {gridItems.map((item) => (
            <div key={item.slug} className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb mb-30"
                onMouseEnter={(e) => {
                  const title = e.currentTarget.querySelector('.tp-project-title-hover') as HTMLElement;
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  const gradientOverlay = e.currentTarget.querySelector('.tp-project-gradient-overlay') as HTMLElement;
                  if (title) {
                    title.style.opacity = '1';
                    title.style.visibility = 'visible';
                  }
                  if (img) {
                    img.style.transform = 'scale(1.1)';
                  }
                  if (gradientOverlay) {
                    gradientOverlay.style.opacity = '1';
                  }
                }}
                onMouseLeave={(e) => {
                  const title = e.currentTarget.querySelector('.tp-project-title-hover') as HTMLElement;
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  const gradientOverlay = e.currentTarget.querySelector('.tp-project-gradient-overlay') as HTMLElement;
                  if (title) {
                    title.style.opacity = '0';
                    title.style.visibility = 'hidden';
                  }
                  if (img) {
                    img.style.transform = 'scale(1)';
                  }
                  if (gradientOverlay) {
                    gradientOverlay.style.opacity = '0';
                  }
                }}
              >
                <div
                  className="p-relative tp-project-img-container"
                  style={{
                    overflow: 'hidden',
                    width: '100%',
                    height: style_2 ? 504 : 330,
                    position: 'relative'
                  }}
                >
                  <Link href={getProjectLink(item.slug, item.template)} className="cursor-hide" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <Image
                      src={item.homeGrid || item.showcaseHeroBg}
                      alt="prd-img"
                      width={style_2 ? 426 : 359}
                      height={style_2 ? 504 : 330}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                  </Link>
                  {/* Overlay con degradado en los bordes */}
                  <div
                    className="tp-project-gradient-overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.1) 0%, transparent 8%, transparent 92%, rgba(255, 255, 255, 0.1) 100%),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 8%, transparent 92%, rgba(255, 255, 255, 0.1) 100%)
                      `,
                      pointerEvents: 'none',
                      zIndex: 1,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </div>
                {/* Título que aparece debajo de la imagen al hacer hover */}
                <p
                  className="tp-project-title-hover"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    color: 'var(--tp-common-black)',
                    marginTop: '12px',
                    marginBottom: 0,
                    textAlign: 'left',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease'
                  }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>


        {hasMoreProjects && (
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-projct-5-2-btn-box mt-25 mb-50 d-flex justify-content-center">
                <button
                  onClick={loadMoreProjects}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '12px 0',
                    fontSize: '16px',
                    fontWeight: 'normal',
                    color: 'var(--tp-common-black)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    textDecorationThickness: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  Más proyectos
                </button>
              </div>
            </div>
          </div>
        )}



      </div>
    </div>
  );
}
