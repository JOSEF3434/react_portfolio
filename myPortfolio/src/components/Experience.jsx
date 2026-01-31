import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const ExperienceItem = ({ title, organization, date, description, type }) => (
  <div className="relative pl-8 pb-12 border-l-2 border-slate-200 dark:border-slate-700 last:pb-0">
    <div
      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${type === "education" ? "bg-green-500" : "bg-blue-600"}`}
    ></div>
    <div className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
      {date}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
      {title}
    </h3>
    <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
      {organization}
    </h4>
    {description && (
      <div className="text-slate-600 dark:text-slate-400 space-y-2">
        {description}
      </div>
    )}
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
              <FaBriefcase className="text-blue-600" /> Work Experience
            </h3>
            <div className="ml-2">
              <ExperienceItem
                title="Web Application Developer (Intern)"
                organization="Bahir Dar ICT Incubation Center"
                date="Internship"
                description={
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Developed a comprehensive Web Application for Hotel
                      Management System.
                    </li>
                    <li>
                      Transformed manual-based operational processes into a
                      modern, efficient digital system.
                    </li>
                    <li>
                      Collaborated with a team to design and implement
                      user-friendly interfaces.
                    </li>
                  </ul>
                }
                type="work"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
              <FaGraduationCap className="text-green-500" /> Education
            </h3>
            <div className="ml-2">
              <ExperienceItem
                title="BSc in Information Technology"
                organization="Haramaya University"
                date="2022 – 2025"
                description={
                  <p>
                    CGPA: 3.55 / 4.00. Graduated with distinction, focusing on
                    Software Engineering, Data Structures, and Algorithms.
                  </p>
                }
                type="education"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
