// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const Services = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const services = [
//     {
//       title: "Mutual Fund",
//       description: "Mutual funds are financial instruments which invest in a ...",
//       icon: "/icons/mutualfund.svg",
//     },
//     {
//       title: "Life Insurance",
//       description: "Life insurance is a financial product that provides...",
//       icon: "/icons/lifeinsurance.svg",
//     },
//     {
//       title: "Health Insurance",
//       description: "Cost of quality healthcare in India has been...",
//       icon: "/icons/health.svg",
//     },
//     {
//       title: "PMS",
//       description: "Portfolio Management Services or PMS, is a service offered by...",
//       icon: "/icons/pms.svg",
//     },
//     {
//       title: "AIF",
//       description: "Alternative Investment Funds (AIFs) have emerged as a...",
//       icon: "/icons/aif.svg",
//     },
//     {
//       title: "Housing Loan",
//       description: "Home loan is long term product to finance the...",
//       icon: "/icons/home.svg",
//     },
//     {
//       title: "Loan Against MF",
//       description: "This is very similar to loan against shares. You can...",
//       icon: "/icons/loan.svg",
//     },
//     {
//       title: "Capital Gain Bonds",
//       description: "Capital gain bonds are financial instruments issued...",
//       icon: "/icons/bond.svg",
//     },
//     {
//       title: "Retirement Solutions",
//       description: "The plan and action of accumulating a certain corpus...",
//       icon: "/icons/retirement.svg",
//     },
//   ];

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

//     const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"

//   return (
//     <section className={`relative z-0 py-20 overflow-hidden ${bgGradient} transition-colors duration-500`}>
//       {/* Bubbles */}
//       <motion.div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         {[...Array(12)].map((_, i) => {
//           const size = 16 + i * 2;
//           const top = `${Math.random() * 90}%`;
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
//               animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
//               transition={{ duration: 6 + i * 0.3, repeat: Infinity, delay: i * 0.15 }}
//             />
//           );
//         })}
//       </motion.div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className={`text-4xl sm:text-5xl font-bold ${highlight}`}>
//             Our Premium <span className={textColor}>Services</span>
//           </h2>
//           <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${textColor}`}>
//             Money’s Matter offers a whole gamut of services to meet your{" "}
//             <span className={highlight}>Savings</span>,{" "}
//             <span className={highlight}>Investment</span>,{" "}
//             <span className={highlight}>Insurance</span>, and{" "}
//             <span className={highlight}>Taxation</span> needs.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {services.map((service, i) => (
//             <motion.div
//               key={service.title}
//               className={`rounded-2xl p-6 border-cyan-300  ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.03]`}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//             >
//               <div className="mb-4">
//                 <img src={service.icon} alt={service.title} className="w-10 h-10 mb-2" />
//                 <h4 className={`text-lg font-semibold ${highlight}`}>{service.title}</h4>
//               </div>
//               <p className={`text-sm ${textColor}`}>{service.description}</p>
//               <button className={`mt-4 text-sm font-medium ${highlight} underline`}>Read More</button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;








import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Bubbles } from "../utils/Bubble";
import SEO from "../utils/SEO";

