import { useEffect, useState } from "react";
import "./App.css";
import Link from "./Link";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <div className="container min-h-screen text-slate-800 dark:text-slate-100 px-4 sm:px-6">
      <div className="topbar mb-4">
        <button
          className="toggle px-3 py-2 rounded-md border shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Header */}
      <header className="header shadow-sm hover:shadow-md transition flex-col md:flex-row items-start md:items-center">
        <img
          src="https://res.cloudinary.com/dhpfzwhom/image/upload/v1763072413/dtj4wtzscmgjikttmpbj.jpg"
          alt="Profile"
          className="avatar flex-shrink-0"
        />
        <div>
          <h1 className="title">YOSSIEF ENYEW</h1>
          <p className="subtitle">
            Graduated with a BSc in Information Technology
          </p>
          <p className="muted">
            Motivated, results-driven, with strong foundations in programming
            and problem solving.
          </p>
        </div>
      </header>

      {/* Body Grid */}
      <div className="grid gap-6">
        {/* Sidebar */}
        <aside className="sidebar shadow-sm">
          <h2>Profile</h2>
          <ul className="list space-y-1.5">
            <li>Yossief Eyew Wondie</li>
            <li>Male</li>
            <li>June 23, 2004</li>
            <li>Ethiopian</li>
          </ul>

          <h2>Contact</h2>
          <ul className="list space-y-1.5">
            <li>+251-96-243-9543</li>
            <li>jociemane@gmail.com</li>
            <li>
              <Link
                href="https://github.com/JOSEF3434"
                target="_blank"
                rel="noreferrer"
              >
                github.com/JOSEF3434
              </Link>
            </li>
            <li>Bahir Dar, Ethiopia</li>
          </ul>

          <h2>Skills</h2>
          <ul className="list space-y-1.5">
            <li>System Development</li>
            <li>Website Design</li>
            <li>Mobile App Development</li>
            <li>Data Management</li>
            <li>Team Work &amp; Management</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>
          </ul>

          <h2>Language</h2>
          <ul className="list space-y-1.5">
            <li>English (Excellent)</li>
            <li>Amharic (Excellent)</li>
          </ul>
        </aside>

        {/* Main Sections */}
        <main className="space-y-6">
          <section className="section shadow-sm">
            <h2>About Me</h2>
            <p className="muted">
              I am a recent graduate from Haramaya University with a Bachelor of
              Science in Information Technology (2025 G.C). I bring a strong
              foundation in programming, problem-solving, and algorithms, with a
              solid understanding of core Computer Science principles and the
              ability to apply them effectively to solve complex, real-world
              problems.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="section shadow-sm">
            <h2>Technical Skills</h2>
            <h3>Languages &amp; Frameworks</h3>
            <div className="tags gap-3 py-3.5">
              <span className="badge">JavaScript</span>
              <span className="badge">Node.js</span>
              <span className="badge">React.js</span>
              <span className="badge">Express.js</span>
              <span className="badge">HTML &amp; CSS</span>
              <span className="badge">Python</span>
              <span className="badge">PHP</span>
              <span className="badge">C++</span>
              <span className="badge">Java</span>
              <span className="badge">React Native</span>
              <span className="badge">Laravel</span>
            </div>
            <h3>Frontend Tools</h3>
            <div className="tags gap-2 py-3.5">
              <span className="badge">React Vite</span>
              <span className="badge">Tailwind CSS</span>
              <span className="badge">HTML</span>
            </div>
            <h3>Backend Tools</h3>
            <div className="tags gap-2 py-3.5">
              <span className="badge">MongoDB</span>
              <span className="badge">REST APIs</span>
              <span className="badge">Express.js</span>
            </div>
            <h3>AI Integration</h3>
            <div className="tags gap-2 py-3.5">
              <span className="badge">
                Google Gemini AI (NLP &amp; Recommendation)
              </span>
            </div>
            <h3>Other Tools</h3>
            <div className="tags gap-2 py-3.5">
              <span className="badge">Git</span>
              <span className="badge">GitHub</span>
              <span className="badge">Chapa API (Payments)</span>
            </div>
          </section>

          <section className="section shadow-sm">
            <h2>Education Background</h2>
            <div className="row">
              <strong>2022 – 2025</strong>
              <span className="badge">Haramaya, Ethiopia</span>
            </div>
            <p className="muted">
              Haramaya University — BSc in Information Technology, CGPA: 3.55 /
              4.00
            </p>
            <p>
              <Link
                href="https://www.haramaya.edu.et"
                target="_blank"
                rel="noreferrer"
              >
                www.haramaya.edu.et
              </Link>
            </p>
          </section>

          <section className="section shadow-sm">
            <h2>Work Experience</h2>
            <div>
              <h3>Internship — Bahir Dar ICT Incubation Center</h3>
              <ul className="list space-y-1.5">
                <li>Developed a Web Application for Hotel Management System</li>
                <li>
                  Transformed manual-based processes into a modern digital
                  system
                </li>
              </ul>
            </div>
            <div>
              <Link to = "https://feth-ai-eo3u.onrender.com/">
              <h3>Final Project — Fteh AI</h3></Link>
              <ul className="list space-y-1.5">
                <li>
                  AI-based legal adviser and lawyer finder using Gemini API
                </li>
                <li>
                  "A complete MERN stack platform designed to provide AI-powered legal guidance based on Ethiopian law, integrating Google Gemini for advanced legal reasoning.",
                  "Fully structured legal database storing Civil and Criminal law categories, subclasses, articles, and sub-articles for quick and accurate legal information retrieval.",
                  "AI system analyzes user scenarios and returns relevant legal articles, defenses, interpretations, and applicable constitutional references.",
                  "Advanced Lawyer Recommendation Engine using Google Gemini + fallback algorithm that matches users with lawyers based on specialization, location, experience, language, rating, and consultation fees.",
                  "Real-time chat system using Socket.io with full media support including images, videos, audio messages, documents, and voice recording directly from the microphone.",
                  "Consultation booking and scheduling system allowing users to book and pay for legal sessions with lawyers.",
                  "Integrated Chapa Payment Gateway for secure online payments for lawyer consultations and services.",
                  "Role-based dashboards for Users, Lawyers, Managers, and Admins with different access permissions and features.",
                  "Responsive and modern UI built with React Vite and Tailwind CSS, including query forms, article search filters, lawyer profiles, and admin management panels.",
                  "Cloudinary integration for secure storage of profile pictures, legal documents, and media uploaded during chat.",
                  "Authentication and authorization using JWT, including profile management and secure session handling.",
                  "AI-powered article search in Query Component using Type, Subclass, Language, and Location filters.",
                  "Backend built with Express.js following modular structure (Models, Controllers, Routes) ensuring scalability.",
                  "Database designed with full normalization, storing legal data, lawyer profiles, chat messages, bookings, payments, and AI logs.",
                  "Admin tools to manage lawyers, users, legal content, bookings, transactions, and system monitoring.",
                  "Designed as a full academic final-year project for Haramaya University IT Department, demonstrating expertise in AI, MERN, and professional system architecture."
                 </li>
              </ul>
            </div>
            <div>
              <h3>Course Projects</h3>
              <ul className="list space-y-1.5">
                <li>
                  Human Resource Management System — Web-based HRM for Haramaya
                  University
                </li>
                <li>
                  Typing Speed Web Application — Converted manual ticking system
                  into a web app
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="section shadow-sm">
            <h2>Projects</h2>
            <div className="project">
              <h3>
                FETH AI – AI-powered Legal Adviser &amp; Lawyer Finder System
              </h3>
              <p className="muted">
                Full-stack MERN system integrating Google Gemini AI to analyze
                legal cases under Ethiopian law. Includes lawyer recommendation,
                media-rich real-time chat, and Chapa payment integration.
              </p>
              <p className="actions mt-2">
                <Link
                  href="https://feth-ai-eo3u.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Render →
                </Link>
              </p>
            </div>
            <div className="project">
              <h3>Hotel Management System – MERN Stack</h3>
              <p className="muted">
                Complete hotel booking and management system with role-based
                access and payments.
              </p>
              <p className="actions mt-2">
                <Link
                  href="https://github.com/JOSEF3434/INTERN"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </Link>
              </p>
            </div>
            <div className="project">
              <h3>Clinic Management System</h3>
              <p className="muted">
                VB.NET system managing patient records, scheduling, and medical
                inventory.
              </p>
              <p className="actions mt-2">
                <Link
                  href="https://github.com/JOSEF3434/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </Link>
              </p>
            </div>
            <div className="project">
              <h3>E-Commerce Website</h3>
              <p className="muted">
                Responsive HTML/CSS/JS platform with shopping cart and admin
                dashboard.
              </p>
              <p className="actions mt-2">
                <Link
                  href="https://github.com/JOSEF3434/HTML-E-Comers"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </Link>
              </p>
            </div>
          </section>

          <section className="section shadow-sm">
            <h2>Certificates</h2>
            <ul className="list space-y-1.5">
              <li>
                <Link
                  href="/Yossief_Enyew_cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume (PDF)
                </Link>
              </li>
              <li>
                <Link
                  href="/Learn the Latest Tech Skills.PDF"
                  target="_blank"
                  rel="noreferrer"
                >
                  Programming Fundamentals Nanodegree
                </Link>
              </li>
              <li>
                <Link href="/Transcript .PDF" target="_blank" rel="noreferrer">
                  University Transcript
                </Link>
              </li>
              <li>
                <Link
                  href="/Approval sheet.PDF"
                  target="_blank"
                  rel="noreferrer"
                >
                  Approval Sheet
                </Link>
              </li>
              <li>
                <Link href="/HUCISA .PDF" target="_blank" rel="noreferrer">
                  HUCISA
                </Link>
              </li>
            </ul>
          </section>

          <section className="section shadow-sm">
            <h2>Reference</h2>
            <p className="muted">
              Haramaya University — Website: https://www.haramaya.edu.et, Tel:
              (251)-255-530-372/096, Fax: (251)-255-530-325
            </p>
            <p className="muted">
              Mr Tadese K., College of Computing and Informatics Registeral
              Head, Email: taddeekb@gmail.com
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
