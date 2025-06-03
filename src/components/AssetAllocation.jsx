import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const allocationModels = [
  {
    title: "Conservative Investor (0 - 4 Years)",
    desc: "High on debt, this portfolio is ideal for risk averse investors looking for superior returns over FDs.",
    data: [
      { name: "Debt", value: 50, color: "#0e6371" },
      { name: "Balanced", value: 30, color: "#6c757d" },
      { name: "Equity", value: 20, color: "#10e2ea" },
    ],
  },
  {
    title: "Moderately Conservative (4 - 6 Years)",
    desc: "Higher equity allocations suits high risk takers with 10 yrs investment horizon.",
    data: [
      { name: "Equity", value: 30, color: "#10e2ea" },
      { name: "Balanced", value: 70, color: "#6c757d" },
    ],
  },
  {
    title: "Moderate Investor (6 - 9 Years)",
    desc: "A Hybrid portfolio is ideal for Moderate investor as volatility is limited.",
    data: [
      { name: "Equity", value: 40, color: "#10e2ea" },
      { name: "Balanced", value: 50, color: "#6c757d" },
      { name: "Debt", value: 10, color: "#0e6371" },
    ],
  },
  {
    title: "Moderately Aggressive Investor (9 - 12 Years)",
    desc: "Higher equity + moderate debt allocation ensures moderate return and less volatility.",
    data: [
      { name: "Equity", value: 60, color: "#10e2ea" },
      { name: "Debt", value: 40, color: "#0e6371" },
    ],
  },
  {
    title: "Aggressive Investor (12+ Years)",
    desc: "Higher equity allocations suits high risk takers with 10 yrs investment horizon.",
    data: [
      { name: "Equity", value: 70, color: "#10e2ea" },
      { name: "Balanced", value: 30, color: "#6c757d" },
    ],
  },
];

const ModelAssetAllocation = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

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

  const titleColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const descColor = darkMode ? "text-white" : "text-black";
  const labelColor = darkMode ? "text-green-500" : "text-green-600";

  return (
    <section
      className={`relative z-0 py-20 transition-colors duration-500 overflow-hidden ${bgGradient}`}
    >
      {/* Glowing Bubbles */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = 20 + i * 4;
          const top = `${Math.random() * 80}%`;
          const left = `${Math.random() * 90}%`;
          const color = darkMode ? "#10e2ea" : "#0e6371";

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                top,
                left,
                backgroundColor: color,
                opacity: 0.12,
                boxShadow: `0 0 20px 5px ${color}`,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-8 ${titleColor}`}>
          Model Asset Allocation
        </h2>
        <p className={`max-w-2xl mb-12 ${descColor}`}>
          Aligning your investments with your Risk Profile and Investment Tenure is the ideal way to achieve
          Investment Success. Explore our Model Portfolios and choose the one that suits you.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allocationModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-6 border ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.02] ${
                darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
              }`}
            >
              <h3 className={`text-lg font-bold mb-2 ${titleColor}`}>{model.title}</h3>
              <p className={`text-sm mb-4 ${descColor}`}>{model.desc}</p>
              <div className="h-40 w-full flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={model.data}
                      dataKey="value"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={4}
                    >
                      {model.data.map((entry, idx) => (
                        <Cell key={idx} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                {model.data.map((entry, idx) => (
                  <li key={idx} className="flex justify-between font-medium">
                    <span style={{ color: entry.color }}>{entry.name} Funds</span>
                    <span className={labelColor}>{entry.value}%</span>
                  </li>
                ))}
              </ul>

              {/* View More Button */}
              <div className="mt-6 flex justify-end">
                <button
                  className={`group flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border transition duration-300
                    ${darkMode 
                      ? "bg-white/10 text-[#10e2ea] border-[#10e2ea]/20 shadow-[inset_0_0_8px_rgba(16,226,234,0.25)] hover:shadow-[0_0_20px_rgba(16,226,234,0.45)]" 
                      : "bg-white/50 text-[#0e6371] border-[#0e6371]/20 shadow-[inset_0_0_8px_rgba(14,99,113,0.2)] hover:shadow-[0_0_20px_rgba(14,99,113,0.35)]"
                    }`}
                >
                  View More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelAssetAllocation;













// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// const allocationModels = [
//   {
//     title: "Conservative Investor (0 - 4 Years)",
//     desc: "High on debt, this portfolio is ideal for risk averse investors looking for superior returns over FDs.",
//     data: [
//       { name: "Debt", value: 50, color: "#0e6371" },
//       { name: "Balanced", value: 30, color: "#6c757d" },
//       { name: "Equity", value: 20, color: "#10e2ea" },
//     ],
//   },
//   {
//     title: "Moderately Conservative (4 - 6 Years)",
//     desc: "Higher equity allocations suits high risk takers with 10 yrs investment horizon.",
//     data: [
//       { name: "Equity", value: 30, color: "#10e2ea" },
//       { name: "Balanced", value: 70, color: "#6c757d" },
//     ],
//   },
//   {
//     title: "Moderate Investor (6 - 9 Years)",
//     desc: "A Hybrid portfolio is ideal for Moderate investor as volatility is limited.",
//     data: [
//       { name: "Equity", value: 40, color: "#10e2ea" },
//       { name: "Balanced", value: 50, color: "#6c757d" },
//       { name: "Debt", value: 10, color: "#0e6371" },
//     ],
//   },
//   {
//     title: "Moderately Aggressive Investor (9 - 12 Years)",
//     desc: "Higher equity + moderate debt allocation ensures moderate return and less volatility.",
//     data: [
//       { name: "Equity", value: 60, color: "#10e2ea" },
//       { name: "Debt", value: 40, color: "#0e6371" },
//     ],
//   },
//   {
//     title: "Aggressive Investor (12+ Years)",
//     desc: "Higher equity allocations suits high risk takers with 10 yrs investment horizon.",
//     data: [
//       { name: "Equity", value: 70, color: "#10e2ea" },
//       { name: "Balanced", value: 30, color: "#6c757d" },
//     ],
//   },
// ];

// const ModelAssetAllocation = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

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

//   const titleColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
// //   const descColor = darkMode ? "text-[#c9e265]" : "text-[#6b7c29]";
// //   const labelColor = darkMode ? "text-[#c9e265]" : "text-[#0e6371]";
//   const descColor = darkMode ? "text-white" : "text-black";
//   const labelColor = darkMode ? "text-green-500" : "text-green-600";

//   return (
//     <section
//   className={`relative z-0 py-20 transition-colors duration-500 overflow-hidden ${bgGradient}`}
// >
//   {/* Glowing Bubbles Inside Component Only */}
//   <motion.div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//     {[...Array(15)].map((_, i) => {
//       const size = 20 + i * 4;
//       const top = `${Math.random() * 80}%`; // limit to 80% height
//       const left = `${Math.random() * 90}%`; // limit to 90% width
//       const color = darkMode ? "#10e2ea" : "#0e6371";

//       return (
//         <motion.div
//           key={i}
//           className="absolute rounded-full"
//           style={{
//             width: size,
//             height: size,
//             top,
//             left,
//             backgroundColor: color,
//             opacity: 0.12,
//             boxShadow: `0 0 20px 5px ${color}`,
//           }}
//           animate={{
//             y: [0, -15, 0],
//             x: [0, 10, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 6 + i * 0.3,
//             repeat: Infinity,
//             delay: i * 0.2,
//           }}
//         />
//       );
//     })}
//   </motion.div>


//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <h2 className={`text-3xl sm:text-4xl font-bold mb-8 ${titleColor}`}>Model Asset Allocation</h2>
//         <p className={`max-w-2xl mb-12 ${descColor}`}>
//           Aligning your investments with your Risk Profile and Investment Tenure is the ideal way to achieve
//           Investment Success. Explore our Model Portfolios and choose the one that suits you.
//         </p>

//         <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {allocationModels.map((model, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className={`rounded-3xl p-6 border ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.02] ${
//                 darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
//               }`}
//             >
//               <h3 className={`text-lg font-bold mb-2 ${titleColor}`}>{model.title}</h3>
//               <p className={`text-sm mb-4 ${descColor}`}>{model.desc}</p>
//               <div className="h-40 w-full flex justify-center">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={model.data}
//                       dataKey="value"
//                       innerRadius={40}
//                       outerRadius={70}
//                       paddingAngle={4}
//                     >
//                       {model.data.map((entry, idx) => (
//                         <Cell key={idx} fill={entry.color} />
//                       ))}
//                     </Pie>
//                        <Tooltip/>
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//               <ul className="mt-4 space-y-1 text-sm">
//                 {model.data.map((entry, idx) => (
//                   <li key={idx} className="flex justify-between font-medium">
//                     <span style={{ color: entry.color }}>{entry.name} Funds</span>
//                     <span className={labelColor}>{entry.value}%</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ModelAssetAllocation;



