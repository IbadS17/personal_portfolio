import React from "react";
import { Code, Zap, Server, Database } from "lucide-react";
import { developerData } from "../src/developerData";

const iconMap = { Zap, Server, Database };

const Skills = ({ isDarkMode }) => (
  <section
    id="skills"
    className={`py-20 px-4 transition-colors duration-500 ${
      isDarkMode
        ? "bg-gray-950 border-t border-b border-gray-800"
        : "bg-white border-t border-b border-gray-300"
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
        <Code className="inline-block mr-3 align-text-bottom" size={32} />
        SYSTEM_CAPABILITIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developerData.skills.map((skill) => {
          const Icon = iconMap[skill.icon];
          return (
            <div
              key={skill.category}
              className={`p-6 border rounded-xl shadow-lg hover:scale-[1.02] transition group ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 hover:border-white/50"
                  : "bg-white border-gray-300 hover:border-gray-900/50"
              }`}
            >
              <div className="flex items-center mb-4">
                <Icon
                  className={`mr-3 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                  size={32}
                />
                <h3
                  className={`text-2xl font-semibold font-mono ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2 font-mono text-sm">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`mr-2 ${
                        isDarkMode ? "text-white/50" : "text-gray-500"
                      }`}
                    >
                      &gt;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
