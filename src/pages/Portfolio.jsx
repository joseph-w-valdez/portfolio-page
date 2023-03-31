import React, { useEffect, useState } from 'react';
import BackToTop from '../components/BackToTopButton';
import Header from '../components/Header';
import Main from '../components/Main';
import ParallaxContent from '../components/ParallaxContent';
import { nonParallaxScrollToTop as scrollToTop} from '../utilities/scrollToTop';

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  //check if the device is mobile or <= 600px width
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

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowBackToTop(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          {showBackToTop && <BackToTop scrollToTop={scrollToTop} />}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
