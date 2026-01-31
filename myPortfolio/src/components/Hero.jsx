import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Full Stack Developer
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Yossief Enyew
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Transforming ideas into scalable, high-performance web applications. 
            Specializing in the MERN stack and modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 rounded-lg font-medium transition-colors">
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 text-slate-500 dark:text-slate-400">
            <a href="https://github.com/JOSEF3434" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiGithub size={24} />
            </a>
            {/* Add LinkedIn if available, otherwise just Email */}
            <a href="mailto:jociemane@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiMail size={24} />
            </a>
            <a href="/Yossief_Enyew_cv.pdf" download className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiDownload size={24} />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <img
              src="https://res.cloudinary.com/dhpfzwhom/image/upload/v1763072413/dtj4wtzscmgjikttmpbj.jpg"
              alt="Yossief Enyew"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-700 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
