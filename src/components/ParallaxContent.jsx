import React, { useRef, useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Header from './Header';
import Main from './Main';
import BackToTop from './BackToTopButton';
import { parallaxScrollToTop as scrollToTop } from '../utilities/scrollToTop';

const ParallaxContent = () => {
  const parallaxRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [pages, setPages] = useState(5.05);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const currentScroll = parallaxRef.current.current;
      setShowBackToTop(currentScroll > 0);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.parallax');
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [pages]);

  // check for window width both on mount and on window resize
  useEffect(() => {
    const handleResize = () => {
      let newPages = 5.4;
      if (window.innerWidth < 1484) {
        newPages = 5.7;
      }
      if (window.innerWidth < 1350) {
        newPages = 5.7;
      }
      if (window.innerWidth < 1130) {
        newPages = 5.9
      }
      if (window.innerWidth < 1050) {
        newPages = 6.1
      }
      if (window.innerWidth < 1001) {
        newPages = 6.4
      }
      if (window.innerWidth < 880) {
        newPages = 6.5
      }
      if (window.innerWidth < 856) {
        newPages = 7
      }
      if (window.innerWidth < 768) {
        newPages = 7.5
      }
      if (window.innerWidth < 650) {
        newPages = 7.7
      }
      setPages(newPages);
    };
    handleResize();
    handleScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Parallax key={pages} ref={parallaxRef} pages={pages} className='parallax'>
        <ParallaxLayer speed={0} factor={5}>
          <img src="../images/6th.png" alt='' className='background'/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.3} factor={1}>
          <img src="../images/Sun.png" alt=''  />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} factor={1}>
          <img src="../images/5th.png" alt=''  />
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} factor={1}>
          <img src="../images/4th.png" alt='' />
        </ParallaxLayer>
        <ParallaxLayer speed={1} factor={1}>
          <img src="../images/3rd.png" alt='' />
        </ParallaxLayer>
        <ParallaxLayer speed={1.3} factor={1}>
          <img src="../images/2nd.png" alt=''  />
        </ParallaxLayer>
        <ParallaxLayer speed={1} factor={1}>
          <img src="../images/Bottom.png" alt='' className='bottom'/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.3} factor={1}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} factor={1}>
          <Main />
        </ParallaxLayer>
      </Parallax>
      {showBackToTop && <BackToTop scrollToTop={() => scrollToTop(parallaxRef)} />}
    </div>
  )
}

export default ParallaxContent;
