import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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

  return (
    <section className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
      {/* Background Bubbles */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-12">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center ${highlight}`}>
          Privacy Policy
        </h2>

        <div className={`rounded-3xl p-6 md:p-10 border ${border} ${cardGlass} ${innerGlow} ${outerGlow} border transition-transform hover:scale-[1.02]`}>
          <div className={`space-y-6 text-sm sm:text-base leading-relaxed ${textColor}`}>
            <p>
              At Shri Nivesh, your privacy and trust are very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>1. Information We Collect</h3>
            <p>
              We may collect your personal details like name, mobile number, email ID, PAN number, and investment preferences when you fill out forms or register with us. We also track website usage through cookies to improve your experience.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>2. How We Use Your Information</h3>
            <ul className="list-disc ml-5">
              <li>Help you with Mutual Fund investments and financial services</li>
              <li>Communicate important updates, newsletters, or offers (only if you opt in)</li>
              <li>Improve website performance and user experience</li>
            </ul>
            <p>We do not sell or rent your personal information to anyone.</p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>3. Data Sharing and Security</h3>
            <p>
              We may share your details only with trusted partners who help us deliver services like investment platforms, email communications, or CRM tools. These partners follow strict confidentiality and data protection standards.
            </p>
            <p>
              We never share your data with any third party without your consent, unless legally required by a court of law or regulatory authority. Your data is stored securely using industry-standard encryption and safety protocols.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>4. Cookies and Tracking Tools</h3>
            <p>
              We use cookies and analytics tools to understand how users interact with our website. This helps us personalize your browsing experience. You can manage or disable cookies through your browser settings.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>5. Communication Policy</h3>
            <p>
              By submitting your contact details, you agree to receive relevant updates via email, SMS, or phone. You can opt out anytime by contacting us or clicking "unsubscribe" in our emails.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>6. Access by Minors</h3>
            <p>
              We believe financial awareness should start early. However, if you are below 15 years of age, please get permission from your parent or guardian before using our website or sharing any personal information.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>7. Your Rights</h3>
            <p>
              You can request to review, correct, or delete your personal data anytime by writing to us. If you feel your data is being misused, please let us know immediately.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>8. Updates to This Policy</h3>
            <p>
              We may update this policy to reflect changes in law or improvements in our services. We recommend checking this page regularly to stay informed.
            </p>

            <h3 className={`text-xl font-semibold ${secTextColor}`}>9. Contact Us</h3>
            <p>
              If you have any questions or concerns about our Privacy Policy, please email us at{" "}
              <span className={highlight}>support@shrinivesh.com</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
