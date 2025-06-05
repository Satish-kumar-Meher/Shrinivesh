
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../../utils/Bubble";

const amcLogos = [
  {
    name: "Aditya Birla Sun Life Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/aditya_groww.png",
  },
  {
    name: "Axis Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/axis_groww.png",
  },
  {
    name: "Bank of India Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/bank_groww.png",
  },
  {
    name: "Baroda BNP Paribas Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/barodabnpparibasmutualfund_groww.png",
  },
  {
    name: "Bandhan Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/bandhan_groww.png",
  },
  {
    name: "Canara Robeco Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/canara_groww.png",
  },
  {
    name: "DSP Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/dsp_groww.png",
  },
  {
    name: "Edelweiss Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/edelweiss_groww.png",
  },
  {
    name: "Franklin Templeton Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/franklin_groww.png",
  },
  {
    name: "HDFC Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/hdfc_groww.png",
  },
  {
    name: "HSBC Asset Management",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/hsbc_groww.png",
  },
  {
    name: "Invesco Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/invesco_groww.png",
  },
  {
    name: "ITI Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/iti_groww.png",
  },
  {
    name: "JM Financial Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/jm_groww.png",
  },
  {
    name: "Kotak Mahindra Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/kotak_groww.png",
  },
  {
    name: "LIC Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/lic_groww.png",
  },
  {
    name: "Mahindra Manulife Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/mahindra_groww.png",
  },
  {
    name: "Mirae Asset Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/mirae_groww.png",
  },
  {
    name: "Motilal Oswal Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/motilal_groww.png",
  },
  {
    name: "Quantum Mutual Fund",
    url: "https://assets-netstorage.groww.in/mf-assets/logos/quantum_groww.png",
  },
];

const AMCMarquee = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-b from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-b from-[#f0faff] to-[#d9e9ff]";

  const cardBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

//   const textColor = darkMode ? "text-white" : "text-gray-900";
const textColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

const headingColor = darkMode ? "text-[#efe043]" : "text-[#627d32]";


  const duplicatedLogos = [...amcLogos, ...amcLogos, ...amcLogos];

  return (
    <section className={`relative py-20 overflow-hidden ${bgGradient}`}>
     
      <Bubbles darkMode={darkMode} />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${textColor}`}>
          Some Of The Biggest & Trusted AMCs We Are Associated With
        </h2>

        <div className="relative h-[600px] overflow-hidden will-change-transform">
          <motion.div
            className="absolute w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 will-change-transform"
            animate={{ y: ["0%", "-66.6%"] }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {duplicatedLogos.map((logo, i) => (
              <motion.div
                key={i}
                className={`w-full h-28 flex justify-center items-center rounded-2xl ${cardBg} ${innerGlow} border ${
                  darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center text-center px-2">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-12 object-contain transition-transform duration-300 mb-2"
                    loading="lazy"
                  />
                  <span className={`text-sm font-medium truncate max-w-[90%] ${textColor}`}>
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AMCMarquee;












// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const amcLogos = [
//   {
//     name: "Aditya Birla Sun Life Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/aditya_groww.png",
//   },
//   {
//     name: "Axis Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/axis_groww.png",
//   },
//   {
//     name: "Bank of India Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/bank_groww.png",
//   },
//   {
//     name: "Baroda BNP Paribas Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/barodabnpparibasmutualfund_groww.png",
//   },
//   {
//     name: "Bandhan Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/bandhan_groww.png",
//   },
//   {
//     name: "Canara Robeco Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/canara_groww.png",
//   },
//   {
//     name: "DSP Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/dsp_groww.png",
//   },
//   {
//     name: "Edelweiss Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/edelweiss_groww.png",
//   },
//   {
//     name: "Franklin Templeton Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/franklin_groww.png",
//   },
//   {
//     name: "HDFC Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/hdfc_groww.png",
//   },
//   {
//     name: "HSBC Asset Management",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/hsbc_groww.png",
//   },
//   {
//     name: "Invesco Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/invesco_groww.png",
//   },
//   {
//     name: "ITI Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/iti_groww.png",
//   },
//   {
//     name: "JM Financial Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/jm_groww.png",
//   },
//   {
//     name: "Kotak Mahindra Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/kotak_groww.png",
//   },
//   {
//     name: "LIC Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/lic_groww.png",
//   },
//   {
//     name: "Mahindra Manulife Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/mahindra_groww.png",
//   },
//   {
//     name: "Mirae Asset Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/mirae_groww.png",
//   },
//   {
//     name: "Motilal Oswal Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/motilal_groww.png",
//   },
//   {
//     name: "Quantum Mutual Fund",
//     url: "https://assets-netstorage.groww.in/mf-assets/logos/quantum_groww.png",
//   },
// ];

// const AMCMarquee = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-b from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-b from-[#f0faff] to-[#d9e9ff]";

//   const cardBg = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

//   const innerGlow = darkMode
//     ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
//     : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

//   const textColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

//   const headingColor = darkMode ? "text-yellow-300" : "text-yellow-600";


//   const duplicatedLogos = [...amcLogos, ...amcLogos, ...amcLogos];

//   return (
//     <section className={`relative py-20 overflow-hidden ${bgGradient}`}>
        
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
//         <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${headingColor}`}>
//           Some Of The Biggest & Trusted AMCs We Are Associated With
//         </h2>

//         <div className="relative h-[600px] overflow-hidden will-change-transform">
//           <motion.div
//             className="absolute w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 will-change-transform"
//             animate={{ y: ["0%", "-66.6%"] }}
//             transition={{
//               duration: 8,
//               ease: "linear",
//               repeat: Infinity,
//             }}
//             style={{ transform: "translate3d(0, 0, 0)" }}
//           >
//             {duplicatedLogos.map((logo, i) => (
//               <motion.div
//                 key={i}
//                 className={`w-full h-28 flex justify-center items-center rounded-2xl ${cardBg} ${innerGlow} border ${
//                   darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="flex flex-col items-center text-center px-2">
//                   <img
//                     src={logo.url}
//                     alt={logo.name}
//                     className="h-12 object-contain transition-transform duration-300 mb-2"
//                     loading="lazy"
//                   />
//                   <span className={`text-sm font-medium truncate max-w-[90%] ${textColor}`}>
//                     {logo.name}
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AMCMarquee;