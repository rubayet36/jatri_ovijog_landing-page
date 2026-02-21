import EmrIMg from "../assets/Emer.png";
import { motion } from "motion/react";

const features = [
  {
    icon: "🎙️",
    color: "from-violet-500 to-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
    label: "Instant Audio Evidence",
    desc: "Automatically records and uploads a 10-second voice clip to provide context to the emergency.",
  },
  {
    icon: "📍",
    color: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    label: "Smart Location Tracking",
    desc: "Sends precise GPS coordinates with accuracy metrics so responders know exactly where to find you.",
  },
  {
    icon: "📸",
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    label: "Visual Documentation",
    desc: "Captures a live image via your device camera to document the situation in real-time.",
  },
  {
    icon: "🚔",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    label: "Police Integration",
    desc: "Directly logs alerts onto the police dashboard for immediate review and action.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const childVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Emergency() {
  return (
    <div>
      <div className="relative w-full overflow-hidden flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 py-10 sm:py-16 gap-8 md:gap-10">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-rose-300/20 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute top-10 right-0 w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-amber-300/20 blur-3xl animate-blob animation-delay-2000" />

        {/* Image — shows above text on mobile via order */}
        <motion.div
          className="w-full md:flex-1 flex justify-center md:justify-start order-1 md:order-none"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={EmrIMg}
            alt="Emergency Feature Mockup"
            className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-xl object-contain drop-shadow-2xl"
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className="w-full md:flex-1 max-w-xl mx-auto md:mx-0 order-2 md:order-none"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Eyebrow with live pulse dot */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-live inline-block" />
            <span className="text-xs font-semibold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full">
              Emergency SOS • Live
            </span>
          </div>

          {/* Staggered heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={childVariant}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Smart SOS reporting
              </span>
              <br />
              <motion.span variants={childVariant} className="text-gray-800">
                for safer public transport.
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Sub-paragraph */}
          <p
            className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 400 }}
          >
            We've automated emergency reporting.{" "}
            <span className="font-semibold text-gray-700">Jatri Ovijog</span>{" "}
            instantly transmits your real-time location and environmental audio
            to our backend, turning your phone into a powerful safety tool for
            your daily commute.
          </p>

          {/* Feature cards */}
          <ul className="space-y-3">
            {features.map((f, i) => (
              <motion.li
                key={f.label}
                className={`flex items-start gap-3 sm:gap-4 p-3 rounded-xl border ${f.bg} ${f.border} cursor-default`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.025,
                  boxShadow: "0 6px 24px 0 rgba(0,0,0,0.10)",
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.25 + i * 0.1,
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
                    className="block text-sm font-bold text-gray-800 mb-0.5"
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
      </div>
    </div>
  );
}

export default Emergency;
