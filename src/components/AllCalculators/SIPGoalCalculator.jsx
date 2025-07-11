// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import { Bubbles } from "../../utils/Bubble";

// const SIPGoalCalculator = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [goalAmount, setGoalAmount] = useState(20000000);
//   const [rate, setRate] = useState(12);
//   const [years, setYears] = useState(15);

//   const months = years * 12;
//   const monthlyRate = rate / 12 / 100;

//   const monthlySIP = goalAmount / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
//   const totalInvestment = monthlySIP * months;
//   const returns = goalAmount - totalInvestment;

//   const data = [
//     { name: "Total Investment", value: totalInvestment, color: "#0e6371" },
//     { name: "Returns", value: returns, color: "#10e2ea" },
//   ];

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const cardGlass = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

//   const innerGlow = darkMode
//     ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
//     : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

//   const outerGlow = darkMode
//     ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
//     : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

//   const labelColor = darkMode ? "text-white" : "text-black";
//   const titleColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
//   const inputBg = darkMode ? "bg-[#0f1a26]/80 text-white" : "bg-white/80 text-black";
//   const inputBorder = darkMode ? "border-[#10e2ea]/40" : "border-[#0e6371]/30";
//   const hintColor = darkMode ? "text-gray-400" : "text-gray-600";
//   const slideColor = darkMode ? "accent-[#10e2ea]" : "accent-[#0e6371]";

//   return (
//     <section className={`relative mt-15 py-20 overflow-hidden ${bgGradient}`}>
//       <Bubbles darkMode={darkMode} />
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className={`rounded-3xl p-6 md:p-10 border ${cardGlass} ${innerGlow} ${outerGlow} hover:scale-[1.01] transition-transform ${
//             darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
//           }`}
//         >
//           <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>SIP Goal Calculator</h2>

//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left: Inputs */}
//             <div>
//               {/* Goal Amount */}
//                 <label className={`block mb-2 font-medium ${labelColor}`}>Goal Amount (₹)</label>
//                 <div className="flex items-center gap-4 mb-1">
//                 <input
//                     type="range"
//                     min={100000}
//                     max={100000000}
//                     step={10000}
//                     value={goalAmount}
//                     onChange={(e) => setGoalAmount(Number(e.target.value))}
//                     className={`w-full ${slideColor}`}
//                 />
//                 <input
//                     type="number"
//                     min={100000}
//                     max={100000000}
//                     step={10000}
//                     value={goalAmount}
//                     onChange={(e) => setGoalAmount(Number(e.target.value))}
//                     className={`w-44 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//                 />
//                 </div>
//                 <div className={`text-sm mb-4 ${hintColor}`}>Min: ₹1,00,000 | Max: ₹10,00,00,000</div>


//               {/* Expected Return */}
//               <label className={`block mb-2 font-medium ${labelColor}`}>Expected Return Rate (p.a)</label>
//               <div className="flex items-center gap-4 mb-1">
//                 <input
//                   type="range"
//                   min={1}
//                   max={30}
//                   step={0.1}
//                   value={rate}
//                   onChange={(e) => setRate(Number(e.target.value))}
//                   className={`w-full ${slideColor}`}
//                 />
//                 <input
//                   type="number"
//                   min={1}
//                   max={30}
//                   value={rate}
//                   onChange={(e) => setRate(Number(e.target.value))}
//                   className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//                 />
//               </div>
//               <div className={`text-sm mb-4 ${hintColor}`}>Min: 1% | Max: 30%</div>

//               {/* Time Period */}
//               <label className={`block mb-2 font-medium ${labelColor}`}>Investment Duration (Years)</label>
//               <div className="flex items-center gap-4 mb-1">
//                 <input
//                   type="range"
//                   min={1}
//                   max={30}
//                   value={years}
//                   onChange={(e) => setYears(Number(e.target.value))}
//                   className={`w-full ${slideColor}`}
//                 />
//                 <input
//                   type="number"
//                   min={1}
//                   max={30}
//                   value={years}
//                   onChange={(e) => setYears(Number(e.target.value))}
//                   className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//                 />
//               </div>
//               <div className={`text-sm mb-4 ${hintColor}`}>Min: 1 | Max: 30</div>

//               <p className={`mt-6 font-semibold italic ${titleColor}`}>
//                 Set your goal and let SIP work for you
//               </p>
//             </div>

