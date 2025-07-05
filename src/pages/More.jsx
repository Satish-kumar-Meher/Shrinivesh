// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Bubbles } from "../utils/Bubble";
// import { useNavigate } from "react-router-dom";
// import { BookText, Newspaper, HelpCircle, Users, BarChart3 } from "lucide-react";

// const sections = [
//   {
//     name: "Blog",
//     description: "Insights and updates on investing, finance, and money habits.",
//     icon: <BookText size={32} />,
//     route: "/blog",
//   },
//   {
//     name: "News",
//     description: "Stay up to date with market trends and latest financial news.",
//     icon: <Newspaper size={32} />,
//     route: "/news",
//   },
//   {
//     name: "Mutual Funds FAQ",
//     description: "Answers to common questions about mutual fund investing.",
//     icon: <HelpCircle size={32} />,
//     route: "/mf_faqs",
//   },
//   {
//     name: "NRI Corner FAQ",
//     description: "Help and guidance tailored for NRIs investing in India.",
//     icon: <Users size={32} />,
//     route: "/nri_faqs",
//   },
//   {
//     name: "Financial Planning",
//     description: "Start your journey to financial freedom with proper planning.",
//     icon: <BarChart3 size={32} />,
//     route: "/financial-planning",
//   },
// ];

// const More = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);
//   const navigate = useNavigate();

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

//   return (
//     <section
//       className={`relative z-0 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
//     >
//       <Bubbles darkMode={darkMode} />

//       <div className="relative z-10 max-w-7xl mx-auto text-center mb-14">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className={`text-3xl sm:text-4xl font-bold ${textColor}`}
//         >
//           Explore <span className={highlight}>More Sections</span>
//         </motion.h2>
//         <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
//           Dig deeper into expert articles, FAQs, and tools designed to guide your financial journey.
//         </p>
//       </div>

//       <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             initial={{ rotateY: 90, opacity: 0 }}
//             whileInView={{ rotateY: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
//             viewport={{ once: true }}
//             className={`p-6 rounded-2xl backdrop-blur-xl border cursor-pointer ${cardGlass} ${glow} ${
//               darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
//             } hover:scale-105 transition-all duration-300`}
//             onClick={() => navigate(section.route)}
//           >
//             <div className={`flex items-center gap-4 mb-4 ${highlight}`}>
//               {section.icon}
//               <h3 className="text-xl font-semibold">{section.name}</h3>
//             </div>
//             <p className={`text-sm sm:text-base opacity-90 ${textColor}`}>
//               {section.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default More;










// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { Bubbles } from "../utils/Bubble";
// import { useNavigate, Outlet, useLocation } from "react-router-dom";
// import { BookText, Newspaper, HelpCircle, Users, BarChart3 } from "lucide-react";

// const sections = [
//   {
//     name: "Blog",
//     description: "Insights and updates on investing, finance, and money habits.",
//     icon: <BookText size={32} />,
//     route: "/blog",
//   },
//   {
//     name: "News",
//     description: "Stay up to date with market trends and latest financial news.",
//     icon: <Newspaper size={32} />,
//     route: "/news",
//   },
//   {
//     name: "Mutual Funds FAQ",
//     description: "Answers to common questions about mutual fund investing.",
//     icon: <HelpCircle size={32} />,
//     route: "/more/mf_faqs",  // <-- Updated nested route
//   },
//   {
//     name: "NRI Corner FAQ",
//     description: "Help and guidance tailored for NRIs investing in India.",
//     icon: <Users size={32} />,
//     route: "/more/nri_faqs", // <-- Updated nested route
//   },
//   {
//     name: "Financial Planning",
//     description: "Start your journey to financial freedom with proper planning.",
//     icon: <BarChart3 size={32} />,
//     route: "/financial-planning",
//   },
// ];

// const More = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);
//   const navigate = useNavigate();
//   const location = useLocation();

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

