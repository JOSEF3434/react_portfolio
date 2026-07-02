import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";
import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO description="Portfolio of Yossief Enyew — Full Stack Developer specializing in React, Next.js, Node.js, and AI-powered web applications." />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </Layout>
  );
};

export default Home;
