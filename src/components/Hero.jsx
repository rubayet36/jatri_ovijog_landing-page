import heroImg from "../assets/Hero.png";

import tabImg from "../assets/tab.png";
import { motion } from "motion/react";
function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-xl">
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover object-center"
      />

      <motion.div className="absolute inset-0 flex flex-col justify-start p-6 md:p-12 bg-gradient-to-b from-black/50 via-transparent to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="  text-8xl md:text-5xl lg:text-9xl font-bold text-white drop-shadow-lg mt-40"
        >
          Jatri Ovijog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=" mt-2 text-lg md:text-3xl font-medium text-white/90 drop-shadow-md font-tagline italic"
        >
          Your voice, Safer road
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 max-w-2xl text-sm md:text-base font-light leading-relaxed text-white/80 drop-shadow-sm"
        >
          <p>
            A next-generation incident tracker designed for the modern commuter.
            Experience seamless complaint submission, live map updates, and a
            dedicated SOS feature—all in one unified platform connecting
            citizens and police for a more secure city
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }} // Changed to slide from left for better flow
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-row items-end justify-start px-6 md:px-12"
        >
          {/* Phone Mockup */}

          {/* Tablet Mockup */}
          <div className="z-10 -ml-8 md:-ml-12 lg:-ml-16">
            <img
              src={tabImg}
              alt="TabMockUp"
              className="w-48 md:w-80 lg:w-[500px] object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
