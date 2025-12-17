import React from "react";
import Image from "next/image";

// images
import details_thumb_1 from "@/assets/img/inner-blog/blog-details/1.webp";
import details_thumb_2 from "@/assets/img/inner-blog/blog-details/2.webp";
import details_thumb_3 from "@/assets/img/inner-blog/blog-details/3.webp";
import details_thumb_4 from "@/assets/img/inner-blog/blog-details/4.webp";
import details_thumb_5 from "@/assets/img/inner-blog/blog-details/5.webp";
import details_thumb_6 from "@/assets/img/inner-blog/blog-details/6.webp";
import details_thumb_7 from "@/assets/img/inner-blog/blog-details/7.webp";
import details_thumb_8 from "@/assets/img/inner-blog/blog-details/8.webp";
import details_thumb_8a from "@/assets/img/inner-blog/blog-details/8a.webp";
import details_thumb_9 from "@/assets/img/inner-blog/blog-details/9.webp";
import details_thumb_10 from "@/assets/img/inner-blog/blog-details/10.webp";
import details_thumb_11 from "@/assets/img/inner-blog/blog-details/11.webp";
import details_thumb_12 from "@/assets/img/inner-blog/blog-details/12.webp";
import details_thumb_13 from "@/assets/img/inner-blog/blog-details/13.webp";
import details_thumb_14 from "@/assets/img/inner-blog/blog-details/14.webp";
import details_thumb_15 from "@/assets/img/inner-blog/blog-details/15.webp";
import details_thumb_16 from "@/assets/img/inner-blog/blog-details/16.webp";



export default function BlogDetailsAreaTwo() {
  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="postbox__wrapper">
              <div className="row justify-content-center">
                {/* Primera sección: Texto (2/3) + Imagen (1/3) */}
                <div className=" tp_fade_bottom col-xl-12">
                  <div className="row align-items-start">

                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_1}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_2}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4" >
                      <div className="blog-details-thumb-box tp_fade_bottom" >
                        <p className="tp_title_anim">
                          El dibujo y la pintura son la antesala de la arquitectura: en ellos se gesta la intuición primera, el gesto que aún no conoce la materia pero ya anuncia el espacio. El trazo, como línea suspendida en el vacío, abre la posibilidad de un muro; la mancha, como extensión de color, prefigura la atmósfera de un recinto.{" "}
                        </p>
                        <p className="tp_title_anim">
                          Pintar y dibujar son modos de pensar con la mano, de imaginar con la mirada, de explorar un mundo todavía abstracto que la arquitectura más tarde vuelve habitable.

                        </p>
                      </div>
                    </div>
                  </div>
                </div>



                {/* Imágenes full width */}
                <div className=" tp_fade_bottom col-xl-12">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0.1">
                        <Image
                          className=""
                          src={details_thumb_3}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0.2">
                        <Image
                          className=""
                          src={details_thumb_4}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/*Segunda sección: Imágenes (3/3) */}
                <div className=" tp_fade_bottom col-xl-12">
                  <div className="row align-items-start">

                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_5}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_6}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_7}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>


                {/*Segunda sección: Imágenes (3/3) */}
                <div className=" tp_fade_bottom col-xl-12">
                  <div className="row align-items-start">

                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_14}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_15}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0">
                        <Image
                          className="w-100"
                          src={details_thumb_13}
                          alt="details-thumb"
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Imágenes full width */}
                <div className="tp_fade_bottom col-xl-12">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0.4">
                        <Image
                          className="mb-20 w-100"
                          src={details_thumb_16}
                          alt="details-thumb-10"
                          unoptimized
                          style={{ height: "550px", objectFit: "cover", width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Imágenes  1/3 & 2/3 */}
                  <div className=" tp_fade_bottom col-xl-12 ">
                    <div className="row">
                      <div className="col-xl-4 col-lg-4">
                        <div className="blog-details-thumb-box tp_img_fade_in " data-delay="0.3">
                          <Image
                            className="w-100"
                            src={details_thumb_8}
                            alt="details-thumb"
                            style={{ height: "550px", objectFit: "contain", width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="col-xl-8  col-lg-8">
                        <div className="blog-details-thumb-box tp_img_fade_in " data-delay="0.1">
                          <Image
                            className=""
                            src={details_thumb_8a}
                            alt="details-thumb"
                            style={{ height: "550px", objectFit: "cover", width: "100%" }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Segunda sección: Texto (2/3) + Imagen (1/3) */}
                  <div className="col-xl-12">
                    <div className="row align-items-center">
                      <div className="col-xl-8 col-lg-8">
                        <div className="blog-details-thumb-box blog-details-top-text tp_fade_bottom">
                          <div className="blog-details-left-content tp_fade_bottom">
                            <p className="tp_title_anim">Dibujo para abstraerme del tiempo y de lo coyuntural, como quien se refugia en un estado más puro de la atención. Me interesa la libertad de los dibujos de los niños: desestructurados, espontáneos, con errores y, a su manera, profundamente serios. El dibujo para ellos no es un medio, sino un fin en sí mismo: lo hacen por diversión, y en esa aparente ligereza se esconde una sabiduría despojada y sincera.
                            </p>
                            <p className="tp_title_anim">
                              Quizás por eso la arquitectura nace del dibujo como la vida del juego: porque en ese trazo inocente se revela la esencia de lo humano, una búsqueda de cobijo y de belleza sin necesidad de explicación. Dibujar es esbozar el mundo antes de que exista, es acercarse a lo inasible. Y tal vez, en esa fugacidad, residen verdades de la arquitectura: la que nos recuerda que toda forma, todo espacio, no es más que un intento de atrapar un instante de libertad.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4">
                        <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0.3">
                          <Image
                            className="w-100"
                            src={details_thumb_9}
                            alt="details-thumb"
                            style={{ height: "550px", objectFit: "cover", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Imágenes full width */}
                  <div className="tp_fade_bottom col-xl-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0.4">
                          <Image
                            className="mb-20 w-100"
                            src={details_thumb_10}
                            alt="details-thumb-10"
                            unoptimized
                            style={{ height: "550px", objectFit: "cover", width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="blog-details-thumb-box tp_img_fade_in" data-delay="0.5">
                          <Image
                            className="mb-20 w-100"
                            src={details_thumb_11}
                            alt="details-thumb-11"
                            unoptimized
                            style={{ height: "550px", objectFit: "cover", width: "100%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tercera sección: Texto (2/3) + Imagen (1/3) */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
