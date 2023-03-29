import React from 'react';
import Skill from './Skill';

const skillsData = [
  {
    title: 'HTML5',
    logo: 'https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg',
  },
  {
    title: 'CSS3',
    logo: 'https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain-wordmark.svg',
  },
  {
    title: 'ES6',
    logo: 'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg',
  },
  {
    title: 'Hooks',
    logo: 'https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg',
  },
  {
    title: 'VS Code',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg',
  },
  {
    title: 'Node.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain-wordmark.svg',
  },
  {
    title: 'PostgreSQL',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original-wordmark.svg',
  },
  {
    title: 'Tailwind',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    title: 'Webpack',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/webpack/webpack-original.svg',
  },
  {
    title: 'Photoshop',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/photoshop/photoshop-plain.svg',
  },
  {
    title: 'Heroku',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/heroku/heroku-original-wordmark.svg',
  },
  {
    title: 'Git',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-plain-wordmark.svg',
  },
];

const Skills = () => {
  return (
    <div className='section skills-section'>
      <h1>Skills</h1>
      <div className="skills">
        {skillsData.map((skill) => (
          <Skill key={skill.title} title={skill.title} logo={skill.logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
