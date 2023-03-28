import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
      <button id="back-to-top-btn" onClick={scrollToTop}>
        ↑
      </button>
      <div className='flex-basis'></div>
      <p>Back to top</p>
    </div>
  );
};

export default BackToTop;
