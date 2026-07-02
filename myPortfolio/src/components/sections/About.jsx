import { motion } from "framer-motion";
import { aboutParagraphs, profile, stats } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import { AnimatedCounter, GlassCard } from "../ui/AnimatedCounter";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface-0" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="Crafting Digital Solutions"
          description="Passionate about building products that are fast, accessible, and meaningful."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Profile</h3>
              <dl className="space-y-4">
                {[
                  ["Name", profile.fullName],
                  ["Email", profile.email, `mailto:${profile.email}`],
                  ["Location", profile.location],
                  ["Education", profile.education],
                ].map(([label, value, href]) => (
                  <div
                    key={label}
                    className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-semibold text-foreground-muted text-sm">{label}</dt>
                    <dd className="text-foreground text-sm sm:text-right">
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-600 dark:text-brand-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl border border-border bg-surface-50 dark:bg-surface-800/50 text-center"
                >
                  <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            {aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-foreground-muted leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
