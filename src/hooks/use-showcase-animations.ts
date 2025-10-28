import { useGSAP } from "@gsap/react";
import { charAnimation, titleAnimation, fadeAnimation, imageFadeInAnimation } from "@/utils/title-animation";

export const useShowcaseAnimations = () => {
    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            fadeAnimation();
            imageFadeInAnimation(); // Nueva animación para imágenes
        }, 100);
        return () => clearTimeout(timer);
    }, []);
};

