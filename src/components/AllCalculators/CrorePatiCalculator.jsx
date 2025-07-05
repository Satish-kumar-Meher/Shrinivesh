// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import { Bubbles } from "../../utils/Bubble";

// const BecomeCrorepatiCalculator = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [targetCrores, setTargetCrores] = useState(5);
//   const [currentAge, setCurrentAge] = useState(30);
//   const [targetAge, setTargetAge] = useState(60);
//   const [inflation, setInflation] = useState(5);
//   const [expectedReturn, setExpectedReturn] = useState(12);
//   const [currentSavings, setCurrentSavings] = useState(2500000);

//   const years = targetAge - currentAge;
//   const months = years * 12;

//   // Future value of target considering inflation
//   const inflationAdjustedTarget =
//     targetCrores * 1e7 * Math.pow(1 + inflation / 100, years);

//   // Future value of current savings
//   const futureValueSavings =
//     currentSavings * Math.pow(1 + expectedReturn / 100, years);

//   // Required amount to accumulate via SIP
//   const requiredViaSIP = Math.max(
//     inflationAdjustedTarget - futureValueSavings,
//     0
//   );

//   const monthlyRate = expectedReturn / 12 / 100;
//   const factor =
//     ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

//   const sipAmount = requiredViaSIP / factor;
//   const totalSIPInvestment = sipAmount * months;
//   const totalGrowth = requiredViaSIP - totalSIPInvestment;

