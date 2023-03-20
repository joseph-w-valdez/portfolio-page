import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Portfolio = () => {

  return (
  <>
    <Parallax pages={7} className='container'>
            <img src="../images/6th.png" alt='' className='background'/>
        <ParallaxLayer speed={-0.5}>
            <img src="../images/Sun.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={0}>
            <img src="../images/5th.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5}>
            <img src="../images/4th.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={1}>
            <img src="../images/3rd.png" alt=''/>
        </ParallaxLayer>        
        <ParallaxLayer speed={1.25}>
            <img src="../images/2nd.png" alt=''/>
        </ParallaxLayer>
        <ParallaxLayer speed={1.5}>
            <img src="../images/Bottom.png" alt='' className='bottom'/>
        </ParallaxLayer>
    </Parallax>
  </>
  
  )
}

export default Portfolio