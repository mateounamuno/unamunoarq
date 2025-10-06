"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { blog_data } from "@/data/blog-data";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import FooterTwo from "@/layouts/footers/footer-two";
import BlogDetailsBreadcrumb from "@/components/blog/details/blog-details-breadcrumb";
import BlogDetailsAreaTwo from "@/components/blog/details/blog-details-area-2";
// animation
import { charAnimation } from "@/utils/title-animation";

export default function BlogDetailsPage({ params }: { params: { id: string } }) {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  const blog = [...blog_data].find((blog) => blog.id === Number(params.id));

  if (!blog) {
    return (
      <div className="text-center pt-100">
        Blog not found with id: {params.id}
      </div>
    );
  }

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog details hero */}
            <BlogDetailsBreadcrumb />
            {/* blog details hero */}

            {/* blog details area */}
            <BlogDetailsAreaTwo />
            {/* blog details area */}

          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
}
