

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Bubbles } from "../../utils/Bubble";
import { ArrowRight } from "lucide-react";

const sipTools = [
  {
    title: "SIP Ready Reckoner",
    desc: "A simple readymade chart – it shows the SIP amounts to achieve goals basis various returns, tenures and assumed returns...",
    icon: "/icons/sip-calc.png",
    link: "/more/sip-tools/sip_ready_reckoner",
  },
  {
    title: "SIP Top Up – Ready Reckoner",
    desc: "Like the SIP ready reckoner, this tool depicts the returns of different SIP amounts, tenures and periods with 10% annual top up...",
    icon: "/icons/top-up.png",
    link: "/more/sip-tools/sip_topup_ready_reckoner",
  },
  {
    title: "Understanding Markets",
    desc: "This chart shows that as the investment horizon increases, the probability of losses reduce. You will see that in the 15 years period...",
    icon: "/icons/market.png",
    link: "/more/sip-tools/understanding_markets",
  },
];

const SIPToolsCards = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/60 to-[#0b1925]/40"
    : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/50";

  const textColor = darkMode ? "text-white" : "text-black";
  const titleColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const btnBg = darkMode ? "#10e2ea" : "#0e6371";
  const neonBorder = darkMode ? "#10e2ea" : "#0e6371";

  return (
    // <section
    //   className={`relative py-20 px-4 w-full md:px-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}
    // >
    <>
      <Bubbles darkMode={darkMode} />

      <div className="relative py-20 px-4 z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sipTools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-6 backdrop-blur-md border-1 ${glassBg} ${textColor} shadow-lg`}
            style={{
              borderColor: neonBorder,
              boxShadow: `0 0 15px ${neonBorder}, inset 0 0 20px ${neonBorder}55`,
            }}
          >
            <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>
              {tool.title}
            </h3>
            <p className="text-sm leading-relaxed mb-4">{tool.desc}</p>
            <img
              src={tool.icon}
              alt="tool-icon"
              className="w-14 h-14 object-contain mb-4"
            />
            <div className="text-center mt-2">
              <a
                href={tool.link}
                className="inline-flex items-center justify-center px-5 py-2 font-semibold rounded-full transition duration-300 shadow-md"
                style={{
                  backgroundColor: btnBg,
                  color: darkMode ? "#0b0d1a" : "white",
                  boxShadow: `0 0 15px ${btnBg}`,
                }}
              >
                Try Now <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      </>

    // </section>
  );
};

export default SIPToolsCards;

