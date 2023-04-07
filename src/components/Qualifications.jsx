import React from 'react';
import { qualificationsData } from '../data/qualificationsData';

const Qualifications = () => {
  return (
    <div className="section qualifications-section">
      <h1>Qualifications</h1>
      <div className="flex-basis"></div>
      <div className="qualifications">
        {qualificationsData.map((qualification, index) => (
          <div className="qualification" key={index}>
            <a className="qualification-link" href={qualification.href} target="_blank" rel="noopener noreferrer">
              <div className="title-logo-container">
                <div className="logo-frame"><img src={qualification.logoUrl} alt={qualification.institution} /></div>
                <div>
                  <h3 className="qualification-title">{qualification.institution}</h3>
                  {qualification.role && <h4 className="qualification-role">{qualification.role}</h4>}
                  <div className="flex-basis"></div>
                  <h6 className="qualification-date">{qualification.dates}</h6>
                </div>
              </div>
              {qualification.description.map((bullet, index) => (
                <p key={index} className="qualification-description">{bullet}</p>
              ))}
              {qualification.bulletpoints && qualification.bulletpoints.map((bullet, index) => (
                <p key={index} className="qualification-bullet">{bullet}</p>
              ))}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;
