import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl border border-border bg-surface-50 dark:bg-surface-800 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        {isDark ? (
          <FiSun className="text-amber-400 text-lg" aria-hidden="true" />
        ) : (
          <FiMoon className="text-foreground-muted text-lg" aria-hidden="true" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
