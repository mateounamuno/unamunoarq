import React from "react";
import { UpArrow } from "../svg";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/project-data";
import React__ from 'react';

// Función para generar el enlace correcto según el template
const getProjectLink = (slug: string, template: string): string => {
  switch (template) {
    case "showcase-2":
      return `/portfolio/details2/${slug}`;
    case "showcase":
      return `/portfolio/details3/${slug}`;
    default:
      return `/portfolio/details2/${slug}`;
  }
};

// prop type 
type IProps = {
  style_2?: boolean;
}

export default function PortfolioGridFourColArea({ style_2 = false }: IProps) {
  const [active, setActive] = React.useState<string>('All');
  const categories = React.useMemo(() => {
    const cats = Array.from(new Set(projects.filter(p => p.showInGrid).map(p => p.category)));
    return ['All', ...cats];
  }, []);
  const items = React.useMemo(() => {
    return projects.filter(p => p.showInGrid && (active === 'All' || p.category === active));
  }, [active]);
  // render all filtered items (no load-more pagination)
  const gridItems = React.useMemo(() => {
    const desired = 12; // 3 filas x 4 columnas
    if (items.length >= desired) return items.slice(0, desired);
    if (items.length === 0) return [] as typeof items;
    const repeated: typeof items = [] as any;
    let idx = 0;
    while (repeated.length < desired) {
      repeated.push(items[idx % items.length]);
      idx += 1;
    }
    return repeated;
  }, [items]);
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? '1800' : '1530'}`}>
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex gap-2 justify-content-center mb-50 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`tp-btn-border ${active === cat ? 'active' : ''}`}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: '0px 20px',
                    fontSize: '14px',
                    minWidth: 'auto',
                    height: '60px !important',
                    lineHeight: '60px !important',
                    borderRadius: '0 !important',
                    border: '1px solid var(--tp-border-1)',
                    background: active === cat ? 'var(--tp-common-black)' : 'transparent',
                    color: active === cat ? 'var(--tp-common-white)' : 'var(--tp-common-black)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    margin: '0',
                    overflow: 'hidden',
                    clipPath: 'none',
                    WebkitClipPath: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.background = 'var(--tp-common-black)';
                      e.currentTarget.style.color = 'var(--tp-common-white)';
                      // Cambiar el color del texto en los spans
                      const text1 = e.currentTarget.querySelector('.text-1') as HTMLElement;
                      const text2 = e.currentTarget.querySelector('.text-2') as HTMLElement;
                      if (text1) text1.style.color = 'var(--tp-common-white)';
                      if (text2) text2.style.color = 'var(--tp-common-white)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--tp-common-black)';
                      // Restaurar el color del texto en los spans
                      const text1 = e.currentTarget.querySelector('.text-1') as HTMLElement;
                      const text2 = e.currentTarget.querySelector('.text-2') as HTMLElement;
                      if (text1) text1.style.color = 'var(--tp-common-black)';
                      if (text2) text2.style.color = 'var(--tp-common-black)';
                    }
                  }}
                >
                  <span
                    className="tp-btn-border-wrap"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      width: '100%',
                      height: '100%',
                      borderBottom: 'none',
                      paddingBottom: '0',
                      borderRadius: '0 !important',
                      clipPath: 'none',
                      WebkitClipPath: 'none'
                    }}
                  >
                    <span
                      className="text-1"
                      style={{
                        textAlign: 'center',
                        color: active === cat ? 'var(--tp-common-white)' : 'var(--tp-common-black)'
                      }}
                    >
                      {cat}
                    </span>
                    <span
                      className="text-2"
                      style={{
                        textAlign: 'center',
                        color: active === cat ? 'var(--tp-common-white)' : 'var(--tp-common-black)'
                      }}
                    >
                      {cat}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item) => (
            <div key={item.slug} className="col-xl-3 col-lg-6 col-md-6">
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="Ver<br>Proyecto" style={{ overflow: 'hidden', width: '100%', height: style_2 ? 504 : 330 }}>
                <Link href={getProjectLink(item.slug, item.template)} className="cursor-hide" style={{ display: 'block', width: '100%', height: '100%' }}>
                  <Image
                    src={item.gridThumbnail || item.thumbnail}
                    alt="prd-img"
                    width={style_2 ? 426 : 359}
                    height={style_2 ? 504 : 330}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: 'block' }}
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  href="/portfolio-grid-col-2"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
