// import { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { ChevronDown, Check } from "lucide-react";
// import { Bubbles } from "../../utils/Bubble";
// import GoalSummary from "./GoalSummery";
// import { useDispatch } from "react-redux";
// import { setGoalData } from "../../redux/goalDataSlice";

// const riskOptions = [
//   "Conservative",
//   "Moderate",
//   "Aggressive",
//   "Moderately Conservative",
//   "Moderately Aggressive",
//   "Check Your Profile",
// ];

// const ChildEducationForm = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const [formData, setFormData] = useState({
//     years: "",
//     cost: "",
//     inflation: "",
//     goalName: "",
//     risk: "Conservative",
//     showDropdown: false,
//   });




// const dispatch = useDispatch();

// const handleSubmit = () => {
//   const years = parseFloat(formData.years);
//   const costToday = parseFloat(formData.cost);
//   const inflation = parseFloat(formData.inflation) / 100;

//   if (isNaN(years) || isNaN(costToday) || isNaN(inflation)) return;

//   // Future value of education cost
//   const futureCost = Math.round(costToday * Math.pow(1 + inflation, years));

//   // Assume fixed return rate for simplicity
//   const returnRate = 0.12; // 12% annual return
//   const monthlyRate = returnRate / 12;
//   const months = years * 12;

//   // SIP Calculation (PMT Formula)
//   const requiredSIP = Math.round(
//     (futureCost * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
//   );

//   dispatch(
//     setGoalData({
//       goalName: formData.goalName || "Child's Education",
//       savingYears: years,
//       futureValue: futureCost,
//       currentSavings: 0,
//       retirementCorpus: 0,
//       monthlyExpenses: 0,
//       requiredSIP,
//     })
//   );
// };



