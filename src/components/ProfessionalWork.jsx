import React from 'react';
import { professionalWorkData } from '../data/professionalWorkData';

const ProfessionalWork = () => {
  return (
    <div className="section professional-work-section">
      <h1>Professional Experience</h1>
      <div className="flex-basis"></div>
      <div className="professional-experience">
        {professionalWorkData.map((work, index) => (
          <div className="work-experience xl" key={index}>
            <a className="work-experience-link" href={work.liveLink} target="_blank" rel="noopener noreferrer">
              <div className="title-logo-container">
                <div className="logo-frame"><img src={work.imageSrc} alt={work.company} /></div>
                <div>
                  <h3 className="work-experience-title">{work.company}</h3>
                  {work.role && <h4 className="work-experience-role">{work.role}</h4>}
                  <div className="flex-basis"></div>
                  <h6 className="work-experience-date">{work.dates}</h6>
                </div>
              </div>
              {work.description.map((bullet, index) => (
                <p key={index} className="work-experience-description">{bullet}</p>
              ))}
              {work.bulletpoints && work.bulletpoints.map((bullet, index) => (
                <p key={index} className="work-experience-bullet">{bullet}</p>
              ))}
              <div className="work-links">
                <a href={work.liveLink} target='_blank' rel='noreferrer' className='work-link'>Live Link</a>
                <a href={work.repoLink} target='_blank' rel='noreferrer' className='work-link'>Repo Link</a>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalWork;
