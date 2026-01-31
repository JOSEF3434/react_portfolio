import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPost = ({ title, date, excerpt, category }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="px-3 py-1 bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">
        {category}
      </span>
      <span className="text-slate-500 text-sm">{date}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 hover:text-blue-600 transition-colors cursor-pointer">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
      {excerpt}
    </p>
    <Link to="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">
      Read more &rarr;
    </Link>
  </motion.article>
);

const Blog = ({ theme, toggleTheme }) => {
  const posts = [
    {
      title: "Optimizing React Performance with useMemo and useCallback",
      date: "Jan 15, 2025",
      category: "React",
      excerpt: "Learn how to prevent unnecessary re-renders and speed up your React applications by effectively using memoization hooks."
    },
    {
      title: "Building Scalable APIs with Node.js and Express",
      date: "Dec 20, 2024",
      category: "Backend",
      excerpt: "Best practices for structuring your Express applications, handling errors, and managing database connections for high-scale systems."
    },
    {
      title: "Introduction to MongoDB Aggregation Framework",
      date: "Nov 10, 2024",
      category: "Database",
      excerpt: "Unlock the full power of MongoDB by mastering the aggregation pipeline for complex data analysis and transformation."
    },
     {
      title: "Why Tailwind CSS is a Game Changer for Developers",
      date: "Oct 05, 2024",
      category: "CSS",
      excerpt: "A deep dive into utility-first CSS and how it improves developer experience and maintainability compared to traditional CSS."
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Technical Insights</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Sharing my journey, learnings, and thoughts on modern web development technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
