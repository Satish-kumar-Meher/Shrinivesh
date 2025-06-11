import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../utils/Bubble";
import { ArrowRight } from "lucide-react";

const calculatorDetails = [
  {
    name: "SIP Return Calculator",
    emoji: "🧮",
    description:
      "Curious how much your monthly SIP can grow in 10, 20, or 30 years? Use our SIP Return Calculator to get instant and accurate estimates. Perfect for long-term mutual fund investors.➡ Try now – it's fast, free, and beginner-friendly!"
  },
  {
    name: "Become A Crorepati",
    emoji: "💰",
    description:
      "Dreaming of ₹1 Crore? Know exactly how much you need to invest monthly and for how long. Our Crorepati SIP Calculator gives you a clear path to 1 crore wealth goal.➡ Simple steps to your first crore.",
  },
  {
    name: "EMI Calculator",
    emoji: "🏠",
    description:
      "Buying a home or car? Calculate your monthly EMI in seconds. Enter loan amount, interest rate, and tenure to get your monthly payment instantly.➡ Use our EMI Calculator before taking any loan.",
  },
  {
    name: "Retirement Planning Calculator",
    emoji: "👴",
    description:
      "Not sure how much to save for retirement? Use our calculator to know the exact monthly investment needed to live worry-free post-retirement.➡ Plan today, enjoy tomorrow.",
  },
  {
    name: "Asset Allocation Calculator",
    emoji: "📊",
    description:
      "Confused between equity, debt, and gold? Our Asset Allocation tool helps you distribute your money smartly based on age and risk profile.➡ Smart investing starts with smart allocation.",
  },
  {
    name: "PPF Calculator",
    emoji: "🪙",
    description:
      "Check how much your PPF account will grow over time. Get a clear idea of interest earned, maturity amount, and tax-free returns.➡ Great for conservative, long-term savers.",
  },
  {
    name: "EPF Calculator",
    emoji: "👷",
    description:
      "Get a complete breakdown of your Employee Provident Fund (EPF) savings and employer contributions.➡ Helpful for salaried professionals planning future expenses.",
  },
  {
    name: "Goal Setting Calculator",
    emoji: "🎯",
    description:
      "Have a dream? Whether it's a car, home, vacation, or your child’s future — our Goal Setting Calculator helps you plan the exact amount and investment needed to reach it.➡ Set it. Plan it. Achieve it.",
  },
  {
    name: "Composite Financial Goal Calculator",
    emoji: "🥅",
    description:
      "Don’t juggle multiple goals. Plan them all in one go — child’s education, retirement, house, etc. This tool gives you a single view for multiple goals with timelines and SIP amounts.➡ One planner. Many dreams.",
  },
  {
    name: "Children Education Planner",
    emoji: "🎓",
    description:
      "Plan how much to invest now to afford your child’s school, college, or higher studies — in India or abroad. Factor in inflation and course costs with ease.➡ Secure their future, one SIP at a time.",
  },
  {
    name: "Networth Calculator",
    emoji: "🧮",
    description:
      "Add up your assets. Subtract your liabilities. Our Net Worth Calculator shows your actual financial standing instantly.➡ Step 1 to wealth: Know your worth.",
  },
  {
    name: "Compounding Calculator",
    emoji: "🔁",
    description:
      "See how your money grows when it compounds over years. Perfect for investors who want to understand how time can make wealth grow exponentially.➡ Albert Einstein called it the 8th wonder — try it now.",
  },
  {
    name: "Spending Less Calculator",
    emoji: "💳",
    description:
      "Thinking of cutting down on your OTT, online shopping, or daily coffee? Find out how those small savings can add up to huge investments over time.➡ Spend smart. Invest smarter.",
  },
  {
    name: "Human Life Value Calculator",
    emoji: "👥",
    description:
      "This tool helps you calculate the financial value of your life for insurance planning. Know how much your family would need in your absence.➡ Insure the life you’ve built.",
  },
  {
    name: "SIP Step Up Calculator",
    emoji: "📈",
    description:
      "Planning to increase your SIP every year? This calculator helps you see the impact of SIP top-ups on your total wealth.➡ Perfect for salaried individuals with rising incomes.",
  },
];

