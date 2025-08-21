import { useGSAP } from "@gsap/react";
import { charAnimation, titleAnimation, fadeAnimation } from "@/utils/title-animation";
import { movingImageSlider } from "@/utils/scroll-marque";

export const usePortfolioAnimations = () => {
    useGSAP(() => {
        if (typeof window === "undefined") return; // 🚨 Evita correr en el servidor

        const timer = setTimeout(() => {
            // Execute all scroll-based animations
            charAnimation();
            titleAnimation();
            fadeAnimation();

            // Check if we're on a showcase-2 page and run the specific animation
            const pathname = window.location.pathname;
            if (pathname.includes('/portfolio/')) {
                // Check if we have moving gallery elements
                const movingGallery = document.querySelector('.moving-gallery');
                if (movingGallery) {
                    movingImageSlider();
                }
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);
};
