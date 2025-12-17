"use client";
import React, { useState } from "react";

type ServiceItem = {
    title: string;
    description: string;
};

const SERVICES: ServiceItem[] = [
    {
        title: "Selección de Terreno",
        description:
            "Asesoramos en la elección del lote adecuado considerando variables urbanas, normativas, asoleamiento, viento y el potencial del entorno para el proyecto.",
    },
    {
        title: "Análisis de Factibilidad",
        description:
            "Evaluamos indicadores técnicos y económicos: normativa, superficies posibles, programa, costos estimados y cronograma preliminar.",
    },
    {
        title: "Desarrollo de Proyecto",
        description:
            "Proyecto ejecutivo completo: anteproyecto, documentación técnica, detalles constructivos y coordinación con ingenierías y consultores.",
    },
    {
        title: "Ejecución de la Obra",
        description:
            "Dirección y conducción de obra. Control de calidad, planificación, certificaciones y seguimiento integral hasta la entrega.",
    },

];

const ServicesSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="contact-services-section">
            <div className="container container-1530 pb-90">
                <div className="about-wrapper" style={{ height: "auto", padding: 10 }}>
                    {/* Right column - Image */}

                    <div className="row align-items-stretch about-row">
                        <div className="col-xl-12 col-lg-12 col-md-12 pb-70" style={{ height: "100%" }}>
                            <div className="contact-about-image about-image-wrap tp_img_fade_in" data-delay="0.2" style={{ width: "100%", height: "60vh", overflow: "hidden" }}>
                                {/* Reuse office image to keep consistency; can be changed later */}
                                <img
                                    src="/assets/img/inner-contact/contact/biblio.webp"
                                    alt="Servicios - Unamuno Arquitectura"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                />
                            </div>
                        </div>
                        {/* Left column - Title + List */}
                        <div className="col-xl-4 col-lg-4 col-md-4 mb-40 mb-md-0 about-left-col" >
                            <div>
                                <h2 className="contact-about-title pb-20 tp_title_anim">SERVICIOS</h2>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 mb-40 mb-md-0 about-left-col" >
                            <div className="contact-about-content" style={{ display: "flex", flexDirection: "column", justifyContent: "", height: "100%" }}>

                                <div className="services-list">

                                    {SERVICES.map((service, index) => {
                                        const isOpen = openIndex === index;
                                        return (
                                            <div key={service.title} className="service-item">
                                                <button
                                                    type="button"
                                                    className={`service-trigger ${isOpen ? "open" : ""}`}
                                                    onClick={() => handleToggle(index)}
                                                    aria-expanded={isOpen}
                                                    aria-controls={`service-panel-${index}`}
                                                >
                                                    <span className="service-title tp_title_anim">{service.title}</span>
                                                    <span className="service-toggle" aria-hidden>
                                                        {isOpen ? "-" : "+"}
                                                    </span>
                                                </button>
                                                <div
                                                    id={`service-panel-${index}`}
                                                    className={`service-panel ${isOpen ? "show" : ""}`}
                                                    role="region"
                                                >
                                                    <p className="service-text tp_title_anim">{service.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;


