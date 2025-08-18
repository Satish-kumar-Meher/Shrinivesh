// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const UsefulLinks = () => {
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
//   const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";

//   const sections = [
//     {
//       title: "📚 Investor Education & Awareness",
//       links: [
//         { name: "SEBI Investor Awareness Website", url: "https://investor.sebi.gov.in" },
//         { name: "Mutual Funds Sahi Hai", url: "https://www.mutualfundssahihai.com" },
//         { name: "AMFI – Association of Mutual Funds in India", url: "https://www.amfiindia.com" },
//       ],
//     },
//     {
//       title: "🛠️ Mutual Fund Platforms & Services",
//       links: [
//         { name: "MF Utilities (MFU)", url: "https://www.mfuindia.com" },
//         { name: "CVL KRA", url: "https://www.cvlkra.com" },
//         { name: "NDML KRA", url: "https://kra.ndml.in" },
//         { name: "CAMS KRA", url: "https://www.camsonline.com" },
//         { name: "Karvy KRA", url: "https://www.karvykra.com" },
//         { name: "DOTEX KRA (NSDL)", url: "https://kra.ndml.in" },
//         { name: "Check Your KYC Status (Karvy)", url: "https://www.karvykra.com/kyc" },
//       ],
//     },
//     {
//       title: "🧾 Regulatory Bodies & Framework",
//       links: [
//         { name: "SEBI – Securities and Exchange Board of India", url: "https://www.sebi.gov.in" },
//         { name: "NISM – National Institute of Securities Markets", url: "https://www.nism.ac.in" },
//         { name: "RBI – Reserve Bank of India", url: "https://www.rbi.org.in" },
//         { name: "IRDAI – Insurance Regulatory Authority", url: "https://www.irdai.gov.in" },
//       ],
//     },
//     {
//       title: "📈 Market Exchanges",
//       links: [
//         { name: "NSE – National Stock Exchange", url: "https://www.nseindia.com" },
//         { name: "BSE – Bombay Stock Exchange", url: "https://www.bseindia.com" },
//         { name: "MCX – Multi Commodity Exchange", url: "https://www.mcxindia.com" },
//       ],
//     },
//     {
//       title: "💰 Taxation & Retirement",
//       links: [
//         { name: "Income Tax India", url: "https://www.incometax.gov.in" },
//         { name: "NPS – National Pension System", url: "https://www.npscra.nsdl.co.in" },
//       ],
//     },
//     {
//       title: "🧍 KYC, Aadhaar & PAN Services",
//       links: [
//         { name: "UIDAI – Aadhaar Portal", url: "https://uidai.gov.in" },
//         { name: "Get e-Aadhaar", url: "https://eaadhaar.uidai.gov.in" },
//         { name: "Apply for PAN Card", url: "https://tin.tin.nsdl.com/pan" },
//         { name: "Get e-PAN (NSDL)", url: "https://www.incometax.gov.in/iec/foportal/" },
//       ],
//     },
//   ];

//   return (
//     <section className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
//       <motion.div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         {[...Array(20)].map((_, i) => {
//           const size = 20 + i * 2;
//           const top = `${Math.random() * 80}%`;
//           const left = `${Math.random() * 95}%`;
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
//                 opacity: 0.1,
//                 boxShadow: `0 0 18px 4px ${color}`,
//               }}
//               animate={{
//                 y: [0, -15, 0],
//                 scale: [1, 1.05, 1],
//               }}
//               transition={{
//                 duration: 6 + i * 0.3,
//                 repeat: Infinity,
//                 delay: i * 0.15,
//               }}
//             />
//           );
//         })}
//       </motion.div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4">
//         <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow}`}>
//           <h2 className={`text-3xl sm:text-4xl font-bold mb-8 text-center ${highlight}`}>🔗 Useful Links for Mutual Fund Investors</h2>

//           <div className="grid md:grid-cols-2 gap-10 text-sm sm:text-base">
//             {sections.map((section, index) => (
//               <div key={index}>
//                 <h3 className={`font-semibold text-lg mb-4 ${highlight}`}>{section.title}</h3>
//                 <ul className="space-y-2">
//                   {section.links.map((link, i) => (
//                     <li key={i}>
//                       <a
//                         href={link.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`block underline-offset-4 hover:underline transition-all duration-300 ${textColor}`}
//                       >
//                         {link.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UsefulLinks;







