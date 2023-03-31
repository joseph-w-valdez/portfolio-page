export const nonParallaxScrollToTop = () => {
    // Adjust the duration (in milliseconds) as desired
    const duration = 10000;
    let startTime = null;
  
    const step = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }
  
      const progress = currentTime - startTime;
      const scrollStep = Math.min(progress / duration, 1) * window.pageYOffset;
  
      window.scrollTo(0, window.pageYOffset - scrollStep);
  
      if (window.pageYOffset > 0) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  };

export const parallaxScrollToTop = (parallaxRef) => {
  parallaxRef.current.scrollTo(0);
};