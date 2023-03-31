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

  return (
    <div>
      <Parallax ref={parallaxRef} pages={2.1} className='parallax'>
        <ParallaxLayer speed={0} factor={5}>
          <img src="../images/6th.png" alt='' className='background'/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.2} factor={1}>
          <img src="../images/Sun.png" alt=''  />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} factor={1}>
          <img src="../images/5th.png" alt=''  />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} factor={1}>
          <img src="../images/4th.png" alt='' />
        </ParallaxLayer>
        <ParallaxLayer speed={0.7} factor={1}>
          <img src="../images/3rd.png" alt='' />
        </ParallaxLayer>
        <ParallaxLayer speed={1.1} factor={1}>
          <img src="../images/2nd.png" alt=''  />
        </ParallaxLayer>
        <ParallaxLayer speed={1.5} factor={1}>
          <img src="../images/Bottom.png" alt='' className='bottom'/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.3} factor={1}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer speed={2.5} factor={1}>
          <Main />
        </ParallaxLayer>
      </Parallax>
      {showBackToTop && <BackToTop scrollToTop={() => scrollToTop(parallaxRef)} />}
    </div>
  )
}

export default ParallaxContent