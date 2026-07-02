import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";
import { caseStudies } from "../data/portfolio";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { GlassCard } from "../components/ui/AnimatedCounter";

const CaseStudy = () => {
  const { id } = useParams();
  const project = caseStudies[id];

  if (!project) {
    return (
      <Layout>
        <main className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Button href="/" variant="primary">
              Go Home
            </Button>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
        path={`/project/${id}`}
        type="article"
      />
      <main id="main-content" className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-foreground-muted hover:text-brand-600 dark:hover:text-brand-400 mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
          >
            <FiArrowLeft className="mr-2" aria-hidden="true" /> Back to Portfolio
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <header className="mb-10">
              <p className="text-brand-600 dark:text-brand-400 font-medium mb-2">
                {project.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {project.title}
              </h1>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.liveLink && project.liveLink !== "#" && (
                  <Button href={project.liveLink} external>
                    <FiExternalLink aria-hidden="true" /> Live Demo
                  </Button>
                )}
                {project.githubLink && project.githubLink !== "#" && (
                  <Button href={project.githubLink} external variant="secondary">
                    <FiGithub aria-hidden="true" /> Source Code
                  </Button>
                )}
              </div>

              <div
                className={`w-full h-56 md:h-80 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-white/60 text-lg font-medium">Project Preview</span>
                )}
              </div>
            </header>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-10">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                  <p className="text-foreground-muted leading-relaxed">{project.challenge}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">The Solution</h2>
                  <p className="text-foreground-muted leading-relaxed">{project.solution}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                  <ul className="space-y-3" role="list">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-foreground-muted"
                      >
                        <FiCheck
                          className="mt-1 text-emerald-500 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="md:col-span-1">
                <GlassCard className="p-6 sticky top-24">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technologies</h3>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {project.techStack.map((tech) => (
                      <li key={tech}>
                        <Badge variant="muted">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </aside>
            </div>
          </motion.article>
        </div>
      </main>
    </Layout>
  );
};

export default CaseStudy;
