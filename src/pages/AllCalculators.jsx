
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../utils/Bubble";

const calculators = [
  "Become A Crorepati",
  "SIP Return Calculator",
  "Retirement Planning Calculator",
  "Asset Allocation Calculator",
  "EMI Calculator",
  "PPF Calculator",
  "EPF Calculator",
  "Goal Setting Calculator",
  "Composite Financial Goal Calculator",
  "Children Education Planner",
  "Networth Calculator",
  "Compounding Calculator",
  "Spending Less Calculator",
  "Human Life Value Calculator",
  "SIP Step Up Calculator",
];

const AllCalculators = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

// const bgGradient = darkMode
//   ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//   : "bg-gradient-to-br from-[#f8fdff] to-[#d4ecff]";


const bgGradient = darkMode
  ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
  : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const glow =
    darkMode
      ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]"
      : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]";

  return (
    <section
      className={`relative z-0 py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
    >
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl mt-10 sm:text-4xl font-bold ${textColor}`}
        >
          Explore Our <span className={highlight}>Financial Calculators</span>
        </motion.h2>
        <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
          Make smart financial decisions with our wide range of tools.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* {calculators.map((name, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`flex items-center justify-center text-center p-6 h-32 rounded-2xl border border-transparent hover:border-[#10e2ea] cursor-pointer backdrop-blur-xl ${cardGlass} ${glow} transition duration-300 hover:scale-105`}
          >
            <h3 className={`text-base sm:text-lg font-semibold ${highlight}`}>
              {name}
            </h3>
          </motion.div>
        ))} */}
        {calculators.map((name, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    // className={`flex items-center justify-center text-center p-6 h-32 rounded-2xl border border-transparent ${
    //   darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
    // } cursor-pointer backdrop-blur-xl ${cardGlass} ${glow} transition duration-300 hover:scale-105`}
    className={`flex items-center justify-center text-center p-6 rounded-2xl border ${darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"} cursor-pointer backdrop-blur-xl ${cardGlass} ${glow} transition duration-300 hover:scale-105`}

  >
    <h3 className={`text-base sm:text-lg font-semibold ${textColor}`}>
      {name}
    </h3>
  </motion.div>
))}

      </div>
    </section>
  );
};

export default AllCalculators;
