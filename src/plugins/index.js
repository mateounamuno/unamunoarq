// Safe imports with SSR guards
export const SplitText = typeof window !== 'undefined' ? require("./gsap-split-text").default : null;
export const ScrollTrigger = typeof window !== 'undefined' ? require("./gsap-scroll-trigger").default : null;
export const ScrollSmoother = typeof window !== 'undefined' ? require("./gsap-scroll-smoother").default : null;
export const cursorAnimation = typeof window !== 'undefined' ? require("./tp-cursor").default : () => { };
export const chroma = typeof window !== 'undefined' ? require("./chroma.min").default : null;
export const WebGL = typeof window !== 'undefined' ? require("./webgl").default : null;