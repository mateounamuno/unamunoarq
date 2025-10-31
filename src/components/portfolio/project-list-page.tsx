"use client";
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { projects } from "@/data/project-data";

interface ProjectListPageProps {
    className?: string;
}

// Función para generar el enlace correcto según el template
const getProjectLink = (slug: string, template: string): string => {
    switch (template) {
        case "showcase":
            return `/portfolio/showcase/${slug}`;
        default:
            return `/portfolio/showcase/${slug}`;
    }
};

const FloatingImagePortal: React.FC<{
    src: string;
    alt: string;
    visible: boolean;
    width?: number | string;
    height?: number | string;
}> = ({ src, alt, visible, width = 400, height = 300 }) => {
    // Si no hay window (SSR) no renderizamos
    if (typeof window === "undefined") return null;

    const node = document.body;

    const el = (
        <div
            className="floating-project-image"
            aria-hidden
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                pointerEvents: "none",
                width: typeof width === "number" ? `${width}px` : width,
                height: typeof height === "number" ? `${height}px` : height,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                borderRadius: 0,
                overflow: "hidden",
                backgroundColor: "transparent",
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                }}
            />
        </div>
    );

    return createPortal(el, node);
};

const ProjectListPage: React.FC<ProjectListPageProps> = ({ className = "" }) => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [active, setActive] = useState<string>('All');

    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Obtener categorías únicas de todos los proyectos
    const categories = useMemo(() => {
        const cats = Array.from(new Set(projects.map(p => p.category)));
        return ['All', ...cats];
    }, []);

    // Filtrar y ordenar proyectos
    const sortedProjects = useMemo(() => {
        const filtered = active === 'All'
            ? [...projects]
            : projects.filter(p => p.category === active);

        // Ordenar por año (más recientes primero)
        return filtered.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    }, [active]);

    const clearAllTimeouts = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
        }
        if (idleTimeoutRef.current) {
            clearTimeout(idleTimeoutRef.current);
            idleTimeoutRef.current = null;
        }
    };

    const showImage = useCallback(
        (projectSlug: string) => {
            clearAllTimeouts();

            setHoveredProject(projectSlug);

            // Si ya está visible, solo cambiamos la imagen (sin delay)
            if (isImageVisible) {
                return setIsImageVisible(true);
            }

            // Esperar 600-800ms para el efecto "cursor quieto"
            idleTimeoutRef.current = setTimeout(() => {
                setIsImageVisible(true);
            }, 700);
        },
        [isImageVisible]
    );

    const hideImage = useCallback(() => {
        // Evitamos parpadeos: pequeño delay antes de ocultar
        if (idleTimeoutRef.current) {
            clearTimeout(idleTimeoutRef.current);
            idleTimeoutRef.current = null;
        }

        if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);

        leaveTimeoutRef.current = setTimeout(() => {
            setHoveredProject(null);
            setIsImageVisible(false);
        }, 150);
    }, []);

    // limpiar al desmontar
    useEffect(() => {
        return () => {
            clearAllTimeouts();
        };
    }, []);

    const currentProject = hoveredProject
        ? projects.find((p) => p.slug === hoveredProject)
        : null;

    return (
        <div
            className={`project-list-page ${className}`}
            style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
            {/* Portal: renderizamos la imagen fuera del flujo para que position:fixed sea siempre respecto al viewport */}
            {currentProject && (
                <FloatingImagePortal
                    src={currentProject.showcaseHeroBg}
                    alt={currentProject.title}
                    visible={isImageVisible}
                    width={400}
                    height={300}
                />
            )}

            {/* Filter buttons */}
            <div className="project-list-filters pt-100">
                <div className="d-flex gap-4 justify-content-center mb-50 flex-wrap">
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

            <div className="project-list">
                {sortedProjects.map((project) => (
                    <Link
                        key={project.slug}
                        href={getProjectLink(project.slug, project.template)}
                        className={`project-row ${hoveredProject === project.slug ? "hovered" : ""
                            }`}
                        onMouseEnter={() => showImage(project.slug)}
                        onMouseMove={() => {
                            // mover el mouse dentro de la fila resetea el idle (no hide)
                            if (idleTimeoutRef.current) {
                                clearTimeout(idleTimeoutRef.current);
                                // volver a iniciar el timeout para mostrar (si aún no visible)
                                idleTimeoutRef.current = setTimeout(() => {
                                    setIsImageVisible(true);
                                }, 700);
                            }
                        }}
                        onMouseLeave={hideImage}
                    >
                        <div className="project-year">{project.year}</div>
                        <div className="project-category">{project.category}</div>
                        <div className="project-title">{project.title}</div>
                        <div className="project-location">{project.location}</div>
                    </Link>
                ))}
            </div>

            <style jsx>{`
        .project-list-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          min-height: 100vh;
          display: block; /* cambiado a block para evitar centrar vertical del contenedor */
        }

        @media (max-width: 768px) {
          .project-list-page {
            padding: 0 15px;
            padding-top: 100px;
            padding-bottom: 100px;
          }
        }

        .project-list-filters {
          margin-bottom: 30px;
        }

        .project-list {
          background: white;
          width: 100%;
        }

        :global(.project-row) {
          display: grid;
          grid-template-columns: 80px 120px 1fr auto;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #000;
          cursor: pointer;
          transition: all 0.15s ease;
          gap: 30px;
          text-decoration: none;
          color: inherit;
          box-sizing: border-box;
        }

        :global(.project-row:last-child) {
          border-bottom: none;
        }

        :global(.project-row.hovered) {
          color: #999;
        }

        :global(.project-row.hovered .project-title) {
          font-weight: normal;
        }

        :global(.project-year) {
          font-size: 16px;
          color: inherit;
          text-align: left;
        }

        :global(.project-category) {
          font-size: 16px;
          color: inherit;
          text-align: left;
          opacity: 0.7;
        }

        :global(.project-title) {
          font-size: 16px;
          font-weight: bold;
          color: inherit;
          text-align: left;
        }

        :global(.project-location) {
          font-size: 16px;
          color: inherit;
          text-align: right;
        }

        @media (max-width: 768px) {
          :global(.project-row) {
            grid-template-columns: 60px 1fr auto;
            gap: 20px;
            padding: 15px 0;
          }

          :global(.project-category) {
            display: none;
          }

          :global(.project-year),
          :global(.project-title),
          :global(.project-location) {
            font-size: 14px;
          }
        }
      `}</style>
        </div>
    );
};

export default ProjectListPage;
