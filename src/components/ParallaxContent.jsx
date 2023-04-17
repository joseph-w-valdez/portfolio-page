import React, { useRef, useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Header from './Header';
import Main from './Main';
import BackToTop from './BackToTopButton';
import { parallaxScrollToTop as scrollToTop } from '../utilities/scrollToTop';

const ParallaxContent = () => {
  const parallaxRef = useRef();
  const [showBackToTop, setShowBackToTop] = useState(false);

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
  }, []);

  let pages = 4.05;
  if (window.innerWidth < 1484) {
    pages = 4.2;
  }
  if (window.innerWidth < 1350) {
    pages = 4.3;
  }
  if (window.innerWidth < 1130) {
    pages = 4.45
  }
  if (window.innerWidth < 1050) {
    pages = 4.6
  }
  if (window.innerWidth < 1001) {
    pages = 4.8
  }
  if (window.innerWidth < 880) {
    pages = 5
  }
  if (window.innerWidth < 856) {
    pages = 5.2
  }
  if (window.innerWidth < 768) {
    pages = 5.6
  }
  if (window.innerWidth < 650) {
    pages = 5.8
  }

  return (
    <div>
      <Parallax ref={parallaxRef} pages={pages} className='parallax'>
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
