import Hero from "./components/Hero";
import "./App.css";
import Nav from "./components/Nav";
import Feed from "./components/Feed";
import Emergency from "./components/Emergency";
import { motion } from "motion/react";
import PoliceDashboard from "./components/PoliceDashboard";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Nav />
      </div>

      <div className="mt-1.5">
        <Hero />
      </div>

      {/* Subtle section divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2" />

      <Feed />

      {/* Wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-10"
        >
          <path
            d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            fill="#6ee7b7"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* Emergency — rich gradient wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full px-3 sm:px-6 md:px-10 py-2 shadow-sm rounded-3xl sm:rounded-4xl"
        style={{
          background:
            "linear-gradient(135deg, #6ee7b7 0%, #34d399 40%, #2dd4bf 100%)",
        }}
      >
        <Emergency />
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2" />

      <PoliceDashboard />
    </>
  );
}

export default App;
