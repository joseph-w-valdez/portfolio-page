import React from 'react';

const Skill = ({ title, logo, website }) => {
  return (
    <div>
      <a className="skill" href={website} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        <div className="skill-logo-frame">
          <img src={logo} alt={title} />
        </div>
      </a>
    </div>
  );
};

export default Skill;
