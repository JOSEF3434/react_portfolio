import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Home = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Yossief Enyew | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Yossief Enyew, a Full Stack Developer specializing in MERN stack, React, and modern web technologies." />
        <meta name="keywords" content="Yossief Enyew, Full Stack Developer, React Developer, MERN Stack, Portfolio" />
      </Helmet>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
