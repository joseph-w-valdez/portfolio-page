import React from 'react'

const Qualifications = () => {
  return (
    <div className='section qualifications-section'>
        <h1>Qualifications</h1>
        <div className="flex-basis"></div>
        <div className='qualifications'>
            <a className="qualification-link" href='https://learningfuze.com/' target='_blank' rel="noopener noreferrer">
                <div className="qualification" >
                    <div className="title-logo-container">
                        <img src="https://media.licdn.com/dms/image/C560BAQEimxlasi9TvQ/company-logo_100_100/0/1592771574713?e=1689206400&v=beta&t=9FPoN7kXbnv-CaYANa2HKE-P0x4O7H_Ay3dEaH7zm5A" alt="" />
                        <div>
                            <h3 className='qualification-title'>LearningFuze</h3>
                            <div className="flex-basis"></div>
                            <h6 className='qualification-date'>Nov 2022 - Mar 2023</h6>
                        </div>
                
                    </div>
                    <h4>Full Immersion Program for a career in Software Development in a simulated, agile work environment.</h4>
                    <p>Over 800 hours of web development programming (70 hours/week), going over critical concepts, including:</p>
                    <p className='qualification-bullet'>• Fundamentals of Web Development (HTML5, CSS3, JavaScript - ES5/6), Flexbox, Git, AJAX, JSON, and APIs</p>
                    <p className='qualification-bullet'>• Problem-Solving, Debugging, Project Planning in Agile, and Collaboration</p>
                    <p className='qualification-bullet'>• Implementation of libraries and frameworks (React.js, Node.js, Express, and more)</p>
                    <p className='qualification-bullet'>• Researching and learning new technologies as needed for application solutions</p>
                    <p className='qualification-bullet'>• Prototyping and designing with Figma Design Tool</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Qualifications