import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Bubbles } from "../utils/Bubble";


const UsefulLinks = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const categories = [
    {
      title: "📚 Investor Education & Awareness",
      links: [
        { name: "SEBI Investor Awareness Website", url: "https://investor.sebi.gov.in" },
        { name: "Mutual Funds Sahi Hai", url: "https://www.mutualfundssahihai.com" },
        { name: "AMFI – Association of Mutual Funds in India", url: "https://www.amfiindia.com" },
        { name: "NSE Investor Education", url: " https://nseindia.com/invest/investors-home" },
        { name: "IEPFA", url: "https://IEPFA.gov.in/login" },
      ],
    },
    {
      title: "🛠️ Mutual Fund Platforms & Services",
      links: [
        { name: "MF Utilities (MFU)", url: "https://mfuonline.com" },
        { name: "NSE NMF", url: "https://nsenmf.com" },
        { name: "Check Your KYC Status (Karvy)", url: "https://karvykra.com/UPanSearchGlobalWithPanExempt.aspx" },
        { name: "CAMS", url: " https://camsonline.com" },
        { name: "KFINTECH", url: " https://mfs.kfintech.com/dit/login" },
      ],
    },


    {
      title: "Validate KYC",
      links: [
        { name: "CVL KRA", url: " https://validate.cvlindia.com/CVLKRAVerification_V1" },
        { name: "NDML KRA", url: "https://kra.ndml.in/kra/ckyc/#/initiate" },
        { name: "CAMS KRA", url: "https://camskra.com/PanDetailsUpdate.aspx" },
        { name: "KARVY KRA", url: "https://www.karvykra.com/KYC_Validation/Default.aspx" },
        { name: "NSE KRA", url: " https://www.nsekra.com" },
      ],
    },


    {
      title: "🧾 Regulatory Bodies & Framework",
      links: [
        { name: "SEBI – Securities and Exchange Board of India", url: "https://www.sebi.gov.in" },
        { name: "NISM – National Institute of Securities Markets", url: "https://www.nism.ac.in" },
        { name: "RBI – Reserve Bank of India", url: "https://website.rbi.org.in/en/web/rbi" },
        { name: "IRDAI – Insurance Regulatory and Development Authority of India", url: "https://irdai.gov.in/home" },
      ],
    },
    {
      title: "📈 Market Exchanges",
      links: [
        { name: "NSE – National Stock Exchange", url: "https://www.nsekra.com" },
        { name: "BSE – Bombay Stock Exchange", url: "https://www.bseindia.com" },
        { name: "MCX – Multi Commodity Exchange", url: "https://www.mcxindia.com" },
        { name: "NCDEX - National Commodity & Derivatives Exchange Limited", url: "https://ncdex.com" },
      ],
    },
    
    {
      title: "🧍 KYC, Aadhaar & PAN Services",
      links: [
        { name: "UIDAI – Aadhaar Portal", url: "https://uidai.gov.in/en" },
        { name: "Get e-Aadhaar", url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en" },
        { name: "Apply for PAN Card", url: "https://onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
        { name: "Get e-PAN (NSDL)", url: "https://onlineservices.nsdl.com/paam/requestAndDownloadEPAN.html" },
      ],
    },
    {
      title: "💰 Taxation & Retirement",
      links: [
        { name: "Income Tax India", url: "https://incometaxindia.gov.in" },
        { name: "NPS – National Pension System", url: "https://npstrust.org.in" },
      ],
    },
  ];

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const primaryColor = darkMode ? "#10e2ea" : "#0e6371";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const cardBg = `${glassBg} border ${darkMode ? "border-white/10 text-white" : "border-black/10 text-black"}`;

  return (
    <section
      className={`relative py-20 px-4 md:px-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}
    >
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 text-center mb-12">
        <h2
          className={`text-4xl md:text-5xl font-bold ${highlight} drop-shadow`}
        >
          Useful Links for Mutual Fund Investors & MFDs
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor={primaryColor}
            glarePosition="bottom"
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-6 rounded-2xl shadow-2xl backdrop-blur-md ${cardBg} transition-all duration-300 overflow-hidden`}
              style={{ boxShadow: `inset 0 0 15px ${primaryColor}55` }}
            >
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? "text-green-400" : "text-orange-400"} `}>
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`underline underline-offset-4 font-medium ${highlight} hover:opacity-80`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default UsefulLinks;

