
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Bubbles } from "../../utils/Bubble";

const PPFCalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [yearlyInvestment, setYearlyInvestment] = useState(50000);
  const [timePeriod, setTimePeriod] = useState(15);

  const interestRate = 7.1; // Fixed

  const totalInvestment = yearlyInvestment * timePeriod;

  const maturityValue = useMemo(() => {
    let total = 0;
    for (let i = 1; i <= timePeriod; i++) {
      total += yearlyInvestment * Math.pow(1 + interestRate / 100, timePeriod - i + 1);
    }
    return Math.round(total);
  }, [yearlyInvestment, timePeriod]);

  const totalReturns = maturityValue - totalInvestment;

  const pieData = [
    { name: "Total Investment", value: totalInvestment, color: "#0e6371" },
    { name: "Returns", value: totalReturns, color: "#10e2ea" },
  ];

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

  const outerGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

  const labelColor = darkMode ? "text-white" : "text-black";
  const titleColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const inputBg = darkMode ? "bg-[#0f1a26]/80 text-white" : "bg-white/80 text-black";
  const inputBgDis = darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black";
  const inputBorder = darkMode ? "border-[#10e2ea]/40" : "border-[#0e6371]/30";
  const hintColor = darkMode ? "text-gray-400" : "text-gray-600";
  const slideColor = darkMode ? "accent-[#10e2ea]" : "accent-[#0e6371]";

  return (
    <section className={`relative mt-15 z-0 py-20 transition-colors duration-500 ${bgGradient}`}>
      <Bubbles darkMode={darkMode} />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-6 md:p-10 border ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.01] ${
            darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>PPF Calculator</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT SIDE */}
            <div>
              {/* Yearly Investment */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Yearly Investment (₹)</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={500}
                  max={150000}
                  step={500}
                  value={yearlyInvestment}
                  onChange={(e) => setYearlyInvestment(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={500}
                  max={150000}
                  value={yearlyInvestment}
                  onChange={(e) => setYearlyInvestment(Number(e.target.value))}
                  className={`w-32 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>Min: ₹500 | Max: ₹1,50,000</div>

              {/* Time Period */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Time Period (Years)</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={15}
                  max={40}
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={15}
                  max={40}
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>Min: 15 yrs | Max: 40 yrs</div>

              {/* Interest Rate (Fixed) */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Current Interest Rate (%)</label>
              <div className={`text-lg font-semibold mb-6 w-28 px-8 py-2 rounded-lg border ${inputBorder} ${inputBgDis} ${titleColor}`}>7.1%</div>

              <p className={`mt-6 font-semibold italic ${titleColor}`}>
                Estimate your Public Provident Fund growth
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-6 justify-center mb-2 text-center">
                <div>
                  <p className={`text-sm ${labelColor}`}>Total Investment</p>
                  <p className={`${titleColor} font-bold`}>
                    ₹ {totalInvestment.toLocaleString("en-IN")}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${labelColor}`}>Returns</p>
                  <p className="text-green-500 font-bold">
                    ₹ {totalReturns.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* PIE CHART */}
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={3}
                      label={({ cx, cy }) => (
                        <text
                          x={cx}
                          y={cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={darkMode ? "#10e2ea" : "#0e6371"}
                          fontWeight="bold"
                        >
                          ₹{maturityValue.toLocaleString("en-IN")}
                        </text>
                      )}
                    >
                      {pieData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend */}
              <div className="flex gap-8 text-sm font-medium mt-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#0e6371]" />
                  <span className={labelColor}>Investment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#10e2ea]" />
                  <span className={labelColor}>Returns</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PPFCalculator;
