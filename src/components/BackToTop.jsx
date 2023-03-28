import React, { useEffect, useState } from 'react';

const BackToTop = ({ scrollToTop }) => {
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

  return (
    <div className={`back-to-top`} >
      <button id="back-to-top-btn" onClick={scrollToTop}>
        ↑
      </button>
      <div className='flex-basis'></div>
      <p>Back to top</p>
    </div>
  );
};

export default BackToTop;
