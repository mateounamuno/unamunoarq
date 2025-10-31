import { useEffect, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { charAnimation, imageFadeInAnimation, titleAnimation, fadeAnimation } from "@/utils/title-animation";

export const useContactAnimations = () => {
    // Establecer estado inicial de forma síncrona antes del pintado para evitar flash
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            // Establecer estado inicial de todos los elementos animados antes de que se vean
            gsap.set(".tp_title_anim", {
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50"
            });

            // Establecer estado inicial de tp_fade_bottom
            gsap.set(".tp_fade_bottom", {
                y: 100,
                opacity: 0
            });

            // Establecer estado inicial de imágenes
            gsap.set(".tp_img_fade_in", {
                opacity: 0,
                y: 50
            });
        }
    }, []);

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            titleAnimation();
            fadeAnimation();
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Esperar a que los elementos estén en el DOM antes de aplicar la animación
        const timer = setTimeout(() => {
            // Verificar que los elementos existan antes de animar
            if (typeof window !== 'undefined') {
                const elements = document.querySelectorAll('.tp_img_fade_in');
                if (elements.length > 0) {
                    imageFadeInAnimation();
                }
            }
        }, 600);

        return () => clearTimeout(timer);
    }, []);
};

