import React from "react";
import Image from "next/image";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsComments from "./blog-details-comments";
import BlogReplyForm from "@/components/form/blog-reply-form";

// images
import details_thumb_1 from "@/assets/img/inner-blog/blog-details/blog-details-2.JPG";
import details_thumb_2 from "@/assets/img/inner-blog/blog-details/blog-details-6.JPG";
import details_thumb_3 from "@/assets/img/inner-blog/blog-details/blog-details-4.jpg";
import details_thumb_4 from "@/assets/img/inner-blog/blog-details/blog-details-5.png";
import details_thumb_5 from "@/assets/img/inner-blog/blog-details/blog-details-3.png";
import details_thumb_6 from "@/assets/img/inner-blog/blog-details/blog-details-7.jpg";

export default function BlogDetailsAreaTwo() {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="postbox__wrapper">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="blog-details-top-text tp_fade_bottom">
                    <p>
                      El dibujo y la pintura son la antesala de la arquitectura: en ellos se gesta la intuición primera, el gesto que aún no conoce la materia pero ya anuncia el espacio. El trazo, como línea suspendida en el vacío, abre la posibilidad de un muro; la mancha, como extensión de color, prefigura la atmósfera de un recinto.{" "}
                    </p>
                  </div>
                  <div className="blog-details-left-content tp_fade_bottom">
                    <p>
                      Pintar y dibujar son modos de pensar con la mano, de imaginar con la mirada, de explorar un mundo todavía abstracto que la arquitectura más tarde vuelve habitable.

                    </p>

                  </div>
                </div>
                <div className="blog-details-thumb-box tp_fade_bottom">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog-details-thumb">
                        <Image
                          className=""
                          src={details_thumb_1}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="blog-details-thumb">
                        <Image
                          className="mb-20"
                          src={details_thumb_2}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="blog-details-thumb">
                        <Image
                          className="w-100"
                          src={details_thumb_3}
                          alt="details-thumb"
                          style={{ height: "600px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-8">
                  <div className="blog-details-top-text tp_fade_bottom">
                    <div className="blog-details-left-content tp_fade_bottom">
                      <p className="pb-40">Dibujo para abstraerme del tiempo y de lo coyuntural, como quien se refugia en un estado más puro de la atención. Me interesa la libertad de los dibujos de los niños: desestructurados, espontáneos, con errores y, a su manera, profundamente serios. El dibujo para ellos no es un medio, sino un fin en sí mismo: lo hacen por diversión, y en esa aparente ligereza se esconde una sabiduría despojada y sincera.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-details-thumb-box tp_fade_bottom">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="mb-20"
                        src={details_thumb_4}
                        alt="details-thumb"
                        style={{ height: "550px", objectFit: "cover", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-details-thumb">
                      <Image
                        className="mb-20"
                        src={details_thumb_5}
                        alt="details-thumb"
                        style={{ height: "550px", objectFit: "cover", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="blog-details-left-content tp_fade_bottom">
                    <p>
                      Quizás por eso la arquitectura nace del dibujo como la vida del juego: porque en ese trazo inocente se revela la esencia de lo humano, una búsqueda de cobijo y de belleza sin necesidad de explicación. Dibujar es esbozar el mundo antes de que exista, es acercarse a lo inasible. Y tal vez, en esa fugacidad, residen verdades de la arquitectura: la que nos recuerda que
                    </p>
                  </div>
                  <div className="blog-details-blockquote tp_fade_bottom">
                    <blockquote>
                      <span className="quote-icon">
                        <QuoteThree />
                      </span>
                      <p>
                        {"Toda"} forma, todo espacio, no es más que un intento de atrapar un instante de libertad.

                      </p>
                      <span className="blockquote-info">Unamuno.</span>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="blog-details-thumb-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="blog-details-thumb">
                      <Image
                        className="w-100"
                        src={details_thumb_6}
                        alt="details-thumb"
                        style={{ height: "600px", objectFit: "cover", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
