// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";


// const AboutUs = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const textColor = darkMode ? "text-white" : "text-black";
//   const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
//   const cardGlass = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";
//   const innerGlow = darkMode
//     ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
//     : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";
//   const outerGlow = darkMode
//     ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
//     : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

//   return (
//     <section className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
//       {/* Bubbles */}
//       <motion.div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         {[...Array(12)].map((_, i) => {
//           const size = 18 + i * 3;
//           const top = `${Math.random() * 85}%`;
//           const left = `${Math.random() * 90}%`;
//           const color = darkMode ? "#10e2ea" : "#0e6371";

//           return (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 width: size,
//                 height: size,
//                 top,
//                 left,
//                 backgroundColor: color,
//                 opacity: 0.12,
//                 boxShadow: `0 0 20px 5px ${color}`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 x: [0, 15, 0],
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 duration: 5 + i * 0.4,
//                 repeat: Infinity,
//                 delay: i * 0.2,
//               }}
//             />
//           );
//         })}
//       </motion.div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${highlight}`}>About Us</h2>
//         <div className={`rounded-3xl p-6 md:p-10 ${cardGlass} ${innerGlow} ${outerGlow} border transition-transform hover:scale-[1.02] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}>
//           <div className="flex flex-col-reverse md:flex-row items-center gap-8">
//             <div className="md:w-1/2">
//               <motion.h3 className={`text-5xl font-bold mb-4 ${textColor}`}>
//                 Your Financial Success Is <span className={`font-bold ${highlight}`}>Our Priority</span>
//               </motion.h3>
//               <p className={`mb-4 text-sm sm:text-base leading-relaxed ${textColor}`}>
//                 Money's Matter came into existence in the year 2016 when the promoter having then an experience of over twenty five years realized that personal finance was not mere numbers, it had a human side of it too.
//               </p>
//               <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
//                 There are three domains of Personal Financial Planning: Life, what is commonly called Life Insurance; Health, what is commonly referred to as Health Insurance or Mediclaim; and Wealth, which is the most dynamic part of Personal Financial Planning.
//               </p>
//             </div>
//             <div className="md:w-1/2">
//               <motion.img
//                 src="https://www.moneysmatter.com/images/about/doller.jpg"
//                 alt="About Us"
//                 className="w-full h-auto object-contain rounded-xl"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;










import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";
  const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";
  const outerGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

    const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";

  return (
    <section className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
      {/* Bubbles */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => {
          const size = 18 + i * 3;
          const top = `${Math.random() * 85}%`;
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
                y: [0, -20, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
      </motion.div>

      <div className={`relative  z-10 max-w-7xl mx-auto px-4 space-y-20`}>
        {/* Section 1: Intro */}
        <div>
          <h2 className={`text-3xl sm:text-4xl font-bold mt-7  mb-6 ${highlight}`}>About Us</h2>
          <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} border transition-transform hover:scale-[1.02] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}>
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h3 className={`text-5xl font-bold mb-4 ${textColor}`}>
                  Your Financial Success Is <span className={`font-bold ${highlight}`}>Our Priority</span>
                </motion.h3>
                <p className={`mb-4 text-sm sm:text-base leading-relaxed ${textColor}`}>
                  Money's Matter came into existence in the year 2016 when the promoter having then an experience of over twenty five years realized that personal finance was not mere numbers, it had a human side of it too.
                </p>
                <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
                  There are three domains of Personal Financial Planning: Life, what is commonly called Life Insurance; Health, what is commonly referred to as Health Insurance or Mediclaim; and Wealth, which is the most dynamic part of Personal Financial Planning.
                </p>
              </div>
              <div className="md:w-1/2">
                <motion.img
                  src="https://www.moneysmatter.com/images/about/doller.jpg"
                  alt="About Us"
                  className="w-full h-auto object-contain rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Vision & Mission */}
        <div>
          <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} border transition-transform hover:scale-[1.02] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}>
            <h3 className={`text-4xl font-bold mb-6 text-center ${highlight}`}>Vision & Mission</h3>
            <div className="space-y-6 text-center text-sm sm:text-base leading-relaxed px-2 sm:px-10 lg:px-24">
              <p className={textColor}>
                We at Money’s Matter understand that finance has a very human side. Everyone has dreams, goals, responsibilities, emotions and aspirations. Numbers alone don’t define one’s financial future. We aim to blend logic with emotion, strategy with empathy, and planning with personalization.
              </p>
              <p className={textColor}>
                Our mission is to empower individuals and families to make informed financial decisions, helping them lead lives of security, dignity, and fulfillment.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Founder Profile */}
        <div>
          <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} border transition-transform hover:scale-[1.02] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}>
            <h3 className={`text-4xl font-bold mb-6 text-center ${highlight}`}>Our <span className={textColor}>Esteemed Founder</span></h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-2/3 space-y-4 text-sm sm:text-base leading-relaxed">
                <p className={textColor}>
                  Mr Ashish Kumar Meher is someone who is known for his candid, honest and unbiased views on aspects related to Personal Finance. Academics being his forte, he has MBA and MPhil degrees, and to strengthen the behavioural side of financial planning he also posses a Doctorate in Consumer Behaviour.
                </p>
                <p className={textColor}>
                  Dr Anubandh has an experience and expertise of almost thirty three years in the personal financial domains ranging from Life Insurance, Health Insurance to New Age Financial Products like Mutual Funds, Portfolio Management Schemes, Alternate Investment Funds, Capital Gains Bonds, etc.
                </p>
                <p className={textColor}>
                  A voracious reader, a keen learner, a deep analyst, an excellent orator, a believer in the Divine, a non compromiser on values, ethics and principles are the traits which defines Dr Anubandh's personality!
                </p>
              </div>
              <div className="md:w-1/3 text-center">
                <img
                  src="/pics/founder.png"
                  alt="Dr Anubandh Rai"
                  className={`w-full h-auto rounded-2xl border-4 ${darkMode ? "border-[#1de0e6]" : "border-[#1de0e6]/30"} `}
                />
                <h4 className={`mt-4 text-xl font-bold ${textColor}`}>
                  Mr. <span className={highlight}>Ashish Kumar Meher</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