//   // Check if you're on child routes
//   const isNested = location.pathname !== "/more";

//   return (
//     <section
//       className={`relative z-0 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
//     >
//       <Bubbles darkMode={darkMode} />

//       <div className="relative z-10 max-w-7xl mx-auto text-center mb-14">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className={`text-3xl sm:text-4xl font-bold ${textColor}`}
//         >
//           Explore <span className={highlight}>More Sections</span>
//         </motion.h2>
//         <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
//           Dig deeper into expert articles, FAQs, and tools designed to guide your financial journey.
//         </p>
//       </div>

//       {/* If you're on main /more route, show the cards */}
//       {!isNested && (
//         <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {sections.map((section, index) => (
//             <motion.div
//               key={index}
//               initial={{ rotateY: 90, opacity: 0 }}
//               whileInView={{ rotateY: 0, opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
//               viewport={{ once: true }}
//               className={`p-6 rounded-2xl backdrop-blur-xl border cursor-pointer ${cardGlass} ${glow} ${
//                 darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
//               } hover:scale-105 transition-all duration-300`}
//               onClick={() => navigate(section.route)}
//             >
//               <div className={`flex items-center gap-4 mb-4 ${highlight}`}>
//                 {section.icon}
//                 <h3 className="text-xl font-semibold">{section.name}</h3>
//               </div>
//               <p className={`text-sm sm:text-base opacity-90 ${textColor}`}>
//                 {section.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {/* Nested routes will render here */}
//       <Outlet />
//     </section>
//   );
// };

// export default More;












import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../utils/Bubble";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { BookText, Newspaper, HelpCircle, Users, BarChart3 } from "lucide-react";
import SEO from "../utils/SEO";

const sections = [
  {
    name: "Blog",
    description: "Insights and updates on investing, finance, and money habits.",
    icon: <BookText size={32} />,
    route: "/blog",
  },
  {
    name: "News",
    description: "Stay up to date with market trends and latest financial news.",
    icon: <Newspaper size={32} />,
    route: "/news",
  },
  {
    name: "Mutual Funds FAQ",
    description: "Answers to common questions about mutual fund investing.",
    icon: <HelpCircle size={32} />,
    route: "/more/mf_faqs",
  },
  {
    name: "NRI Corner FAQ",
    description: "Help and guidance tailored for NRIs investing in India.",
    icon: <Users size={32} />,
    route: "/more/nri_faqs",
  },
  {
    name: "Financial Planning",
    description: "Start your journey to financial freedom with proper planning.",
    icon: <BarChart3 size={32} />,
    route: "/financial-planning",
  },
];

const More = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const navigate = useNavigate();
  const location = useLocation();

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

  const isMainMorePage = location.pathname === "/more";

  return (
    <section
      className={`relative z-0 min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500 overflow-hidden`}
    >
      <SEO tittle={"More Page"} description={"This is the more page"} />
      <Bubbles darkMode={darkMode} />

      {isMainMorePage && (
        <>
          <div className="relative z-10 max-w-7xl mx-auto text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-3xl sm:text-4xl font-bold ${textColor}`}
            >
              Explore <span className={highlight}>More Sections</span>
            </motion.h2>
            <p className={`mt-4 text-base sm:text-lg ${textColor} opacity-80`}>
              Dig deeper into expert articles, FAQs, and tools designed to guide your financial journey.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ rotateY: 90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl backdrop-blur-xl border cursor-pointer ${cardGlass} ${glow} ${
                  darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
                } hover:scale-105 transition-all duration-300`}
                onClick={() => navigate(section.route)}
              >
                <div className={`flex items-center gap-4 mb-4 ${highlight}`}>
                  {section.icon}
                  <h3 className="text-xl font-semibold">{section.name}</h3>
                </div>
                <p className={`text-sm sm:text-base opacity-90 ${textColor}`}>
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Nested routes */}
      <Outlet />
    </section>
  );
};

export default More;
