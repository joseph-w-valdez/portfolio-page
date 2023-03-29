import React from 'react'

const Projects = () => {
  return (
    <div className='section'>
        <h1>Projects</h1>
        <div className="projects">
            <div className='project'>
                <h2 className='project-title'>Valorant Checker</h2>
                <div className='project-description'>
                    <p>
                    • The dynamic application utilizes the Valorant API to display information about playable characters and weapons. The frontend was built using HTML5 with modular view swapping for a seamless user experience. Dynamic responsiveness was also implemented for multiple viewports.
                    </p>
                    <p>
                    • The application features a custom filter table built with CSS3 and JavaScript, mimicking radio buttons with tailored styling. JavaScript was used to create new XMLHTTPRequests, which populate the page with corresponding data based on user-selected filters.
                    </p>
                </div>
                <div className="project-logo-frame">
                    <img src="https://raw.githubusercontent.com/joseph-w-valdez/Valorant-Checker/main/images/valorant-logo.png" alt="" />
                </div>
                <div className="project-links">
                    <a href="https://joseph-w-valdez.github.io/Valorant-Checker/" target='_blank' rel="noreferrer">Live Link</a>
                    <a href="https://github.com/joseph-w-valdez/ajax-project" target='_blank' rel="noreferrer">Repo Link</a>
                </div>
            </div>
            <div className="project">
                <h2 className='project-title'>Marvelous</h2>
                <div className='project-description'>
                    <p>
                    • A dynamic full-stack web application was built using JavaScript, Node.js, and React, which utilized the official Marvel Comics API. MD5 hashing was employed to access the Marvel API, and the frontend was built with React, React Router, and React Hook Form. The frontend was styled with Tailwind CSS.
                    </p>
                    <p>
                    • The application features user authentication and authorization functionality powered by JSON Web Tokens and Argon2 password hashing. A RESTful API is included with endpoints for CRUD operations on characters and search functionality.
                    </p>
                    <p>
                    • The backend was built using Express and pg as the PostgreSQL client library. Axios was used for HTTP requests, and Multer was used for file uploads. The server was configured with Webpack, Babel, and nodemon and deployed to Heroku.
                    </p>
                    <p>
                    • Independent research was conducted to learn and implement all the technologies listed, showcasing strong self-learning and adaptability skills.
                    </p>
                </div>
                <div className="project-logo-frame">
                    <img src="https://raw.githubusercontent.com/joseph-w-valdez/marvelous/main/server/public/images/Marvelous.webp" alt="" />
                </div>
                <div className="project-links">
                    <a href="https://marvelous.herokuapp.com/" target='_blank' rel="noreferrer">Live Link</a>
                    <a href="https://github.com/joseph-w-valdez/marvelous" target='_blank' rel="noreferrer">Repo Link</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects