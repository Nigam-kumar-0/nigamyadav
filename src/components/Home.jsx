import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, Download } from "lucide-react";

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "App Developer",
    "Web Developer"
  ];

  const typingSpeed = 150;
  const deletingSpeed = 75;
  const pauseTime = 2000;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      /* Added light mode background (gray-50) and dark mode gradient */
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white px-6 py-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-4xl text-center">
        
        {/* Avatar Section */}
        <div className="mb-8 mt-10 md:mt-0 relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full border-2 border-indigo-500 overflow-hidden bg-white dark:bg-gray-800">
            <img 
              src="/profile.jpg" 
              alt="Nigam Kumar Avatar" 
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.src = "https://ui-avatars.com/api/?name=Nigam+Kumar&background=6366f1&color=fff";
              }}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-indigo-500">Nigam Kumar</span>
        </h1>

        {/* Animated Typing Role */}
        <div className="mt-4 h-8 flex items-center justify-center">
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-mono">
            {displayText}
            <span className="inline-block w-[2px] h-5 md:h-6 ml-1 bg-indigo-500 animate-pulse"></span>
          </p>
        </div>

        {/* Short intro */}
        <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
          I build modern, responsive, and user-friendly web applications.
          Passionate about clean UI, performance, and real-world problem solving.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-semibold flex items-center gap-2 active:scale-95"
          >
            <Download size={18} />
            Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 mb-6 flex justify-center gap-6 md:gap-8">
          {[
            { Icon: Github, href: "https://github.com/Nigam-kumar-0", label: "GitHub" },
            { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            { Icon: Instagram, href: "https://instagram.com/_siddharth_nigam_05", label: "Instagram" },
            { Icon: Mail, href: "mailto:nigamkumar430raj@gmail.com", label: "Email" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              <social.Icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;