//             {/* Right: Pie Chart + Output */}
//             <div className="flex flex-col items-center gap-4">
//               <div className="text-center mb-3">
//                 <p className={`text-sm ${labelColor}`}>Monthly SIP Required</p>
//                 <p className={`text-2xl font-bold ${titleColor}`}>
//                   ₹ {Math.round(monthlySIP).toLocaleString("en-IN")}
//                 </p>
//               </div>
//               <div className="flex gap-6 justify-center">
//                 <div className="text-center">
//                   <p className={`text-sm ${labelColor}`}>Total Investment</p>
//                   <p className={`${titleColor} font-bold`}>₹ {Math.round(totalInvestment).toLocaleString("en-IN")}</p>
//                 </div>
//                 <div className="text-center">
//                   <p className={`text-sm ${labelColor}`}>Returns</p>
//                   <p className="text-green-500 font-bold">₹ {Math.round(returns).toLocaleString("en-IN")}</p>
//                 </div>
//               </div>

//               <div className="w-full h-64 mt-4">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={data}
//                       dataKey="value"
//                       innerRadius={70}
//                       outerRadius={100}
//                       paddingAngle={3}
//                       label={({ cx, cy }) => (
//                         <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="#e77e23" fontWeight="bold">
//                           ₹{Math.round(goalAmount).toLocaleString("en-IN")}
//                         </text>
//                       )}
//                     >
//                       {data.map((entry, idx) => (
//                         <Cell key={`cell-${idx}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="flex gap-8 text-sm font-medium mt-4">
//                 <div className="flex items-center gap-2">
//                   <span className="w-4 h-4 rounded-full bg-[#0e6371]" />
//                   <span className={labelColor}>Investment</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="w-4 h-4 rounded-full bg-[#10e2ea]" />
//                   <span className={labelColor}>Returns</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default SIPGoalCalculator;






import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Bubbles } from "../../utils/Bubble";
import YearlyReturnGraphSummary from "./GraphSIP";
// import SEO from "../../utils/SEO";

const GoalSIPCalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [goalAmount, setGoalAmount] = useState(20000000); // ₹2 Crore
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  // Calculate Required SIP
  const factor = ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const sipAmount = goalAmount / factor;

  const totalInvestment = sipAmount * months;
  const returns = goalAmount - totalInvestment;

  const data = [
    { name: "Total Investment", value: totalInvestment, color: "#0e6371" },
    { name: "Returns", value: returns, color: "#10e2ea" },
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
    <section className={`relative mt-15 z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
      {/* <SEO tittle={"SIPGoal calculator Page"} description={"This is the SIPGoal calculator page"} /> */}
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
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>SIP Goal Calculator</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Inputs */}
            <div>
              {/* Goal Amount */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Goal Amount</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={100000}
                  max={100000000}
                  step={100000}
                  value={goalAmount}
                  onChange={(e) => setGoalAmount(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={100000}
                  max={100000000}
                  step={100000}
                  value={goalAmount}
                  onChange={(e) => setGoalAmount(Number(e.target.value))}
                  className={`w-32 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>₹1L – ₹10Cr</div>

              {/* Interest Rate */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Expected Return Rate (p.a)</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={1}
                  max={30}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>Min: 1% | Max: 30%</div>

              {/* Time Period */}
              <label className={`block mb-2 font-medium ${labelColor}`}>Time Period (Years)</label>
              <div className="flex items-center gap-4 mb-1">
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className={`w-full ${slideColor}`}
                />
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
                />
              </div>
              <div className={`text-sm mb-4 ${hintColor}`}>Min: 1 | Max: 30</div>

              <p className={`mt-6 font-semibold italic ${titleColor}`}>
                Find the exact SIP amount for your financial goal.
              </p>
            </div>

            {/* Right Outputs */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="flex gap-6 justify-center mb-2">
                  <div className="text-center">
                    <p className={`text-sm ${labelColor}`}>Total Investment</p>
                    <p className={`${titleColor} font-bold`}>₹ {Math.round(totalInvestment).toLocaleString("en-IN")}</p>
                  </div>
                  <div className="text-center">
                    <p className={`text-sm ${labelColor}`}>Returns</p>
                    <p className="text-green-500 font-bold">₹ {Math.round(returns).toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <p className={`text-sm pt-4 font-medium ${labelColor}`}>
                  Monthly SIP Amount:<span className={`${darkMode ? "text-amber-300" : "text-green-800"} pl-3`}>₹ {Math.round(sipAmount).toLocaleString("en-IN")}</span>
                </p>
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
                        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill="#e77e23" fontWeight="bold">
                          ₹{Math.round(goalAmount).toLocaleString("en-IN")}
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
    </section>
  );
};

export default GoalSIPCalculator;
