import { GraduationCap, Briefcase } from "lucide-react"

const Timeline = () => {
  const timelineData = [
    {
      title: "Master of Computer Science",
      subtitle: "SRM Institute of Science and Technology • 2025 – 2027",
      description: "Learned core computer science concepts, programming, and web development fundamentals.",
      icon: <GraduationCap size={20} />,
      type: "education"
    },
    {
      title: "Bachelor of Computer Science",
      subtitle: "Bihar University • 2021 – 2024",
      description: "Learned core computer science concepts, programming, and web development fundamentals.",
      icon: <GraduationCap size={20} />,
      type: "education"
    },
    {
      title: "Frontend Developer (Intern)",
      subtitle: "ABC Company • 2023",
      description: "Built responsive UI components using React and Tailwind CSS and collaborated with backend teams.",
      icon: <Briefcase size={20} />,
      type: "experience"
    },
    {
      title: "Self-Learning & Projects",
      subtitle: "Personal Projects • Ongoing",
      description: "Continuously building projects, improving UI/UX skills, and learning modern frontend technologies.",
      icon: <Briefcase size={20} />,
      type: "experience"
    }
  ];

  return (
    <section
      id="timeline"
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-indigo-500">Journey</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            A track record of my education and professional experience
          </p>
        </div>

        {/* Timeline Container */}
        {/* Adjusted border-gray-200 for light mode line */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot/Icon */}
              <div className="absolute -left-[42px] md:-left-[82px] top-0 flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-indigo-500 shadow-lg dark:shadow-xl group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-500 mb-2 block">
                  {item.type}
                </span>
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium mt-1">
                  {item.subtitle}
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;