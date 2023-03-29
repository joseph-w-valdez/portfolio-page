import React from 'react'

const Skill = ({ title, logo }) => {
    return (
      <div className="skill">
        <h3>{title}</h3>
        <div className="skill-logo-frame">
          <img src={logo} alt={title} />
        </div>
      </div>
    );
  };

export default Skill