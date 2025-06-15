import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Bubbles } from "../../utils/Bubble";

const riskOptions = [
  "Conservative",
  "Moderate",
  "Aggressive",
  "Moderately Conservative",
  "Moderately Aggressive",
  "Check Your Profile",
];

const RetirementForm = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [formData, setFormData] = useState({
    currentAge: "",
    retirementAge: "",
    lifeExpectancy: "",
    expenses: "",
    inflation: "",
    returns: "",
    saved: "",
    goalName: "",
    risk: "Conservative",
    showDropdown: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = () => {
    setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
  };

  const selectRisk = (risk) => {
    setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
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
      className={`relative mt-5 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br ${bg}`}
    >
      <Bubbles darkMode={darkMode} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-4xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500 ${cardGlass}`}
      >
        <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-10 ${textColor}`}>
          Retirement <span className={highlight}>Planning</span>
        </h2>

        <div className={`flex flex-col gap-8 text-base sm:text-lg md:text-xl ${textColor}`}>
          {/* Current Age */}
          <div className="flex flex-col gap-2">
            <p>You are</p>
            <input
              type="number"
              value={formData.currentAge}
              onChange={(e) => handleChange("currentAge", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Current Age"
            />
            <p>years old and want to retire at age</p>
            <input
              type="number"
              value={formData.retirementAge}
              onChange={(e) => handleChange("retirementAge", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Retirement Age"
            />
            <p>years and your life expectancy is</p>
            <input
              type="number"
              value={formData.lifeExpectancy}
              onChange={(e) => handleChange("lifeExpectancy", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Life Expectancy"
            />
            <p>years.</p>
          </div>

          {/* Expenses */}
          <div className="flex flex-col gap-2">
            <p>Your current monthly household expenses is ₹</p>
            <input
              type="number"
              value={formData.expenses}
              onChange={(e) => handleChange("expenses", e.target.value)}
              className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Monthly Expenses"
            />
            <p>. You assume the inflation to be</p>
            <input
              type="number"
              value={formData.inflation}
              onChange={(e) => handleChange("inflation", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Inflation %"
            />
            <p>%.</p>
          </div>

          {/* Returns & Savings */}
          <div className="flex flex-col gap-2">
            <p>Expect</p>
            <input
              type="number"
              value={formData.returns}
              onChange={(e) => handleChange("returns", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Returns %"
            />
            <p>% earning on retirement corpus. You have already saved ₹</p>
            <input
              type="number"
              value={formData.saved}
              onChange={(e) => handleChange("saved", e.target.value)}
              className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Saved Amount"
            />
            <p>for your Retirement.</p>
          </div>

          {/* Goal Name */}
          <div className="flex flex-col gap-2">
            <p>You would like to name this goal as</p>
            <input
              type="text"
              value={formData.goalName}
              onChange={(e) => handleChange("goalName", e.target.value)}
              className="w-full sm:w-64 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Goal Name"
            />
          </div>

          {/* Risk Dropdown */}
          <div className="flex flex-col gap-2 relative">
            <p>You can take</p>
            <button
              onClick={toggleDropdown}
              className={`w-full sm:w-64 px-4 py-2 rounded-full border focus:outline-none ${highlight} border-current flex items-center justify-between`}
            >
              {formData.risk}
              <ChevronDown size={16} />
            </button>

            {formData.showDropdown && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`absolute z-20 top-14 w-full sm:w-64 bg-white/30 dark:bg-[#0b1925]/80 rounded-lg shadow-xl backdrop-blur-md border border-gray-300 dark:border-[#10e2ea]/30 ${textColor}`}
              >
                {riskOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => selectRisk(option)}
                    className="px-4 py-2 cursor-pointer hover:bg-white/20 flex justify-between items-center"
                  >
                    {option}
                    {formData.risk === option && (
                      <Check size={16} className="text-green-500" />
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
            <p>risk with your investments.</p>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              className={`w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${btnGradient}`}
            >
              Build My Retirement Goal
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RetirementForm;
