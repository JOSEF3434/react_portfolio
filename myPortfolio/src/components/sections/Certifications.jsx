import { motion } from "framer-motion";
import { FiDownload, FiAward } from "react-icons/fi";
import { certifications } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import { GlassCard } from "../ui/AnimatedCounter";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 bg-surface-0"
      aria-labelledby="certifications-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & Achievements"
          description="Academic records, professional training, and certifications that reflect continuous learning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="p-5 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400">
                    <FiAward size={20} aria-hidden="true" />
                  </div>
                  <Badge variant="muted">{cert.category}</Badge>
                </div>
                <h3 className="font-bold text-foreground text-sm leading-snug mb-1 flex-grow">
                  {cert.title}
                </h3>
                <p className="text-xs text-foreground-muted mb-1">{cert.issuer}</p>
                <time className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                  {cert.date}
                </time>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:gap-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
                >
                  <FiDownload size={16} aria-hidden="true" />
                  View Certificate
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
