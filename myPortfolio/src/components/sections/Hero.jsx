import { motion } from "framer-motion";
import { FiGithub, FiMail, FiDownload, FiArrowDown } from "react-icons/fi";
import { profile } from "../../data/portfolio";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-surface-0 to-accent-50/50 dark:from-surface-900 dark:via-surface-900 dark:to-brand-950/30" />
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse-soft"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-soft"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200/50 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.p>

          <p className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">
            {profile.title}
          </p>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              {profile.name.split(" ")[0]}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <Button href={profile.cvPath} download variant="ghost">
              <FiDownload aria-hidden="true" /> Resume
            </Button>
          </div>

          <div
            className="flex items-center justify-center lg:justify-start gap-5 text-foreground-muted"
            role="list"
            aria-label="Social links"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl border border-border hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div
              className="absolute -inset-4 bg-gradient-to-r from-brand-600 to-accent-500 rounded-full opacity-20 blur-2xl animate-pulse-soft"
              aria-hidden="true"
            />
            <div className="relative p-1 rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-accent-500">
              <img
                src={profile.profileImage}
                alt={`Portrait of ${profile.name}`}
                width={384}
                height={384}
                loading="eager"
                fetchPriority="high"
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-surface-0 dark:border-surface-900 shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted hover:text-brand-600 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <FiArrowDown className="animate-bounce" aria-hidden="true" />
      </motion.a>
    </section>
  );
};

export default Hero;