//   const dropdownRef = useRef(null);

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const toggleDropdown = () => {
//     setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
//   };

//   const selectRisk = (risk) => {
//     setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setFormData((prev) => ({ ...prev, showDropdown: false }));
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const bg = darkMode
//     ? "from-[#0e1525] to-[#081824]"
//     : "from-[#f9fcfe] to-[#dff4ff]";

//   const cardGlass = darkMode
//     ? "bg-white/5 border border-[#10e2ea]/30 shadow-[0_0_30px_rgba(16,226,234,0.1)]"
//     : "bg-white/40 border border-[#0e6371]/20 shadow-[0_0_30px_rgba(14,99,113,0.08)]";

//   const textColor = darkMode ? "text-white" : "text-black";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
//   const btnGradient = darkMode
//     ? "bg-gradient-to-r from-[#10e2ea] to-[#045b68]"
//     : "bg-gradient-to-r from-[#0e6371] to-[#84e9f0]";

//   return (
//     <>
//     <section
//       className={`relative mt-15 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br ${bg}`}
//     >
//       <Bubbles darkMode={darkMode} />

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className={`relative z-10 max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500 ${cardGlass}`}
//       >
//         <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-10 ${textColor}`}>
//           Child's <span className={highlight}>Education</span> Planning
//         </h2>

//         <div className={`flex flex-col gap-8 text-base sm:text-lg md:text-xl ${textColor}`}>
//           {/* Years */}
//           <div className="flex flex-col gap-2">
//             <p>You are planning for your Child's Higher Education which is</p>
//             <input
//               type="number"
//               value={formData.years}
//               onChange={(e) => handleChange("years", e.target.value)}
//               className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//               placeholder="Years Away"
//             />
//             <p>years away.</p>
//           </div>

//           {/* Cost */}
//           <div className="flex flex-col gap-2">
//             <p>The cost of which would be around ₹</p>
//             <input
//               type="number"
//               value={formData.cost}
//               onChange={(e) => handleChange("cost", e.target.value)}
//               className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//               placeholder="Cost"
//             />
//             <p>in today's value.</p>
//           </div>

//           {/* Inflation */}
//           <div className="flex flex-col gap-2">
//             <p>You assume the inflation to be</p>
//             <input
//               type="number"
//               value={formData.inflation}
//               onChange={(e) => handleChange("inflation", e.target.value)}
//               className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//               placeholder="Inflation %"
//             />
//             <p>% and You can take</p>

//             <div ref={dropdownRef} className="relative w-full sm:w-64">
//               <button
//                 onClick={toggleDropdown}
//                 className={`w-full px-4 py-2 rounded-full border focus:outline-none flex items-center justify-between 
//                 ${
//                   darkMode
//                     ? "bg-white/5 border-[#10e2ea]/40 text-[#10e2ea]"
//                     : "bg-white/60 border-[#0e6371]/30 text-[#0e6371]"
//                 }`}
//               >
//                 {formData.risk}
//                 <ChevronDown size={16} />
//               </button>

//               {formData.showDropdown && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.25 }}
//                   className={`absolute z-30 mt-2 top-full left-0 w-full rounded-xl shadow-lg backdrop-blur-md ${
//                     darkMode
//                       ? "bg-[#0f2a37]/80 border border-[#10e2ea]/20 text-white"
//                       : "bg-white/90 border border-[#0e6371]/20 text-black"
//                   }`}
//                 >
//                   {riskOptions.map((option) => (
//                     <li
//                       key={option}
//                       onClick={() => selectRisk(option)}
//                       className={`px-4 py-3 cursor-pointer flex justify-between items-center hover:bg-white/10 ${
//                         formData.risk === option ? "font-semibold" : ""
//                       }`}
//                     >
//                       {option}
//                       {formData.risk === option && (
//                         <Check size={16} className="text-green-400" />
//                       )}
//                     </li>
//                   ))}
//                 </motion.ul>
//               )}
//             </div>
//             <p className="mt-1">risk with your investments.</p>
//           </div>

//           {/* Goal Name */}
//           <div className="flex flex-col gap-2">
//             <p>You would like to name this goal as</p>
//             <input
//               type="text"
//               value={formData.goalName}
//               onChange={(e) => handleChange("goalName", e.target.value)}
//               className="w-full sm:w-64 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//               placeholder="Goal Name"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4 text-center">
//             <button
//             onClick={handleSubmit}
//               className={`w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${btnGradient}`}
//             >
//               Build My Child's Education Goal
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//     <GoalSummary/>
//     </>
//   );
// };

// export default ChildEducationForm;









// import { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { motion } from "framer-motion";
// import { ChevronDown, Check } from "lucide-react";
// import { Bubbles } from "../../utils/Bubble";
// import GoalSummary from "./GoalSummery";
// import { setGoalData } from "../../redux/goalDataSlice";

// const riskOptions = [
//   "Conservative",
//   "Moderate",
//   "Aggressive",
//   "Moderately Conservative",
//   "Moderately Aggressive",
//   "Check Your Profile",
// ];

// const ChildEducationForm = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);
//   const goal = useSelector((state) => state.goalData.Data);
//   const dispatch = useDispatch();
//   const summaryRef = useRef(null);

//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     years: "",
//     cost: "",
//     inflation: "",
//     goalName: "",
//     risk: "Conservative",
//     showDropdown: false,
//   });

//   const handleSubmit = () => {
//     const years = parseFloat(formData.years);
//     const costToday = parseFloat(formData.cost);
//     const inflation = parseFloat(formData.inflation) / 100;

//     if (isNaN(years) || isNaN(costToday) || isNaN(inflation)) return;

//     const futureCost = Math.round(costToday * Math.pow(1 + inflation, years));
//     const returnRate = 0.12;
//     const monthlyRate = returnRate / 12;
//     const months = years * 12;

//     const requiredSIP = Math.round(
//       (futureCost * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1)
//     );

//     dispatch(
//       setGoalData({
//         goalName: formData.goalName || "Child's Education",
//         savingYears: years,
//         futureValue: futureCost,
//         costToday,
//         currentSavings: 0,
//         retirementCorpus: 0,
//         monthlyExpenses: 0,
//         requiredSIP,
//       })
//     );

//     setSubmitted(true);
//   };

//   // Scroll to summary when calculated
//   useEffect(() => {
//     if (submitted && goal?.requiredSIP > 0 && summaryRef.current) {
//       summaryRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [submitted, goal]);

//   const dropdownRef = useRef(null);

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const toggleDropdown = () => {
//     setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
//   };

//   const selectRisk = (risk) => {
//     setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setFormData((prev) => ({ ...prev, showDropdown: false }));
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const bg = darkMode
//     ? "from-[#0e1525] to-[#081824]"
//     : "from-[#f9fcfe] to-[#dff4ff]";

//   const cardGlass = darkMode
//     ? "bg-white/5 border border-[#10e2ea]/30 shadow-[0_0_30px_rgba(16,226,234,0.1)]"
//     : "bg-white/40 border border-[#0e6371]/20 shadow-[0_0_30px_rgba(14,99,113,0.08)]";

//   const textColor = darkMode ? "text-white" : "text-black";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
//   const btnGradient = darkMode
//     ? "bg-gradient-to-r from-[#10e2ea] to-[#045b68]"
//     : "bg-gradient-to-r from-[#0e6371] to-[#84e9f0]";

//   return (
//     <>
//       <section
//         className={`relative mt-15 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br ${bg}`}
//       >
//         <Bubbles darkMode={darkMode} />

//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className={`relative z-10 max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500 ${cardGlass}`}
//         >
//           <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-10 ${textColor}`}>
//             Child's <span className={highlight}>Education</span> Planning
//           </h2>

//           <div className={`flex flex-col gap-8 text-base sm:text-lg md:text-xl ${textColor}`}>
//             {/* Years */}
//             <div className="flex flex-col gap-2">
//               <p>You are planning for your Child's Higher Education which is</p>
//               <input
//                 type="number"
//                 value={formData.years}
//                 onChange={(e) => handleChange("years", e.target.value)}
//                 className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//                 placeholder="Years Away"
//               />
//               <p>years away.</p>
//             </div>

//             {/* Cost */}
//             <div className="flex flex-col gap-2">
//               <p>The cost of which would be around ₹</p>
//               <input
//                 type="number"
//                 value={formData.cost}
//                 onChange={(e) => handleChange("cost", e.target.value)}
//                 className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//                 placeholder="Cost"
//               />
//               <p>in today's value.</p>
//             </div>

//             {/* Inflation */}
//             <div className="flex flex-col gap-2">
//               <p>You assume the inflation to be</p>
//               <input
//                 type="number"
//                 value={formData.inflation}
//                 onChange={(e) => handleChange("inflation", e.target.value)}
//                 className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//                 placeholder="Inflation %"
//               />
//               <p>% and You can take</p>

//               <div ref={dropdownRef} className="relative w-full sm:w-64">
//                 <button
//                   onClick={toggleDropdown}
//                   className={`w-full px-4 py-2 rounded-full border focus:outline-none flex items-center justify-between ${
//                     darkMode
//                       ? "bg-white/5 border-[#10e2ea]/40 text-[#10e2ea]"
//                       : "bg-white/60 border-[#0e6371]/30 text-[#0e6371]"
//                   }`}
//                 >
//                   {formData.risk}
//                   <ChevronDown size={16} />
//                 </button>

//                 {formData.showDropdown && (
//                   <motion.ul
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.25 }}
//                     className={`absolute z-30 mt-2 top-full left-0 w-full rounded-xl shadow-lg backdrop-blur-md ${
//                       darkMode
//                         ? "bg-[#0f2a37]/80 border border-[#10e2ea]/20 text-white"
//                         : "bg-white/90 border border-[#0e6371]/20 text-black"
//                     }`}
//                   >
//                     {riskOptions.map((option) => (
//                       <li
//                         key={option}
//                         onClick={() => selectRisk(option)}
//                         className={`px-4 py-3 cursor-pointer flex justify-between items-center hover:bg-white/10 ${
//                           formData.risk === option ? "font-semibold" : ""
//                         }`}
//                       >
//                         {option}
//                         {formData.risk === option && (
//                           <Check size={16} className="text-green-400" />
//                         )}
//                       </li>
//                     ))}
//                   </motion.ul>
//                 )}
//               </div>
//               <p className="mt-1">risk with your investments.</p>
//             </div>

