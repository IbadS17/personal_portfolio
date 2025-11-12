import React from "react";
import { Code } from "lucide-react";
import { developerData } from "../src/developerData";

const About = ({ isDarkMode }) => (
  <section
    id="about"
    className={`py-20 px-4 transition-colors ${
      isDarkMode
        ? "bg-gray-950 border-t border-b border-gray-800"
        : "bg-white border-t border-b border-gray-300"
    }`}
  >
    <div className="max-w-7xl mx-auto">
      <h2
        className={`text-4xl font-extrabold mb-12 border-b-2 pb-2 font-mono ${
          isDarkMode
            ? "text-white border-white"
            : "text-gray-900 border-gray-900"
        }`}
      >
        <Code className="inline-block mr-3" size={32} />
        ABOUT_IBAAD
      </h2>
      <div
        className={`p-8 rounded-xl border shadow-xl ${
          isDarkMode
            ? "bg-gray-900 border-gray-800"
            : "bg-gray-200 border-gray-300"
        }`}
      >
        <p
          className={`text-xl leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          {developerData.bio}
        </p>
        <div
          className={`mt-8 pt-4 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-400"
          }`}
        >
          <p
            className={`text-sm font-mono ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            [EDUCATION: BScIT, University of Mumbai] [FOCUS: PERFORMANCE &
            COLLABORATION] [LOCATION: MUMBAI]
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
