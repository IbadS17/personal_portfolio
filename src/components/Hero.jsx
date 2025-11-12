import React from "react";
import { Code, ArrowRight } from "lucide-react";
import TypingEffect from "./TypingEffect";
import { developerData } from "../src/developerData";

const Hero = ({ isDarkMode }) => (
  <section
    id="home"
    className={`min-h-screen flex items-center pt-24 pb-12 px-4 transition-colors duration-500 ${
      isDarkMode ? "bg-black" : "bg-gray-100"
    }`}
  >
    <div className="max-w-7xl mx-auto text-left">
      <p
        className={`text-xl font-mono mb-4 ${
          isDarkMode ? "text-gray-500" : "text-gray-600"
        }`}
      >
        <Code className="inline mr-2" size={24} />
        ENTRY POINT: EXECUTE
      </p>
      <h1
        className={`text-6xl font-extrabold mb-4 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {developerData.name}
      </h1>
      <h2
        className={`text-3xl font-light mb-8 font-mono ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {developerData.title}
      </h2>
      <div
        className={`text-xl font-mono mb-12 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        &gt;{" "}
        <TypingEffect
          phrases={developerData.heroLine}
          isDarkMode={isDarkMode}
        />
      </div>

      <a
        href="https://github.com/IbadS17"
        _
        target="_blank"
        className="inline-flex items-center mt-4 px-8 py-3 text-lg font-bold text-black bg-white rounded-lg shadow-lg hover:scale-105 border-2 border-white transition"
      >
        VISIT GITHUB
        <ArrowRight className="ml-3" size={20} />
      </a>
    </div>
  </section>
);

export default Hero;
