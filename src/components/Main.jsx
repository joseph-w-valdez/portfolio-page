import React from 'react'
import NewLine from './NewLine'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import ContactMe from './ContactMe'

const Main = () => {

  
  return (
    <main>
      <div className="content-container">
      <AboutMe />
      <NewLine />
      <Skills />
      <Projects />
      <ContactMe />
      </div>
    </main>
  )
}

export default Main