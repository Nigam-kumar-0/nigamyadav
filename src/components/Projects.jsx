import { Github, ExternalLink, Code2 } from "lucide-react"

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio built using React and Tailwind CSS featuring dynamic animations and glassmorphism.",
      tags: ["React", "Tailwind", "Vite", "Lucide"],
      github: "https://github.com/",
      live: "#",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "React Dashboard",
      description: "Responsive admin dashboard with reusable components, real-time charts, and complex state management.",
      tags: ["React", "Recharts", "Context API", "SASS"],
      github: "https://github.com/",
      live: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Task Manager App",
      description: "A fully functional task management application with drag-and-drop CRUD functionality and persistence.",
      tags: ["React", "DND Kit", "Firebase", "CRUD"],
      github: "https://github.com/",
      live: "#",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            A selection of my recent works and technical experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Project Visual Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-20 dark:opacity-20 group-hover:opacity-40 transition-opacity duration-500 relative flex items-center justify-center`}>
                <Code2 size={48} className="text-indigo-600 dark:text-white opacity-40 dark:opacity-20 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-gray-800/50 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-100 dark:border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm font-semibold group/link"
                  >
                    <Github size={20} className="group-hover/link:scale-110 transition-transform" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm font-semibold group/link"
                  >
                    <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;