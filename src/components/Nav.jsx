import { useState, useEffect } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between px-10 py-4 rounded-sm transition-all duration-300 ${
        scrolled
          ? "bg-green-400/60 backdrop-blur-md shadow-md"
          : "bg-green-400 shadow-sm"
      }`}
    >
      {/* Logo */}
      <a className="text-xl font-bold font-graphik">Jatri Ovijog</a>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-8 font-graphik text-gray-600">
        <li>
          <a href="#" className="hover:text-black transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-black transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* CTA Button */}
      <a
        href="#"
        className="hidden lg:block px-5 py-2 bg-black text-white rounded-full font-graphik text-sm hover:bg-gray-800 transition-colors"
      >
        Get Started
      </a>

      {/* Mobile Hamburger */}
      <button className="lg:hidden p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Nav;
