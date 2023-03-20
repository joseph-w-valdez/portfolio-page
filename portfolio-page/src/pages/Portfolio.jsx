import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Portfolio = () => {

  return (
  <>
    <Parallax pages={1.5} scrollOffset={1000} className='container'>
        <ParallaxLayer speed={-0.75} factor={0}>
            <img src="../images/6th.png" alt='' className='background'/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.95} factor={1}>
            <img src="../images/Sun.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.65} factor={0}>
            <img src="../images/5th.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.5} factor={0.1}>
            <img src="../images/4th.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.3} factor={0.1}>
            <img src="../images/3rd.png" alt=''/>
        </ParallaxLayer>        
        <ParallaxLayer speed={0.3} factor={0.1}>
            <img src="../images/2nd.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={1.25} factor={0.1}>
            <img src="../images/Bottom.png" alt='' className='bottom'/>
        </ParallaxLayer>
    </Parallax>
  </>
  
  )
}

export default Portfolio