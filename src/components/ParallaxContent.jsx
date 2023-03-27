import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring} from '@react-spring/web'

const ParallaxContent = () => {

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
    <Parallax pages={1.3} className='parallax'>
          <ParallaxLayer speed={0} factor={5}>
            <img src="../images/6th.png" alt='' className='background'/>
          </ParallaxLayer>
          <ParallaxLayer speed={-0.2} factor={1}>
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
            <div className='header'>
              <h1 style={fade} className='portfolio-header'>WELCOME TO MY PORTFOLIO</h1>
              <div className='flex-basis'></div>
              <h3 style={slide} className='scroll-message'>[Scroll down to learn about me!]</h3>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={2.5} factor={1}>
            <main>
              <div className="content-container">
                <h1 style={fade} className='name-header'>Hello! My name is Joseph!</h1>
                <p>
                  I am a software engineer in Southern California. I'd love to contribute to any projects and applications that have a positive impact on the community.
                </p>
                <p>
                  Before entering the tech industry, I worked in the healthcare field for several years. Over this time, I gained a strong work ethic, with great admiration for the strong teamwork, coordination, and problem-solving that it entailed. I was introduced to the software development world by friends who suggested it due to its similarities to the medical field in the ways that I loved it.
                </p>
                <p>
                  After months of soul-searching, self-studying, and research into the field, I decided to delve into it further and immerse myself in a boot camp program, and I have continued loving it since!
                </p>
                <p>
                  I'm excited to keep moving forward in this industry and solving problems with a like-minded group of teammates and continuing this path of ongoing growth!
                </p>
              </div>
            </main>
          </ParallaxLayer>
        </Parallax>
  )
}

export default ParallaxContent