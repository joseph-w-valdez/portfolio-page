import React from 'react'

const Projects = () => {
  return (
    <div className='section'>
        <h1>Projects</h1>
        <div className="projects">
            <div className='project'>
                <h3 className='project-title'>ValoFuze</h3>
                <p className='project-description'>
                A dynamic application that uses the Valorant API to display information about playable characters and weapons. Organized using HTML5 with modular view 
                swapping for seamless user experience with dynamic responsiveness for multiple viewports. Features a custom filter table with CSS3 and JavaScript, 
                mimicking radio buttons with tailored styling. JavaScript was used to create new XMLHTTPRequests to populate the page with corresponding data based on user-selected filters. 
                </p>
                <div className="project-logo-frame">
                    <img src="https://raw.githubusercontent.com/joseph-w-valdez/Valorant-Checker/main/images/valorant-logo.png" alt="" />
                </div>
            </div>
            <div className="project">
                <h3 className='project-title'>Marvelous</h3>
                <p className='project-description'>
                A dynamic full-stack web application utilizing JavaScript, Node.js, and React with the official Marvel Comics API. MD5 hashing was utilized to access the Marvel API, and 
                the frontend was built with React, React Router, and React Hook Form with styling by Tailwind CSS. Features user authentication and authorization functionality powered 
                by JSON Web Tokens and Argon2 password hashing, and a RESTful API that includes endpoints for CRUD operations on characters and search functionality. The backend was 
                built using Express and pg as the PostgreSQL client library. Axios was used for HTTP requests, and Multer was used for file uploads. The server was configured with 
                Webpack, Babel, and nodemon and deployed to Heroku. Independent research was conducted to learn and implement all the technologies listed, showcasing strong 
                self-learning and adaptability skills.
                </p>
                <div className="project-logo-frame">
                    <img src="https://raw.githubusercontent.com/joseph-w-valdez/marvelous/main/server/public/images/Marvelous.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects