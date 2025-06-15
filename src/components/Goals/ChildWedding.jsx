// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { ChevronDown, Check } from "lucide-react";
// import { Bubbles } from "../../utils/Bubble";


// const riskOptions = [
//   "Conservative",
//   "Moderate",
//   "Aggressive",
//   "Moderately Conservative",
//   "Moderately Aggressive",
//   "Check Your Profile"
// ];

// const ChildWeddingForm = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [formData, setFormData] = useState({
//     years: "",
//     cost: "",
//     inflation: "",
//     goalName: "",
//     risk: "Conservative",
//     showDropdown: false
//   });

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const toggleDropdown = () => {
//     setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
//   };

//   const selectRisk = (risk) => {
//     setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
//   };

//   const bg = darkMode ? "from-[#0e1525] to-[#081824]" : "from-[#f9fcfe] to-[#dff4ff]";
//   const cardGlass = darkMode
//     ? "bg-white/5 border border-[#10e2ea]/30 shadow-[0_0_30px_rgba(16,226,234,0.1)]"
//     : "bg-white/40 border border-[#0e6371]/20 shadow-[0_0_30px_rgba(14,99,113,0.08)]";
//   const textColor = darkMode ? "text-white" : "text-black";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

//   return (
//     <section className={`relative min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br ${bg}`}>
//       <Bubbles darkMode={darkMode} />
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500"
//       >
//         <div className={`text-center text-3xl sm:text-4xl font-bold mb-10 ${textColor}`}>
//           Child's <span className={highlight}>Wedding</span>
//         </div>

//         <div className={`space-y-6 ${cardGlass} p-6 rounded-2xl`}>
//           <p className={`${textColor}`}>You want to save for your child's wedding which is
//             <input
//               type="number"
//               value={formData.years}
//               onChange={(e) => handleChange("years", e.target.value)}
//               className="mx-2 w-20 border-b bg-transparent text-center focus:outline-none"
//             />
//             years away.
//           </p>

//           <p className={`${textColor}`}>The wedding cost would be around ₹
//             <input
//               type="number"
//               value={formData.cost}
//               onChange={(e) => handleChange("cost", e.target.value)}
//               className="mx-2 w-32 border-b bg-transparent text-center focus:outline-none"
//             />
//             in today's value. You assume the inflation to be
//             <input
//               type="number"
//               value={formData.inflation}
//               onChange={(e) => handleChange("inflation", e.target.value)}
//               className="mx-2 w-20 border-b bg-transparent text-center focus:outline-none"
//             />%.
//           </p>

//           <p className={`${textColor}`}>You would like to name this goal as
//             <input
//               type="text"
//               value={formData.goalName}
//               onChange={(e) => handleChange("goalName", e.target.value)}
//               className="mx-2 w-40 border-b bg-transparent text-center focus:outline-none"
//             />.
//             You can take
//             <span className="relative inline-block">
//               <button
//                 onClick={toggleDropdown}
//                 className={`ml-2 px-4 py-1 rounded-full border focus:outline-none ${highlight} border-current flex items-center gap-1`}
//               >
//                 {formData.risk} <ChevronDown size={16} />
//               </button>
//               {formData.showDropdown && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className={`absolute z-20 w-60 mt-2 left-0 bg-white/30 dark:bg-[#0b1925]/80 rounded-lg shadow-xl backdrop-blur-md border border-gray-300 dark:border-[#10e2ea]/30 ${textColor}`}
//                 >
//                   {riskOptions.map((option) => (
//                     <li
//                       key={option}
//                       onClick={() => selectRisk(option)}
//                       className="px-4 py-2 cursor-pointer hover:bg-white/20 flex justify-between items-center"
//                     >
//                       {option} {formData.risk === option && <Check size={16} className="text-green-500" />}
//                     </li>
//                   ))}
//                 </motion.ul>
//               )}
//             </span>
//             risk with your investments.
//           </p>

//           <div className="pt-4 text-center">
//             <button className="px-6 py-2 rounded-full bg-green-700 text-white font-semibold shadow hover:scale-105 transition-all">
//               Build My Child's Wedding
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ChildWeddingForm;







// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, Check } from "lucide-react";
// import { Bubbles } from "../../utils/Bubble";

// const riskOptions = [
//   "Conservative",
//   "Moderate",
//   "Aggressive",
//   "Moderately Conservative",
//   "Moderately Aggressive",
//   "Check Your Profile"
// ];

// const ChildWeddingForm = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [formData, setFormData] = useState({
//     years: "",
//     cost: "",
//     inflation: "",
//     goalName: "",
//     risk: "Conservative",
//     showDropdown: false
//   });

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const toggleDropdown = () => {
//     setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
//   };

//   const selectRisk = (risk) => {
//     setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
//   };

//   const bg = darkMode ? "from-[#0e1525] to-[#081824]" : "from-[#f9fcfe] to-[#dff4ff]";
//   const cardGlass = darkMode
//     ? "bg-white/5 border border-[#10e2ea]/30 shadow-[0_0_50px_rgba(16,226,234,0.15)]"
//     : "bg-white/50 border border-[#0e6371]/30 shadow-[0_0_50px_rgba(14,99,113,0.1)]";
//   const textColor = darkMode ? "text-white" : "text-[#0b1f2e]";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
//   const btnGradient = darkMode
//     ? "bg-gradient-to-br from-[#10e2ea] to-[#19587d]"
//     : "bg-gradient-to-br from-[#0e6371] to-[#5fc4eb]";

//   return (
//     <section className={`relative min-h-screen mt-15 py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-gradient-to-br ${bg}`}>
//       <Bubbles darkMode={darkMode} />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className={`relative z-10 max-w-5xl mx-auto p-10 sm:p-12 md:p-16 rounded-3xl backdrop-blur-2xl ${cardGlass} transition-all duration-500`}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className={`text-center text-4xl sm:text-5xl font-extrabold mb-10 ${textColor}`}
//         >
//           Child's <span className={highlight}>Wedding</span> Planning
//         </motion.h2>

//         <div className={`space-y-8 text-lg sm:text-xl ${textColor}`}>
//           <motion.p
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             You want to save for your child's wedding which is
//             <input
//               type="number"
//               value={formData.years}
//               onChange={(e) => handleChange("years", e.target.value)}
//               className="mx-2 w-20 border-b border-current bg-transparent text-center focus:outline-none"
//             />
//             years away.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             The wedding cost would be around ₹
//             <input
//               type="number"
//               value={formData.cost}
//               onChange={(e) => handleChange("cost", e.target.value)}
//               className="mx-2 w-32 border-b border-current bg-transparent text-center focus:outline-none"
//             />
//             in today's value. You assume the inflation to be
//             <input
//               type="number"
//               value={formData.inflation}
//               onChange={(e) => handleChange("inflation", e.target.value)}
//               className="mx-2 w-20 border-b border-current bg-transparent text-center focus:outline-none"
//             />%.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             You would like to name this goal as
//             <input
//               type="text"
//               value={formData.goalName}
//               onChange={(e) => handleChange("goalName", e.target.value)}
//               className="mx-2 w-40 border-b border-current bg-transparent text-center focus:outline-none"
//             />
//             . You can take
//             <span className="relative inline-block">
//               <button
//                 onClick={toggleDropdown}
//                 className={`ml-2 px-2 py-0 mr-2 rounded-full border focus:outline-none ${highlight} border-current flex items-center gap-1`}
//               >
//                 {formData.risk} <ChevronDown size={16} />
//               </button>

//               <AnimatePresence>
//                 {formData.showDropdown && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className={`absolute z-20 w-72 mt-2 left-0 bg-white/40 dark:bg-[#0b1e2a]/90 rounded-xl shadow-2xl backdrop-blur-md border border-gray-300 dark:border-[#10e2ea]/30 ${textColor}`}
//                   >
//                     {riskOptions.map((option) => (
//                       <li
//                         key={option}
//                         onClick={() => selectRisk(option)}
//                         className="px-4 py-2 cursor-pointer hover:bg-white/20 flex justify-between items-center transition"
//                       >
//                         {option} {formData.risk === option && <Check size={16} className="text-green-400" />}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </AnimatePresence>
//             </span>
//              risk with your investments.
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="pt-10 text-center"
//         >
//           <button
//             className={`px-8 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-105 transition-transform duration-300 ${btnGradient}`}
//           >
//             Build My Child's Wedding Plan
//           </button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ChildWeddingForm;





import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Bubbles } from "../../utils/Bubble";

const riskOptions = [
  "Conservative",
  "Moderate",
  "Aggressive",
  "Moderately Conservative",
  "Moderately Aggressive",
  "Check Your Profile",
];

const ChildWeddingForm = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [formData, setFormData] = useState({
    years: "",
    cost: "",
    inflation: "",
    goalName: "",
    risk: "Conservative",
    showDropdown: false,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = () => {
    setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
  };

  const selectRisk = (risk) => {
    setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
  };

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
      className={`relative min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br ${bg}`}
    >
      <Bubbles darkMode={darkMode} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500 ${cardGlass}`}
      >
        <h2
          className={`text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 ${textColor}`}
        >
          Child's <span className={highlight}>Wedding</span> Planning
        </h2>

        <div className={`flex flex-col gap-8 text-base sm:text-lg md:text-xl ${textColor}`}>
          <div className="flex flex-col gap-2">
            <p>
              You want to save for your child's wedding which is:
            </p>
            <input
              type="number"
              value={formData.years}
              onChange={(e) => handleChange("years", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Years"
            />
            <p>years away.</p>
          </div>

          <div className="flex flex-col gap-2">
            <p>
              The wedding cost would be around ₹
            </p>
            <input
              type="number"
              value={formData.cost}
              onChange={(e) => handleChange("cost", e.target.value)}
              className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Wedding Cost"
            />
            <p>
              in today's value. You assume the inflation to be:
            </p>
            <input
              type="number"
              value={formData.inflation}
              onChange={(e) => handleChange("inflation", e.target.value)}
              className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Inflation %"
            />
            <p>%</p>
          </div>

          <div className="flex flex-col gap-2">
            <p>You would like to name this goal as:</p>
            <input
              type="text"
              value={formData.goalName}
              onChange={(e) => handleChange("goalName", e.target.value)}
              className="w-full sm:w-64 border-b border-current bg-transparent text-center py-2 focus:outline-none"
              placeholder="Goal Name"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <p>You can take:</p>
            <button
              onClick={toggleDropdown}
              className={`w-full sm:w-64 px-4 py-2 rounded-full border focus:outline-none ${highlight} border-current flex items-center justify-between`}
            >
              {formData.risk}
              <ChevronDown size={16} />
            </button>

            {formData.showDropdown && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`absolute z-20 top-14 w-full sm:w-64 bg-white/30 dark:bg-[#0b1925]/80 rounded-lg shadow-xl backdrop-blur-md border border-gray-300 dark:border-[#10e2ea]/30 ${textColor}`}
              >
                {riskOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => selectRisk(option)}
                    className="px-4 py-2 cursor-pointer hover:bg-white/20 flex justify-between items-center"
                  >
                    {option}
                    {formData.risk === option && (
                      <Check size={16} className="text-green-500" />
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
            <p>risk with your investments.</p>
          </div>

          <div className="pt-4 text-center">
            <button
              className={`w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${btnGradient}`}
            >
              Build My Child's Wedding Plan
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChildWeddingForm;