//   const data = [
//     { name: "Total SIP Investment", value: totalSIPInvestment, color: "#0e6371" },
//     { name: "SIP Returns", value: totalGrowth, color: "#10e2ea" },
//     { name: "Future Value of Savings", value: futureValueSavings, color: "#f59e0b" },
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
//     <section className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
//       <Bubbles darkMode={darkMode} />
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className={`rounded-3xl p-6 md:p-10 border ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.01] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}
//         >
//           <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>Become a Crorepati Calculator</h2>

//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Inputs */}
//             <div>
//               {/* Target Crores */}
//               <label className={`block mb-2 font-medium ${labelColor}`}>Target Wealth (in Crores)</label>
//               <div className="flex items-center gap-4 mb-1">
//                 <input
//                   type="range"
//                   min={1}
//                   max={20}
//                   step={0.1}
//                   value={targetCrores}
//                   onChange={(e) => setTargetCrores(Number(e.target.value))}
//                   className={`w-full ${slideColor}`}
//                 />
//                 <input
//                   type="number"
//                   min={1}
//                   max={20}
//                   value={targetCrores}
//                   onChange={(e) => setTargetCrores(Number(e.target.value))}
//                   className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//                 />
//               </div>
//               <div className={`text-sm mb-4 ${hintColor}`}>₹1Cr – ₹20Cr</div>

//               {/* Current Age & Target Age */}
//               <label className={`block mb-2 font-medium ${labelColor}`}>Current Age</label>
//               <input
//                 type="number"
//                 min={10}
//                 max={100}
//                 value={currentAge}
//                 onChange={(e) => setCurrentAge(Number(e.target.value))}
//                 className={`mb-4 w-full px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//               />

//               <label className={`block mb-2 font-medium ${labelColor}`}>Target Age</label>
//               <input
//                 type="number"
//                 min={10}
//                 max={100}
//                 value={targetAge}
//                 onChange={(e) => setTargetAge(Number(e.target.value))}
//                 className={`mb-4 w-full px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//               />

//               {/* Inflation Rate */}
//               <label className={`block mb-2 font-medium ${labelColor}`}>Inflation Rate (%)</label>
//               <input
//                 type="number"
//                 min={0}
//                 max={15}
//                 step={0.1}
//                 value={inflation}
//                 onChange={(e) => setInflation(Number(e.target.value))}
//                 className={`mb-4 w-full px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//               />

//               {/* Return Rate */}
//               <label className={`block mb-2 font-medium ${labelColor}`}>Expected Return Rate (%)</label>
//               <input
//                 type="number"
//                 min={1}
//                 max={30}
//                 step={0.1}
//                 value={expectedReturn}
//                 onChange={(e) => setExpectedReturn(Number(e.target.value))}
//                 className={`mb-4 w-full px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//               />

//               {/* Current Savings */}
//               <label className={`block mb-2 font-medium ${labelColor}`}>Current Savings (₹)</label>
//               <input
//                 type="number"
//                 min={0}
//                 value={currentSavings}
//                 onChange={(e) => setCurrentSavings(Number(e.target.value))}
//                 className={`w-full px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//               />
//             </div>

//             {/* Output & Chart */}
//             <div className="flex flex-col items-center gap-4">
//               <div className="flex flex-col items-center">
//                 <div className="text-center">
//                   <p className={`text-sm ${labelColor}`}>Monthly SIP Amount</p>
//                   <p className="text-green-500 text-xl font-bold">
//                     ₹ {Math.round(sipAmount).toLocaleString("en-IN")}
//                   </p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mt-4 text-center">
//                   <div>
//                     <p className={`text-sm ${labelColor}`}>Inflation Adjusted Target</p>
//                     <p className={`${titleColor} font-bold`}>₹ {Math.round(inflationAdjustedTarget).toLocaleString("en-IN")}</p>
//                   </div>
//                   <div>
//                     <p className={`text-sm ${labelColor}`}>Future Value of Savings</p>
//                     <p className="text-amber-400 font-bold">₹ {Math.round(futureValueSavings).toLocaleString("en-IN")}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full h-64">
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
//                           ₹{Math.round(inflationAdjustedTarget).toLocaleString("en-IN")}
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
//                 <div className="flex items-center gap-2">
//                   <span className="w-4 h-4 rounded-full bg-[#f59e0b]" />
//                   <span className={labelColor}>Savings Growth</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default BecomeCrorepatiCalculator;





// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import { Bubbles } from "../../utils/Bubble";

// const CrorepatiCalculator = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [goalCrore, setGoalCrore] = useState(5); // in Crores
//   const [currentAge, setCurrentAge] = useState(30);
//   const [targetAge, setTargetAge] = useState(60);
//   const [inflation, setInflation] = useState(5);
//   const [returnRate, setReturnRate] = useState(12);
//   const [currentSavings, setCurrentSavings] = useState(2500000);

//   const years = targetAge - currentAge;
//   const futureValue = goalCrore * 1e7 * Math.pow(1 + inflation / 100, years);
//   const futureSavings = currentSavings * Math.pow(1 + returnRate / 100, years);

//   const monthlyRate = returnRate / 12 / 100;
//   const months = years * 12;
//   const factor = ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
//   const requiredCorpus = futureValue - futureSavings;
//   const monthlySIP = requiredCorpus > 0 ? requiredCorpus / factor : 0;

//   const totalInvestment = monthlySIP * months;
//   const totalGrowth = requiredCorpus > 0 ? requiredCorpus : 0;

//   const data = [
//     { name: "Total Investment", value: totalInvestment, color: "#0e6371" },
//     { name: "Total Growth", value: totalGrowth, color: "#10e2ea" },
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

//   const SliderInput = ({ label, min, max, step, value, setValue, suffix, prefix }) => (
//     <div className="mb-5">
//       <label className={`block mb-2 font-medium ${labelColor}`}>{label}</label>
//       <div className="flex items-center gap-4 mb-1">
//         <input
//           type="range"
//           min={min}
//           max={max}
//           step={step}
//           value={value}
//           onChange={(e) => setValue(Number(e.target.value))}
//           className={`w-full ${slideColor}`}
//         />
//         <input
//           type="number"
//           min={min}
//           max={max}
//           step={step}
//           value={value}
//           onChange={(e) => setValue(Number(e.target.value))}
//           className={`w-32 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//         />
//       </div>
//       <div className={`text-sm ${hintColor}`}>
//         {prefix}{min.toLocaleString("en-IN")} – {prefix}{max.toLocaleString("en-IN")} {suffix}
//       </div>
//     </div>
//   );

//   return (
//     <section className={`relative mt-15 z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
//       <Bubbles darkMode={darkMode} />
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className={`rounded-3xl p-6 md:p-10 border ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.01] ${
//             darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
//           }`}
//         >
//           <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>
//             Become a Crorepati Calculator
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left: Inputs */}
//             <div>
//               <SliderInput
//                 label="Target Wealth (in Crores)"
//                 min={1}
//                 max={20}
//                 step={0.5}
//                 value={goalCrore}
//                 setValue={setGoalCrore}
//                 prefix="₹"
//                 suffix="Cr"
//               />
//               <SliderInput
//                 label="Current Age"
//                 min={10}
//                 max={100}
//                 step={1}
//                 value={currentAge}
//                 setValue={setCurrentAge}
//               />
//               <SliderInput
//                 label="Target Age to be Crorepati"
//                 min={10}
//                 max={100}
//                 step={1}
//                 value={targetAge}
//                 setValue={setTargetAge}
//               />
//               <SliderInput
//                 label="Expected Inflation Rate (%)"
//                 min={0}
//                 max={15}
//                 step={0.1}
//                 value={inflation}
//                 setValue={setInflation}
//                 suffix="%"
//               />
//               <SliderInput
//                 label="Expected Return Rate (%)"
//                 min={1}
//                 max={20}
//                 step={0.1}
//                 value={returnRate}
//                 setValue={setReturnRate}
//                 suffix="%"
//               />
//               <SliderInput
//                 label="Current Savings (₹)"
//                 min={0}
//                 max={10000000}
//                 step={100000}
//                 value={currentSavings}
//                 setValue={setCurrentSavings}
//                 prefix="₹"
//               />
//             </div>

