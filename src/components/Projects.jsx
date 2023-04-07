import React from 'react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <div className='section projects-section'>
      <h1>Projects</h1>
      <div className="projects">
        {projectsData.map((project, index) => (
          <div className='project' key={index}>
            <a href={project.liveLink} target='_blank' rel='noreferrer'>
              <h2 className='project-title'>{project.title}</h2>
              <div className='project-description'>
                {project.description.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
              </div>
              <div className="project-logo-frame">
                <img src={project.imageSrc} alt={project.title} />
              </div>
              <div className="project-links">
                <a href={project.liveLink} target='_blank' rel='noreferrer' className='project-link'>Live Link</a>
                <a href={project.repoLink} target='_blank' rel='noreferrer' className='project-link'>Repo Link</a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Projects;
