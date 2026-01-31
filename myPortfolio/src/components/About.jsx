import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
             {/* Abstract tech visualization or secondary image could go here */}
            <div className="relative p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl">
               <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Profile</h3>
               <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                  <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-semibold">Name:</span>
                    <span>Yossief Enyew Wondie</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:jociemane@gmail.com" className="text-blue-600 hover:underline">jociemane@gmail.com</a>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span className="font-semibold">Location:</span>
                    <span>Addis Ababa, Ethiopia</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="font-semibold">Education:</span>
                    <span>BSc in Information Technology</span>
                  </li>
               </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            <p>
              I am a passionate and results-driven Full Stack Developer with a BSc in Information Technology from Haramaya University (2025). My journey in tech is defined by a relentless curiosity and a drive to solve complex, real-world problems through code.
            </p>
            <p>
              With a strong foundation in Computer Science principles, I specialize in building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). I love bridging the gap between elegant design and robust backend architecture.
            </p>
            <p>
              Whether it's developing AI-powered legal assistants or streamlining hotel management systems, I am committed to delivering high-quality solutions that make a tangible impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
