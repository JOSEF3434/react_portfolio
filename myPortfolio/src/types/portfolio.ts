export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface TechExpertise {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  gradient: string;
}

export interface CaseStudy extends Project {
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  image?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  date: string;
  type: "work" | "education";
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  file: string;
  category: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export interface ProfileInfo {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  github: string;
  linkedin?: string;
  cvPath: string;
  profileImage: string;
}
