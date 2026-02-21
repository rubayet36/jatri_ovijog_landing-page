import { motion } from "motion/react";
import PolioceImg from "../assets/PoliceD.png";

const features = [
  {
    icon: "🚨",
    color: "from-red-500 to-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    label: "Real-Time SOS Monitoring",
    desc: "Instant alerts on a centralized hub the moment an emergency is triggered by a passenger.",
  },
  {
    icon: "🎙️",
    color: "from-violet-500 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    label: "Multimedia Evidence",
    desc: "Immediate access to 10-second voice clips and live image captures for situational assessment.",
  },
  {
    icon: "🤖",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    label: "AI Scene Analysis",
    desc: "Automated image descriptions by ImageAnalysisService to help prioritize high-risk alerts.",
  },
  {
    icon: "📡",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    label: "Geospatial Response",
    desc: "Precise GPS tracking with direct 'Open in Google Maps' links for rapid officer deployment.",
  },
  {
    icon: "📋",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    label: "Complaint Management",
    desc: "A unified feed to view, track, and manage all passenger-submitted transport grievances.",
  },
  {
    icon: "💬",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    label: "Internal Coordination",
    desc: "A dedicated police chat system and admin tools to manage officer profiles and communications.",
  },
  {
    icon: "🔐",
    color: "from-slate-600 to-gray-700",
    bg: "bg-slate-50",
    border: "border-slate-200",
    label: "Secure Access",
    desc: "Role-based access control protected by JWT authentication to keep sensitive data restricted.",
  },
];

function PoliceDashboard() {
  return (
    <div>
      <div className="relative w-full overflow-hidden flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 py-12 sm:py-16 gap-8 md:gap-10">
        {/* Background blobs */}
        <div className="pointer-events-none absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-indigo-300/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="pointer-events-none absolute bottom-0 left-20 w-44 sm:w-64 h-44 sm:h-64 rounded-full bg-blue-300/15 blur-3xl animate-blob animation-delay-4000" />

        {/* Left Side: Text */}
        <motion.div
          className="w-full md:flex-1 max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {/* Eyebrow label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4"
          >
            🛡️ Police Command Centre
          </motion.span>

          {/* Gradient heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            <span
              style={{
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Command. Respond.
            </span>
            <br />
            <span className="text-gray-800">Protect. At Scale.</span>
          </h2>

          {/* Sub-paragraph */}
          <p
            className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400 }}
          >
            The{" "}
            <span className="font-semibold text-gray-700">
              Jatri Ovijog Police Dashboard
            </span>{" "}
            gives law enforcement everything they need — from live SOS alerts to
            AI-assisted evidence review — in one secure, unified command centre.
          </p>

          {/* Feature count badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs font-bold shadow-md"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <span className="text-base">⚡</span> 7 Powerful Features Built In
          </motion.div>

          {/* Feature grid — 1 col on mobile, 2 cols on sm+ */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {features.map((f, i) => (
              <motion.li
                key={f.label}
                className={`flex items-start gap-3 p-2.5 sm:p-3 rounded-xl border ${f.bg} ${f.border} cursor-default`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 28px 0 rgba(0,0,0,0.11)",
                  y: -2,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.2 + i * 0.07,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-sm sm:text-base shadow-sm`}
                >
                  {f.icon}
                </div>
                <div>
                  <span
                    className="block text-xs sm:text-sm font-bold text-gray-800 mb-0.5 leading-snug"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {f.label}
                  </span>
                  <span
                    className="text-xs text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {f.desc}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
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
            src={PolioceImg}
            alt="Police Dashboard Mockup"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl object-contain drop-shadow-2xl"
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default PoliceDashboard;
