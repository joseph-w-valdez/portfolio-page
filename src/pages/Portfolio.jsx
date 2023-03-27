import React, {useEffect, useState} from 'react'
import ParallaxContent from '../components/ParallaxContent'

const Portfolio = () => {

  const [isMobile, setIsMobile] = useState(false)

  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <div className='full-container'>
      <div className='parallax-container' style={{ backgroundColor: '#0d0d0d' }}>
        {!isMobile ? (
          <ParallaxContent />
        ) : (
          <div className='mobile-container'>
            <img src="../images/full.png" alt="" />
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Portfolio
