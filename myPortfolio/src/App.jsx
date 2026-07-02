import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ui/ScrollToTop";
import Home from "./pages/Home";

const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Blog = lazy(() => import("./pages/Blog"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface-0">
    <div
      className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"
      role="status"
      aria-label="Loading page"
    />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<CaseStudy />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
