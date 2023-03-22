import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring} from '@react-spring/web'

const Portfolio = () => {

  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  })

  const slide = useSpring({
    to: { x: '0%' },
    from: { x: '-100%' },
    config: { duration: 2000 },
  })

  return (
    <div className='container' style={{ backgroundColor: '#0d0d0d' }}>
      <Parallax pages={4}>
        <ParallaxLayer speed={-0.5} factor={5} className='page'>
          <img src="../images/6th.png" alt='' className='background'/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.3} factor={1}>
          <img src="../images/Sun.png" alt=''  />
        </ParallaxLayer>
        <ParallaxLayer speed={0} factor={1}>
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
        <ParallaxLayer speed={1.75} factor={1}>
          <img src="../images/Bottom.png" alt='' className='bottom'/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.3} factor={1}>
          <div>
            <h1 style={fade} className='portfolio-header'>WELCOME TO MY PORTFOLIO</h1>
            <h3 style={slide} className='scroll-message'>[Scroll down to learn about me!]</h3>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Portfolio
