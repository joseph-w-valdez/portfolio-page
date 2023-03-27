import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
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
        {!isMobile ? (
          <div className='parallax-container' style={{ backgroundColor: '#0d0d0d' }}>
            <ParallaxContent />
          </div>
        ) : (
          <div className='mobile-container'>
            <div className='mobile-header'>
              <Header />
            </div>
            <img src="../images/full.png" alt="" />
            <Main />
          </div>
        )
      }
      
    </div>
  )
}

export default Portfolio
