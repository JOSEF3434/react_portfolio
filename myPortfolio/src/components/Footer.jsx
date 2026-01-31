import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Yossief Enyew</h2>
            <p className="text-slate-400">Full Stack Developer | Problem Solver</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/JOSEF3434" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="mailto:jociemane@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <FiMail size={24} />
            </a>
            {/* Add LinkedIn */}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Yossief Enyew. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
