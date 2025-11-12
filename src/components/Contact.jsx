import React, { useState, useRef } from "react";
import { Code, Mail, Github, Linkedin } from "lucide-react";
import { developerData } from "../src/developerData";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkMode }) => {
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("SENDING");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not set.");
      setStatus("FAILED");
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log("Email sent", result.text);
        setStatus("SENT");
        e.target.reset();
        setTimeout(() => setStatus(null), 3000);
      },
      (error) => {
        console.error("Email send failed", error.text);
        setStatus("FAILED");
        setTimeout(() => setStatus(null), 3000);
      }
    );
  };

  const IconLink = ({ href, Icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center text-lg font-mono group ${
        isDarkMode
          ? "text-gray-400 hover:text-white"
          : "text-gray-700 hover:text-gray-900"
      }`}
    >
      <Icon
        className={`mr-3 ${
          isDarkMode
            ? "text-white/70 group-hover:text-white"
            : "text-gray-500 group-hover:text-gray-900"
        }`}
        size={24}
      />
      {label}
    </a>
  );

  return (
    <section
      id="contact"
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
          SYSTEM_COMM
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 p-8 rounded-xl border ${
            isDarkMode
              ? "bg-gray-950 border-gray-800"
              : "bg-white border-gray-300"
          }`}
        >
          {/* Left */}
          <div>
            <h3
              className={`text-3xl font-bold mb-6 font-mono ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              INITIATE CONNECTION
            </h3>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              } mb-8`}
            >
              Let's collaborate on your next high-impact project or discuss
              architecture.
            </p>
            <div className="space-y-4">
              <IconLink
                href={`mailto:${developerData.contact.email}`}
                Icon={Mail}
                label={developerData.contact.email}
              />
              <IconLink
                href={developerData.contact.github}
                Icon={Github}
                label="Portfolio / ibads17.github.io"
              />
              <IconLink
                href={developerData.contact.linkedin}
                Icon={Linkedin}
                label="LinkedIn / Connect"
              />
            </div>
          </div>

          {/* Right */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              name="user_name"
              type="text"
              placeholder="YOUR NAME"
              required
              className={`w-full p-3 border rounded-lg font-mono ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-gray-100 border-gray-400 text-gray-900"
              }`}
            />
            <input
              name="user_email"
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              required
              className={`w-full p-3 border rounded-lg font-mono ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-gray-100 border-gray-400 text-gray-900"
              }`}
            />
            <textarea
              name="message"
              placeholder="MESSAGE / PROJECT BRIEF"
              rows="5"
              required
              className={`w-full p-3 border rounded-lg font-mono ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-gray-100 border-gray-400 text-gray-900"
              }`}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 font-bold text-black bg-white rounded-lg border-2 border-white font-mono uppercase hover:scale-[1.01] transition"
            >
              {status === "SENDING"
                ? "SENDING..."
                : status === "SENT"
                ? "TRANSMISSION COMPLETE"
                : status === "FAILED"
                ? "FAILED - TRY AGAIN"
                : "SEND MESSAGE"}
            </button>
            {status === "SENT" && (
              <p className="text-center text-green-400 font-mono mt-2">
                [ACK] Message received.
              </p>
            )}
            {status === "FAILED" && (
              <p className="text-center text-red-400 font-mono mt-2">
                Could not send message. Check configuration.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
