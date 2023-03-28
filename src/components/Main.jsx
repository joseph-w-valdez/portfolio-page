import React from 'react'
import NewLine from './NewLine'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'

const Main = () => {

  
  return (
    <main>
      <div className="content-container">
      <AboutMe />
      <NewLine />
      <Skills />
      <Projects />
      </div>
    </main>
  )
}

export default Main