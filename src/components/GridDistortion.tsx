'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

type GridDistortionProps = {
    src: string;
    rows?: number;
    cols?: number;
    durationMs?: number;
    className?: string;
    opacity?: number;
    trigger?: 'mount' | 'hover';
    resetOnLeave?: boolean;
};

const GridDistortion: React.FC<GridDistortionProps> = ({
    src,
    rows = 18,
    cols = 28,
    durationMs = 1200,
    className = '',
    opacity = 0.6,
    trigger = 'mount',
    resetOnLeave = true,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const tiles = useMemo(() => {
        const items: Array<{ key: string; row: number; col: number }> = [];
        for (let r = 0; r < rows; r += 1) {
            for (let c = 0; c < cols; c += 1) {
                items.push({ key: `${r}-${c}`, row: r, col: c });
            }
        }
        return items;
    }, [rows, cols]);

    useGSAP(() => {
        if (!containerRef.current || !isLoaded) return;
        const el = containerRef.current;
        const children = Array.from(el.querySelectorAll('.gd__tile'));

        const setState = () => {
            gsap.set(children, {
                opacity: trigger === 'mount' ? 0 : 0.6, // keep faint grid before hover
                x: () => gsap.utils.random(-30, 30),
                y: () => gsap.utils.random(-20, 20),
                rotate: () => gsap.utils.random(-8, 8),
                scale: () => gsap.utils.random(0.9, 1.05),
                willChange: 'transform, opacity',
            });
        };

        const run = () => {
            gsap.to(children, {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                duration: durationMs / 1000,
                ease: 'power3.out',
                stagger: { each: 0.008, grid: [rows, cols], from: 'center' },
                force3D: true,
            });
        };

        const reset = () => {
            if (!resetOnLeave) return;
            setState();
        };

        setState();

        if (trigger === 'mount') {
            run();
        } else {
            el.addEventListener('mouseenter', run);
            el.addEventListener('mouseleave', reset);
        }

        return () => {
            el.removeEventListener('mouseenter', run);
            el.removeEventListener('mouseleave', reset);
        };
    }, { scope: containerRef, dependencies: [isLoaded, rows, cols, durationMs, trigger, resetOnLeave] });

    // Preload image to avoid animating before it is ready
    useEffect(() => {
        const img = new Image();
        img.src = src;
        if (img.complete) {
            setIsLoaded(true);
        } else {
            img.onload = () => setIsLoaded(true);
            img.onerror = () => setIsLoaded(true); // even on error, let tiles render
        }
        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src]);

    const bgSize = `${cols * 100}% ${rows * 100}%`;

    return (
        <div ref={containerRef} className={`gd__root ${className}`} aria-hidden>
            {tiles.map(({ key, row, col }) => {
                const pos = `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`;
                return (
                    <div
                        key={key}
                        className="gd__tile"
                        style={{ backgroundImage: `url(${src})`, backgroundSize: bgSize, backgroundPosition: pos, opacity }}
                    />
                );
            })}

            <style jsx>{`
        .gd__root {
          position: absolute;
          inset: 0;
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(${cols}, 1fr);
          grid-template-rows: repeat(${rows}, 1fr);
          pointer-events: ${'hover' === trigger ? 'auto' : 'none'};
          backface-visibility: hidden;
          z-index: 1;
        }
        .gd__tile {
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          will-change: transform, opacity;
        }
      `}</style>
        </div>
    );
};

export default GridDistortion;


