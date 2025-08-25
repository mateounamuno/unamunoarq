import { useGSAP } from "@gsap/react";
import { charAnimation, titleAnimation, fadeAnimation } from "@/utils/title-animation";

export const useShowcaseAnimations = () => {
    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            fadeAnimation();
        }, 100);
        return () => clearTimeout(timer);
    }, []);
};

