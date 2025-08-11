import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaCloud } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase, SiMongodb, SiExpress, SiJsonwebtokens, SiBootstrap, SiCss3, SiHtml5 } from "react-icons/si";
import GradientText from "../utils/GradientText";

const Skills = () => {
  const frontendSkills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "CSS", icon: SiCss3 },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "HTML", icon: SiHtml5 },
];

const backendSkills = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
  { name: "Firebase", icon: SiFirebase },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "REST API", icon: FaCloud }, 
];

  const tools = [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
  ];

  return (
    <div className="md:w-10/12 mx-auto px-6 py-12 bg-base-100 rounded-lg shadow-lg font-inter">
      <h2 className="text-3xl font-bold text-center mb-12 text-base-content flex gap-2 justify-center items-center"><FaCode className="inline-block text-accent"/>My <GradientText label="Skills"/></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">

        
      {/* Frontend */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-accent">Frontend</h3>
        <div className="flex flex-wrap gap-6">
          {frontendSkills.map(({ name, icon: Icon }) => (
            <div key={name} className="flex flex-col items-center bg-base-200 rounded-lg p-4 flex-1 shadow-lg">
              <Icon className="text-4xl text-primary mb-2" />
              <span className="text-sm font-medium text-base-content">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-accent">Backend</h3>
        <div className="flex flex-wrap gap-6">
          {backendSkills.map(({ name, icon: Icon }) => (
            <div key={name} className="flex flex-col items-center bg-base-200 rounded-lg p-4 flex-1 shadow-lg">
              <Icon className="text-4xl text-primary mb-2" />
              <span className="text-sm font-medium text-base-content">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-accent">Tools</h3>
        <div className="flex flex-wrap gap-6">
          {tools.map(({ name, icon: Icon }) => (
            <div key={name} className="flex flex-col items-center bg-base-200 rounded-lg p-4 flex-1 shadow-lg">
              <Icon className="text-4xl text-primary mb-2" />
              <span className="text-sm font-medium text-base-content">{name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
