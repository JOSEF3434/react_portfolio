import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}
             className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg"
          >
             <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-lg">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h4>
                    <a href="mailto:jociemane@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">jociemane@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-lg">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Phone</h4>
                    <a href="tel:+251962439543" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">+251-96-243-9543</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 rounded-lg">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300">Bahir Dar, Ethiopia</p>
                  </div>
                </div>
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
             className="flex flex-col justify-center"
          >
             <form className="space-y-4" action="mailto:jociemane@gmail.com" method="post" encType="text/plain">
                <div>
                   <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                   <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Your Name" required />
                </div>
                <div>
                   <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                   <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="your@email.com" required />
                </div>
                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                   <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-colors transform hover:-translate-y-1">
                   Send Message
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
