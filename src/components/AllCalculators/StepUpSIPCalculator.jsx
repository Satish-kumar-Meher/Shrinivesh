import { useState } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Bubbles } from "../../utils/Bubble";
import GraphStepUpSIP from "./GraphStepUpSIP";


const StepUpSIPCalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [sipAmount, setSipAmount] = useState(50000);
  const [stepUpPercent, setStepUpPercent] = useState(8);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const months = years * 12;
  const annualRate = rate / 100;
  const r = annualRate / 12;
  const n = years;

  // Step-up SIP Maturity Formula (Approximate, using future value of increasing annuity)
  const maturityValue = Array.from({ length: n }).reduce((acc, _, i) => {
    const yearlySIP = sipAmount * Math.pow(1 + stepUpPercent / 100, i);
    const yearFV = yearlySIP * (((Math.pow(1 + r, 12) - 1) / r) * (1 + r));
    return acc + yearFV * Math.pow(1 + r, 12 * (n - i - 1));
  }, 0);

  const totalInvestment = Array.from({ length: n }).reduce(
    (acc, _, i) => acc + sipAmount * Math.pow(1 + stepUpPercent / 100, i) * 12,
    0
  );
  const returns = maturityValue - totalInvestment;

  const data = [
    { name: "Total Investment", value: totalInvestment, color: "#0e6371" },
    { name: "Returns", value: returns, color: "#10e2ea" },
  ];

  // Shared styling
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
    <section className={`relative mt-15 z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
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
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>Step-Up SIP Calculator</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Inputs */}
            <div>
              {[
                {
                  label: "Initial SIP Investment",
                  value: sipAmount,
                  setValue: setSipAmount,
                  min: 500,
                  max: 100000,
                  step: 100,
                  unit: "₹",
                },
                {
                  label: "Annual Step Up (%)",
                  value: stepUpPercent,
                  setValue: setStepUpPercent,
                  min: 1,
                  max: 30,
                  step: 1,
                  unit: "%",
                },
                {
                  label: "Expected Return Rate (p.a)",
                  value: rate,
                  setValue: setRate,
                  min: 1,
                  max: 30,
                  step: 0.1,
                  unit: "%",
                },
                {
                  label: "Time Period (Years)",
                  value: years,
                  setValue: setYears,
                  min: 1,
                  max: 30,
                  step: 1,
                  unit: "yr",
                },
              ].map(({ label, value, setValue, min, max, step, unit }) => (
                <div key={label} className="mb-4">
                  <label className={`block mb-2 font-medium ${labelColor}`}>{label}</label>
                  <div className="flex items-center gap-4 mb-1">
                    <input
                      type="range"
                      min={min}
                      max={max}
                      step={step}
                      value={value}
                      onChange={(e) => setValue(Number(e.target.value))}
                      className={`w-full ${slideColor}`}
                    />
                    <input
                      type="number"
                      min={min}
                      max={max}
                      value={value}
                      onChange={(e) => setValue(Number(e.target.value))}
                      className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                    />
                  </div>
                  <div className={`text-sm ${hintColor}`}>
                    Min: {unit} {min} | Max: {unit} {max}
                  </div>
                </div>
              ))}
              <p className={`mt-6 font-semibold italic ${titleColor}`}>
                Boost your SIP returns with annual step-up investments
              </p>
            </div>

            {/* Right: Pie Chart + Summary */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-6 justify-center mb-2">
                <div className="text-center">
                  <p className={`text-sm ${labelColor}`}>Total Investment</p>
                  <p className={`${titleColor} font-bold`}>
                    ₹ {totalInvestment.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="text-center">
                  <p className={`text-sm ${labelColor}`}>Returns</p>
                  <p className="text-green-500 font-bold">
                    ₹ {returns.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
              <p className={`text-sm pt-4 font-medium ${labelColor}`}>
                Maturity Value:
                <span className={`${darkMode ? "text-amber-300" : "text-green-800"} pl-5`}>
                  ₹ {maturityValue.toLocaleString("en-IN")}
                </span>
              </p>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
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
                          ₹{Math.round(maturityValue).toLocaleString("en-IN")}
                        </text>
                      )}
                    >
                      {data.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

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
      <GraphStepUpSIP
        sipAmount={sipAmount}
        stepUpPercent={stepUpPercent}
        rate={rate}
        years={years}
        totalInvestment={totalInvestment}
        returns={returns}
        maturityValue={maturityValue}
      />
    </section>
  );
};

export default StepUpSIPCalculator;
