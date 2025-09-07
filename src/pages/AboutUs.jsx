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
// import SEO from "../utils/SEO";

const AboutUs = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const secTextColor = darkMode ? "text-yellow-300" : "text-green-700";
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
    const specialColor = darkMode ? "text-lime-300" : "text-orange-500"

  return (
    <section className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
      {/* <SEO tittle={"About Page"} description={"This is the about page"} /> */}
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
          <h2 className={`text-4xl sm:text-5xl font-bold mt-7  mb-6 ${highlight}`}>About Us</h2>
          <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} border transition-transform hover:scale-[1.02] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}>
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h3 className={`text-5xl font-bold mb-4 ${textColor}`}>
                  Your Financial Success Is <span className={`font-bold ${highlight}`}>Our Priority</span>
                </motion.h3>
                <p className={`mb-4 text-sm sm:text-base leading-relaxed ${textColor}`}>
                  At Shri Nivesh, we believe that financial planning is more than just numbers—it's about people, goals, and meaningful progress. Since 2017, we’ve been on a mission to help individuals and families make smarter financial decisions for a secure future.
                </p>
                <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
                  With over 8 years of combined experience, our founder recognized that true financial success comes from personalized guidance, not generic advice. That’s why we focus on understanding your life goals before creating a financial roadmap for you.
                </p>
                   <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
                  We specialize in three key areas of Personal Finance: <br/>
                        ✔ Protection through Life Insurance,<br/>
                        ✔ Health Security with Medical & Health Insurance, and<br/>
                        ✔ Wealth Building via smart investment planning.
                </p>
                <p className={`text-sm sm:text-base leading-relaxed ${textColor}`}>
                  At Shri Nivesh, your success isn’t just a goal—it’s our priority.
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
            <h3 className={`text-4xl sm:text-5xl font-bold mb-6 text-center ${highlight}`}>Vision & Mission</h3>
             <h4 className={`text-2xl font-bold mb-6 text-center ${secTextColor}  `}>Guiding You Towards a Financially Secure Tomorrow</h4>
            <div className="space-y-6 text-center text-sm sm:text-base leading-relaxed px-2 sm:px-10 lg:px-24">
              <p className={textColor}>
                At Shri Nivesh, we recognize that personal finance is not just about numbers—it’s about people. Each individual carries unique dreams, responsibilities, and emotions that shape their financial journey. Our approach blends strategic financial planning with empathy and personalization, ensuring your financial goals are aligned with your life’s purpose.
              </p>
              <p className={textColor}>
                🔹 Our Vision is to be a trusted partner in your financial journey, helping you grow, protect, and preserve wealth across all stages of life.
              </p>
                 <p className={textColor}>
                🔹 Our Mission is to educate and empower individuals and families to make informed financial decisions that lead to security, dignity, and long-term fulfillment.
              </p>
              <p className={`${textColor} `}>
                With a focus on values, clarity, and personalized support, we aim to transform how people approach financial independence—with confidence and care.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Founder Profile */}
        <div>
          <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} border transition-transform hover:scale-[1.02] ${darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"}`}>
            <h3 className={`text-4xl sm:text-5xl font-bold mb-6 text-center ${textColor} `}>Our <span className={highlight}>Leadership Philosophy</span></h3>
            <h4 className={`text-2xl font-bold mb-6 text-center ${secTextColor} `}>Driven by Knowledge, Guided by Values</h4>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className=" space-y-4 text-sm sm:text-base leading-relaxed">
                <p className={textColor}>
                  Behind Shri Nivesh is a strong foundation built on trust, experience, and deep understanding of personal finance. The leadership team is made up of financial experts with decades of experience in helping people plan, protect, and grow their wealth.
                </p>
                <p className={textColor}>
                  With advanced qualifications in Finance, Consumer Behavior, and Investment Planning, we don’t just believe in numbers—we believe in people’s dreams. Every solution we offer comes from real insight, honest advice, and a genuine desire to help people create better financial futures.
                </p>
                <p className={textColor}>
                  Over the years, we’ve guided individuals, families, and businesses in areas like:<br/>
                  • Life Insurance & Health Insurance<br/>
                  • Mutual Funds & SIPs<br/>
                  • Portfolio Management & Tax-Efficient Investments
                </p>
                  <p className={textColor}>
                  What sets us apart is not just our experience—but our commitment to values like honesty, simplicity, and personalization. We don’t sell products; we build relationships for life.
                  </p>

                    <p className={`${specialColor} lg:ml-[300px]`}>
                   <span className="lg:ml-6">“सपने पूरे करने का रास्ता कठिन नहीं होता, बस सही दिशा में पहला कदम बढ़ाना होता है।”</span><br/>
                  (The path to fulfilling dreams is not difficult; it simply begins with the first right step.)
                </p>
              </div>
              {/* <div className="md:w-1/3 text-center">
                <img
                  src="/pics/founder.png"
                  alt="Dr Anubandh Rai"
                  className={`w-full h-auto rounded-2xl border-4 ${darkMode ? "border-[#1de0e6]" : "border-[#1de0e6]/30"} `}
                />
                <h4 className={`mt-4 text-xl font-bold ${textColor}`}>
                  Mr. <span className={highlight}>Ashish Kumar Meher</span>
                </h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