//             {/* Goal Name */}
//             <div className="flex flex-col gap-2">
//               <p>You would like to name this goal as</p>
//               <input
//                 type="text"
//                 value={formData.goalName}
//                 onChange={(e) => handleChange("goalName", e.target.value)}
//                 className="w-full sm:w-64 border-b border-current bg-transparent text-center py-2 focus:outline-none"
//                 placeholder="Goal Name"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4 text-center">
//               <button
//                 onClick={handleSubmit}
//                 className={`w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${btnGradient}`}
//               >
//                 Build My Child's Education Goal
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Conditional Goal Summary */}
//       {submitted && goal?.requiredSIP > 0 && (
//         <div ref={summaryRef}>
//           <GoalSummary />
//         </div>
//       )}
//     </>
//   );
// };

// export default ChildEducationForm;










import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { Bubbles } from "../../utils/Bubble";
import GoalSummary from "./GoalSummery";
import { setGoalData, } from "../../redux/goalDataSlice";
import { toast } from "react-toastify";
// import SEO from "../../utils/SEO";

const riskOptions = [
  "Conservative",
  "Moderate",
  "Aggressive",
  "Moderately Conservative",
  "Moderately Aggressive",
  "Check Your Profile",
];



const ChildEducationForm = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const goal = useSelector((state) => state.goalData.Data);
  const dispatch = useDispatch();
  const summaryRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    years: "",
    cost: "",
    inflation: "",
    goalName: "",
    risk: "Conservative",
    showDropdown: false,
  });

  // // Cleanup Redux when component unmounts
  // useEffect(() => {
  //   return () => {
  //     dispatch(resetGoalData());
  //   };
  // }, [dispatch]);

  // Determine return rate based on selected risk profile
  const getReturnRate = (risk) => {
    switch (risk) {
      case "Conservative":
        return 0.12;
      case "Moderate":
        return 0.13;
      case "Aggressive":
        return 0.14;
      case "Moderately Conservative":
        return 0.125;
      case "Moderately Aggressive":
        return 0.135;
      default:
        return 0.12;
    }
  };

  const handleSubmit = () => {
      if (!formData.years || !formData.cost || !formData.inflation || !formData.goalName){

    toast.error("Please fill the form completely")

    return;
  } 
    const years = parseFloat(formData.years);
    const costToday = parseFloat(formData.cost);
    const inflationRate = parseFloat(formData.inflation) / 100;

    if (isNaN(years) || isNaN(costToday) || isNaN(inflationRate)) return;

    const months = years * 12;

    // Step 1: Future cost with inflation
    const futureCost = Math.round(costToday * Math.pow(1 + inflationRate, years));

    // Step 2: Get dynamic return rate
    const returnRate = getReturnRate(formData.risk);
    const monthlyRate = returnRate / 12;

    // Step 3: SIP calculation (PMT)
    const numerator = futureCost * monthlyRate;
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const requiredSIP = Math.round(numerator / denominator);

    dispatch(
      setGoalData({
        goalName: formData.goalName || "Child's Education",
        savingYears: years,
        futureValue: futureCost,
        costToday,
        currentSavings: 0,
        retirementCorpus: 0,
        monthlyExpenses: 0,
        requiredSIP,
      })
    );

    setSubmitted(true);
  };




