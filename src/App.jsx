import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import GitHubStats from "./components/GitHubStats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen overflow-x-hidden`}
    >
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <GitHubStats isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
