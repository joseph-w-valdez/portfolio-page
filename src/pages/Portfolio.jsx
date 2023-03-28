import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import ParallaxContent from '../components/ParallaxContent'
import BackToTop from '../components/BackToTop'


const Portfolio = () => {

  const [isMobile, setIsMobile] = useState(false)

  
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi/.test(userAgent));
  }, []);
  
  return (
    <div className='full-container' >
        {!isMobile ? (
          <div className='parallax-container' style={{ backgroundColor: '#0d0d0d' }} >
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
