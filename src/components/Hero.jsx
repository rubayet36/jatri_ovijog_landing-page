import heroImg from "../assets/Hero.png";
import tabImg from "../assets/tab.png";
import { motion } from "motion/react";

const headingVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const charVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const heading = "Jatri Ovijog".split("");

function Hero() {
  return (
    <div className="relative w-full h-screen min-h-[500px] overflow-hidden rounded-xl">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover object-center"
      />

      {/* Decorative colour blobs — hidden on very small screens */}
      <div className="pointer-events-none hidden sm:block absolute -top-16 -left-16 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-emerald-400/40 blur-3xl animate-blob" />
      <div className="pointer-events-none hidden sm:block absolute top-1/3 -right-20 w-44 sm:w-64 h-44 sm:h-64 rounded-full bg-amber-400/35 blur-3xl animate-blob animation-delay-2000" />
      <div className="pointer-events-none hidden sm:block absolute bottom-10 left-1/3 w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-teal-400/30 blur-3xl animate-blob animation-delay-4000" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-start p-4 sm:p-6 md:p-12 bg-gradient-to-b from-black/60 via-black/20 to-transparent">
        {/* Staggered heading */}
        <motion.h1
          className="flex flex-wrap text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white drop-shadow-lg mt-16 sm:mt-24 md:mt-40 tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          {heading.map((char, i) => (
            <motion.span key={i} variants={charVariant}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-2 sm:mt-3 text-base sm:text-xl md:text-3xl font-semibold text-white/90 drop-shadow-md italic"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Your voice,{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #6ee7b7, #fbbf24, #6ee7b7)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmerText 3s linear infinite",
            }}
          >
            Safer road
          </span>
        </motion.p>

        {/* Description — hidden on xs, visible sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="hidden sm:block mt-3 max-w-xs sm:max-w-sm md:max-w-2xl text-xs sm:text-sm md:text-base font-light leading-relaxed text-white/80 drop-shadow-sm"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <p>
            A next-generation incident tracker designed for the modern commuter.
            Experience seamless complaint submission, live map updates, and a
            dedicated SOS feature — all in one unified platform connecting
            citizens and police for a more secure city.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="btn-shimmer px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-emerald-400 text-black font-bold text-xs sm:text-sm shadow-lg"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Get the App →
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/50 text-white font-semibold text-xs sm:text-sm backdrop-blur-sm hover:bg-white/10 transition"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Floating tablet mockup — scaled per breakpoint */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 sm:mt-6 md:mt-10 flex flex-row items-end justify-start px-0 sm:px-4 md:px-12"
        >
          <div className="z-10 animate-float">
            <img
              src={tabImg}
              alt="TabMockUp"
              className="w-32 sm:w-48 md:w-80 lg:w-[500px] object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmerText {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}

export default Hero;
