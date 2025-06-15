import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../../utils/Bubble";

const DreamHomeForm = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [formData, setFormData] = useState({
    yearsToBuy: "",
    houseCost: "",
    inflation: "",
    goalName: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const bg = darkMode
    ? "from-[#0e1525] to-[#081824]"
    : "from-[#f9fcfe] to-[#dff4ff]";

  const cardGlass = darkMode
    ? "bg-white/5 border border-[#10e2ea]/30 shadow-[0_0_30px_rgba(16,226,234,0.1)]"
    : "bg-white/40 border border-[#0e6371]/20 shadow-[0_0_30px_rgba(14,99,113,0.08)]";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const btnGradient = darkMode
    ? "bg-gradient-to-r from-[#10e2ea] to-[#045b68]"
    : "bg-gradient-to-r from-[#0e6371] to-[#84e9f0]";

  return (
    <section
      className={`relative min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br ${bg}`}
    >
      <Bubbles darkMode={darkMode} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-4xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500 ${cardGlass}`}
      >
        <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-10 ${textColor}`}>
          Dream <span className={highlight}>Home</span> Goal
        </h2>

        <div className={`flex flex-col gap-8 text-base sm:text-lg md:text-xl ${textColor}`}>
          {/* Years to Buy */}
          <div className="flex flex-col gap-2">
            <p>You are planning to buy your Dream House in</p>
            <input
              type="number"
              value={formData.yearsToBuy}
              onChange={(e) => handleChange("yearsToBuy", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Years"
            />
            <p>years.</p>
          </div>

          {/* House Cost */}
          <div className="flex flex-col gap-2">
            <p>The cost of this House would be around ₹</p>
            <input
              type="number"
              value={formData.houseCost}
              onChange={(e) => handleChange("houseCost", e.target.value)}
              className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="House Cost"
            />
            <p>in today's value.</p>
          </div>

          {/* Inflation and Goal Name */}
          <div className="flex flex-col gap-2">
            <p>You assume the inflation to be</p>
            <input
              type="number"
              value={formData.inflation}
              onChange={(e) => handleChange("inflation", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Inflation %"
            />
            <p>% and You would like to name this goal as</p>

            <input
              type="text"
              value={formData.goalName}
              onChange={(e) => handleChange("goalName", e.target.value)}
              className="w-full sm:w-64 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Goal Name"
            />
          </div>

          {/* Risk Level (fixed value as in your design) */}
          <div className="flex flex-col gap-2">
            <p>You can take <span className={highlight}>Conservative</span> risk with your investments.</p>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              className={`w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${btnGradient}`}
            >
              Build My Dream Home Goal
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DreamHomeForm;
