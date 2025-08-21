import { useGSAP } from "@gsap/react";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { movingImageSlider } from "@/utils/scroll-marque";

export const useShowcase2Animations = () => {
    useGSAP(() => {
        if (typeof window === "undefined") return; // 🚨 Evita correr en el servidor

        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            movingImageSlider();
        }, 100);

        return () => clearTimeout(timer);
    }, []);
};
