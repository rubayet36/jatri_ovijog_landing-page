import { motion } from "motion/react";
import lapIMg from "../assets/lap.png";
function PoliceDashboard() {
    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 gap-8">
              {/* Left Side: Text — slides in from the left */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Navigate with Confidence.
                </h2>
                <p className="text-gray-600 text-lg mb-6 font-tagline italic">
                  Your voice matters. The Community Feed is a live dashboard of verified
                  commuter reports across Dhaka, empowering you to scan fast and act
                  faster. See what is happening around you on the interactive map, track
                  the resolution status of local complaints, support your fellow
                  citizens' reports, and instantly submit new issues directly to the
                  community.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Get Started
                </motion.button>
              </motion.div>
        
              {/* Right Side: Image — slides in from the right */}
              <motion.div
                className="flex-1 flex justify-end"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img
                  src={lapIMg}
                  alt="LaptopMockUP"
                  className="w-48 md:w-80 lg:w-[1000px] object-contain drop-shadow-2xl mr-2"
                />
              </motion.div>
            </div>
    );
}

export default PoliceDashboard;