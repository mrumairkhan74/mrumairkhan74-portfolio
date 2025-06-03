import React from "react";

const ProjectCard = ({ image, title, description, tech, demoLink, codeLink }) => {
  return (
    <div className="bg-white border shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 w-full md:w-[300px]">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      
      <h3 className="text-2xl font-bold text-purple-600 mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex justify-between">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
        >
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-100"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
