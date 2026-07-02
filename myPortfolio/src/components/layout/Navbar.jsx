import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/portfolio";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import ThemeToggle from "../ui/ThemeToggle";

const sectionIds = ["about", "skills", "projects", "experience", "certifications", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (href) => {
    if (href.startsWith("/")) return location.pathname === href;
    if (location.pathname !== "/") return false;
    return activeSection === href.replace("#", "");
  };

  return (
    <nav
      className="fixed w-full z-50 bg-surface-50/85 dark:bg-surface-900/85 backdrop-blur-xl border-b border-border transition-colors duration-300"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
            aria-label="Yossief Enyew - Home"
          >
            YE
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isActive(link.href)
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-brand-600 to-accent-500 rounded-full"
                  />
                )}
              </button>
            ))}
            <ThemeToggle className="ml-2" />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl border border-border text-foreground-muted hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-50 dark:bg-surface-900 border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400"
                      : "text-foreground-muted hover:bg-surface-100 dark:hover:bg-surface-800"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
