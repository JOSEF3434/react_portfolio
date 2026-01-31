import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiVite, SiLaravel, SiCplusplus } from 'react-icons/si';

const SkillCard = ({ title, skills }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div key={skill.name} className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors">
          <span className="text-xl text-blue-600 dark:text-blue-400">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillSets = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiCplusplus /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Vite", icon: <SiVite /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Laravel", icon: <SiLaravel /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "REST APIs", icon: <FaJs /> }, // Generic icon for API
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Gemini AI", icon: <span className="text-xs font-bold">AI</span> },
        { name: "Chapa API", icon: <span className="text-xs font-bold">PAY</span> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and user-centric applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillSets.map((set, index) => (
            <motion.div
              key={set.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillCard title={set.title} skills={set.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
