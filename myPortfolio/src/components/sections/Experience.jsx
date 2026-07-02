import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { experienceItems, techExpertise } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import SkillIcon from "../ui/SkillIcon";
import { GlassCard } from "../ui/AnimatedCounter";

const TimelineItem = ({ item }) => (
  <div className="relative pl-8 pb-10 border-l-2 border-border last:pb-0">
    <div
      className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-surface-0 dark:border-surface-900 ${
        item.type === "education" ? "bg-emerald-500" : "bg-brand-600"
      }`}
      aria-hidden="true"
    />
    <time className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
      {item.date}
    </time>
    <h4 className="text-lg font-bold text-foreground mt-1">{item.title}</h4>
    <p className="text-foreground-muted font-medium mb-3">{item.organization}</p>
    <ul className="space-y-1.5" role="list">
      {item.description.map((point) => (
        <li key={point} className="text-sm text-foreground-muted flex gap-2">
          <span className="text-brand-500 mt-1.5 shrink-0" aria-hidden="true">
            •
          </span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const TechCard = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <GlassCard className="p-5 h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/50">
          <SkillIcon name={tech.icon} className="text-2xl" />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{tech.name}</h4>
          <p className="text-xs text-foreground-muted mt-1 leading-relaxed">
            {tech.description}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-foreground-muted">Proficiency</span>
          <span className="font-semibold text-brand-600 dark:text-brand-400">
            {tech.proficiency}%
          </span>
        </div>
        <div
          className="h-2 rounded-full bg-surface-100 dark:bg-surface-700 overflow-hidden"
          role="progressbar"
          aria-valuenow={tech.proficiency}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${tech.name} proficiency`}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="h-full rounded-full bg-gradient-to-r from-brand-600 to-accent-500"
          />
        </div>
      </div>
    </GlassCard>
  </motion.div>
);

const Experience = () => {
  const workItems = experienceItems.filter((item) => item.type === "work");
  const educationItems = experienceItems.filter((item) => item.type === "education");

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-surface-50 dark:bg-surface-900/50"
      aria-labelledby="experience-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey & Expertise"
          description="Work history, education, and hands-on experience with modern full-stack technologies."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="flex items-center gap-3 text-xl font-bold text-foreground mb-8">
              <FaBriefcase className="text-brand-600" aria-hidden="true" />
              Work Experience
            </h3>
            <div className="ml-1">
              {workItems.map((item) => (
                <TimelineItem key={item.title} item={item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="flex items-center gap-3 text-xl font-bold text-foreground mb-8">
              <FaGraduationCap className="text-emerald-500" aria-hidden="true" />
              Education
            </h3>
            <div className="ml-1">
              {educationItems.map((item) => (
                <TimelineItem key={item.title} item={item} />
              ))}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground text-center mb-10"
          >
            Core Technology Expertise
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {techExpertise.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
