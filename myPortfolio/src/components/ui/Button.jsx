import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:brightness-110",
  secondary:
    "bg-surface-100 dark:bg-surface-800 text-foreground border border-border hover:border-brand-500/50 hover:bg-surface-50 dark:hover:bg-surface-700",
  ghost:
    "text-foreground-muted hover:text-brand-600 dark:hover:text-brand-400 hover:bg-surface-100 dark:hover:bg-surface-800",
  outline:
    "border-2 border-brand-600 text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:text-white",
};

export function Button({
  children,
  variant = "primary",
  href,
  download,
  external,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface-900 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        whileHover={{ y: disabled ? 0 : -2 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
