import Hero from "./components/Hero";
import "./App.css";
import Nav from "./components/Nav";
import Feed from "./components/Feed";
import Emergency from "./components/Emergency";
import { motion, AnimatePresence } from "motion/react";
import PoliceDashboard from "./components/PoliceDashboard";
function App() {
  return (
    <>
    <div className="sticky top-0 z-50">   <Nav /></div>
   
      <div className="mt-1.5 ">
        <Hero />
      </div>

      <Feed />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 2 }}
          className="w-full flex items-center justify-between px-10 py-4 bg-[#A3DAC2] text-white p-4  shadow-sm rounded-4xl"
        >
          <Emergency />
        </motion.div>
      </AnimatePresence>
      <PoliceDashboard />
    </>
  );
}

export default App;
