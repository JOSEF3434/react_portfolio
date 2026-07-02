import Navbar from "./Navbar";
import Footer from "./Footer";

export function Layout({ children, className = "" }) {
  return (
    <div
      className={`min-h-screen bg-surface-0 text-foreground transition-colors duration-300 ${className}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
