import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/portfolio";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import Badge from "../components/ui/Badge";
import { GlassCard } from "../components/ui/AnimatedCounter";

const BlogPost = ({ title, date, excerpt, category, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <GlassCard className="p-6 md:p-8 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Badge>{category}</Badge>
        <time className="text-foreground-muted text-sm">{date}</time>
      </div>
      <h2 className="text-xl font-bold text-foreground mb-3 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
        {title}
      </h2>
      <p className="text-foreground-muted text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
        {excerpt}
      </p>
      <Link
        to="#"
        className="text-brand-600 dark:text-brand-400 font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
        aria-label={`Read more about ${title}`}
      >
        Read more &rarr;
      </Link>
    </GlassCard>
  </motion.article>
);

const Blog = () => {
  return (
    <Layout>
      <SEO
        title="Technical Insights"
        description="Articles and learnings on React, Node.js, databases, and modern web development."
        path="/blog"
      />
      <main id="main-content" className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-widest text-sm mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Insights
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Sharing my journey, learnings, and thoughts on modern web development technologies.
            </p>
          </motion.header>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <BlogPost key={post.title} {...post} index={index} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
