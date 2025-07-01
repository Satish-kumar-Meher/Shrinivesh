// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// import { Bubbles } from "../../utils/Bubble";

// const EPFCalculator = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [salary, setSalary] = useState(25000);
//   const [increaseRate, setIncreaseRate] = useState(10);
//   const [employeePct, setEmployeePct] = useState(12);
//   const [employerPct, setEmployerPct] = useState(3.67);
//   const [interestRate, setInterestRate] = useState(8.15);
//   const [currentAge, setCurrentAge] = useState(25);
//   const [retirementAge, setRetirementAge] = useState(60);

//   const years = retirementAge - currentAge;
//   const months = years * 12;

//   let totalEPF = 0;
//   let currentSalary = salary;

//   for (let year = 0; year < years; year++) {
//     for (let m = 0; m < 12; m++) {
//       const employeeCont = currentSalary * (employeePct / 100);
//       const employerCont = currentSalary * (employerPct / 100);
//       totalEPF = (totalEPF + employeeCont + employerCont) * (1 + interestRate / 1200);
//     }
//     currentSalary *= 1 + increaseRate / 100;
//   }

//   const totalInvested = salary * ((employeePct + employerPct) / 100) * 12 * years;
//   const totalReturns = totalEPF - totalInvested;

//   const pieData = [
//     { name: "Investment", value: totalInvested, color: "#0e6371" },
//     { name: "Returns", value: totalReturns, color: "#10e2ea" },
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
//           <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>EPF Calculator</h2>

//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             {/* Left Controls */}
//             <div>
//               {[
//                 { label: "Monthly Salary (Basic + DA)", value: salary, setValue: setSalary, min: 1000, max: 1000000, step: 500 },
//                 { label: "Annual Increase Salary (%)", value: increaseRate, setValue: setIncreaseRate, min: 1, max: 50 },
//                 { label: "Employee Contribution (%)", value: employeePct, setValue: setEmployeePct, min: 1, max: 20 },
//                 { label: "Employer Contribution (%)", value: employerPct, setValue: setEmployerPct, min: 1, max: 12 },
//                 { label: "Interest Rate (%)", value: interestRate, setValue: setInterestRate, min: 1, max: 12 },
//                 { label: "Current Age", value: currentAge, setValue: setCurrentAge, min: 18, max: 59 },
//                 { label: "Retirement Age", value: retirementAge, setValue: setRetirementAge, min: currentAge + 1, max: 80 },
//               ].map((item, i) => (
//                 <div key={i} className="mb-4">
//                   <label className={`block mb-2 font-medium ${labelColor}`}>{item.label}</label>
//                   <div className="flex items-center gap-4">
//                     <input
//                       type="range"
//                       min={item.min}
//                       max={item.max}
//                       step={item.step || 1}
//                       value={item.value}
//                       onChange={(e) => item.setValue(Number(e.target.value))}
//                       className={`w-full ${slideColor}`}
//                     />
//                     <input
//                       type="number"
//                       value={item.value}
//                       min={item.min}
//                       max={item.max}
//                       onChange={(e) => item.setValue(Number(e.target.value))}
//                       className={`w-28 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Output */}
//             <div className="flex flex-col items-center gap-4">
//               <div className="flex gap-6 justify-center mb-2 text-center">
//                 <div>
//                   <p className={`text-sm ${labelColor}`}>Total Investment</p>
//                   <p className={`${titleColor} font-bold`}>₹ {Math.round(totalInvested).toLocaleString("en-IN")}</p>
//                 </div>
//                 <div>
//                   <p className={`text-sm ${labelColor}`}>Returns</p>
//                   <p className="text-green-500 font-bold">₹ {Math.round(totalReturns).toLocaleString("en-IN")}</p>
//                 </div>
//                 <div>
//                   <p className={`text-sm ${labelColor}`}>Maturity Amount</p>
//                   <p className="text-blue-500 font-bold">₹ {Math.round(totalEPF).toLocaleString("en-IN")}</p>
//                 </div>
//               </div>

//               <div className="w-full h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={pieData}
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
//                           fill="#4caf50"
//                           fontWeight="bold"
//                         >
//                           ₹{Math.round(totalEPF).toLocaleString("en-IN")}
//                         </text>
//                       )}
//                     >
//                       {pieData.map((entry, idx) => (
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

