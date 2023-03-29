import React from 'react';
import Skill from './Skill';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <div className='section skills-section'>
      <h1>Skills</h1>
      <div className="skills">
        {skillsData.map((skill) => (
          <Skill key={skill.title} title={skill.title} logo={skill.logo} website={skill.website} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
