
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Bubbles } from "../../utils/Bubble";

const TopMutualFunds = () => {
  const [funds, setFunds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Childrens Fund");
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  useEffect(() => {
    const fetchFunds = async () => {
      const mockData = [
        {
          name: "SBI Magnum Childrens Benefit Fund - Investment Plan - Regular Plan - Growth",
          logo: "https://logo.clearbit.com/sbi.co.in",
          launchDate: "05-09-2020",
          aum: "3,358.06",
          returns: { "1Y": "16.18", "3Y": "21.94", "5Y": "0" },
        },
        {
          name: "SBI Magnum Childrens Benefit Fund - Savings Plan - REGULAR PLAN - GROWTH",
          logo: "https://logo.clearbit.com/sbi.co.in",
          launchDate: "25-01-2002",
          aum: "124.78",
          returns: { "1Y": "13.49", "3Y": "13.43", "5Y": "15.09" },
        },
        {
          name: "Axis Childrens Fund - Lock In - Regular Growth",
          logo: "https://logo.clearbit.com/axisbank.com",
          launchDate: "05-12-2015",
          aum: "888.42",
          returns: { "1Y": "11.8", "3Y": "11.48", "5Y": "15.88" },
        },
      ];
      setFunds(mockData);
    };
    fetchFunds();
  }, []);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const primaryColor = darkMode ? "#10e2ea" : "#0e6371";
  const cardBg = `${glassBg} border ${darkMode ? "border-white/10 text-white" : "border-black/10 text-black"}`;
  const bubbleColor = darkMode ? "rgba(16, 226, 234, 0.15)" : "rgba(14, 99, 113, 0.2)";

  return (
    <section className={`relative py-20 px-4 md:px-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
     
      <Bubbles darkMode={darkMode} />

      {/* Header + Dropdown */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center md:text-left ${darkMode ? "text-green-500" : "text-green-700" }  drop-shadow`}>
          Top Performing Funds
        </h2>

        {/* Dropdown */}
        <motion.div
          className="relative w-64"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className={`absolute inset-0 rounded-xl pointer-events-none`}
            style={{ boxShadow: `inset 0 0 30px ${primaryColor}33` }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`w-full py-2 px-4 rounded-xl ${glassBg} ${darkMode ? "text-white" : "text-black"} shadow-md backdrop-blur-md focus:outline-none appearance-none pr-10 border border-white/20 transition-all duration-300`}
          >
            {["Childrens Fund", "Retirement Fund", "Equity Fund"].map((opt) => (
              <option
                key={opt}
                className={`${
                  darkMode
                    ? "bg-[#0b1925]/70 text-white"
                    : "bg-white/80 text-black"
                } backdrop-blur-md`}
              >
                {opt}
              </option>
            ))}
          </select>
          <FaChevronDown
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
            style={{ color: primaryColor }}
          />
        </motion.div>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {funds.map((fund, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor={primaryColor}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-6 rounded-2xl shadow-2xl backdrop-blur-md ${cardBg} transition-all duration-300 overflow-hidden`}
              style={{ boxShadow: `inset 0 0 20px ${primaryColor}66` }}
            >
              {/* Logo and Fund Name */}
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={fund.logo}
                  alt="logo"
                  className="w-10 h-10 object-contain rounded-full border border-white/30 bg-white/80 dark:bg-white/10"
                />
                <h3 className="text-base font-semibold leading-snug">{fund.name}</h3>
              </div>

              <p className="text-sm mb-1" style={{ color: primaryColor }}>
                {selectedCategory}
              </p>

              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">Launch Date</span>
                <span>{fund.launchDate}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold">AUM (Crore)</span>
                <span>{fund.aum}</span>
              </div>

              <hr className="my-3 border-white/20" />
              <p className="font-semibold mb-1">Returns</p>
              <div className="flex justify-between text-sm text-green-400 font-semibold">
                <span><spann className={`${darkMode ? "text-white" : "text-black"}`}>1Y:</spann> {fund.returns["1Y"]}%</span>
                <span><spann className={`${darkMode ? "text-white" : "text-black"}`}>3Y:</spann> {fund.returns["3Y"]}%</span>
                <span><spann className={`${darkMode ? "text-white" : "text-black"}`}>5Y:</spann> {fund.returns["5Y"]}%</span>
              </div>

              <div className="mt-4 text-center">
                <button
                  className={`px-5 py-2 rounded-full shadow-lg transition duration-300 ${
                    darkMode ? "text-[#0b0d1a]" : "text-white"
                  }`}
                  style={{
                    backgroundColor: primaryColor,
                    boxShadow: `0 0 15px ${primaryColor}`,
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default TopMutualFunds;
