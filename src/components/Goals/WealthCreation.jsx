import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Bubbles } from "../../utils/Bubble";
// import SEO from "../../utils/SEO";

const riskOptions = [
  "Conservative",
  "Moderate",
  "Aggressive",
  "Moderately Conservative",
  "Moderately Aggressive",
  "Check Your Profile",
];

const WealthCreationForm = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [formData, setFormData] = useState({
    currentAge: "",
    amountRequired: "",
    yearsToGo: "",
    inflation: "",
    expectedReturn: "",
    goalName: "",
    risk: "Conservative",
    showDropdown: false,
  });

  const dropdownRef = useRef(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = () => {
    setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
  };

  const selectRisk = (risk) => {
    setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFormData((prev) => ({ ...prev, showDropdown: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      className={`relative mt-15 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br ${bg}`}
    > 
              {/* <SEO tittle={"WealthCreation Page"} description={"This is the WealthCreation page"} /> */}
      <Bubbles darkMode={darkMode} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-4xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500 ${cardGlass}`}
      >
        <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-10 ${textColor}`}>
          Wealth <span className={highlight}>Creation</span> Planning
        </h2>

        <div className={`flex flex-col gap-8 text-base sm:text-lg md:text-xl ${textColor}`}>
          {/* Age, Amount, Years */}
          <div className="flex flex-col gap-2">
            <p>You are</p>
            <input
              type="number"
              value={formData.currentAge}
              onChange={(e) => handleChange("currentAge", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Age"
            />
            <p>years old now you require Rs</p>

            <input
              type="number"
              value={formData.amountRequired}
              onChange={(e) => handleChange("amountRequired", e.target.value)}
              className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Amount"
            />
            <p>at today's value after</p>

            <input
              type="number"
              value={formData.yearsToGo}
              onChange={(e) => handleChange("yearsToGo", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Years"
            />
            <p>years for becoming wealthy.</p>
          </div>

          {/* Inflation & Return */}
          <div className="flex flex-col gap-2">
            <p>You assume the inflation to be</p>
            <input
              type="number"
              value={formData.inflation}
              onChange={(e) => handleChange("inflation", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Inflation %"
            />
            <p>% and expect</p>
            <input
              type="number"
              value={formData.expectedReturn}
              onChange={(e) => handleChange("expectedReturn", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Return %"
            />
            <p>% return on your investments.</p>
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

          {/* Risk Dropdown with Outside Click */}
          <div className="flex flex-col gap-2 relative mt-4" ref={dropdownRef}>
            <p className="mb-1">You can take</p>
            <button
              onClick={toggleDropdown}
              className={`w-full sm:w-64 px-4 py-2 rounded-full border focus:outline-none flex items-center justify-between 
                ${darkMode
                  ? "bg-white/5 border-[#10e2ea]/40 text-[#10e2ea]"
                  : "bg-white/60 border-[#0e6371]/30 text-[#0e6371]"}`}
            >
              {formData.risk}
              <ChevronDown size={16} />
            </button>

            {formData.showDropdown && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`absolute z-30 mt-2 top-full w-full sm:w-64 rounded-xl shadow-lg backdrop-blur-md ${
                  darkMode
                    ? "bg-[#0f2a37]/80 border border-[#10e2ea]/20 text-white"
                    : "bg-white/90 border border-[#0e6371]/20 text-black"
                }`}
              >
                {riskOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => selectRisk(option)}
                    className={`px-4 py-3 cursor-pointer flex justify-between items-center hover:bg-white/10 ${
                      formData.risk === option ? "font-semibold" : ""
                    }`}
                  >
                    {option}
                    {formData.risk === option && (
                      <Check size={16} className="text-green-400" />
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
            <p className="mt-1">risk with your investments.</p>
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
              className={`w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${btnGradient}`}
            >
              Build My Wealth Creation Goal
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WealthCreationForm;
