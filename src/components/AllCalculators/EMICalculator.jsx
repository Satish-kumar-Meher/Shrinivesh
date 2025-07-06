
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Bubbles } from "../../utils/Bubble";
// import SEO from "../../utils/SEO";

const EMICalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(10);

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;

  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const pieData = [
    { name: "Principal Amount", value: loanAmount, color: "#0e6371" },
    { name: "Interest Payable", value: totalInterest, color: "#10e2ea" },
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
  const inputBorder = darkMode ? "border-[#10e2ea]/40" : "border-[#0e6371]/30";
  const hintColor = darkMode ? "text-gray-400" : "text-gray-600";
  const slideColor = darkMode ? "accent-[#10e2ea]" : "accent-[#0e6371]";

  return (
    <section className={`relative mt-16 z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
      {/* <SEO tittle={"EMI calculator Page"} description={"This is the EMI calculator page"} /> */}
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
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>EMI Calculator</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Section */}
            <div>
              {/* Loan Amount */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Loan Amount (₹)</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={1000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={100000}
                  max={10000000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className={`w-32 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>Min: ₹100,000 | Max: ₹1 Crore</div>

              {/* Interest Rate */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Interest Rate (p.a)</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>Min: 1% | Max: 30%</div>

              {/* Tenure */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Loan Tenure (Years)</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>Min: 1 | Max: 30</div>

              <p className={`mt-6 font-semibold italic ${titleColor}`}>
                Know your EMI before you apply for a loan
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center gap-4">
              {/* EMI + Total */}
              <div className="flex gap-6 justify-center mb-2 text-center">
                <div>
                  <p className={`text-sm ${labelColor}`}>Monthly EMI</p>
                  <p className="text-green-500 font-bold">₹ {emi.toFixed(0)}</p>
                </div>
                       <div>
                  <p className={`text-sm ${labelColor}`}>Principal Amount</p>
                  <p className={`${titleColor} font-bold`}>₹ {loanAmount.toLocaleString("en-IN")}</p>
                </div>
                <div>
                  <p className={`text-sm ${labelColor}`}>Total Payment</p>
                  <p className={`${titleColor} font-bold`}>₹ {totalPayment.toLocaleString("en-IN")}</p>
                </div>

              </div>
              <p className={`text-sm font-medium ${labelColor}`}>
                Total Interest:{" "}
                <span className={darkMode ? "text-amber-300" : "text-green-800"}>
                  ₹ {totalInterest.toLocaleString("en-IN")}
                </span>
              </p>

              {/* Pie Chart */}
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
                          fill="#e77e23"
                          fontWeight="bold"
                        >
                         ₹{Math.round(emi).toLocaleString("en-IN")}
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
                  <span className={labelColor}>Principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#10e2ea]" />
                  <span className={labelColor}>Interest</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
