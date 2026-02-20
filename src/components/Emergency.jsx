import EmrIMg from "../assets/Emer.png";
import { motion } from "motion/react";

function Emergency() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 gap-8">
        {/* Left Side: Image — now slides in from the LEFT */}
        <motion.div
          className="flex-1 flex justify-start" // Changed justify-end to justify-start
          initial={{ opacity: 0, x: -60 }} // Changed x from 60 to -60
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={EmrIMg}
            alt="LaptopMockUP"
            className="w-72 md:w-[450px] lg:w-[1000px] object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side: Text — now slides in from the RIGHT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }} // Changed x from -60 to 60
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Smart SOS reporting for safer public transport.
          </h2>
          <p className="text-gray-600 text-lg mb-6 font-tagline ">
            We’ve automated emergency reporting. Jatri Ovijog instantly
            transmits your real-time location and environmental audio to our
            backend, turning your phone into a powerful safety tool for your
            daily commute.
          </p>
          <ul className="space-y-3 mt-2">
            <li className="flex items-start gap-3">
              <span className="text-xl">🎙️</span>
              <div>
                <span className="font-semibold text-gray-900">Instant Audio Evidence:</span>{" "}
                <span className="text-gray-900 font-tagline italic">
                  Automatically records and uploads a 10-second voice clip to
                  provide context to the emergency.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <div>
                <span className="font-semibold text-gray-900">Smart Location Tracking:</span>{" "}
                <span className="text-gray-900 font-tagline italic">
                  Sends precise GPS coordinates with accuracy metrics so
                  responders know exactly where to find you.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">📸</span>
              <div>
                <span className="font-semibold text-gray-900">Visual Documentation:</span>{" "}
                <span className="text-gray-900 font-tagline italic">
                  Captures a live image via your device camera to document the
                  situation in real-time.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">🚔</span>
              <div>
                <span className="font-semibold text-gray-900">Police Integration:</span>{" "}
                <span className="text-gray-900 font-tagline italic">
                  Directly logs alerts onto the police dashboard for immediate
                  review and action.
                </span>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Emergency;
