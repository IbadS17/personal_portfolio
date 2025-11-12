import React, { useState } from "react";
import { Code, ArrowRight } from "lucide-react";
import { developerData } from "../src/developerData";

const ProjectCard = ({ project, isDarkMode }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`block p-6 rounded-xl shadow-lg transform transition duration-300 ${
        isDarkMode
          ? "bg-gray-950 border border-gray-800 hover:border-white/70"
          : "bg-white border border-gray-300 hover:border-gray-900/70"
      }`}
    >
      <h3
        className={`text-2xl font-bold mb-2 font-mono ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {project.name}
      </h3>
      <p
        className={`mb-4 text-sm min-h-[50px] ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {project.description}
      </p>
      <div
        className={`flex justify-between items-center mt-4 pt-3 border-t ${
          isDarkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <span className="text-xs font-mono italic text-gray-500">
          STACK: {project.tech}
        </span>
        <div
          className={`flex items-center transition-all ${
            hovered
              ? isDarkMode
                ? "text-white"
                : "text-gray-900"
              : isDarkMode
              ? "text-gray-600"
              : "text-gray-400"
          }`}
        >
          <span className="mr-2 text-sm font-semibold">VIEW CODE</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </a>
  );
};

const Projects = ({ isDarkMode }) => (
  <section
    id="projects"
    className={`py-20 px-4 transition-colors ${
      isDarkMode ? "bg-black" : "bg-gray-100"
    }`}
  >
    <div className="max-w-7xl mx-auto">
      <h2
        className={`text-4xl font-extrabold mb-12 border-b-2 pb-2 font-mono tracking-wider ${
          isDarkMode
            ? "text-white border-white"
            : "text-gray-900 border-gray-900"
        }`}
      >
        <Code className="inline-block mr-3" size={32} />
        PROJECT_LOGS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developerData.projects.map((project, i) => (
          <ProjectCard key={i} project={project} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
