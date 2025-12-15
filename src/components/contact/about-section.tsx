import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="contact-about-section">
            <div className="container container-1530 pb-70">
                <div className="about-wrapper" style={{ height: "auto", padding: 10 }}>
                    <div className="row align-items-stretch about-row mb-20">
                        {/* Left column - Text content */}
                        <div className="col-xl-6 col-lg-6 col-md-12 mb-40 mb-md-0 about-left-col" style={{ height: "80vh" }}>
                            <div
                                className="contact-about-content"
                                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
                            >
                                <div>
                                    <h2 className="contact-about-title tp_title_anim">UNAMUNO ARQUITECTURA</h2>
                                    <p className="contact-about-subtitle tp_title_anim" style={{ marginTop: 8 }}>CÓRDOBA, ARG.</p>
                                </div>
                                <div className="contact-about-text tp_title_anim" style={{ marginTop: 24 }}>
                                    Proyectamos espacios que nacen del diálogo entre el lugar, la materia y las personas que los habitan. Creemos en una arquitectura genuina: honesta con su contexto, responsable con el medio en el que se inserta y atenta a las huellas que deja en el tiempo. Trabajamos en distintas escalas, desde el detalle de un objeto hasta el tejido urbano, entendiendo que cada proyecto es parte de un ecosistema más amplio. Algunos de ellos asumen un carácter más experimental, explorando lenguajes y procesos que nos acercan al terreno de lo inesperado, donde la intuición y la investigación se entrelazan. Cada obra es una síntesis entre lo visible y lo invisible. Intentamos utilizar materiales honestos, texturas que cuentan historias y formas que respetan la memoria de cada lugar. Nuestro objetivo es crear espacios que no solo se vean, sino que se sientan; que acompañen la vida y evolucionen con ella. Arquitectura funcional, pero profundamente humana, capaz de generar arraigo, despertar emociones y dialogar con el tiempo y el entorno que la sostiene.
                                </div>
                            </div>
                        </div>

                        {/* Right column - Image */}
                        <div className="col-xl-6 col-lg-6 col-md-12 about-image-col" style={{ height: "100%", padding: "0" }}>
                            <div className="contact-about-image about-image-wrap tp_img_fade_in" data-delay="0" style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
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
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-stretch about-row">
                        {/* Right column - Image */}
                        <div className="col-xl-6 col-lg-6 col-md-12 bio-img-col" style={{ height: "100%" }}>
                            <div className="  about-image-wrap tp_img_fade_in" data-delay="0" style={{ width: "100%", height: "80vh", overflow: "hidden" }}>
                                <Image
                                    src="/assets/img/inner-contact/contact/mateo.jpg"
                                    alt="Oficina de Arquitectura"
                                    width={1200}
                                    height={900}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                    className=""
                                />
                            </div>
                        </div>
                        {/* Left column - Text content */}
                        <div className="col-xl-6 col-lg-6 col-md-12 mb-40 mb-md-0 bio-text-col" >
                            <div
                                className="contact-about-content"
                                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                            >
                                <div>
                                    <h2 className="contact-about-title tp_title_anim">UNAMUNO BIO</h2>
                                    <p className="contact-about-subtitle tp_title_anim" style={{ marginTop: 8 }}>CÓRDOBA, ARG.</p>
                                </div>
                                <div className="contact-about-text tp_title_anim" style={{ marginTop: 24 }}>
                                    Arquitecto egresado de la Universidad Nacional de Córdoba (2015), con formación complementaria en la Universidade Federal do Paraná (Brasil).Completó el curso internacional de posgrado "Livable Future Cities" dictado por la ETH Zürich (Plataforma Virtual EDX), orientado al diseño sostenible y la planificación urbana contemporánea. Actualmente realiza la tesis de la Maestría en Diseño Arquitectónico y Urbano (UNC).
                                    En el año 2016 se muda a Paris para realizar una práctica profesional en el estudio Farid Azib Architecte, donde participa también, como parte del equipo con el estudio Atelier O-S Architectes en el desarrollo de 2 concursos.<br />
                                    Actualmente es fundador de Unamuno Arquitectura, estudio desde el cual lidera y coordina proyectos residenciales, comerciales y culturales, articulando la práctica proyectual con prácticas artísticas, investigación y docencia.
                                    Se desempeña como profesor asistente e investigador en la cátedra de Arquitectura 2A de la Universidad Nacional de Córdoba, y como productor y curador del espacio cultural Alterable en Córdoba, Argentina, dedicado a la experimentación entre arte, arquitectura y ciudad.<br />
                                    Su trabajo fue reconocido por ArchDaily como una de las "Best New Practices 2024", distinción otorgada a diez estudios emergentes de arquitectura a nivel internacional.
                                    Ha participado en numerosos workshops, concursos y conferencias nacionales e internacionales vinculados al pensamiento proyectual, las estrategias urbanas y las nuevas metodologías del habitar contemporáneo, consolidando una mirada crítica, cultural y propositiva sobre la práctica arquitectónica.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;

