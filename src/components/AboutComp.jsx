





// import { motion } from "framer-motion";
// import { useSelector } from "react-redux";

// const AboutSection = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   return (
//     <section
//       className={`relative py-20 px-6 sm:px-10 transition-colors duration-500 ${
//         darkMode
//           ? "bg-gradient-to-b from-[#0b0d1a] to-[#081c29] text-white"
//           : "bg-gradient-to-b from-[#f0faff] to-[#d9e9ff] text-gray-800"
//       }`}
//     >
//       {/* Bubbles */}
//       <Bubbles darkMode={darkMode} />

//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
//         {/* Left - Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl text-center md:text-left"
//         >
//           <motion.p
//             className="mb-2 font-semibold tracking-wide"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             style={{ color: darkMode ? "#efe043" : "#627d32" }}
//           >
//             About
//           </motion.p>
//           <motion.h2
//             className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Your <span className="text-green-600">Financial Success</span> Is Our
//             Priority
//           </motion.h2>
//           <p className="text-base leading-relaxed mb-6">
//             Money's Matter came into existence in the year 2016 when the promoter,
//             having then an experience of over twenty five years, realized that
//             personal finance was not mere numbers, ...
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`mt-4 px-6 py-2 rounded-full font-semibold shadow-md transition ${
//               darkMode
//                 ? "bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/40"
//                 : "bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/30"
//             }`}
//           >
//             Know More
//           </motion.button>
//         </motion.div>

//         {/* Right - Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full max-w-md"
//         >
//           <img
//             src="https://www.moneysmatter.com/images/about/businessnew.png" // Use your actual image path
//             alt="Piggy bank with growth"
//             className="rounded-3xl shadow-xl object-contain w-full h-auto"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Bubbles = ({ darkMode }) => {
//   return (
//     <motion.div
//       className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
//       aria-hidden
//     >
//       {[...Array(12)].map((_, i) => {
//         const size = 20 + Math.random() * 80;
//         const top = `${Math.random() * 100}%`;
//         const left = `${Math.random() * 100}%`;
//         const bubbleColor = darkMode ? "#10e2ea" : "#0e6371";

//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               top,
//               left,
//               backgroundColor: bubbleColor,
//               opacity: 0.1,
//               boxShadow: `0 0 20px 5px ${bubbleColor}`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 10, 0],
//               opacity: [0.05, 0.1, 0.05],
//               scale: [1, 1.05, 1],
//             }}
//             transition={{
//               duration: 10 + Math.random() * 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         );
//       })}
//     </motion.div>
//   );
// };

// export default AboutSection;






// import { motion } from "framer-motion";
// import { useSelector } from "react-redux";

// const AboutSection = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-gray-900 to-black"
//     : "bg-gradient-to-br from-blue-100 to-sky-200";

//   const glassBg = darkMode
//     ? "bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] bg-opacity-50"
//     : "bg-gradient-to-br from-white/40 to-white/10 bg-opacity-70";

//   const neonShadow = darkMode
//     ? "shadow-[inset_0_0_20px_rgba(127,121,241,0.4)]"
//     : "shadow-[inset_0_0_20px_rgba(127,121,241,0.25)]";

//   return (
//     <section
//       className={`relative py-20 px-6 sm:px-10 transition-colors duration-500 ${bgGradient} ${
//         darkMode ? "text-white" : "text-gray-800"
//       }`}
//     >
//       {/* Bubbles */}
//       <Bubbles darkMode={darkMode} />

//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
//         {/* Left - Text in Glass Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className={`max-w-xl text-center md:text-left p-8 rounded-3xl backdrop-blur-md border border-white/10 ${glassBg} ${neonShadow} shadow-2xl transition`}
//         >
//           <motion.p
//             className="mb-2 font-semibold tracking-wide"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             style={{ color: darkMode ? "#efe043" : "#627d32" }}
//           >
//             About
//           </motion.p>
//           <motion.h2
//             className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Your <span className="text-green-600">Financial Success</span> Is Our
//             Priority
//           </motion.h2>
//           <p className="text-base leading-relaxed mb-6">
//             Money's Matter came into existence in the year 2016 when the promoter,
//             having then an experience of over twenty five years, realized that
//             personal finance was not mere numbers, ...
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`mt-4 px-6 py-2 rounded-full font-semibold shadow-md transition ${
//               darkMode
//                 ? "bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/40"
//                 : "bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/30"
//             }`}
//           >
//             Know More
//           </motion.button>
//         </motion.div>

//         {/* Right - Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full max-w-md"
//         >
//           <img
//             src="https://www.moneysmatter.com/images/about/businessnew.png"
//             alt="Piggy bank with growth"
//             className="rounded-3xl shadow-xl object-contain w-full h-auto"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Bubbles = ({ darkMode }) => {
//   return (
//     <motion.div
//       className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
//       aria-hidden
//     >
//       {[...Array(12)].map((_, i) => {
//         const size = 20 + Math.random() * 80;
//         const top = `${Math.random() * 100}%`;
//         const left = `${Math.random() * 100}%`;
//         const bubbleColor = darkMode ? "#10e2ea" : "#0e6371";

//         return (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               top,
//               left,
//               backgroundColor: bubbleColor,
//               opacity: 0.1,
//               boxShadow: `0 0 20px 5px ${bubbleColor}`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 10, 0],
//               opacity: [0.05, 0.1, 0.05],
//               scale: [1, 1.05, 1],
//             }}
//             transition={{
//               duration: 10 + Math.random() * 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         );
//       })}
//     </motion.div>
//   );
// };

// export default AboutSection;





import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AboutSection = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  // Main background gradient
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  // Glassmorphic background
  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  // Inner glow default (glass look) + outer glow on hover
  // const innerGlow = "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]";
  // const outerHoverGlow = "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]";



  // Inner and outer glow colors based on theme
const innerGlow = darkMode
  ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
  : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

const outerHoverGlow = darkMode
  ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
  : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";


  return (
    <section
      className={`relative py-20 px-6 sm:px-10 transition-colors duration-500 ${bgGradient} ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <Bubbles darkMode={darkMode} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Glass Box with Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-xl text-center md:text-left p-8 rounded-3xl backdrop-blur-lg border border-white/10 ${glassBg} ${innerGlow} ${outerHoverGlow} shadow-2xl transition duration-300`}
        >
          <motion.p
            className="mb-2 font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: darkMode ? "#efe043" : "#627d32" }}
          >
            About
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your <span className="text-green-600">Financial Success</span> Is Our
            Priority
          </motion.h2>
          <p className="text-base leading-relaxed mb-6">
            Money's Matter came into existence in the year 2016 when the promoter,
            having then an experience of over twenty five years, realized that
            personal finance was not mere numbers, ...
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-4 px-6 py-2 rounded-full font-semibold shadow-md transition ${
              darkMode
                ? "bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/40"
                : "bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/30"
            }`}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <img
            src="https://www.moneysmatter.com/images/about/businessnew.png"
            alt="Piggy bank with growth"
            className="rounded-3xl shadow-xl object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Bubbles = ({ darkMode }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      aria-hidden
    >
      {[...Array(12)].map((_, i) => {
        const size = 20 + Math.random() * 80;
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const bubbleColor = darkMode ?"#10e2ea" :"#0e6371";

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
              backgroundColor: bubbleColor,
              opacity: 0.08,
              boxShadow: `0 0 20px 5px ${bubbleColor}`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.04, 0.1, 0.04],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default AboutSection;
