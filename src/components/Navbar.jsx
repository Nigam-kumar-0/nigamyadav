import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Timeline", link: "#timeline" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
          Nigam<span className="text-indigo-500">.</span>
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-300">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link} className="hover:text-indigo-500 dark:hover:text-indigo-400 transition font-medium">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 hidden md:block mx-2"></div>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-all border border-transparent hover:border-indigo-500/50"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-600 dark:text-gray-300">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link} onClick={() => setOpen(false)} className="hover:text-indigo-500 transition text-lg font-medium">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};


export default Navbar
