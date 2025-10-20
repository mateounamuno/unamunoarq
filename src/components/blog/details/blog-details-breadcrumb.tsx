import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/inner-blog/blog-details/bg-shape/overly.png";
import avatar from "@/assets/img/inner-blog/blog-details/avatar/avatar-2.jpg";

export default function BlogDetailsBreadcrumb() {
  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: `url(/assets/img/inner-blog/blog-details/blog-details-1.jpeg)`,
          backgroundSize: 'cover',
        }}
      >
        <div className="blog-details-overlay-shape">
          <Image src={overlay} alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span className="blog-details-meta">
                  Manifiesto
                </span>
                <h4 className="blog-details-title tp-char-animation">
                  La arquitectura como un gesto de liberdad.
                </h4>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
