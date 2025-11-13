import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-20 pt-6 px-4">
      <div
        className={`max-w-4xl mx-auto w-full rounded-3xl backdrop-blur-xl border shadow-2xl transition duration-500 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-700/30"
            : "bg-white/50 border-gray-300/50"
        }`}
      >
        <div className="px-6 py-3 flex justify-between items-center">
          <a
            href="#home"
            className={`text-xl font-mono tracking-widest ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            IBAAD.DEV
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm px-3 py-2 rounded-xl ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ml-4 ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-200 text-yellow-600"
              }`}
            >
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-4 ${
                isDarkMode
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-200 text-yellow-600"
              }`}
            >
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 border rounded-full ${
                isDarkMode
                  ? "text-white border-white"
                  : "text-gray-900 border-gray-900"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className={`md:hidden rounded-b-3xl ${
              isDarkMode ? "bg-black/50" : "bg-white/50"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-2 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
