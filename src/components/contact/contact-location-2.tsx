"use client";
import React from "react";
import Image from "next/image";

// images
import c_img_1 from "@/assets/img/inner-contact/contact/contact-1.jpeg";
import c_img_2 from "@/assets/img/inner-contact/contact/contact-2.png";
import c_img_3 from "@/assets/img/inner-contact/contact/contact-3.png";
import c_img_4 from "@/assets/img/inner-contact/contact/contact-4.jpeg";
import c_img_5 from "@/assets/img/inner-contact/contact/contact-5.png";
import c_img_6 from "@/assets/img/inner-contact/contact/contact-6.png";

const location_data = [
  {
    id: 1,
    country: "Contacto",
    img_1: c_img_3,

    email: "mateo@unamunoarq.com",
    map: undefined,
    address: undefined,
    phone: "+54 3584262112",
    note: undefined,
  },
  {
    id: 2,
    country: "Oficinas",
    img_1: c_img_1,

    map: "https://www.google.com/maps/@23.822356,90.3671947,15z?entry=ttu",
    address: "Bv. Las Heras 22, Cba., Argentina.",
    email: undefined,
    phone: undefined,
    note: undefined,
  },
  {
    id: 3,
    country: "Instagram",
    img_1: c_img_5,

    map: "https://www.instagram.com/unamuno.arq/",
    address: "@unamuno.arq",
    email: undefined,
    phone: undefined,
    note: undefined,
  },
];
const ContactLocationTwo = () => {
  return (
    <div className="cn-contact-2-info-area ">
      <div className="container container-1530">
        <div className="row">
          {location_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30" >
              <div className="cn-contact-2-content  text-center d-flex align-items-center justify-content-center flex-column" style={{ height: "50vh" }}>
                <h2 className="contact-about-title pb-30 tp_title_anim">{item.country}</h2>
                <div className="cn-contact-2-thumb d-flex justify-content-center tp_img_fade_in" data-delay={`${item.id * 0.15}`}>
                  <Image
                    src={item.img_1}
                    alt="contact-img"
                    style={{
                      height: "auto",
                      objectFit: "cover",
                      width: "100%",
                      maxHeight: "175px",
                      aspectRatio: "1/1"
                    }}
                    className="contact-img-mobile"
                  />

                </div>
                <div className="cn-contact-2-info-details" >
                  <a className="pb-15 tp_title_anim" href={item.map} target="_blank">
                    {item.address}
                  </a>
                  <a className="tp_title_anim" href={`mailto:${item.email}`}>{item.email}</a>
                  {item.phone && <a className="tp_title_anim" href={`tel:${item.phone}`}>{item.phone}</a>}
                  {item.note && <span className="tp_title_anim">{item.note}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocationTwo;
