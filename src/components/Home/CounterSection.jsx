import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Bubbles } from "../../utils/Bubble";

const CounterCard = ({ end, label, darkMode, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [end]);

//   const innerGlow = darkMode
//     ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
//     : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

const innerGlow = darkMode
  ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
  : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

  const outerHoverGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

//   const glassBg = darkMode
//     ? "bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] bg-opacity-50"
//     : "bg-gradient-to-br from-white/40 to-white/10 bg-opacity-70";

const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

     const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`p-6 md:p-8 rounded-3xl backdrop-blur-md border ${border} ${glassBg} ${innerGlow} ${outerHoverGlow} shadow-2xl transition text-center w-full`}
    >
      <div className="text-4xl font-bold text-yellow-500 mb-2">
        {count}
        {label === "Success Rate" ? "%" : "+"}
      </div>
      <h4 className={`text-lg font-semibold ${darkMode ? "text-[#efe043]" : "text-[#627d32]"} mb-2`}>
        {label}
      </h4>
      <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {label === "Happy Clients"
          ? "Trusted by Hundreds. Recommended by All.Delivering seamless mutual fund services with trust, care, and results that speak for themselves."
          : label === "Families Empowered"
          ? "Building Generational Wealth, One Family at a Time.Helping Indian families grow financially strong with smart, reliable mutual fund solutions."
          : "Every Client. Every Goal. Delivered.Proven results with a flawless track record in mutual fund distribution and wealth creation."}
      </p>
    </motion.div>
  );
};

const CounterSection = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  return (
    <section
      className={`relative py-20 px-6 sm:px-10 transition-colors duration-500 ${bgGradient} ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <Bubbles darkMode={darkMode} />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h3
          className="text-3xl font-semibold mb-2"
          style={{ color: darkMode ? "#efe043" : "#627d32" }}
        >
          Who We Are
        </h3>
        <h2 className={`text-3xl ${darkMode ? "text-[#10e2ea]" : "text-[#0e6371]"}  sm:text-4xl font-extrabold mb-6`}>
          Crafting Smart Wealth Plans with a Human Touch
        </h2>
        <p className="text-base mb-12 max-w-2xl">
          Shri Nivesh was founded in 2024 with a clear belief — personal finance isn’t just about numbers, it's about people. Backed by over 8 years of hands-on experience, our founder realized that true wealth planning goes beyond spreadsheets. It’s about trust, care, and understanding your life goals.
        </p>
          <p className="text-base mt-[-25px] mb-12 max-w-2xl">
          At Shri Nivesh, we combine expert advice with empathy to help individuals and families build financial freedom, one smart decision at a time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <CounterCard end={500} label="Happy Clients" darkMode={darkMode} delay={0.1} />
          <CounterCard end={300} label="Families Empowered" darkMode={darkMode} delay={0.3} />
          <CounterCard end={100} label="Success Stories" darkMode={darkMode} delay={0.5} />
        </div>
      </div>
    </section>
  );
};



export default CounterSection;
