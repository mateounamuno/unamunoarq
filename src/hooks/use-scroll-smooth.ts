"use client";
import { gsap } from "gsap";
import { useState } from "react";
import { ScrollSmoother } from '@/plugins';
import { useGSAP } from "@gsap/react";

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);
  useGSAP(() => {
    // Ensure we're on the client side
    if (typeof window === 'undefined') return;

    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth && ScrollSmoother) {
      gsap.config({
        nullTargetWarn: false,
      });

      // Check if ScrollSmoother already exists and kill it first
      if (ScrollSmoother.get()) {
        ScrollSmoother.get()?.kill();
      }

      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      // Cleanup function
      return () => {
        if (smoother) {
          smoother.kill();
        }
      };
    }
  }, [isScrollSmooth]);
}
