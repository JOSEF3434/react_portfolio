import type {
  BlogPost,
  CaseStudy,
  Certification,
  ExperienceItem,
  NavLink,
  ProfileInfo,
  Project,
  SkillCategory,
  TechExpertise,
} from "../types/portfolio";

export const profile: ProfileInfo = {
  name: "Yossief Enyew",
  fullName: "Yossief Enyew Wondie",
  title: "Full Stack Developer",
  tagline:
    "Building scalable, accessible web applications with modern JavaScript ecosystems — from polished interfaces to robust APIs and AI-powered features.",
  email: "jociemane@gmail.com",
  phone: "+251-96-243-9543",
  location: "Addis Ababa, Ethiopia",
  education: "BSc in Information Technology",
  github: "https://github.com/JOSEF3434",
  cvPath: "/Yossief_Enyew_cv.pdf",
  profileImage:
    "https://res.cloudinary.com/dhpfzwhom/image/upload/v1763072413/dtj4wtzscmgjikttmpbj.jpg",
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages for full-stack development.",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    title: "Frontend",
    description: "Modern UI frameworks and styling systems.",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML5", icon: "html" },
      { name: "Vite", icon: "vite" },
      { name: "reactNative", icon: "reactnative" },
      { name: "materialUi", icon: "materialui" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Server-side logic, APIs, and database technologies.",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "NestJS", icon: "nestjs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Neon Database", icon: "neon" },
      { name: "REST APIs", icon: "api" },
      { name: "supabase", icon: "supabase" },
      { name: "Docker", icon: "docker" },
    ],
  },
  {
    title: "Tools & AI",
    description: "Version control, deployment, and intelligent integrations.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AI Integration", icon: "ai" },
      { name: "Socket.io", icon: "socket" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
];

export const techExpertise: TechExpertise[] = [
  {
    name: "Next.js",
    icon: "nextjs",
    description: "SSR, SSG, and App Router for performant React applications.",
    proficiency: 85,
  },
  {
    name: "React",
    icon: "react",
    description: "Component architecture, hooks, and state management patterns.",
    proficiency: 92,
  },
  {
    name: "Node.js",
    icon: "nodejs",
    description: "Scalable server-side JavaScript with async I/O patterns.",
    proficiency: 88,
  },
  {
    name: "Express.js",
    icon: "express",
    description: "RESTful APIs, middleware, authentication, and routing.",
    proficiency: 90,
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    description: "Document modeling, aggregation pipelines, and indexing.",
    proficiency: 85,
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    description: "Relational schema design, queries, and transactions.",
    proficiency: 80,
  },
  {
    name: "Neon Database",
    icon: "neon",
    description: "Serverless Postgres with branching and edge-ready workflows.",
    proficiency: 78,
  },
  {
    name: "REST APIs",
    icon: "api",
    description: "API design, versioning, validation, and documentation.",
    proficiency: 90,
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    description: "Utility-first styling with responsive, accessible layouts.",
    proficiency: 92,
  },
  {
    name: "Git / GitHub",
    icon: "github",
    description: "Branching strategies, PR workflows, and collaborative development.",
    proficiency: 88,
  },
  {
    name: "AI Integration",
    icon: "ai",
    description: "Gemini API, prompt engineering, and intelligent UX features.",
    proficiency: 82,
  },
];

export const projects: Project[] = [
  {
    id: "fteh-ai",
    title: "Fteh AI",
    subtitle: "AI-Powered Legal Advisor & Lawyer Matchmaker",
    description:
      "A MERN platform delivering AI-powered legal guidance based on Ethiopian law, with lawyer recommendations, real-time chat, and a structured legal database.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Gemini API"],
    liveLink: "https://feth-ai-eo3u.onrender.com/",
    githubLink: "https://github.com/JOSEF3434",
    featured: true,
    gradient: "from-violet-600 via-indigo-600 to-blue-600",
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    subtitle: "Digital Transformation for Hospitality",
    description:
      "Internship project digitizing hotel operations — bookings, room management, billing, and staff workflows replacing manual processes.",
    tech: ["React", "Node.js", "Express", "MySQL", "REST API"],
    featured: true,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    subtitle: "Production-Ready Personal Brand",
    description:
      "A performant, accessible portfolio with dark mode, PWA support, animated sections, and SEO-optimized structure built with React and Tailwind.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "PWA"],
    githubLink: "https://github.com/JOSEF3434",
    featured: false,
    gradient: "from-orange-500 via-rose-500 to-pink-600",
  },
];

