import React from 'react';
import Skill from './Skill';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <div className='section'>
      <h1>Skills</h1>
      <div className="flex-basis"></div>
      <div className="skills-container">
          <div className="skills">
            {skillsData.map((skill) => (
              <Skill key={skill.title} title={skill.title} logo={skill.logo} website={skill.website} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;
