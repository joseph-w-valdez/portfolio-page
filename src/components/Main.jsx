import React from 'react'
import NewLine from './NewLine'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import ContactMe from './ContactMe'
import Qualifications from './Qualifications'

const Main = () => {

  
  return (
    <main>
      <div className="content-container">
      <AboutMe />
      <NewLine />
      <Skills />
      <NewLine />
      <Projects />
      <NewLine />
      <Qualifications />
      <NewLine />
      <ContactMe />
      </div>
    </main>
  )
}

export default Main