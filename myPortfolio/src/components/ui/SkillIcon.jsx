import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaPython,
  FaPhp,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCcApplePay,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiLaravel,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiSocketdotio,
  SiSupabase,
  SiDocker,
} from "react-icons/si";
import { TbApi, TbBrain } from "react-icons/tb";

const iconMap = {
  javascript: FaJs,
  typescript: SiTypescript,
  python: FaPython,
  php: FaPhp,
  java: FaJava,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  html: FaHtml5,
  vite: SiVite,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  neon: SiPostgresql,
  api: TbApi,
  git: FaGitAlt,
  github: FaGithub,
  ai: TbBrain,
  socket: SiSocketdotio,
  laravel: SiLaravel,
  supabase: SiSupabase,
  docker: SiDocker,
  cpp: FaCcApplePay,
  nestjs: TbApi, // Placeholder icon for NestJS
  reactnative: FaReact, // Placeholder icon for React Native
  materialui: FaReact, // Placeholder icon for Material UI
};

export function SkillIcon({ name, className = "text-xl" }) {
  const Icon = iconMap[name];
  if (!Icon) {
    return (
      <span className={`font-bold text-brand-600 dark:text-brand-400 ${className}`}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return <Icon className={`text-brand-600 dark:text-brand-400 ${className}`} aria-hidden="true" />;
}

export default SkillIcon;
