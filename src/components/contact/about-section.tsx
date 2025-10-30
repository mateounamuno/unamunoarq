import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="contact-about-section">
            <div className="container container-1530 pb-70">
                <div className="about-wrapper" style={{ height: "auto", padding: 10 }}>
                    <div className="row align-items-stretch about-row">
                        {/* Left column - Text content */}
                        <div className="col-xl-6 col-lg-6 col-md-12 mb-40 mb-md-0 about-left-col" style={{ height: "80vh" }}>
                            <div
                                className="contact-about-content"
                                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
                            >
                                <div>
                                    <h2 className="contact-about-title">UNAMUNO ARQUITECTURA</h2>
                                    <p className="contact-about-subtitle" style={{ marginTop: 8 }}>CÓRDOBA, ARG.</p>
                                </div>
                                <div className="contact-about-text" style={{ marginTop: 24 }}>
                                    Proyectamos espacios que nacen del diálogo entre el lugar, la materia y las personas que los habitan. Creemos en una arquitectura genuina: honesta con su contexto, responsable con el medio en el que se inserta y atenta a las huellas que deja en el tiempo. Trabajamos en distintas escalas, desde el detalle de un objeto hasta el tejido urbano, entendiendo que cada proyecto es parte de un ecosistema más amplio. Algunos de ellos asumen un carácter más experimental, explorando lenguajes y procesos que nos acercan al terreno de lo inesperado, donde la intuición y la investigación se entrelazan. Cada obra es una síntesis entre lo visible y lo invisible. Intentamos utilizar materiales honestos, texturas que cuentan historias y formas que respetan la memoria de cada lugar. Nuestro objetivo es crear espacios que no solo se vean, sino que se sientan; que acompañen la vida y evolucionen con ella. Arquitectura funcional, pero profundamente humana, capaz de generar arraigo, despertar emociones y dialogar con el tiempo y el entorno que la sostiene.
                                </div>
                            </div>
                        </div>

                        {/* Right column - Image */}
                        <div className="col-xl-6 col-lg-6 col-md-12 about-image-col" style={{ height: "100%" }}>
                            <div className="contact-about-image about-image-wrap" style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
                                <Image
                                    src="/assets/img/inner-contact/contact/oficina.jpg"
                                    alt="Oficina de Arquitectura"
                                    width={1200}
                                    height={900}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                    className="contact-about-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

