import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaDatabase />, label: "MongoDB Atlas" },
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-100" id="skills">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-purple-600 hover:scale-110 transition-transform duration-300"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-sm font-semibold">{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
