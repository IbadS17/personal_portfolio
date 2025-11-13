import React from "react";

const Footer = ({ isDarkMode }) => (
  <footer
    className={`py-6 px-4 text-center transition-colors ${
      isDarkMode
        ? "bg-gray-950 border-t border-gray-800"
        : "bg-gray-200 border-t border-gray-300"
    }`}
  >
    <p
      className={`text-sm font-mono ${
        isDarkMode ? "text-gray-600" : "text-gray-700"
      }`}
    >
      &copy; {new Date().getFullYear()} MOHD IBAAD SHAIKH. [SYSTEM ONLINE].
    </p>

    <p
      className={`text-xs mt-1 font-mono ${
        isDarkMode ? "text-gray-700" : "text-gray-600"
      }`}
    >
      FULL STACK DEVELOPER | STACK: React | Next.js | Node.js | MongoDB | JAVA SpringBoot
    </p>
  </footer>
);

export default Footer;