export const caseStudies: Record<string, CaseStudy> = {
  "fteh-ai": {
    ...projects[0],
    challenge:
      "Access to legal information in Ethiopia is often difficult, expensive, and time-consuming. Finding the right lawyer for specific cases is also a manual, inefficient process.",
    solution:
      "Built a centralized platform using Google Gemini AI to analyze user queries and provide relevant legal articles, defenses, and interpretations, plus a smart recommendation engine to match users with lawyers.",
    features: [
      "AI Legal Advisor analyzing scenarios against Ethiopian Civil and Criminal law",
      "Lawyer recommendation engine based on specialization, location, and rating",
      "Real-time chat with Socket.io and media support",
      "Structured legal database with categories, articles, and sub-articles",
      "Voice recording and playback support",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Google Gemini API",
      "Tailwind CSS",
    ],
    image:
      "https://res.cloudinary.com/dhpfzwhom/image/upload/v1763072413/dtj4wtzscmgjikttmpbj.jpg",
  },
  "hotel-management": {
    ...projects[1],
    challenge:
      "The client relied on paper-based records for bookings, room service, and billing, leading to errors and inefficiencies.",
    solution:
      "Developed a full-stack web application to manage rooms, reservations, and staff tasks digitally with intuitive admin dashboards.",
    features: [
      "Room booking and availability management",
      "Customer database and service history",
      "Billing and invoicing workflows",
      "Staff task assignment and tracking",
    ],
    techStack: ["React", "Node.js", "Express", "MySQL", "REST API"],
  },
  "portfolio": {
    ...projects[2],
    challenge:
      "Presenting technical work professionally while maintaining performance, accessibility, and maintainability.",
    solution:
      "Architected a modular React portfolio with reusable components, centralized data, theme support, and production-ready SEO.",
    features: [
      "Dark/light mode with system preference detection",
      "Lazy-loaded routes and optimized assets",
      "Accessible navigation with keyboard support",
      "Contact form with client-side validation",
      "PWA manifest for installability",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
  },
};

export const experienceItems: ExperienceItem[] = [
  {
    title: "Web Application Developer (Intern)",
    organization: "Bahir Dar ICT Incubation Center",
    date: "Internship",
    type: "work",
    description: [
      "Developed a comprehensive Hotel Management System web application.",
      "Transformed manual operational processes into a modern digital workflow.",
      "Collaborated with a team to design and implement user-friendly interfaces.",
      "Integrated REST APIs for booking, billing, and staff management modules.",
    ],
  },
  {
    title: "BSc in Information Technology",
    organization: "Haramaya University",
    date: "2022 – 2025",
    type: "education",
    description: [
      "CGPA: 3.55 / 4.00 — graduated with distinction.",
      "Focused on Software Engineering, Data Structures, and Algorithms.",
      "Built capstone and coursework projects using MERN stack technologies.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Learn the Latest Tech Skills",
    issuer: "Professional Development",
    date: "2024",
    file: "/Learn the Latest Tech Skills.PDF",
    category: "Technology",
  },
  {
    title: "Entrepreneurship Training",
    issuer: "Incubation Program",
    date: "2024",
    file: "/Inerprenership.PDF",
    category: "Business",
  },
  {
    title: "HUCISA Certification",
    issuer: "HUCISA",
    date: "2024",
    file: "/HUCISA .PDF",
    category: "Academic",
  },
  {
    title: "Tempo Training",
    issuer: "Professional Program",
    date: "2024",
    file: "/Tempo.PDF",
    category: "Professional",
  },
  // {
  //   title: "Ze-coirt Certificate I",
  //   issuer: "Ze-coirt",
  //   date: "2023",
  //   file: "/Ze-coirt1.PDF",
  //   category: "Professional",
  // },
  // {
  //   title: "Ze-coirt Certificate II",
  //   issuer: "Ze-coirt",
  //   date: "2023",
  //   file: "/Ze-coirt2.PDF",
  //   category: "Professional",
  // },
  // {
  //   title: "Grade 12 Certificate",
  //   issuer: "Ministry of Education",
  //   date: "2022",
  //   file: "/Grade 12.PDF",
  //   category: "Academic",
  // },
  // {
  //   title: "Official Transcript",
  //   issuer: "Haramaya University",
  //   date: "2025",
  //   file: "/Transcript .PDF",
  //   category: "Academic",
  // },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Optimizing React Performance with useMemo and useCallback",
    date: "Jan 15, 2025",
    category: "React",
    excerpt:
      "Learn how to prevent unnecessary re-renders and speed up your React applications by effectively using memoization hooks.",
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    date: "Dec 20, 2024",
    category: "Backend",
    excerpt:
      "Best practices for structuring Express applications, handling errors, and managing database connections for high-scale systems.",
  },
  {
    title: "Introduction to MongoDB Aggregation Framework",
    date: "Nov 10, 2024",
    category: "Database",
    excerpt:
      "Unlock the full power of MongoDB by mastering the aggregation pipeline for complex data analysis and transformation.",
  },
  {
    title: "Why Tailwind CSS is a Game Changer for Developers",
    date: "Oct 05, 2024",
    category: "CSS",
    excerpt:
      "A deep dive into utility-first CSS and how it improves developer experience and maintainability compared to traditional CSS.",
  },
];

export const aboutParagraphs = [
  "I am a passionate and results-driven Full Stack Developer with a BSc in Information Technology from Haramaya University (2025). My journey in tech is defined by a relentless curiosity and a drive to solve complex, real-world problems through code.",
  "With a strong foundation in Computer Science principles, I specialize in building scalable web applications using React, Next.js, Node.js, and modern databases including MongoDB, PostgreSQL, and Neon. I love bridging the gap between elegant design and robust backend architecture.",
  "Whether developing AI-powered legal assistants or streamlining hotel management systems, I am committed to delivering high-quality, accessible solutions that make a tangible impact.",
];

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "CGPA", value: 3.55, suffix: "" },
  { label: "Years Learning", value: 4, suffix: "+" },
];
