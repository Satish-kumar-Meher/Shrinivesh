// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Bubbles } from "../utils/Bubble";

// const goals = [
//   {
//     title: "Dream Home",
//     image: "https://www.moneysmatter.com/images/banners/home-banner-4.png",
//     description: "Plan and save for your perfect home with smart investments.",
//   },
//   {
//     title: "Wealth Creation",
//     image: "https://www.moneysmatter.com/images/banners/home-banner-5.png",
//     description: "Build long-term wealth through disciplined investments.",
//   },
//   {
//     title: "Retirement",
//     image: "https://www.moneysmatter.com/images/banners/home-banner-1.png",
//     description: "Secure a peaceful and financially free retirement life.",
//   },
//   {
//     title: "Child's Education",
//     image: "https://www.moneysmatter.com/images/banners/home-banner.png",
//     description: "Invest early for your child's bright educational future.",
//   },
//   {
//     title: "Child's Wedding",
//     image: "https://www.moneysmatter.com/images/banners/home-banner-3.png",
//     description: "Be financially prepared for your child’s big celebration.",
//   },
//   {
//     title: "Emergency",
//     image: "https://www.moneysmatter.com/images/banners/home-banner-7.png",
//     description: "Create an emergency fund for life’s unexpected challenges.",
//   },
// ];

// const Goals = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

//   const textColor = darkMode ? "text-white" : "text-black";
//   const headingColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

//   const overlayBg = darkMode ? "bg-[#10e2ea]/30" : "bg-[#0e6371]/30";
//   const overlayTextColor = darkMode ? "text-black" : "text-white";
//   const buttonStyle = darkMode
//     ? "bg-[#10e2ea]/30 text-black border border-[#10e2ea]"
//     : "bg-[#0e6371]/30 text-white border border-[#0e6371]";

//   return (
//     <section className={`relative z-0 py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}>
//       <Bubbles darkMode={darkMode} />

//       <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className={`text-3xl mt-10 sm:text-4xl font-bold ${textColor}`}
//         >
//           Plan Your <span className={headingColor}>Life Goals</span>
//         </motion.h2>
//         <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
//           Secure your future by setting and tracking the right goals.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10 relative">
//         {goals.map((goal, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//             // className="group relative h-80 rounded-2xl overflow-hidden shadow-xl backdrop-blur-xl"
//             className={`group relative h-80 rounded-2xl overflow-hidden border 
//   ${darkMode 
//     ? 'bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20 border-[#10e2ea] shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]'
//     : 'bg-gradient-to-br from-white/50 to-[#d2f2ff]/30 border-[#0e6371] shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]'
//   }`}

//           >
//             <div className={`h-16 flex items-center justify-center font-bold text-xl ${headingColor} bg-white/10 z-10 relative`}> 
//               {goal.title}
//             </div>

//             <div className="relative h-64 overflow-hidden">
//               <img
//                 src={goal.image}
//                 alt={goal.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               <div
//                 className={`absolute inset-0 bottom-0 flex flex-col justify-center items-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out ${overlayBg} backdrop-blur-md`}
//               >
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.1 }}
//                   className={`mb-4 px-4 ${overlayTextColor}`}
//                 >
//                   {goal.description}
//                 </motion.p>
//                 <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.2 }}
//                   className={`px-5 py-2 rounded-full font-semibold ${buttonStyle} hover:scale-105 transition-transform`}
//                 >
//                   Set Goal
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Goals;








import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bubbles } from "../utils/Bubble";

const goals = [
  {
    title: "Dream Home",
    image: "https://www.moneysmatter.com/images/banners/home-banner-4.png",
    description:
      "Plan and save for your perfect home with smart investments. Ensure a roof over your head that reflects your dreams.",
  },
  {
    title: "Wealth Creation",
    image: "https://www.moneysmatter.com/images/banners/home-banner-5.png",
    description:
      "Build long-term wealth through disciplined investments. Grow your money and secure financial freedom.",
  },
  {
    title: "Retirement",
    image: "https://www.moneysmatter.com/images/banners/home-banner-1.png",
    description:
      "Secure a peaceful and financially free retirement life. Let your golden years be truly golden.",
  },
  {
    title: "Child's Education",
    image: "https://www.moneysmatter.com/images/banners/home-banner.png",
    description:
      "Invest early for your child's bright educational future. Support their dreams with the right planning.",
  },
  {
    title: "Child's Wedding",
    image: "https://www.moneysmatter.com/images/banners/home-banner-3.png",
    description:
      "Be financially prepared for your child’s big celebration. Make it memorable without financial stress.",
  },
  {
    title: "Emergency",
    image: "https://www.moneysmatter.com/images/banners/home-banner-7.png",
    description:
      "Create an emergency fund for life’s unexpected challenges. Stay ready for any surprise expenses.",
  },
];

