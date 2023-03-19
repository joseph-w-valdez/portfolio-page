import React from 'react'
import { Parallax } from 'react-scroll-parallax';

const Portfolio = () => {

  return (
  <>
    <Parallax translateY={[-20, 20]}>
        <img src="./images/6th.png" alt="" />
    </Parallax>
    <Parallax translateY={[-20, 20]}>
        <img src="./images/Sun.png" alt="" />
    </Parallax>
    <Parallax translateY={[-20, 20]}>
        <img src="./images/5th.png" alt="" />
    </Parallax>
    <Parallax translateY={[-20, 20]}>
        <img src="./images/4th.png" alt="" />
    </Parallax>
    <Parallax translateY={[-20, 20]}>
        <img src="./images/3rd.png" alt="" />
    </Parallax>
    <Parallax translateY={[-20, 20]}>
        <img src="./images/2nd.png" alt="" />
    </Parallax>
    <Parallax translateY={[-20, 20]}>
        <img src="./images/Bottom.png" alt="" />
    </Parallax>
  </>
  
  )
}

export default Portfolio