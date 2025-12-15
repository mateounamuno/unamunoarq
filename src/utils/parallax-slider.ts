export function parallaxSlider() {
  // Ensure we're on the client side
  if (typeof window === 'undefined') return () => {};

  const images: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.parallax-img'));
  const slider = document.querySelector('.parallax-slider') as HTMLElement;
  
  // Early return if elements don't exist
  if (!slider || images.length === 0) {
    return () => {};
  }

  let sliderWidth: number;
  let imageWidth: number;
  let current = 0;
  let target = 0;
  const ease = 0.05;
  let animationFrameId: number | null = null;
  let originalBodyHeight: string | null = null;

  // Store original body height style
  originalBodyHeight = document.body.style.height || '';

  const handleResize = () => {
    init();
  };

  window.addEventListener('resize', handleResize);

  images.forEach((img, idx) => {
    img.style.backgroundImage = `url(/assets/img/home-12/portfolio/port-${idx + 1}.jpg)`;
  });

  function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  function setTransform(el: HTMLElement, transform: string) {
    el.style.transform = transform;
  }

  function init() {
    if (!slider) return;
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    if (typeof document !== 'undefined' && document.body) {
      document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
    }
  }

  function animate() {
    if (!slider) return;
    current = parseFloat(lerp(current, target, ease).toFixed(2));
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`);
    animateImages();
    animationFrameId = requestAnimationFrame(animate);
  }

  function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue: number;

    images.forEach((image, idx) => {
      intersectionRatioValue = ratio - (idx * 0.7);
      setTransform(image, `translateX(${intersectionRatioValue * 100}px)`);
    });
  }

  init();
  animate();

  // Return cleanup function
  return () => {
    // Cancel animation frame
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }

    // Remove event listener
    window.removeEventListener('resize', handleResize);

    // Restore original body height
    if (typeof document !== 'undefined' && document.body) {
      if (originalBodyHeight) {
        document.body.style.height = originalBodyHeight;
      } else {
        document.body.style.height = '';
      }
    }
  };
}
