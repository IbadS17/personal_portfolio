import React, { useState, useEffect } from "react";

const TypingEffect = ({ phrases, isDarkMode }) => {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const fullText = phrases[phraseIndex];

    if (isTyping) {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 80);
      } else timeout = setTimeout(() => setIsTyping(false), 2000);
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 40);
      } else {
        setIsTyping(true);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, phraseIndex, phrases]);

  return (
    <span className="font-mono inline-block">
      {currentText}
      <span
        className={`animate-pulse-slow inline-block ml-1 w-2 h-6 md:h-8 align-text-bottom ${
          isDarkMode ? "bg-white" : "bg-gray-900"
        }`}
      ></span>
    </span>
  );
};

export default TypingEffect;
