import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import ParallaxContent from '../components/ParallaxContent';

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const checkIsMobile = () => {
      setIsMobile(/Mobi/.test(userAgent) || window.innerWidth < 600);
    };

    // Run once on component mount
    checkIsMobile();

    // Add event listener for window resizing
    window.addEventListener('resize', checkIsMobile);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className='full-container'>
      {!isMobile ? (
        <div
          className='parallax-container'
          style={{ backgroundColor: '#0d0d0d' }}
        >
          <ParallaxContent />
        </div>
      ) : (
        <div className='mobile-container'>
          <div className='mobile-header'>
            <Header />
          </div>
          <img src='../images/full.png' alt='' />
          <Main />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
