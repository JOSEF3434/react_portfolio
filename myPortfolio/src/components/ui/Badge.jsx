export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default:
      "bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 border-brand-200/60 dark:border-brand-800/60",
    muted:
      "bg-surface-100 dark:bg-surface-800 text-foreground-muted border-border",
    success:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
