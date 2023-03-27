import React from 'react'
import {useSpring} from '@react-spring/web'

const Main = () => {

  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  })

  return (
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
  )
}

export default Main