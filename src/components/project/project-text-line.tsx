"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import shape from "@/assets/img/home-01/project/project-shape-1-3.png";

const ProjectTextLine = () => {
  useGSAP(() => {
    gsap.set(".tp-project-textline", {
      x: "25%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".tp-project-textline ",
          start: "-1500 10%",
          end: "bottom 20%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to(".tp-project-textline ", {
        x: "-80%",
      });
  });
  return (
    <div
      className="tp-project-textline tp-project-effect mb-115 pt-115 pb-50"
      data-scrub="0.0001"
    >
      <span className="textline-1 project-textline-responsive" style={{ fontWeight: '400' }}>
        Unamuno
      </span>
      <span className="textline-2 project-textline-responsive" style={{ fontWeight: '400' }}>Proyectos</span>
      <span className="textline-1 project-textline-responsive" style={{ fontWeight: '400' }}>
        Unamuno
      </span>
      <span className="textline-2 project-textline-responsive" style={{ fontWeight: '400' }}>Proyectos</span>
      <span className="textline-1 project-textline-responsive" style={{ fontWeight: '400' }}>
        Unamuno
      </span>
      <span className="textline-2 project-textline-responsive" style={{ fontWeight: '400' }}>Proyectos</span>
      <span className="textline-1 project-textline-responsive" style={{ fontWeight: '400' }}>
        Unamuno
      </span>
      <span className="textline-2 project-textline-responsive" style={{ fontWeight: '400' }}>Proyectos</span>
      <style jsx>{`
        .project-textline-responsive {
          font-size: 80px;
        }

        @media (max-width: 991px) {
          .project-textline-responsive {
            font-size: 55px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectTextLine;
