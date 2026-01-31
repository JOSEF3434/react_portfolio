import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CaseStudy = ({ theme, toggleTheme }) => {
  const { id } = useParams();

  // In a real app, fetch this data based on ID
  const projectData = {
    "fteh-ai": {
      title: "Fteh AI",
      subtitle: "AI-Powered Legal Advisor & Lawyer Matchmaker",
      description: "A comprehensive MERN stack platform designed to provide AI-powered legal guidance based on Ethiopian law, integrating Google Gemini for advanced legal reasoning.",
      image: "https://res.cloudinary.com/dhpfzwhom/image/upload/v1763072413/dtj4wtzscmgjikttmpbj.jpg", // Placeholder
      challenge: "Access to legal information in Ethiopia is often difficult, expensive, and time-consuming. Finding the right lawyer for specific cases is also a manual, inefficient process. The goal was to democratize access to legal advice using modern AI.",
      solution: "We built a centralized platform that uses Google Gemini AI to analyze user queries and provide relevant legal articles, defenses, and interpretations. It also features a smart recommendation engine to match users with lawyers.",
      features: [
        "AI Legal Advisor: Analyzes scenarios and returns relevant Ethiopian Civil and Criminal law articles.",
        "Lawyer Recommendation Engine: Matches users based on specialization, location, and rating.",
        "Real-time Chat: Socket.io powered chat with media support (images, voice, docs).",
        "Structured Legal Database: Organized storage of law categories, articles, and sub-articles.",
        "Voice Interaction: Voice recording and playback support."
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Google Gemini API", "Tailwind CSS"],
      liveLink: "https://feth-ai-eo3u.onrender.com/",
      githubLink: "https://github.com/JOSEF3434"
    },
    "hotel-management": {
      title: "Hotel Management System",
      subtitle: "Digital Transformation for Hospitality",
      description: "A web application to transform manual hotel operations into a digital workflow.",
      challenge: "The client relied on paper-based records for bookings, room service, and billing, leading to errors and inefficiencies.",
      solution: "Developed a full-stack web application to manage rooms, reservations, and staff tasks digitally.",
      features: [
        "Room Booking Management",
        "Customer Database",
        "Billing & Invoicing",
        "Staff Task Assignment"
      ],
      techStack: ["React", "Node.js", "MySQL", "Express"],
      liveLink: "#",
      githubLink: "#"
    }
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
            <FiArrowLeft className="mr-2" /> Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-8">{project.subtitle}</p>
            
            <div className="flex gap-4 mb-12">
              {project.liveLink && project.liveLink !== '#' && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  <FiExternalLink /> Live Demo
                </a>
              )}
              {project.githubLink && project.githubLink !== '#' && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors">
                  <FiGithub /> Source Code
                </a>
              )}
            </div>

            {/* Hero Image */}
            <div className="w-full h-64 md:h-96 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden mb-12 flex items-center justify-center">
               {/* Use a placeholder gradient if no real image */}
               <div className="text-slate-400 text-lg">Project Screenshot</div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.challenge}</p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.solution}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <FiCheck className="mt-1 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="md:col-span-1">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl sticky top-24">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-md border border-slate-200 dark:border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
