import { motion } from "framer-motion";

export function SectionHeader({ id, eyebrow, title, description, align = "center" }) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <motion.header
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-4 mb-14 md:mb-16 max-w-3xl ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest">
          <span className="h-px w-8 bg-brand-500/60" aria-hidden="true" />
          {eyebrow}
          <span className="h-px w-8 bg-brand-500/60" aria-hidden="true" />
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      <div
        className="h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-accent-500"
        aria-hidden="true"
      />
      {description && (
        <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.header>
  );
}

export default SectionHeader;
