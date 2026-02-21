import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = ["Home", "About", "Contact"];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <div className="relative">
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full flex items-center justify-between px-5 sm:px-10 py-3 sm:py-4 rounded-sm transition-all duration-300 ${
          scrolled
            ? "bg-emerald-400/70 backdrop-blur-md shadow-lg"
            : "bg-emerald-400 shadow-sm"
        }`}
      >
        {/* Logo */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl font-extrabold tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Jatri Ovijog
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700">
          {navLinks.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <a
                href="#"
                className="nav-link font-medium text-sm hover:text-black transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="hidden lg:block px-5 py-2 bg-black text-white rounded-full text-sm font-semibold animate-glow btn-shimmer transition-all"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Get Started →
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-emerald-300/50 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden absolute top-full left-0 right-0 z-50 bg-emerald-400/95 backdrop-blur-md shadow-lg rounded-b-2xl px-5 py-4 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-black py-1 border-b border-emerald-300/50 last:border-0"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-1 w-full text-center px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Get Started →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nav;
