"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/logo/logo-white.png';
import { footerOneAnimation, footerTwoAnimation } from "@/utils/footer-anim";
import menu_data from "@/data/menu-data";

const footer_links = [
  { link: "/", title: "Home" },
  { link: "/portfolio-grid-col-4", title: "Proyectos" },
  { link: "/blog-details/1", title: "Apuntes" },
  { link: "/contact-2", title: "Contacto" },
];

export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  }, [])
  return (
    <footer>
      <div className="tp-footer-area black-bg ">
        {/* footer area start */}
        {/* 
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-start">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <a href={item.link}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Escríbenos!
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <a href="mailto:mateo@unamunoarq.com">
                              mateo@unamunoarq.com
                            </a>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <a
                              href="https://www.google.com/maps/@54.581385,-101.7562167,7.5z?entry=ttu"
                              target="_blank"
                            >
                              Rondeau 614 <br /> Córdoba, AR.
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Nuestras redes
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <a href="#">Instagram</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="tp-copyright-logo text-center text-md-start" style={{ display: 'flex', alignItems: 'center', gap: '20px', minHeight: '35px' }}>
                  <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src={logo}
                      alt="logo"
                      width={200}
                      height={65}
                      style={{
                        width: 'auto',
                        height: '50px',
                        maxWidth: 'none'
                      }}
                    />
                  </Link>
                  <a
                    className="mb-10"
                    href="https://www.instagram.com/unamuno.arq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      height: '35px',
                      lineHeight: '35px',
                      padding: '0px 35px',
                      borderRadius: '40px',
                      fontSize: '14px',
                      fontWeight: 500,
                      letterSpacing: '-0.14px',
                      display: 'inline-block',
                      color: 'var(--tp-common-white)',
                      border: '1.5px solid rgba(255, 255, 255, 0.20)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--tp-common-white)';
                      e.currentTarget.style.borderColor = 'var(--tp-common-white)';
                      e.currentTarget.style.color = 'var(--tp-common-black)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.20)';
                      e.currentTarget.style.color = 'var(--tp-common-white)';
                    }}
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minHeight: '35px' }}>
                  <p style={{
                    marginBottom: 0,
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '-0.14px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.60)'
                  }}>
                    Copyright © {new Date().getFullYear()} <a
                      href="https://authenticwebstudio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'text-decoration 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >Authentic</a>. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer >
  );
}