//   const handleSubmit = () => {

//   if (!formData.years || !formData.cost || !formData.inflation || !formData.goalName){

//     toast.error("Please fill the form completely")

//     return;
//   } 

//   const years = parseFloat(formData.years);
//   const costToday = parseFloat(formData.cost);
//   const inflationRate = parseFloat(formData.inflation) / 100;

//   if (isNaN(years) || isNaN(costToday) || isNaN(inflationRate)) return;

//   const months = years * 12;

//   // Step 1: Calculate future cost with inflation
//   const futureCost = Math.round(costToday * Math.pow(1 + inflationRate, years));

//   // Step 2: Get return rate based on risk
//   const returnRate = getReturnRate(formData.risk);

//   // Step 3: Calculate SIP using PMT formula
//   const requiredSIP = calculateSIP(futureCost, returnRate, months);

//   // Step 4: Save to Redux
//   dispatch(
//     setGoalData({
//       goalName: formData.goalName || "Child's Education",
//       savingYears: years,
//       futureValue: futureCost,
//       costToday,
//       currentSavings: 0,
//       retirementCorpus: 0,
//       monthlyExpenses: 0,
//       requiredSIP,
//     })
//   );

//   setSubmitted(true);
// };


  // Scroll to summary after submit
  useEffect(() => {
    if (submitted && goal?.requiredSIP > 0 && summaryRef.current) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [submitted, goal]);

  const dropdownRef = useRef(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = () => {
    setFormData((prev) => ({ ...prev, showDropdown: !prev.showDropdown }));
  };

  const selectRisk = (risk) => {
    setFormData((prev) => ({ ...prev, risk, showDropdown: false }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFormData((prev) => ({ ...prev, showDropdown: false }));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const bg = darkMode
    ? "from-[#0e1525] to-[#081824]"
    : "from-[#f9fcfe] to-[#dff4ff]";

  const cardGlass = darkMode
    ? "bg-white/5 border border-[#10e2ea] shadow-[0_0_30px_rgba(16,226,234,0.1)]"
    : "bg-white/40 border border-[#0e6371] shadow-[0_0_30px_rgba(14,99,113,0.08)]";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const btnGradient = darkMode
    ? "bg-gradient-to-r from-[#10e2ea] to-[#045b68]"
    : "bg-gradient-to-r from-[#0e6371] to-[#84e9f0]";

  // const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";  

  return (
    <>
      <section
        className={`relative mt-15 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br  ${bg}`}
      > 
        {/* <SEO tittle={"Child Education Page"} description={"This is the ChildEducation page"} /> */}
        <Bubbles darkMode={darkMode} />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`relative z-10 max-w-3xl mx-auto p-8 rounded-3xl backdrop-blur-xl transition-colors duration-500  ${cardGlass}`}
        >
          <h2 className={`text-center text-3xl sm:text-4xl font-bold mb-10 ${textColor}`}>
            Child's <span className={highlight}>Education</span> Planning
          </h2>

          <div className={`flex flex-col gap-8 text-base sm:text-lg md:text-xl ${textColor}`}>
            {/* Years */}
            <div className="flex flex-col gap-2">
              <p>You are planning for your Child's Higher Education which is</p>
              <input
                type="number"
                value={formData.years}
                onChange={(e) => handleChange("years", e.target.value)}
                className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
                placeholder="Years Away"
              />
              <p>years away.</p>
            </div>

            {/* Cost */}
            <div className="flex flex-col gap-2">
              <p>The cost of which would be around ₹</p>
              <input
                type="number"
                value={formData.cost}
                onChange={(e) => handleChange("cost", e.target.value)}
                className="w-full sm:w-40 border-b border-current bg-transparent text-center py-2 focus:outline-none"
                placeholder="Cost"
              />
              <p>in today's value.</p>
            </div>

            {/* Inflation */}
            <div className="flex flex-col gap-2">
              <p>You assume the inflation to be</p>
              <input
                type="number"
                value={formData.inflation}
                onChange={(e) => handleChange("inflation", e.target.value)}
                className="w-full sm:w-32 border-b border-current bg-transparent text-center py-2 focus:outline-none"
                placeholder="Inflation %"
              />
              <p>% and You can take</p>

              <div ref={dropdownRef} className="relative w-full sm:w-64">
                <button
                  onClick={toggleDropdown}
                  className={`w-full px-4 py-2 rounded-full border focus:outline-none flex items-center justify-between ${
                    darkMode
                      ? "bg-white/5 border-[#10e2ea]/40 text-[#10e2ea]"
                      : "bg-white/60 border-[#0e6371]/30 text-[#0e6371]"
                  }`}
                >
                  {formData.risk}
                  <ChevronDown size={16} />
                </button>

                {formData.showDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={`absolute z-30 mt-2 top-full left-0 w-full rounded-xl shadow-lg backdrop-blur-md ${
                      darkMode
                        ? "bg-[#0f2a37]/80 border border-[#10e2ea]/20 text-white"
                        : "bg-white/90 border border-[#0e6371]/20 text-black"
                    }`}
                  >
                    {riskOptions.map((option) => (
                      <li
                        key={option}
                        onClick={() => selectRisk(option)}
                        className={`px-4 py-3 cursor-pointer flex justify-between items-center hover:bg-white/10 ${
                          formData.risk === option ? "font-semibold" : ""
                        }`}
                      >
                        {option}
                        {formData.risk === option && (
                          <Check size={16} className="text-green-400" />
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
              <p className="mt-1">risk with your investments.</p>
            </div>

            {/* Goal Name */}
            <div className="flex flex-col gap-2">
              <p>You would like to name this goal as</p>
              <input
                type="text"
                value={formData.goalName}
                onChange={(e) => handleChange("goalName", e.target.value)}
                className="w-full sm:w-64 border-b border-current bg-transparent text-center py-2 focus:outline-none"
                placeholder="Goal Name"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                onClick={handleSubmit}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${btnGradient}`}
              >
                Build My Child's Education Goal
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Conditional Goal Summary */}
      {submitted && goal?.requiredSIP > 0 && (
        <div ref={summaryRef}>
          <GoalSummary />
        </div>
      )}
    </>
  );
};

export default ChildEducationForm;
