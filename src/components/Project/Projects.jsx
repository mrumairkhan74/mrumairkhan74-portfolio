import React from "react";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    image: "./images/weChat.png",
    title: "We Chat",
    description: "A real-time chat app using MERN, Socket.io, and Render.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwindcss", "Vite"],
    demoLink: "https://we-chat-alpha-ten.vercel.app/",
    codeLink: "https://github.com/mrumairkhan74/We-ChaT.git",
  },
  {
    image: "./images/c-news.png",
    title: "C News",
    description: "Full-stack news platform with user roles and image upload.",
    tech: ["React", "Express", "MongoDB", "Nodejs", "Tailwindcss", "Vite"],
    demoLink: "https://c-news-frontend.vercel.app/",
    codeLink: "https://github.com/mrumairkhan74/c-news-frontend.git",
  },
  {
    image: "./images/mooncart.png",
    title: "Moon Cart",
    description:
      "REST API with authentication, product filters and cart logic.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Tailwindcss"],
    demoLink: "https://mooncart-oxnt.onrender.com",
    codeLink: "https://github.com/mrumairkhan74/MoonCart.git",
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
