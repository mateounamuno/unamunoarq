"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import FooterOne from "@/layouts/footers/footer-one";
// animation
import { useContactAnimations } from "@/hooks/use-contact-animations";
import ContactLocationTwo from "@/components/contact/contact-location-2";
import AboutSection from "@/components/contact/about-section";
import ServicesSection from "@/components/contact/services-section";

const ContactTwoPage = () => {
  useScrollSmooth();
  useContactAnimations();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>
            {/* hero area start */}
            <div className="tm-hero-area tm-hero-ptb p-relative container">

              {/* about section */}
              <AboutSection />
              {/* about section */}

              {/* services section */}
              <ServicesSection />
              {/* services section */}

              {/* contact location */}
              <ContactLocationTwo />
              {/* contact location */}

            </div>
            {/* hero area end */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>

    </Wrapper>
  );
};

export default ContactTwoPage;
