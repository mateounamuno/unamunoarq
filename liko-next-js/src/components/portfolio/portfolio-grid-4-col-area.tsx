import React from "react";
import { UpArrow } from "../svg";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/project-data";
import React__ from 'react';

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
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className={`container container-${style_2 ? '1800' : '1530'}`}>
        <div className="row">
          <div className="col-xl-12">
            <div className="d-flex gap-3 justify-content-center mb-40 flex-wrap">
              {categories.map(cat => (
                <button key={cat} className={`tp-btn-border ${active === cat ? 'active' : ''}`} onClick={() => setActive(cat)}>
                  <span className="tp-btn-border-wrap">
                    <span className="text-1">{cat}</span>
                    <span className="text-2">{cat}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item) => (
            <div key={item.slug} className="col-xl-3 col-lg-6 col-md-6">
              <div className="tp-project-5-2-thumb mb-30 p-relative not-hide-cursor" data-cursor="Ver<br>Proyecto">
                <Link href={`/portfolio/${item.slug}`} className="tp_img_reveal cursor-hide">
                  <div className="tp_img_reveal">
                    <Image
                      src={item.gridThumbnail || item.thumbnail}
                      alt="prd-img"
                      width={style_2 ? 426 : 359}
                      height={style_2 ? 504 : 424}
                      style={{ height: "100%" }}
                    />
                  </div>
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