const logoMap = {
  "Become A Crorepati": "https://img.icons8.com/fluency/48/calculator.png",
  "SIP Return Calculator": "https://img.icons8.com/fluent/64/0e6371/stack-of-coins.png",
  "Retirement Planning Calculator": "https://img.icons8.com/?size=100&id=114446&format=png&color=000000",
  "Asset Allocation Calculator": "https://img.icons8.com/fluent/64/0e6371/pie-chart.png",
  "EMI Calculator": "https://img.icons8.com/fluent/64/0e6371/money-transfer.png",
  "PPF Calculator": "https://img.icons8.com/fluent/64/0e6371/safe.png",
  "EPF Calculator": "https://img.icons8.com/?size=100&id=i1XlKm422mfg&format=png&color=0000000",
  "Goal Setting Calculator": "https://img.icons8.com/fluent/64/0e6371/target.png",
  "Composite Financial Goal Calculator": "https://img.icons8.com/fluent/64/0e6371/goal.png",
  "Children Education Planner": "https://img.icons8.com/fluent/64/0e6371/school-backpack.png",
  "Networth Calculator": "https://img.icons8.com/?size=100&id=DchOf6erOUjJ&format=png&color=000000",
  "Compounding Calculator": "https://img.icons8.com/?size=100&id=121251&format=png&color=000000",
  "Spending Less Calculator": "https://img.icons8.com/fluent/64/0e6371/wallet.png",
  "Human Life Value Calculator": "https://img.icons8.com/?size=100&id=Ut1mhCuyFDJQ&format=png&color=000000",
  "SIP Step Up Calculator": "https://img.icons8.com/?size=100&id=JF2ffIXzQqq8&format=png&color=000000",
};

