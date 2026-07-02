import { motion } from "framer-motion";
import { skillCategories } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import SkillIcon from "../ui/SkillIcon";
import { GlassCard } from "../ui/AnimatedCounter";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-surface-50 dark:bg-surface-900/50"
      aria-labelledby="skills-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Skills"
          description="A comprehensive toolkit for building modern, scalable, and user-centric applications."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <GlassCard className="p-6 md:p-8 h-full">
                <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-sm text-foreground-muted mb-6">{category.description}</p>
                <ul className="flex flex-wrap gap-2.5" role="list">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-0 dark:bg-surface-900/80 border border-border text-sm font-medium text-foreground hover:border-brand-500/40 hover:shadow-sm transition-all">
                        <SkillIcon name={skill.icon} />
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
