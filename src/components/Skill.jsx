import React from 'react';

const Skill = ({ title, logo, website }) => {
  return (
    <a href={website} target="_blank" rel="noopener noreferrer">
      <div className="skill">
        <h3>{title}</h3>
        <div className="skill-logo-frame">
          <img src={logo} alt={title} />
        </div>
      </div>
    </a>
  );
};

export default Skill;