// export default EPFCalculator;






// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Bubbles } from "../../utils/Bubble";

// const EPFCalculator = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [salary, setSalary] = useState(25000);
//   const [increaseRate, setIncreaseRate] = useState(10);
//   const [currentAge, setCurrentAge] = useState(25);

//   const interestRate = 8.15 / 100;
//   const employerPercent = 3.67 / 100;
//   const employeePercent = 12 / 100;
//   const retirementAge = 60;
//   const years = retirementAge - currentAge;

//   const yearlyEPF = (salary * (employerPercent + employeePercent)) * 12;
//   let total = 0;
//   let currentSalary = salary;

//   for (let i = 0; i < years; i++) {
//     total = (total + yearlyEPF) * (1 + interestRate);
//     currentSalary *= (1 + increaseRate / 100);
//   }

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
//     <section className={`relative mt-16 z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
//       <Bubbles darkMode={darkMode} />
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className={`rounded-3xl p-6 md:p-10 border grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.01] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}
//         >
//           {/* Left Inputs */}
//           <div>
//             <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>EPF Calculator</h2>

//             <label className={`block mb-2 font-medium ${labelColor}`}>Monthly Salary (Basic + DA)</label>
//             <div className="flex items-center gap-4 mb-1">
//               <input
//                 type="range"
//                 min={1000}
//                 max={1000000}
//                 step={1000}
//                 value={salary}
//                 onChange={(e) => setSalary(Number(e.target.value))}
//                 className={`w-full ${slideColor}`}
//               />
//               <input
//                 type="number"
//                 value={salary}
//                 min={1000}
//                 max={1000000}
//                 onChange={(e) => setSalary(Number(e.target.value))}
//                 className={`w-32 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//               />
//             </div>
//             <div className={`text-sm mb-4 ${hintColor}`}>₹1,000 - ₹10,00,000</div>

//             <label className={`block mb-2 font-medium ${labelColor}`}>Annual Increase Salary (%)</label>
//             <div className="flex items-center gap-4 mb-1">
//               <input
//                 type="range"
//                 min={1}
//                 max={50}
//                 value={increaseRate}
//                 onChange={(e) => setIncreaseRate(Number(e.target.value))}
//                 className={`w-full ${slideColor}`}
//               />
//               <input
//                 type="number"
//                 value={increaseRate}
//                 min={1}
//                 max={50}
//                 onChange={(e) => setIncreaseRate(Number(e.target.value))}
//                 className={`w-20 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
//               />
//             </div>
//             <div className={`text-sm mb-4 ${hintColor}`}>1% - 50%</div>

//             <label className={`block mb-2 font-medium ${labelColor}`}>Current Age</label>
//             <input
//               type="number"
//               value={currentAge}
//               min={18}
//               max={retirementAge - 1}
//               onChange={(e) => setCurrentAge(Number(e.target.value))}
//               className={`w-full px-3 py-2 rounded-lg border mb-4 ${inputBorder} ${inputBg}`}
//             />

//             <div className={`text-lg font-bold ${labelColor}`}>
//               Total Maturity Amount: <span className={`${titleColor}`}>₹{total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span>
//             </div>
//             <div className={`text-sm mt-1 ${hintColor}`}>Time Duration: {years} Yrs</div>
//           </div>

//           {/* Right Constants */}
//           <div className="space-y-10 pt-15 ml-20">
//             <div>
//               <p className={`text-sm ${hintColor}`}>Current Rate of Interest</p>
//               <p className={`text-xl font-semibold ${titleColor}`}>8.15%</p>
//             </div>
//             <div>
//               <p className={`text-sm ${hintColor}`}>Employer's Monthly Contribution to EPF</p>
//               <p className="text-lg font-bold text-green-400">3.67%</p>
//             </div>
//             <div>
//               <p className={`text-sm ${hintColor}`}>Employee's Monthly Contribution to EPF</p>
//               <p className="text-lg font-bold text-blue-400">12%</p>
//             </div>
//             <div>
//               <p className={`text-sm ${hintColor}`}>Retirement Age</p>
//               <p className="text-xl font-semibold text-yellow-400">60</p>
//             </div>
//             {/* <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg mt-6 w-full">
//               Invest Now →
//             </button> */}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default EPFCalculator;





import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../../utils/Bubble";

const EPFCalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [salary, setSalary] = useState(25000);
  const [increaseRate, setIncreaseRate] = useState(10);
  const [currentAge, setCurrentAge] = useState(25);

  const interestRate = 8.15 / 100;
  const monthlyInterestRate = interestRate / 12;
  const employerPercent = 3.67 / 100;
  const employeePercent = 12 / 100;
  const retirementAge = 60;
  const years = retirementAge - currentAge;
  const totalMonths = years * 12;

  let currentSalary = salary;
  let balance = 0;
  let totalInterest = 0;

  for (let month = 0; month < totalMonths; month++) {
    const employeeContribution = currentSalary * employeePercent;
    const employerContribution = currentSalary * employerPercent;
    const monthlyContribution = employeeContribution + employerContribution;

    const interest = balance * monthlyInterestRate;
    totalInterest += interest;
    balance += interest + monthlyContribution;

    if ((month + 1) % 12 === 0) {
      currentSalary *= 1 + increaseRate / 100;
    }
  }

  const total = balance;

  // Styling
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
      <Bubbles darkMode={darkMode} />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-6 md:p-10 border grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.01] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}
        >
          {/* Inputs */}
          <div>
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>EPF Calculator</h2>

            <label className={`block mb-2 font-medium ${labelColor}`}>Monthly Salary (Basic + DA)</label>
            <div className="flex items-center gap-4 mb-1">
              <input
                type="range"
                min={1000}
                max={1000000}
                step={1000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className={`w-full ${slideColor}`}
              />
              <input
                type="number"
                value={salary}
                min={1000}
                max={1000000}
                onChange={(e) => setSalary(Number(e.target.value))}
                className={`w-32 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
              />
            </div>
            <div className={`text-sm mb-4 ${hintColor}`}>₹1,000 - ₹10,00,000</div>

            <label className={`block mb-2 font-medium ${labelColor}`}>Annual Increase Salary (%)</label>
            <div className="flex items-center gap-4 mb-1">
              <input
                type="range"
                min={1}
                max={50}
                value={increaseRate}
                onChange={(e) => setIncreaseRate(Number(e.target.value))}
                className={`w-full ${slideColor}`}
              />
              <input
                type="number"
                value={increaseRate}
                min={1}
                max={50}
                onChange={(e) => setIncreaseRate(Number(e.target.value))}
                className={`w-20 px-3 py-2 rounded-lg border ${inputBorder} ${inputBg}`}
              />
            </div>
            <div className={`text-sm mb-4 ${hintColor}`}>1% - 50%</div>

            <label className={`block mb-2 font-medium ${labelColor}`}>Current Age</label>
            <input
              type="number"
              value={currentAge}
              min={18}
              max={retirementAge - 1}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className={`w-full px-3 py-2 rounded-lg border mb-4 ${inputBorder} ${inputBg}`}
            />

            <div className={`text-lg font-bold ${labelColor}`}>
              Total Maturity Amount:{" "}
              <span className={`${titleColor}`}>
                ₹{total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className={`text-sm mt-1 ${hintColor}`}>Time Duration: {years} Yrs</div>
          </div>

          {/* Constants Display */}
          <div className="space-y-10 pt-15 ml-20">
            <div>
              <p className={`text-sm ${hintColor}`}>Current Rate of Interest</p>
              <p className={`text-xl font-semibold ${titleColor}`}>8.15%</p>
            </div>
            <div>
              <p className={`text-sm ${hintColor}`}>Employer's Monthly Contribution to EPF</p>
              <p className="text-lg font-bold text-green-400">3.67%</p>
            </div>
            <div>
              <p className={`text-sm ${hintColor}`}>Employee's Monthly Contribution to EPF</p>
              <p className="text-lg font-bold text-blue-400">12%</p>
            </div>
            <div>
              <p className={`text-sm ${hintColor}`}>Retirement Age</p>
              <p className="text-xl font-semibold text-yellow-400">60</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EPFCalculator;



