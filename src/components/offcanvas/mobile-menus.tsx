import React from "react";
import Image from "next/image";
import Link from "next/link";
import menu_data from "@/data/menu-data";
import shop_banner from '@/assets/img/menu/shop-menu/banner-1.jpg';
import port_img from '@/assets/img/menu/portfolio-menu/portfolio.png';

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>([]);

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  //toggleCategory
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          {menu_data.map((menu) => (
            <li
              key={menu.id}
              className={`has-dropdown ${menu.home_menus || menu.portfolio_mega_menus || menu.pages_mega_menu || menu.dropdown_menus
                ? "has-dropdown"
                : ""
                }`}
            >
              {(menu.home_menus || menu.portfolio_mega_menus || menu.pages_mega_menu || menu.dropdown_menus) ? (
                <a className="pointer" onClick={() => openMobileMenu(menu.title)}>
                  {menu.title}
                  <button className="dropdown-toggle-btn">
                    <i className={`fa-light ${navTitle === menu.title ? "fa-minus" : "fa-plus"}`}></i>
                  </button>
                </a>
              ) : (
                <Link href={menu.link} className="nav-link">
                  {menu.title}
                </Link>
              )}
              {menu.home_menus ? (
                <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                  {menu.home_menus.map((hm, i) => (
                    <li key={i}>
                      <Link href={hm.link}>{hm.title}</Link>
                    </li>
                  ))}
                </ul>
              ) : menu.pages_mega_menu ? (
                <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                  <li>
                    <h4 className="tp-megamenu-title">
                      {menu.pages_mega_menu.first.title}
                    </h4>
                    <ul>
                      {menu.pages_mega_menu.first.submenus.map((sm, i) => (
                        <li key={i}>
                          <Link href={sm.link}>{sm.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <h4 className="tp-megamenu-title">
                      {menu.pages_mega_menu.second.title}
                    </h4>
                    <ul>
                      {menu.pages_mega_menu.second.submenus.map((sm, i) => (
                        <li key={i}>
                          <Link href={sm.link}>{sm.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ) : menu.portfolio_mega_menus ? (
                <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                  <li style={{ marginTop: '15px' }}>
                    <div className="category-header" onClick={() => toggleCategory(menu.portfolio_mega_menus?.first.title || '')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '10px 0' }}>
                      <h4 className="tp-megamenu-title" style={{ margin: 0 }}>
                        {menu.portfolio_mega_menus?.first.title}
                      </h4>
                      <button className="dropdown-toggle-btn" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                        <i className={`fa-light ${expandedCategories.includes(menu.portfolio_mega_menus?.first.title || '') ? "fa-minus" : "fa-plus"}`}></i>
                      </button>
                    </div>
                    <ul style={{ display: expandedCategories.includes(menu.portfolio_mega_menus?.first.title || '') ? "block" : "none" }}>
                      {menu.portfolio_mega_menus?.first.submenus.map((portSm, i) => (
                        portSm.menu_lists.map((psm) => (
                          <li key={psm.title}>
                            <Link href={psm.link}>
                              {psm.title}
                            </Link>
                          </li>
                        ))
                      ))}
                    </ul>
                  </li>
                  {menu.portfolio_mega_menus.second.submenus.map((portSm2, i) => (
                    <li key={i} style={{ marginTop: '15px' }}>
                      <div className="category-header" onClick={() => toggleCategory(portSm2.title)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '10px 0' }}>
                        <h4 className="tp-megamenu-title" style={{ margin: 0 }}>
                          {portSm2.title}
                        </h4>
                        <button className="dropdown-toggle-btn" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                          <i className={`fa-light ${expandedCategories.includes(portSm2.title) ? "fa-minus" : "fa-plus"}`}></i>
                        </button>
                      </div>
                      <ul style={{ display: expandedCategories.includes(portSm2.title) ? "block" : "none" }}>
                        {portSm2.menu_lists.map((psm) => (
                          <li key={psm.title}>
                            <Link href={psm.link}>
                              {psm.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              ) : menu.dropdown_menus ? (
                <ul className="tp-submenu submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
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
      </nav>
    </>
  );
}
