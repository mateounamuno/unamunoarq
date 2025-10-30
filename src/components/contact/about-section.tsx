import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="contact-about-section pb-90">
            <div className="container container-1530">
                <div className="row align-items-start">
                    {/* Left column - Text content */}
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-40 mb-md-0">
                        <div className="contact-about-content">
                            <h2 className="contact-about-title">
                                UNAMUNO ARQUITECTURA
                            </h2>
                            <p className="contact-about-subtitle">CÓRDOBA, ARG.</p>
                            <div className="contact-about-text">
                                <p>
                                    Somos una oficina de arquitectura que gestiona su práctica a través de la articulación entre investigación, proyecto y ejecución.
                                </p>
                                <p>
                                    Comprometidos con la excelencia en el diseño y la ejecución de proyectos arquitectónicos de diferentes escalas, nuestro enfoque integral e interdisciplinar nos permite ofrecer soluciones innovadoras adaptadas a las necesidades específicas de cada cliente.
                                </p>
                                <p>
                                    Brindamos un servicio integral en todas las escalas y etapa del proyecto arquitectónico. Somos un equipo interdisciplinar que proyecta, administra y ejecuta proyectos de arquitectura desde el inicio al final.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Image */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="contact-about-image">
                            <Image
                                src="/assets/img/inner-contact/contact/info-1.jpg"
                                alt="Oficina de Arquitectura"
                                width={800}
                                height={600}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                                className="contact-about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

