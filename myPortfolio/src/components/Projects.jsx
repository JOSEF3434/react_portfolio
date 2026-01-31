import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col h-full"
  >
    {/* Placeholder for project image - ideally would be a screenshot */}
    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold opacity-80">
      {project.title.substring(0, 1)}
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
        <div className="flex gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-blue-600 transition-colors"
              title="Live Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Source Code"
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>

        {project.id && (
          <Link
            to={`/project/${project.id}`}
            className="flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
          >
            View Case Study <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      id: "fteh-ai",
      title: "Fteh AI",
      description:
        "A complete MERN stack platform designed to provide AI-powered legal guidance based on Ethiopian law. Features include advanced lawyer recommendation engine, real-time chat with media support, and a structured legal database.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Gemini API",
      ],
      liveLink: "https://feth-ai-eo3u.onrender.com/",
      githubLink: "https://github.com/JOSEF3434",
    },
    {
      id: "hotel-management",
      title: "Hotel Management System",
      description:
        "A web-based application developed during internship to digitize hotel operations. Streamlined booking, room management, and customer service processes, replacing manual workflows.",
      tech: ["Web Technologies", "Database", "UI/UX"],
      // liveLink: "#",
      // githubLink: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my technical projects, ranging from AI-powered
            applications to enterprise management systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
