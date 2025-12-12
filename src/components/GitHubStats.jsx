import React, { useState } from "react";
import { Code, Github } from "lucide-react";

const GitHubStats = ({ isDarkMode }) => {
  const username = "IbadS17";
  const theme = isDarkMode ? "dark" : "default";
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (key) => {
    setImageErrors((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section
      id="github-stats"
      className={`py-20 px-4 transition-colors ${
        isDarkMode ? "bg-gray-950" : "bg-white"
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
          SYSTEM_METRICS
        </h2>

        <div className="space-y-8">
          {/* GitHub Stats Card */}
          {!imageErrors.stats && (
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&include_all_commits=true&count_private=true`}
                alt="GitHub Stats"
                className="rounded-lg"
                onError={() => handleImageError("stats")}
              />
            </div>
          )}

          {/* GitHub Streak Stats */}
          {!imageErrors.streak && (
            <div className="flex justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true`}
                alt="GitHub Streak"
                className="rounded-lg"
                onError={() => handleImageError("streak")}
              />
            </div>
          )}

          {/* Top Languages */}
          {!imageErrors.languages && (
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&hide_border=true&layout=compact&langs_count=8`}
                alt="Top Languages"
                className="rounded-lg"
                onError={() => handleImageError("languages")}
              />
            </div>
          )}

          {/* GitHub Profile Trophy */}
          {!imageErrors.trophy && (
            <div className="flex justify-center">
              <img
                src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=${
                  isDarkMode ? "onedark" : "flat"
                }&no-frame=true&row=1&column=7`}
                alt="GitHub Trophies"
                className="rounded-lg"
                onError={() => handleImageError("trophy")}
              />
            </div>
          )}

          {/* Activity Graph */}
          {!imageErrors.activity && (
            <div className="flex justify-center">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${
                  isDarkMode ? "github-dark" : "github-light"
                }&hide_border=true`}
                alt="GitHub Activity Graph"
                className="rounded-lg w-full max-w-5xl"
                onError={() => handleImageError("activity")}
              />
            </div>
          )}

          {/* Fallback message if all images fail */}
          {Object.keys(imageErrors).length > 0 && (
            <div
              className={`text-center p-8 rounded-xl border ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-gray-400"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              <p className="font-mono text-sm">
                Some GitHub stats are temporarily unavailable due to API rate
                limits.
                <br />
                Visit the profile directly for full statistics.
              </p>
            </div>
          )}

          {/* Profile Views Counter */}
          <div className="flex justify-center items-center space-x-4">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 text-lg font-bold rounded-lg border-2 transition hover:scale-105 ${
                isDarkMode
                  ? "text-white bg-gray-900 border-white hover:bg-white hover:text-black"
                  : "text-black bg-white border-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              <Github className="mr-2" size={24} />
              VIEW FULL PROFILE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