const Goals = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [activeIndex, setActiveIndex] = useState(null);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const headingColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

  const overlayBg = darkMode ? "bg-[#10e2ea]/30" : "bg-[#0e6371]/30";
  const overlayTextColor = darkMode ? "text-[#0b0d1a]" : "text-white";
  const buttonStyle = darkMode
    ? "bg-[#10e2ea]/30 text-[#0b0d1a] border border-[#10e2ea]"
    : "bg-[#0e6371]/30 text-white border border-[#0e6371]";

    const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";
  const outerGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";
    const cardBg = darkMode
                  ? 'bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20 border-[#10e2ea] shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]'
                  : 'bg-gradient-to-br from-white/50 to-[#d2f2ff]/30 border-[#0e6371] shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]'
                

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
          Plan Your <span className={headingColor}>Life Goals</span>
        </motion.h2>
        <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
          Secure your future by setting and tracking the right goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10 relative">
        {goals.map((goal, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative h-80 rounded-2xl overflow-hidden border cursor-pointer
                ${cardBg} ${innerGlow} ${outerGlow}`}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className={`h-16 flex items-center justify-center font-bold text-xl ${headingColor} bg-white/10 z-10 relative`}>
                {goal.title}
              </div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={goal.image}
                  alt={goal.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className={`absolute inset-0 bottom-0 flex flex-col justify-center items-center text-center px-4 transition-transform duration-500 ease-in-out
                    ${overlayBg} backdrop-blur-md
                    ${isActive ? 'translate-y-0' : 'translate-y-full'}
                    group-hover:translate-y-0 sm:group-hover:translate-y-0
                  `}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`mb-4 text-2xl ${overlayTextColor}`}
                  >
                    {goal.description}
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`px-5 py-2 rounded-full font-semibold ${buttonStyle} hover:scale-105 transition-transform`}
                  >
                    Set Goal
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Goals;







// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const goals = [
//   {
//     name: "Dream Home",
//     image: "/goals/dream-home.jpg",
//     description: "Plan and achieve your dream home through smart investments.",
//   },
//   {
//     name: "Wealth Creation",
//     image: "/goals/wealth-creation.jpg",
//     description: "Grow your wealth strategically over time.",
//   },
//   {
//     name: "Retirement",
//     image: "/goals/retirement.jpg",
//     description: "Secure a peaceful and financially independent retirement.",
//   },
//   {
//     name: "Child's Education",
//     image: "/goals/education.jpg",
//     description: "Ensure quality education for your children.",
//   },
//   {
//     name: "Child's Wedding",
//     image: "/goals/wedding.jpg",
//     description: "Plan financially for your child's special day.",
//   },
//   {
//     name: "Emergency",
//     image: "/goals/emergency.jpg",
//     description: "Be prepared for unexpected life emergencies.",
//   },
// ];

// const Goals = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

//   const cardGlass = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

//   const glow = darkMode
//     ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_20px_rgba(16,226,234,0.2)]"
//     : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_20px_rgba(14,99,113,0.15)]";

//   const borderColor = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";
//   const textColor = darkMode ? "text-white" : "text-black";
//   const overlayBg = darkMode
//     ? "bg-[#10e2ea]/20 backdrop-blur-md"
//     : "bg-[#0e6371]/20 backdrop-blur-md";
//   const buttonColor = darkMode
//     ? "bg-[#10e2ea] text-black hover:bg-[#0dbfc8]"
//     : "bg-[#0e6371] text-white hover:bg-[#0a4e59]";

//   return (
//     <section
//       className={`py-20 px-4 sm:px-8 md:px-12 lg:px-20 transition-colors duration-500 ${bgGradient}`}
//     >
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className={`text-3xl sm:text-4xl font-bold ${textColor}`}
//         >
//           Set Your <span className={darkMode ? "text-[#10e2ea]" : "text-[#0e6371]"}>Financial Goals</span>
//         </motion.h2>
//         <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
//           Choose and plan your life goals with clarity.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {goals.map((goal, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             className={`relative rounded-2xl overflow-hidden border ${borderColor} ${cardGlass} ${glow} transition duration-300`}
//           >
//             <div className="p-4">
//               <h3 className={`text-lg font-semibold ${textColor} mb-2 text-center`}>{goal.name}</h3>
//               <div className="relative group">
//                 <img
//                   src={goal.image}
//                   alt={goal.name}
//                   className="w-full h-52 object-cover rounded-xl"
//                 />

//                 {/* Hover Layer */}
//                 <motion.div
//                   initial={{ y: "100%" }}
//                   whileHover={{ y: "0%" }}
//                   transition={{ type: "tween", duration: 0.4 }}
//                   className={`absolute bottom-0 left-0 w-full h-full ${overlayBg} rounded-xl flex flex-col items-center justify-center text-center px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                 >
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     whileHover={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className={`mb-4 text-sm sm:text-base ${textColor}`}
//                   >
//                     {goal.description}
//                   </motion.p>
//                   <motion.button
//                     initial={{ opacity: 0, y: 20 }}
//                     whileHover={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className={`px-4 py-2 rounded-full text-sm font-medium ${buttonColor} transition-colors duration-300`}
//                   >
//                     Set Goal
//                   </motion.button>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Goals;





// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Bubbles } from "../utils/Bubble";

// // Replace with your actual image URLs
// const goals = [
//   {
//     title: "Dream Home",
//     image: "/goals/dream-home.jpg",
//     description: "Plan and save for your perfect home with smart investments.",
//   },
//   {
//     title: "Wealth Creation",
//     image: "/goals/wealth-creation.jpg",
//     description: "Build long-term wealth through disciplined investments.",
//   },
//   {
//     title: "Retirement",
//     image: "/goals/retirement.jpg",
//     description: "Secure a peaceful and financially free retirement life.",
//   },
//   {
//     title: "Child's Education",
//     image: "/goals/education.jpg",
//     description: "Invest early for your child's bright educational future.",
//   },
//   {
//     title: "Child's Wedding",
//     image: "/goals/wedding.jpg",
//     description: "Be financially prepared for your child’s big celebration.",
//   },
//   {
//     title: "Emergency",
//     image: "/goals/emergency.jpg",
//     description: "Create an emergency fund for life’s unexpected challenges.",
//   },
// ];

// const Goals = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

//   const textColor = darkMode ? "text-white" : "text-black";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

//   const overlayBg = darkMode ? "bg-[#10e2ea]/20" : "bg-[#0e6371]/20";
//   const buttonStyle = darkMode
//     ? "bg-[#10e2ea]/30 text-[#10e2ea] border border-[#10e2ea]"
//     : "bg-[#0e6371]/30 text-[#0e6371] border border-[#0e6371]";

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
//           Plan Your <span className={highlight}>Life Goals</span>
//         </motion.h2>
//         <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
//           Secure your future by setting and tracking the right goals.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10 relative">
//         {goals.map((goal, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//             className="group relative h-72 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={goal.image}
//               alt={goal.title}
//               className="absolute inset-0 w-full h-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-opacity duration-300" />

//             {/* Goal Title */}
//             <div className="relative z-10 flex items-center justify-center h-full">
//               <h3 className={`text-2xl font-bold ${textColor} text-center`}>
//                 {goal.title}
//               </h3>
//             </div>

//             {/* Hover Overlay */}
//             <div
//               className={`absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-xl transition-all duration-300 ease-in-out ${overlayBg}`}
//             >
//               <motion.p
//                 initial={{ y: 10, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.4, delay: 0.1 }}
//                 className={`mb-4 px-4 ${highlight}`}
//               >
//                 {goal.description}
//               </motion.p>
//               <motion.button
//                 initial={{ y: 10, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.4, delay: 0.2 }}
//                 className={`px-5 py-2 rounded-full font-semibold ${buttonStyle} hover:scale-105 transition-transform`}
//               >
//                 Set Goal
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Goals;
