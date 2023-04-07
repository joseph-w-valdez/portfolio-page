import React from 'react'

const Qualifications = () => {
  return (
    <div className='section qualifications-section'>
        <h1>Qualifications</h1>
        <div className="flex-basis"></div>
        <div className='qualifications'>
            <div className="qualification" >
                <a className="qualification-link" href='https://learningfuze.com/' target='_blank' rel="noopener noreferrer">
                    <div className="title-logo-container">
                        <div className="logo-frame"><img src="https://media.licdn.com/dms/image/C560BAQEimxlasi9TvQ/company-logo_100_100/0/1592771574713?e=1689206400&v=beta&t=9FPoN7kXbnv-CaYANa2HKE-P0x4O7H_Ay3dEaH7zm5A" alt="LearningFuze" /></div>
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
                </a>
            </div>
            <div className="qualification" >
                <a className="qualification-link" href='https://www.linkedin.com/in/joseph-w-valdez/details/recommendations/' target='_blank' rel="noopener noreferrer">
                    <div className="title-logo-container">
                        <div className="logo-frame"><img src="https://media.licdn.com/dms/image/C4E03AQFCVpKOnAeOUA/profile-displayphoto-shrink_100_100/0/1516167350883?e=1686182400&v=beta&t=UQ0WoZHbV5LnN9u75ChkqLs9oJ82V1PHOUQONGlNLZU" alt="Robert Gardner" /></div>
                        <div>
                            <h3 className='qualification-title'>Robert Gardner, Ph.D</h3>
                            <div className="flex-basis"></div>
                            <h4 className='qualification-role'>Software Development Instructor</h4>
                            <div className="flex-basis"></div>
                            <h6 className='qualification-date'>March 22, 2023, Robert was Joseph's teacher</h6>
                        </div>
                    </div>
                    <p>I taught Joseph at LearningFuze, where Joseph learned full stack development with React, Node, and PostgreSQL. This was an intense course that required Joseph to write a full stack application on his own.</p>
                    <p>At LearningFuze, Joseph was an exceptional student. He learned quickly and got things done. Joseph was constantly striving to improve his code quality and learn new technologies. For his final project, he wrote an app using the Marvel API. He learned, on his own, an impressive number of technologies for this, such as working with the Marvel API (including the digest technology they use), React Hook Form, React Router, Axios, and Tailwind CSS.</p>
                    <p>Joseph was one of my top students, with a great sense of how the computer works, how to write solid, clean code, and how to design and organize the code to make it easy to work with. He found a bug in one of the exercises we've been using for years and helped debug and fix it. Joseph has a good grasp of basic data structures and complexity analysis and how to use them to solve common software problems.</p>
                    <p>Joseph has a strong work ethic and is dedicated to getting work done, and done well. He knows when to ask questions and how to understand and make use of the answers to his questions.</p>
                    <p>As a former Director of Engineering at Google, I can say with confidence that Joseph will quickly be an asset to any team he joins. He was a joy to teach and I am certain he will have an outstanding career in software development.</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Qualifications