const Services = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const services = [
    {
      title: "Mutual Fund Investments",
      description: "Diversify your portfolio and grow wealth with expert-guided Mutual Fund solutions tailored to your goals.",
      icon: "./logos/MF.png",
    },
    {
      title: "Life Insurance Planning",
      description: "Protect your family's future with smart Life Insurance plans designed to provide long-term security and peace of mind.",
      icon: "./logos/LI.png",
    },
    {
      title: "Health Insurance Coverage",
      description: "Ensure financial safety in medical emergencies with affordable and comprehensive Health Insurance plans.",
      icon: "./logos/HI.png",
    },
    {
      title: "PMS – Portfolio Management Services",
      description: "Let seasoned professionals manage your wealth with custom Portfolio Management Services (PMS) focused on performance and growth.",
      icon: "./logos/PMS.png",
    },
    {
      title: "AIF – Alternative Investment Funds",
      description: "Access high-growth opportunities through Alternative Investment Funds (AIFs) – ideal for investors seeking diversification beyond traditional assets.",
      icon: "./logos/AIF.png",
    },
    {
      title: "Retirement Planning Solutions",
      description: "Plan today for a worry-free tomorrow with tailored Retirement Solutions that help you build a secure financial future and achieve lasting financial freedom.",
      icon: "./logos/RS.png",
    },
    {
      title: "Housing Loan Assistance",
      description: "Get expert help to finance your dream home with customized Home Loan solutions and step-by-step guidance.",
      icon: "./logos/HL.png",
    },
    {
      title: "Loan Against Mutual Funds",
      description: "Unlock instant liquidity by availing Loans against your Mutual Fund units without redeeming your investments",
      icon: "./logos/LA.png",
    },
    {
      title: "Capital Gain Bonds",
      description: "Save tax under Section 54EC by investing in Capital Gain Bonds, a safe and government-backed investment option.",
      icon: "./logos/CGB.png",
    },
    
  ];

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const secTextColor = darkMode ? "text-yellow-300" : "text-green-900";
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
    <section
      className={`relative z-0 py-20 overflow-hidden ${bgGradient} transition-colors duration-500`}
    >
    <SEO tittle={"Service Page"} description={"This is the service page"} />
      
    <Bubbles darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 ">
          <h2 className={`text-4xl sm:text-5xl mt-10 font-bold ${highlight}`}>
            Explore Our Expert <span className={textColor}>Financial Services</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${secTextColor}`}>
            At Shri Nivesh, we offer trusted and tailored solutions for your{" "}
            <span className={highlight}>Savings</span>,{" "}
            <span className={highlight}>Investment</span>,{" "}
            <span className={highlight}>Insurance</span>, and{" "}
            <span className={highlight}>Tax Planning</span> needs
            — helping you secure and grow your wealth with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              scale={1.03}
              transitionSpeed={2000}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
               glarePosition="all"
              key={service.title}
            >
              {/* <motion.div
                className={`rounded-2xl p-6 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} transition-transform`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10 mb-2"
                  />
                  <h4 className={`text-lg font-semibold ${highlight}`}>
                    {service.title}
                  </h4>
                </div>
                <p className={`text-sm ${textColor}`}>{service.description}</p>
                <button
                  className={`mt-4 px-4 py-2 rounded-full border ${border} ${highlight} font-medium text-sm transition duration-300 hover:scale-105 hover:shadow-lg hover:${outerGlow.replace(
                    "hover:",
                    ""
                  )}`}
                >
                  Read More
                </button>
              </motion.div> */}

              <motion.div
  className={`rounded-2xl p-6 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} transition-transform`}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: i * 0.1 }}
>
  <div className="flex items-center justify-between gap-4 h-full">
    {/* Left Side: Title + Description */}
    <div className="flex-1">
      <h4 className={`text-xl font-semibold mb-2 ${highlight}`}>
        {service.title}
      </h4>
      <p className={`text-sm ${textColor}`}>{service.description}</p>
      <button
        className={`mt-4 px-4 py-2 rounded-full border ${border} ${highlight} font-medium text-sm transition duration-300 hover:scale-105 hover:shadow-lg hover:${outerGlow.replace(
          "hover:",
          ""
        )}`}
      >
        Read More
      </button>
    </div>

    {/* Right Side: Icon */}
    <div className="flex-shrink-0 flex items-center justify-center h-full">
      <img
        src={service.icon}
        alt={service.title}
        className="w-20 h-20 object-contain"
      />
    </div>
  </div>
</motion.div>

            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;












// import { useSelector } from "react-redux";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { CheckCircle2 } from "lucide-react";
// import { Bubbles } from "../utils/Bubble";

// const Services = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const services = [
//     {
//       title: "Investment Planning",
//       points: [
//         "Goal-based financial strategies",
//         "Risk profiling & asset allocation",
//         "Portfolio rebalancing & optimization",
//       ],
//     },
//     {
//       title: "Mutual Fund Advisory",
//       points: [
//         "Curated fund recommendations",
//         "Category-wise fund selection",
//         "Periodic performance reviews",
//       ],
//     },
//     {
//       title: "Retirement Planning",
//       points: [
//         "Retirement corpus estimation",
//         "Tax-efficient withdrawal strategies",
//         "Post-retirement income planning",
//       ],
//     },
//     {
//       title: "Tax Planning",
//       points: [
//         "Section 80C investment guidance",
//         "Capital gains tax strategies",
//         "Tax-saving fund suggestions",
//       ],
//     },
//     {
//       title: "Child Future Planning",
//       points: [
//         "Education fund estimation",
//         "Investment options for minors",
//         "Milestone-based planning",
//       ],
//     },
//     {
//       title: "Insurance Planning",
//       points: [
//         "Life & health insurance review",
//         "Coverage adequacy analysis",
//         "Policy comparison & recommendations",
//       ],
//     },
//   ];

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const glassBg = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

//   const primaryColor = darkMode ? "#10e2ea" : "#0e6371";
//   const cardGlow = `inset 0 0 20px ${primaryColor}55`;

//   return (
//     <section className={`relative py-20 px-6 md:px-20 overflow-hidden ${bgGradient}`}>
//       <Bubbles darkMode={darkMode} />

//       <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center drop-shadow ${darkMode ? "text-green-400" : "text-green-700"}`}>
//         Our Services
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
//         {services.map((service, index) => (
//           <Tilt
//             key={index}
//             glareEnable={true}
//             glareMaxOpacity={0.4}
//             glareColor={primaryColor}
//             tiltMaxAngleX={15}
//             tiltMaxAngleY={15}
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className={`p-6 rounded-2xl shadow-2xl backdrop-blur-md border ${glassBg} ${
//                 darkMode ? "border-white/10 text-white" : "border-black/10 text-black"
//               }`}
//               style={{ boxShadow: cardGlow }}
//             >
//               <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
//               <ul className="space-y-2 text-sm">
//                 {service.points.map((point, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <CheckCircle2 size={16} color={primaryColor} />
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </Tilt>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;