//             {/* Right: Outputs */}
//             <div className="flex flex-col items-center gap-4">
//               <div className="flex flex-col items-center">
//                 <div className="flex gap-6 justify-center mb-2">
//                   <div className="text-center">
//                     <p className={`text-sm ${labelColor}`}>Total Investment</p>
//                     <p className={`${titleColor} font-bold`}>
//                       ₹{Math.round(totalInvestment).toLocaleString("en-IN")}
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <p className={`text-sm ${labelColor}`}>Total Growth</p>
//                     <p className="text-green-500 font-bold">
//                       ₹{Math.round(totalGrowth).toLocaleString("en-IN")}
//                     </p>
//                   </div>
//                 </div>
//                 <p className={`text-sm pt-4 font-medium ${labelColor}`}>
//                   Required Monthly SIP:{" "}
//                   <span className={`${darkMode ? "text-amber-300" : "text-green-800"} pl-2`}>
//                     ₹{Math.round(monthlySIP).toLocaleString("en-IN")}
//                   </span>
//                 </p>
//               </div>

//               <div className="w-full h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={data}
//                       dataKey="value"
//                       innerRadius={70}
//                       outerRadius={100}
//                       paddingAngle={3}
//                       label={({ cx, cy }) => (
//                         <text
//                           x={cx}
//                           y={cy}
//                           textAnchor="middle"
//                           dominantBaseline="middle"
//                           fill="#e77e23"
//                           fontWeight="bold"
//                         >
//                           ₹{(goalCrore * 1e7).toLocaleString("en-IN")}
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
//                   <span className={labelColor}>Growth</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CrorepatiCalculator;






import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Bubbles } from "../../utils/Bubble";
import SEO from "../../utils/SEO";

const CrorepatiCalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [goalCrore, setGoalCrore] = useState(5);
  const [currentAge, setCurrentAge] = useState(30);
  const [targetAge, setTargetAge] = useState(60);
  const [inflation, setInflation] = useState(5);
  const [returnRate, setReturnRate] = useState(12);
  const [currentSavings, setCurrentSavings] = useState(2500000);

  const years = targetAge - currentAge;
  const futureValue = goalCrore * 1e7 * Math.pow(1 + inflation / 100, years);
  const futureSavings = currentSavings * Math.pow(1 + returnRate / 100, years);

  const requiredCorpus = futureValue - futureSavings;
  const monthlyRate = returnRate / 12 / 100;
  const months = years * 12;
  const factor = ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const monthlySIP = requiredCorpus > 0 ? requiredCorpus / factor : 0;
  const totalInvestment = monthlySIP * months;
  const totalGrowth = requiredCorpus > 0 ? requiredCorpus : 0;
  const inflationAdjustedTarget = futureValue;
  const savingsGrowth = futureSavings;
  const adjustedCorpus = requiredCorpus;

  const data = [
    { name: "Total Investment", value: totalInvestment, color: "#0e6371" },
    { name: "Total Growth", value: totalGrowth, color: "#10e2ea" },
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
      <SEO tittle={"Become a crorepati calculator Page"} description={"This is the Become a crorepati calculator page"} />
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
            Become a Crorepati Calculator
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <SliderInput label="Target Wealth (in Crores)" min={1} max={20} step={0.5} value={goalCrore} setValue={setGoalCrore} prefix="₹" suffix="Cr" />
              <SliderInput label="Current Age" min={10} max={100} step={1} value={currentAge} setValue={setCurrentAge} />
              <SliderInput label="Target Age to be Crorepati" min={10} max={100} step={1} value={targetAge} setValue={setTargetAge} />
              <SliderInput label="Expected Inflation Rate (%)" min={0} max={15} step={0.1} value={inflation} setValue={setInflation} suffix="%" />
              <SliderInput label="Expected Return Rate (%)" min={1} max={20} step={0.1} value={returnRate} setValue={setReturnRate} suffix="%" />
              <SliderInput label="Current Savings (₹)" min={0} max={10000000} step={100000} value={currentSavings} setValue={setCurrentSavings} prefix="₹" />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className={`text-sm ${labelColor}`}>Monthly SIP Amount</p>
                    <p className={`${titleColor} font-bold text-lg`}>
                      ₹{Math.round(monthlySIP).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${labelColor}`}>Years to Save</p>
                    <p className={`font-bold text-lg ${labelColor}`}>{years} years</p>
                  </div>
                  <div>
                    <p className={`text-sm ${labelColor}`}>Total Invested</p>
                    <p className={`font-bold ${titleColor}`}>
                      ₹{Math.round(totalInvestment).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${labelColor}`}>Total Growth</p>
                    <p className="text-green-500 font-bold">
                      ₹{Math.round(totalGrowth).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${labelColor}`}>Target Wealth (Inflation Adjusted)</p>
                    <p className={`font-bold text-yellow-500`}>
                      ₹{Math.round(inflationAdjustedTarget).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${labelColor}`}>Savings Growth</p>
                    <p className="text-green-500 font-bold">
                      ₹{Math.round(savingsGrowth).toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${labelColor}`}>Final Target (minus savings growth)</p>
                    <p className={`font-bold text-pink-400`}>
                      ₹{Math.round(adjustedCorpus).toLocaleString("en-IN")}
                    </p>
                  </div>
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
                          ₹{goalCrore.toLocaleString("en-IN") + "Cr"}
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

export default CrorepatiCalculator;
