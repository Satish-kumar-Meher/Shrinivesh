import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const DisclaimerAndDisclosures = () => {
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
    <section className={`relative mt-15 z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
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

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.02]`}>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center ${highlight}`}>🔒 Disclaimer & Disclosures</h2>
          <p className={`text-sm sm:text-base mb-2 ${textColor}`}>Effective Date: July 7, 2025</p>
          <p className={`text-sm sm:text-base mb-6 ${textColor}`}>Last Updated: July 7, 2025</p>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <div>
              <h4 className={`font-semibold ${highlight}`}>📌 Legal Identity</h4>
              <p className={textColor}>
                Shri Nivesh operates as a registered Mutual Fund Distributor under the Association of Mutual Funds in India (AMFI).<br />
                <strong>ARN:</strong> 312321<br />
                <strong>Category:</strong> Individual ARN Holder<br />
                <strong>Trade Name:</strong> Shri Nivesh<br />
                <strong>Registered Since:</strong> [Insert Year of ARN Allotment]<br />
                Compliant with SEBI, AMFI, and relevant regulatory guidelines.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>💼 Nature of Services</h4>
              <p className={textColor}>
                Shri Nivesh acts purely as a Mutual Fund Distributor and facilitates mutual fund investments through recognized AMFI platforms.<br /><br />
                <strong>We do not offer:</strong><br />
                • Investment advisory services<br />
                • Portfolio management services<br />
                • Stock broking or securities trading<br /><br />
                All investment recommendations, calculators, tools, or illustrations are for informational purposes only and do not constitute financial advice.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>📉 Investment Risk Disclaimer</h4>
              <p className={textColor}>
                All Mutual Fund investments are subject to market risks. Investors should read the scheme-related documents and offer documents carefully before investing.<br /><br />
                • Past performance is not indicative of future returns.<br />
                • NAVs may fluctuate due to market conditions.<br />
                • No guaranteed returns or capital protection.<br /><br />
                <strong>Investors are solely responsible for their investment decisions.</strong>
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>📊 Calculator & Tools Disclaimer</h4>
              <p className={textColor}>
                Any projections or results shown via SIP calculators, retirement tools, or goal planners on this website are for illustration purposes only.<br />
                They are based on assumed rates of return and do not reflect actual performance of any specific scheme.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>🌐 Third-Party Links</h4>
              <p className={textColor}>
                Our website may contain links to external portals such as:<br />
                • AMFI<br />
                • SEBI<br />
                • Mutual Fund houses<br />
                • KYC or Aadhaar portals<br /><br />
                These are provided for user convenience. Shri Nivesh is not responsible for the content or practices of these third-party websites.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>📧 Contact Information</h4>
              <p className={textColor}>
                For any compliance, support, or regulatory concerns, please contact:<br />
                📧 <strong>support@shrinivesh.com</strong><br />
                📞 <strong>+91 9348112495</strong>
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>✅ Important Compliance Notes for Users</h4>
              <p className={textColor}>
                This website is owned and operated under the trade name <strong>Shri Nivesh</strong>.<br />
                All content, logos, and materials are intellectual property of Shri Nivesh.<br />
                Unauthorized copying or redistribution is strictly prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerAndDisclosures;
