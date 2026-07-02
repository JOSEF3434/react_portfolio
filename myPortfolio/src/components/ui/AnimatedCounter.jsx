import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedCounter({ value, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(2)) : Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [value, duration, isDecimal]);

  return (
    <span>
      {isDecimal ? count.toFixed(2) : count}
      {suffix}
    </span>
  );
}

export function GlassCard({ children, className = "", hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      className={`rounded-2xl border border-border/80 bg-surface-50/80 dark:bg-surface-800/60 backdrop-blur-md shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default GlassCard;
