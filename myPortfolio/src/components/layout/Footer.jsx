import { FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../../data/portfolio";
import Button from "../ui/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-surface-900 text-surface-300 border-t border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
            <p className="text-surface-400 leading-relaxed">
              {profile.title} crafting accessible, performant web experiences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-500 mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-surface-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="GitHub profile"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-surface-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                aria-label="Send email"
              >
                <FiMail size={20} />
              </a>
            </div>
            <div className="mt-6">
              <Button href={profile.cvPath} download variant="outline" className="text-sm py-2.5">
                Download CV
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-surface-500">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p>Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-600 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface-900 z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
