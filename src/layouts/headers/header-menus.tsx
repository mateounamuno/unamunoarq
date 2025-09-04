import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";
import "@/app/portfolio-menu-fixes.css";

const imgStyle: CSSProperties = { width: "100%", height: "auto", objectFit: "cover" };

// Componente reutilizable que mantiene exactamente la misma estructura HTML y clases CSS
const PortfolioMenuColumn = ({
  title,
  items,
  isFirst = false
}: {
  title: string;
  items: { title: string; link: string }[];
  isFirst?: boolean;
}) => (
  <div className="col-xxl-3 col-xl-3">
    <div className={`tp-megamenu-list ${!isFirst ? 'tp-megamenu-list-2' : ''}`}>
      <h4 className="tp-megamenu-title">{title}</h4>
      <div className="tp-megamenu-list-wrap">
        <ul className="portfolio-menu-vertical">
          {items.map((item) => (
            <li key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const HeaderMenus = () => {
  return (
    <ul>
      {menu_data.map((menu) => (
        <li key={menu.id} className="has-dropdown">
          <Link href={menu.link}>{menu.title}</Link>
          {menu.home_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-homemenu-wrapper">
                  <div className="row gx-25 row-cols-xl-6 row-cols-lg-2 row-cols-md-2 row-cols-1">
                    {menu.home_menus.map((home_menu, i) => (
                      <div key={i} className="col homemenu">
                        <div className="homemenu-thumb-wrap mb-20">
                          <div className="homemenu-thumb fix">
                            <Link href={home_menu.link}>
                              <Image src={home_menu.img} alt="home-img" width={251} height={235}
                                style={imgStyle} />
                            </Link>
                          </div>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title">
                            <Link href={home_menu.link}>{home_menu.title}</Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : menu.pages_mega_menu ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-megamenu-wrapper">
                <div className="row gx-50">
                  <div className="col-xl-8">
                    <div className="tp-megamenu-list-box">
                      <div className="row gx-50">
                        <div className="col-xl-8">
                          <div className="tp-megamenu-list">
                            <h4 className="tp-megamenu-title">
                              {menu.pages_mega_menu.first.title}
                            </h4>
                            <div className="tp-megamenu-list-wrap">
                              <ul>
                                {menu.pages_mega_menu.first.submenus.map(
                                  (psm, i) => (
                                    <li key={i}>
                                      <Link href={psm.link}>{psm.title}</Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="tp-megamenu-list tp-megamenu-list-2">
                            <h4 className="tp-megamenu-title">
                              {menu.pages_mega_menu.second.title}
                            </h4>
                            <div className="tp-megamenu-list-wrap">
                              <ul>
                                {menu.pages_mega_menu.second.submenus.map(
                                  (psm, i) => (
                                    <li key={i}>
                                      <Link href={psm.link}>{psm.title}</Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="tp-megamenu-shop-style">
                      <div className="tp-shop-banner-left p-relative">
                        <div className="tp-shop-banner-thumb">
                          <Image
                            src="/assets/img/menu/shop-menu/banner-1.jpg"
                            alt="image"
                            width={343}
                            height={371}
                            style={imgStyle}
                          />
                        </div>
                        <div className="tp-shop-banner-content">
                          <h4 className="tp-shop-banner-title">Sale</h4>
                          <span>20% Off all Shoes</span>
                          <Link className="tp-shop-btn" href="/shop">
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.portfolio_mega_menus ? (
            <div className="tp-submenu submenu tp-mega-menu">
              <div className="tp-menu-fullwidth">
                <div className="tp-megamenu-portfolio p-relative">
                  <div className="row gx-50 justify-content-center">
                    <div className="col-xxl-9 col-xl-10">
                      <div className="tp-megamenu-list-box">
                        <div className="row gx-30">
                          {/* Primera columna - RESIDENCIAL */}
                          <PortfolioMenuColumn
                            title={menu.portfolio_mega_menus.first.title}
                            items={menu.portfolio_mega_menus.first.submenus.flatMap(submenu => submenu.menu_lists)}
                            isFirst={true}
                          />

                          {/* Columnas restantes - COMERCIAL, CONCURSOS, EXPERIMENTACIONES */}
                          {menu.portfolio_mega_menus.second.submenus.map((submenu, i) => (
                            <PortfolioMenuColumn
                              key={i}
                              title={submenu.title}
                              items={submenu.menu_lists}
                              isFirst={false}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ) : menu.dropdown_menus ? (
            <ul className="tp-submenu submenu">
              {menu.dropdown_menus.map((mm, i) => (
                <li key={i}>
                  <Link href={mm.link}>{mm.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenus;