const AllCalculators = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const glow = darkMode
    ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]"
    : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]";

  const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";

  return (
    <section
      className={`relative z-0 py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
    >
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl mt-10 sm:text-4xl font-bold ${textColor}`}
        >
          Explore Our <span className={highlight}>Free & Smart Financial Calculators</span>
        </motion.h2>
        <p
          className={`mt-4 text-base sm:text-lg ${textColor} opacity-80 max-w-3xl mx-auto`}
        >
          Make confident money decisions using our easy-to-use, accurate, and completely free financial tools. Whether you want to plan your SIP, calculate your EMI, or secure your retirement, our calculators are built to guide you every step of the way.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {calculatorDetails.map(({ name, description, emoji }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`flex flex-col justify-between h-full p-6 rounded-2xl border ${
              darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
            } cursor-pointer backdrop-blur-xl ${cardGlass} ${glow} transition duration-300 transform hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-1`}
          >
            <div className="flex items-center space-x-4 mb-2">
              <img
                src={logoMap[name]}
                alt={`${name} icon`}
                className="w-12 h-12"
              />
              <h3 className={`text-base sm:text-lg font-semibold ${highlight}`}>
                {name}
              </h3>
            </div>
            <p className={`text-sm mt-2 ${textColor} opacity-80`}>{description}</p>
            <div
              className={`flex justify-center items-center w-12 h-12 rounded-full mt-4 self-end backdrop-blur-md border ${border} transition duration-300 cursor-pointer
              ${darkMode 
                ? "bg-white/10 border-white/20 shadow-[inset_0_0_8px_rgba(16,226,234,0.4),0_0_15px_rgba(16,226,234,0.3)]" 
                : "bg-white/40 border-white/30 shadow-[inset_0_0_8px_rgba(14,99,113,0.25),0_0_15px_rgba(14,99,113,0.2)]"
              } hover:scale-110 hover:rotate-6`}
            >
              <ArrowRight
                size={24}
                className={`transition duration-300 ease-in-out ${
                  darkMode ? "text-[#10e2ea]" : "text-[#0e6371]"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllCalculators;











// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Bubbles } from "../utils/Bubble";
// import { ArrowRight } from "lucide-react";

// const calculators = [
//   "Become A Crorepati",
//   "SIP Return Calculator",
//   "Retirement Planning Calculator",
//   "Asset Allocation Calculator",
//   "EMI Calculator",
//   "PPF Calculator",
//   "EPF Calculator",
//   "Goal Setting Calculator",
//   "Composite Financial Goal Calculator",
//   "Children Education Planner",
//   "Networth Calculator",
//   "Compounding Calculator",
//   "Spending Less Calculator",
//   "Human Life Value Calculator",
//   "SIP Step Up Calculator",
// ];

// const logoMap = {
//   "Become A Crorepati": "https://img.icons8.com/fluency/48/calculator.png",
//   "SIP Return Calculator": "https://img.icons8.com/fluent/64/0e6371/stack-of-coins.png",
//   "Retirement Planning Calculator": "https://img.icons8.com/?size=100&id=114446&format=png&color=000000",
//   "Asset Allocation Calculator": "https://img.icons8.com/fluent/64/0e6371/pie-chart.png",
//   "EMI Calculator": "https://img.icons8.com/fluent/64/0e6371/money-transfer.png",
//   "PPF Calculator": "https://img.icons8.com/fluent/64/0e6371/safe.png",
//   "EPF Calculator": "https://img.icons8.com/?size=100&id=i1XlKm422mfg&format=png&color=0000000",
//   "Goal Setting Calculator": "https://img.icons8.com/fluent/64/0e6371/target.png",
//   "Composite Financial Goal Calculator": "https://img.icons8.com/fluent/64/0e6371/goal.png",
//   "Children Education Planner": "https://img.icons8.com/fluent/64/0e6371/school-backpack.png",
//   "Networth Calculator": "https://img.icons8.com/?size=100&id=DchOf6erOUjJ&format=png&color=000000",
//   "Compounding Calculator": "https://img.icons8.com/?size=100&id=121251&format=png&color=000000",
//   "Spending Less Calculator": "https://img.icons8.com/fluent/64/0e6371/wallet.png",
//   "Human Life Value Calculator": "https://img.icons8.com/?size=100&id=Ut1mhCuyFDJQ&format=png&color=000000",
//   "SIP Step Up Calculator": "https://img.icons8.com/?size=100&id=JF2ffIXzQqq8&format=png&color=000000",
// };

// const AllCalculators = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

//   const textColor = darkMode ? "text-white" : "text-black";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

//   const cardGlass = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

//   const glow = darkMode
//     ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]"
//     : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]";

//   const arrowGlassColor = darkMode
//     ? "text-[#10e2ea]/60 hover:text-[#10e2ea]"
//     : "text-[#0e6371]/60 hover:text-[#0e6371]";

//   return (
//     <section
//       className={`relative z-0 py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
//     >
//       <Bubbles darkMode={darkMode} />

//       <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className={`text-3xl mt-10 sm:text-4xl font-bold ${textColor}`}
//         >
//           Explore Our <span className={highlight}>Financial Calculators</span>
//         </motion.h2>
//         <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
//           Make smart financial decisions with our wide range of tools.
//         </p>
//       </div>

//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {calculators.map((name, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//             className={`flex items-center justify-between text-left p-6 h-20 rounded-2xl border ${
//               darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
//             } cursor-pointer backdrop-blur-xl ${cardGlass} ${glow} transition duration-300 hover:scale-105`}
//           >
//             <div className="flex items-center space-x-4">
//               <img
//                 src={logoMap[name]}
//                 alt={`${name} icon`}
//                 className="w-12 h-12"
//               />
//               <h3 className={`text-base sm:text-lg font-semibold ${textColor}`}>
//                 {name}
//               </h3>
//             </div>
//             <ArrowRight
//               size={28}
//               className={`transition duration-200 ${arrowGlassColor}`}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllCalculators;





// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Bubbles } from "../utils/Bubble";
// import { ArrowRight } from "lucide-react";

// const calculatorDetails = [
//   {
//     name: "SIP Return Calculator",
//     emoji: "🧮",
//     description:
//       "Curious how much your monthly SIP can grow in 10, 20, or 30 years? Use our SIP Return Calculator to get instant and accurate estimates. Perfect for long-term mutual fund investors.➡ Try now – it's fast, free, and beginner-friendly!"
//   },
//   {
//     name: "Become A Crorepati",
//     emoji: "💰",
//     description:
//       "Dreaming of ₹1 Crore? Know exactly how much you need to invest monthly and for how long. Our Crorepati SIP Calculator gives you a clear path to 1 crore wealth goal.➡ Simple steps to your first crore.",
//   },
//   {
//     name: "EMI Calculator",
//     emoji: "🏠",
//     description:
//       "Buying a home or car? Calculate your monthly EMI in seconds. Enter loan amount, interest rate, and tenure to get your monthly payment instantly.➡ Use our EMI Calculator before taking any loan.",
//   },
//   {
//     name: "Retirement Planning Calculator",
//     emoji: "👴",
//     description:
//       "Not sure how much to save for retirement? Use our calculator to know the exact monthly investment needed to live worry-free post-retirement.➡ Plan today, enjoy tomorrow.",
//   },
//   {
//     name: "Asset Allocation Calculator",
//     emoji: "📊",
//     description:
//       "Confused between equity, debt, and gold? Our Asset Allocation tool helps you distribute your money smartly based on age and risk profile.➡ Smart investing starts with smart allocation.",
//   },
//   {
//     name: "PPF Calculator",
//     emoji: "🪙",
//     description:
//       "Check how much your PPF account will grow over time. Get a clear idea of interest earned, maturity amount, and tax-free returns.➡ Great for conservative, long-term savers.",
//   },
//   {
//     name: "EPF Calculator",
//     emoji: "👷",
//     description:
//       "Get a complete breakdown of your Employee Provident Fund (EPF) savings and employer contributions.➡ Helpful for salaried professionals planning future expenses.",
//   },
//   {
//     name: "Goal Setting Calculator",
//     emoji: "🎯",
//     description:
//       "Have a dream? Whether it's a car, home, vacation, or your child’s future — our Goal Setting Calculator helps you plan the exact amount and investment needed to reach it.➡ Set it. Plan it. Achieve it.",
//   },
//   {
//     name: "Composite Financial Goal Calculator",
//     emoji: "🥅",
//     description:
//       "Don’t juggle multiple goals. Plan them all in one go — child’s education, retirement, house, etc. This tool gives you a single view for multiple goals with timelines and SIP amounts.➡ One planner. Many dreams.",
//   },
//   {
//     name: "Children Education Planner",
//     emoji: "🎓",
//     description:
//       "Plan how much to invest now to afford your child’s school, college, or higher studies — in India or abroad. Factor in inflation and course costs with ease.➡ Secure their future, one SIP at a time.",
//   },
//   {
//     name: "Networth Calculator",
//     emoji: "🧮",
//     description:
//       "Add up your assets. Subtract your liabilities. Our Net Worth Calculator shows your actual financial standing instantly.➡ Step 1 to wealth: Know your worth.",
//   },
//   {
//     name: "Compounding Calculator",
//     emoji: "🔁",
//     description:
//       "See how your money grows when it compounds over years. Perfect for investors who want to understand how time can make wealth grow exponentially.➡ Albert Einstein called it the 8th wonder — try it now.",
//   },
//   {
//     name: "Spending Less Calculator",
//     emoji: "💳",
//     description:
//       "Thinking of cutting down on your OTT, online shopping, or daily coffee? Find out how those small savings can add up to huge investments over time.➡ Spend smart. Invest smarter.",
//   },
//   {
//     name: "Human Life Value Calculator",
//     emoji: "👥",
//     description:
//       "This tool helps you calculate the financial value of your life for insurance planning. Know how much your family would need in your absence.➡ Insure the life you’ve built.",
//   },
//   {
//     name: "SIP Step Up Calculator",
//     emoji: "📈",
//     description:
//       "Planning to increase your SIP every year? This calculator helps you see the impact of SIP top-ups on your total wealth.➡ Perfect for salaried individuals with rising incomes.",
//   },
// ];

// const logoMap = {
//   "Become A Crorepati": "https://img.icons8.com/fluency/48/calculator.png",
//   "SIP Return Calculator": "https://img.icons8.com/fluent/64/0e6371/stack-of-coins.png",
//   "Retirement Planning Calculator": "https://img.icons8.com/?size=100&id=114446&format=png&color=000000",
//   "Asset Allocation Calculator": "https://img.icons8.com/fluent/64/0e6371/pie-chart.png",
//   "EMI Calculator": "https://img.icons8.com/fluent/64/0e6371/money-transfer.png",
//   "PPF Calculator": "https://img.icons8.com/fluent/64/0e6371/safe.png",
//   "EPF Calculator": "https://img.icons8.com/?size=100&id=i1XlKm422mfg&format=png&color=0000000",
//   "Goal Setting Calculator": "https://img.icons8.com/fluent/64/0e6371/target.png",
//   "Composite Financial Goal Calculator": "https://img.icons8.com/fluent/64/0e6371/goal.png",
//   "Children Education Planner": "https://img.icons8.com/fluent/64/0e6371/school-backpack.png",
//   "Networth Calculator": "https://img.icons8.com/?size=100&id=DchOf6erOUjJ&format=png&color=000000",
//   "Compounding Calculator": "https://img.icons8.com/?size=100&id=121251&format=png&color=000000",
//   "Spending Less Calculator": "https://img.icons8.com/fluent/64/0e6371/wallet.png",
//   "Human Life Value Calculator": "https://img.icons8.com/?size=100&id=Ut1mhCuyFDJQ&format=png&color=000000",
//   "SIP Step Up Calculator": "https://img.icons8.com/?size=100&id=JF2ffIXzQqq8&format=png&color=000000",
// };

// const AllCalculators = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

//   const textColor = darkMode ? "text-white" : "text-black";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

//   const buttonBg = darkMode ? "bg-[#10e2ea]" : "bg-[#0e6371]";

//   const cardGlass = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

//   const glow = darkMode
//     ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]"
//     : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]";

//   const arrowGlassColor = darkMode
//     ? "text-[#10e2ea]/60 hover:text-[#10e2ea]"
//     : "text-[#0e6371]/60 hover:text-[#0e6371]";
//     const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";

//   return (
//     <section
//       className={`relative z-0 py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
//     >
//       <Bubbles darkMode={darkMode} />

//       <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className={`text-3xl mt-10 sm:text-4xl font-bold ${textColor}`}
//         >
//           Explore Our <span className={highlight}>Financial Calculators</span>
//         </motion.h2>
//         <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80 max-w-3xl mx-auto`}>
//           Make confident money decisions using our easy-to-use, accurate, and completely free financial tools. Whether you want to plan your SIP, calculate your EMI, or secure your retirement, our calculators are built to guide you every step of the way.
//         </p>
//       </div>

//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {calculatorDetails.map(({ name, description, emoji }, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//             className={`flex flex-col justify-between h-full p-6 rounded-2xl border ${
//               darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
//             } cursor-pointer backdrop-blur-xl ${cardGlass} ${glow} transition duration-300 hover:scale-105`}
//           >
//             <div className="flex items-center space-x-4 mb-2">
//               <img
//                 src={logoMap[name]}
//                 alt={`${name} icon`}
//                 className="w-12 h-12"
//               />
//               <h3 className={`text-base sm:text-lg font-semibold ${highlight}`}>
//                  {name}
//               </h3>
//             </div>
//             <p className={`text-sm mt-2 ${textColor} opacity-80`}>{description}</p>
//             <div className={`flex justify-center rounded-full  mt-4 self-end border ${border} w-20 `}>
//               <ArrowRight
//                 size={38}
//                 className={`transition duration-200 ${arrowGlassColor}`}
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllCalculators;









