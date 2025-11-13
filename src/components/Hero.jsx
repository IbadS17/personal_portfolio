import React from "react";
import { Code, ArrowRight } from "lucide-react";
import TypingEffect from "./TypingEffect";
import { developerData } from "../src/developerData";

const Hero = ({ isDarkMode }) => (
  <section
    id="home"
    className="relative min-h-screen flex items-center pt-32 pb-12 px-4 transition-colors duration-500 overflow-hidden"
    style={{
      background: isDarkMode
        ? "radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0f 50%, #000000 100%)"
        : "radial-gradient(ellipse at top, #f0f0f0 0%, #e0e0e0 50%, #d0d0d0 100%)",
    }}
  >
    {/* Animated Grid Background */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "opacity-40" : "opacity-25"
        }`}
        style={{
          backgroundImage: `linear-gradient(${
            isDarkMode ? "#ffffff30" : "#00000020"
          } 1px, transparent 1px), linear-gradient(90deg, ${
            isDarkMode ? "#ffffff30" : "#00000020"
          } 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />
      {/* Glow effect */}
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "opacity-20" : "opacity-10"
        }`}
        style={{
          background: isDarkMode
            ? "radial-gradient(circle at 30% 50%, rgba(100, 100, 255, 0.15) 0%, transparent 50%)"
            : "radial-gradient(circle at 30% 50%, rgba(100, 100, 255, 0.08) 0%, transparent 50%)",
        }}
      />
      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "300px",
          background: isDarkMode
            ? "linear-gradient(to bottom, transparent 0%, rgba(3, 7, 18, 0.2) 20%, rgba(3, 7, 18, 0.5) 50%, rgba(3, 7, 18, 0.8) 75%, rgb(3, 7, 18) 100%)"
            : "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.8) 75%, rgb(255, 255, 255) 100%)",
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto text-left relative z-10">
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
