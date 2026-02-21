import lapIMg from "../assets/lap.png";
import { motion } from "motion/react";

const pills = [
  { icon: "🗺️", label: "Live Map" },
  { icon: "✅", label: "Verified Reports" },
  { icon: "🔄", label: "Status Tracking" },
  { icon: "⚡", label: "Quick Submit" },
];

function Feed() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 py-12 sm:py-16 gap-8 md:gap-10">
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-10 right-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-blue-300/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-10 left-0 w-40 sm:w-56 h-40 sm:h-56 rounded-full bg-teal-300/20 blur-3xl animate-blob animation-delay-2000" />

      {/* Left Side: Text */}
      <motion.div
        className="w-full md:flex-1 max-w-xl mx-auto md:mx-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-600 bg-teal-100 px-3 py-1 rounded-full mb-4"
        >
          🗺️ Community Feed
        </motion.span>

        {/* Gradient heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
          <span
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Navigate with
          </span>
          <br />
          <span className="text-gray-800">Confidence.</span>
        </h2>

        {/* Body text */}
        <p
          className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6"
          style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400 }}
        >
          Your voice matters.{" "}
          <span className="font-semibold text-gray-700">
            The Community Feed
          </span>{" "}
          is a live dashboard of verified commuter reports across Dhaka,
          empowering you to scan fast and act faster. See what's happening
          around you, track resolutions, and instantly submit new issues.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {pills.map((p, i) => (
            <motion.span
              key={p.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm cursor-default"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {p.icon} {p.label}
            </motion.span>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="btn-shimmer px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold text-sm text-white shadow-lg"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: "linear-gradient(135deg, #0ea5e9, #14b8a6)",
          }}
        >
          Get Started →
        </motion.button>
      </motion.div>

      {/* Right Side: Image — stacks below on mobile */}
      <motion.div
        className="w-full md:flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          src={lapIMg}
          alt="Community Feed Dashboard"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl object-contain drop-shadow-2xl"
          whileHover={{ scale: 1.02, rotate: -0.5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  );
}

export default Feed;
