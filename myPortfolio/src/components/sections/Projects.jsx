import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import { GlassCard } from "../ui/AnimatedCounter";

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay: index * 0.1 }}
    className="h-full"
  >
    <GlassCard className="overflow-hidden flex flex-col h-full group">
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-6xl font-black text-white/20 select-none" aria-hidden="true">
          {project.title.charAt(0)}
        </span>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        {project.featured && (
          <Badge variant="success" className="absolute top-4 left-4">
            Featured
          </Badge>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-1">
          {project.subtitle}
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          {project.title}
        </h3>
        <p className="text-foreground-muted text-sm leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-5 border-t border-border mt-auto">
          <div className="flex gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-muted hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label={`Live demo of ${project.title}`}
              >
                <FiExternalLink size={18} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label={`Source code of ${project.title}`}
              >
                <FiGithub size={18} />
              </a>
            )}
          </div>

          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:gap-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg px-2 py-1"
          >
            Case Study <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </GlassCard>
  </motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-surface-0" aria-labelledby="projects-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Real-world applications spanning AI integration, enterprise systems, and modern web development."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
