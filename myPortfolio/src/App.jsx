import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Blog from "./pages/Blog";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (saved) {
      return saved;
    } else if (systemPrefersDark) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/project/:id"
            element={<CaseStudy theme={theme} toggleTheme={toggleTheme} />}
          />
          <Route
            path="/blog"
            element={<Blog theme={theme} toggleTheme={toggleTheme} />}
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
