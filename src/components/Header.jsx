import React from 'react'
import {useSpring} from '@react-spring/web'

const Header = () => {

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
    <div className='header'>
              <h1 style={fade} className='portfolio-header'>WELCOME TO MY PORTFOLIO</h1>
              <div className='flex-basis'></div>
              <h3 style={slide} className='scroll-message'>[Scroll down to learn about me!]</h3>
            </div>
  )
}

export default Header