import { User, Code, Briefcase, Zap } from "lucide-react"

const About = () => {
  return (
    <section
      id="about"
      /* Added light mode bg-white and text-gray-900, kept dark mode as bg-black */
      className="min-h-screen flex items-center bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-indigo-500">Me</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know who I am and what I do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              I'm <span className="text-indigo-500">Nigam Kumar</span>, a dedicated developer.
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I’m a passionate frontend developer who loves building clean,
              responsive, and interactive web interfaces. I focus on writing
              maintainable code and delivering smooth user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I work mainly with React, Tailwind CSS, and modern JavaScript.
              I enjoy learning new technologies and turning ideas into
              real-world applications.
            </p>
            
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-sm font-medium">
                <Zap size={16} /> Available for new opportunities
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm dark:shadow-none">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                A self-motivated developer with a strong interest in UI/UX
                design and frontend architecture.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm dark:shadow-none">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">What I Do</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Build modern web apps using React, Tailwind CSS, and clean
                component-based design.
              </p>
            </div>

            {/* Card 3 (Span) */}
            <div className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 sm:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm dark:shadow-none">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">My Goal</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                To grow as a professional developer and contribute to impactful
                products that solve real problems through innovative engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
