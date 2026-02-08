import {
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  GraduationCap, 
  Briefcase,
  Code2,
  Palette,
  Database,
  Wrench,
  ChevronRight,
  Layout,
  Layers,
  Smartphone,
  Zap,
  Server,
  Cloud,
  Terminal,
  Cpu
} from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      categoryIcon: <Code2 size={28} />,
      skills: [
        { name: "React.js", icon: <Layout size={16} /> },
        { name: "Next.js", icon: <Zap size={16} /> },
        { name: "TypeScript", icon: <Code2 size={16} /> },
        { name: "Tailwind CSS", icon: <Palette size={16} /> },
        { name: "Redux Toolkit", icon: <Layers size={16} /> },
        { name: "Framer Motion", icon: <Zap size={16} /> },
        { name: "java", icon: <Zap size={16} /> }
      ]
    },
    {
      title: "UI / UX",
      categoryIcon: <Palette size={28} />,
      skills: [
        { name: "Figma", icon: <Palette size={16} /> },
        { name: "Responsive Design", icon: <Smartphone size={16} /> },
        { name: "Mobile First UI", icon: <Smartphone size={16} /> },
        { name: "Design Systems", icon: <Layers size={16} /> },
        { name: "Accessibility", icon: <Zap size={16} /> },
        { name: "Clean Code", icon: <Code2 size={16} /> }
      ]
    },
    {
      title: "Backend / Data",
      categoryIcon: <Database size={28} />,
      skills: [
        { name: "Node.js", icon: <Server size={16} /> },
        { name: "Express", icon: <Zap size={16} /> },
        { name: "REST APIs", icon: <Cloud size={16} /> },
        { name: "MongoDB", icon: <Database size={16} /> },
        { name: "Firebase", icon: <Cloud size={16} /> },
        { name: "PostgreSQL", icon: <Database size={16} /> }
      ]
    },
    {
      title: "Tools & Others",
      categoryIcon: <Wrench size={28} />,
      skills: [
        { name: "Git & GitHub", icon: <Github size={16} /> },
        { name: "Docker", icon: <Layers size={16} /> },
        { name: "Vite / Webpack", icon: <Zap size={16} /> },
        { name: "Jest", icon: <Terminal size={16} /> },
        { name: "Postman", icon: <Terminal size={16} /> },
        { name: "CI/CD Basics", icon: <Cpu size={16} /> }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-indigo-500">Expertise</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I've mastered to build scalable, high-performance web applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm dark:shadow-none">
                {category.categoryIcon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, sIndex) => (
                  <div 
                    key={sIndex} 
                    className="flex items-center gap-3 p-2 rounded-lg bg-white/50 dark:bg-gray-800/20 group/item hover:bg-indigo-500/10 transition-all duration-300 border border-transparent hover:border-indigo-500/20"
                  >
                    <span className="text-indigo-500 dark:text-indigo-400 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-300 transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover/item:text-indigo-600 dark:group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;