import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
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
    <section className={`relative z-0 mt-15 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
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

      <div className={`relative z-10 max-w-5xl mx-auto px-4`}>
        <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.02]`}>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 text-center ${highlight}`}>Terms & Conditions</h2>
          <p className={`text-sm sm:text-base mb-2 ${textColor}`}>Effective Date: July 7, 2025</p>
          <p className={`text-sm sm:text-base mb-6 ${textColor}`}>Last Updated: July 7, 2025</p>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            <p className={textColor}>
              Welcome to Shri Nivesh. By accessing or using our website <strong className={highlight}>www.shrinivesh.com</strong>, you agree to be bound by the following terms and conditions (“Terms”). Please read them carefully before using our services.
            </p>

            <div>
              <h4 className={`font-semibold ${highlight}`}>1. General Information</h4>
              <p className={textColor}>
                Shri Nivesh is an AMFI-registered Mutual Fund Distributor offering investment-related resources and tools. We do not offer portfolio management or advisory services. All mutual fund investments are routed through AMFI-registered mutual fund platforms.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>2. Eligibility</h4>
              <p className={textColor}>
                You must be 18 years of age or older and legally capable of entering into binding contracts under Indian law to access or use our services.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>3. Use of the Website</h4>
              <p className={textColor}>
                You agree to use the website only for lawful purposes and in accordance with applicable laws. You may not use the website to transmit any viruses, malware, or engage in any fraudulent activity.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>4. No Investment Advice</h4>
              <p className={textColor}>
                The information provided on our website is for educational and informational purposes only. It should not be considered as investment advice, financial planning, or a recommendation.
              </p>
              <blockquote className={`italic ${textColor}`}>
                Always consult your financial advisor before making investment decisions.
              </blockquote>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>5. Accuracy of Information</h4>
              <p className={textColor}>
                While we strive to ensure all information is up-to-date and accurate, Shri Nivesh does not guarantee the completeness, reliability, or suitability of the information displayed on the website.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>6. Third-Party Links</h4>
              <p className={textColor}>
                Our website may contain links to third-party websites like AMFI, SEBI, or mutual fund platforms. We are not responsible for the content, privacy policies, or practices of these websites.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>7. Intellectual Property</h4>
              <p className={textColor}>
                All logos, content, designs, and graphics on this website are the property of Shri Nivesh and are protected under Indian intellectual property laws. Unauthorized use is strictly prohibited.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>8. Limitation of Liability</h4>
              <p className={textColor}>
                Shri Nivesh is not liable for any direct or indirect loss or damage arising from your use of this website, including investment losses or financial decisions based on our tools or content.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>9. Changes to Terms</h4>
              <p className={textColor}>
                We may update or modify these Terms at any time without prior notice. Continued use of our website constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>10. Governing Law</h4>
              <p className={textColor}>
                These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts in Odisha, India.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${highlight}`}>11. Contact Us</h4>
              <p className={textColor}>
                If you have any questions regarding these Terms, please contact:<br />
                📧 <strong>support@shrinivesh.com</strong><br />
                📞 <strong>+91 9348112495</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
