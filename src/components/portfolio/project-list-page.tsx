"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { projects } from "@/data/project-data";
import Image from "next/image";

interface ProjectListPageProps {
    className?: string;
}

const ProjectListPage: React.FC<ProjectListPageProps> = ({ className = "" }) => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Ordenar proyectos por año (más recientes primero)
    const sortedProjects = [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));

    const showImage = useCallback((projectSlug: string) => {
        // Limpiar timeouts anteriores
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
        }
        if (idleTimeoutRef.current) {
            clearTimeout(idleTimeoutRef.current);
        }

        // Si ya hay una imagen visible y cambiamos a otro proyecto, hacer transición suave
        if (hoveredProject && hoveredProject !== projectSlug && isImageVisible) {
            // Cambiar la imagen inmediatamente pero mantener la visibilidad
            setHoveredProject(projectSlug);
            return;
        }

        setHoveredProject(projectSlug);
        setIsImageVisible(false);

        // Esperar 800ms de cursor quieto antes de mostrar la imagen
        idleTimeoutRef.current = setTimeout(() => {
            setIsImageVisible(true);
        }, 800);
    }, [hoveredProject, isImageVisible]);

    const hideImage = useCallback(() => {
        // Limpiar todos los timeouts
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        if (idleTimeoutRef.current) {
            clearTimeout(idleTimeoutRef.current);
        }

        // Delay antes de ocultar para evitar parpadeos
        leaveTimeoutRef.current = setTimeout(() => {
            setHoveredProject(null);
            setIsImageVisible(false);
        }, 200);
    }, []);

    const handleMouseEnter = (projectSlug: string) => {
        showImage(projectSlug);
    };

    const handleMouseLeave = () => {
        hideImage();
    };

    // Limpiar timeouts al desmontar
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
            if (leaveTimeoutRef.current) {
                clearTimeout(leaveTimeoutRef.current);
            }
            if (idleTimeoutRef.current) {
                clearTimeout(idleTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className={`project-list-page ${className} py-130`}>
            {/* Imagen flotante que aparece después de cursor quieto */}
            {hoveredProject && (
                <div
                    className={`floating-project-image ${isImageVisible ? 'visible' : 'hidden'}`}
                    style={{
                        position: 'fixed',
                        top: '50vh',
                        left: '50vw',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                        pointerEvents: 'none',
                        width: '400px',
                        height: '300px',
                        opacity: isImageVisible ? 1 : 0,
                        transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                >
                    <Image
                        src={projects.find(p => p.slug === hoveredProject)?.showcaseHeroBg || ''}
                        alt={projects.find(p => p.slug === hoveredProject)?.title || ''}
                        fill
                        className="object-cover rounded-lg"
                        style={{
                            borderRadius: '8px',
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    />
                </div>
            )}

            <div className="project-list">
                {sortedProjects.map((project, index) => (
                    <div
                        key={project.slug}
                        className={`project-row ${hoveredProject === project.slug ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(project.slug)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="project-year">{project.year}</div>
                        <div className="project-title">{project.title}</div>
                        <div className="project-location">{project.location}</div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .project-list-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-list {
          background: white;
          width: 100%;
        }

        .project-row {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #000;
          cursor: pointer;
          transition: all 0.3s ease;
          gap: 20px;
        }

        .project-row:last-child {
          border-bottom: none;
        }

        .project-row.hovered {
          color: #999;
        }

        .project-row.hovered .project-title {
          font-weight: normal;
        }

        .project-year {
          font-size: 16px;
          color: inherit;
          text-align: left;
        }

        .project-title {
          font-size: 16px;
          font-weight: bold;
          color: inherit;
          text-align: left;
        }

        .project-location {
          font-size: 16px;
          color: inherit;
          text-align: right;
        }

        .floating-project-image {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .floating-project-image.visible {
          opacity: 1;
        }

        .floating-project-image.hidden {
          opacity: 0;
        }

        @media (max-width: 768px) {
          .project-list-page {
            padding: 0 15px;
          }

          .project-row {
            grid-template-columns: 60px 1fr auto;
            gap: 15px;
            padding: 15px 0;
          }

          .project-year,
          .project-title,
          .project-location {
            font-size: 14px;
          }

          .floating-project-image {
            width: 300px !important;
            height: 200px !important;
          }
        }
      `}</style>
        </div>
    );
};

export default ProjectListPage;
