"use client";
import { useEffect, useState } from 'react';

interface ScreenSize {
  width: number;
  height: number;
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({ width: 0, height: 0 });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial size
    updateScreenSize();

    // Add event listener
    window.addEventListener('resize', updateScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return screenSize;
};

export const applyProjectStyles = (screenSize: ScreenSize) => {
  useEffect(() => {
    const projectArea = document.querySelector('.tp-project-area');
    if (!projectArea) return;

    const container = projectArea.querySelector('.container-1630') as HTMLElement;
    const leftWrap = projectArea.querySelector('.tp-project-left-wrap') as HTMLElement;
    const rightWrap = projectArea.querySelector('.tp-project-right-wrap') as HTMLElement;

    if (!container || !leftWrap || !rightWrap) return;

    // Reset styles first
    container.style.maxWidth = '';
    container.style.padding = '';
    leftWrap.style.paddingRight = '';
    rightWrap.style.paddingLeft = '';

    // Apply Mac-specific styles
    if (screenSize.width >= 1200 && screenSize.width <= 1600) {
      // MacBook range
      const maxWidth = Math.min(screenSize.width - 100, 1400);
      container.style.maxWidth = `${maxWidth}px`;
      container.style.padding = '0 50px';
      
      const padding = Math.max(30, Math.floor((screenSize.width - maxWidth) / 4));
      leftWrap.style.paddingRight = `${padding}px`;
      rightWrap.style.paddingLeft = `${padding}px`;
    } else if (screenSize.width > 1600) {
      // Large screens
      container.style.maxWidth = '1630px';
      container.style.padding = '0 30px';
      leftWrap.style.paddingRight = '100px';
      rightWrap.style.paddingLeft = '100px';
    } else if (screenSize.width < 1200) {
      // Smaller screens
      container.style.maxWidth = '100%';
      container.style.padding = '0 20px';
      leftWrap.style.paddingRight = '20px';
      rightWrap.style.paddingLeft = '20px';
    }

    // Log for debugging
    console.log(`Screen size: ${screenSize.width}x${screenSize.height}`);
    console.log(`Applied max-width: ${container.style.maxWidth}`);
    console.log(`Applied padding: ${container.style.padding}`);

  }, [screenSize]);
};
