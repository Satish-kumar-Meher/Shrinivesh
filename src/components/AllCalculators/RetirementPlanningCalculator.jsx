
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Bubbles } from "../../utils/Bubble";

const RetirementCalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [goalAmount, setGoalAmount] = useState(5000000);
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [inflation, setInflation] = useState(5);
  const [returnRate, setReturnRate] = useState(12.5);
  const [currentSavings, setCurrentSavings] = useState(100000);

  const years = retirementAge - currentAge;
  const retirementAmount = goalAmount * Math.pow(1 + inflation / 100, years);
  const savingsGrowth = currentSavings * Math.pow(1 + returnRate / 100, years);
  const requiredCorpus = retirementAmount - savingsGrowth;

  const monthlyRate = returnRate / 12 / 100;
  const months = years * 12;
  const factor = ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const monthlySIP = requiredCorpus > 0 ? requiredCorpus / factor : 0;
  const totalInvestment = monthlySIP * months;
  const totalGrowth = requiredCorpus > 0 ? requiredCorpus : 0;

  const data = [
    { name: "Total Investment", value: totalInvestment, color: "#0e6371" },
    { name: "Total Growth", value: totalGrowth, color: "#10e2ea" },
  ];

  const formatCurrency = (num) => `₹${Math.round(num).toLocaleString("en-IN")}`;

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

  const SliderInput = ({ label, min, max, step, value, setValue, suffix, prefix }) => (
    <div className="mb-5">
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
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className={`w-32 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
        />
      </div>
      <div className={`text-sm ${hintColor}`}>
        {prefix}{min.toLocaleString("en-IN")} – {prefix}{max.toLocaleString("en-IN")} {suffix}
      </div>
    </div>
  );

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
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>
            Retirement Planning Calculator
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Inputs */}
            <div>
              <SliderInput
                label="Retirement Goal (₹)"
                min={100000}
                max={100000000}
                step={500000}
                value={goalAmount}
                setValue={setGoalAmount}
                prefix="₹"
              />
              <SliderInput
                label="Current Age"
                min={10}
                max={100}
                step={1}
                value={currentAge}
                setValue={setCurrentAge}
              />
              <SliderInput
                label="Retirement Age"
                min={10}
                max={100}
                step={1}
                value={retirementAge}
                setValue={setRetirementAge}
              />
              <SliderInput
                label="Inflation Rate (%)"
                min={0}
                max={15}
                step={0.1}
                value={inflation}
                setValue={setInflation}
                suffix="%"
              />
              <SliderInput
                label="Expected Return Rate (%)"
                min={1}
                max={20}
                step={0.1}
                value={returnRate}
                setValue={setReturnRate}
                suffix="%"
              />
              <SliderInput
                label="Current Savings (₹)"
                min={0}
                max={10000000}
                step={100000}
                value={currentSavings}
                setValue={setCurrentSavings}
                prefix="₹"
              />
            </div>

            {/* Outputs */}
            <div className="flex flex-col items-center gap-4">
              <div className="grid gap-3 text-sm text-center">
                <div>
                  <span className={`${labelColor}`}>Monthly SIP Amount</span>
                  <p className="text-green-500 font-bold text-lg">{formatCurrency(monthlySIP)}</p>
                </div>
                <div>
                  <span className={`${labelColor}`}>Total Amount Invested through SIP in {years} years</span>
                  <p className="text-[#0e6371] font-bold">{formatCurrency(totalInvestment)}</p>
                </div>
                <div>
                  <span className={`${labelColor}`}>Total Growth Amount</span>
                  <p className="text-[#10e2ea] font-bold">{formatCurrency(totalGrowth)}</p>
                </div>
                <div>
                  <span className={`${labelColor}`}>Retirement Amount (Inflation adjusted)</span>
                  <p className="text-[#e77e23] font-bold">{formatCurrency(retirementAmount)}</p>
                </div>
                <div>
                  <span className={`${labelColor}`}>Growth of your Savings ({returnRate}% per annum)</span>
                  <p className="text-[#1bc98e] font-bold">{formatCurrency(savingsGrowth)}</p>
                </div>
                <div>
                  <span className={`${labelColor}`}>Final Targeted Amount (Minus growth of your savings)</span>
                  <p className="text-red-400 font-bold">{formatCurrency(requiredCorpus)}</p>
                </div>
                <div>
                  <span className={`${labelColor}`}>Number of years you need to save</span>
                  <p className="text-yellow-400 font-bold">{years} Years</p>
                </div>
              </div>

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
                          {formatCurrency(retirementAmount)}
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
                  <span className={labelColor}>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RetirementCalculator;


