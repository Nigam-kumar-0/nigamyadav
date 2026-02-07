import React, { useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import ParticlesBackground from "./components/ParticlesBackground"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // This is the "magic" that makes the 'dark:' classes work
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <div className="min-h-screen transition-colors duration-300">
      <ParticlesBackground isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <footer className="py-10 text-center bg-white dark:bg-black text-gray-500 border-t border-gray-100 dark:border-gray-900 transition-colors">
        <p className="text-sm font-medium">© {new Date().getFullYear()} Nigam Kumar. Built with React & Tailwind.</p>
      </footer>
    </div>
  )
}

export default App
