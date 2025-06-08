



import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Bubbles } from "../../utils/Bubble";
import { useNavigate } from "react-router";

const features = [
  { title: "Verified By Verisign", img: "https://www.moneysmatter.com/images/home/why-us/verification.png" },
  { title: "No Money Can Be Moved", img: "https://www.moneysmatter.com/images/home/why-us/secure-money-2.png" },
  { title: "Password Encryption", img: "https://www.moneysmatter.com/images/home/why-us/password.png" },
  { title: "Bank Level Security", img: "https://www.moneysmatter.com/images/home/why-us/bank-level-security.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

export default function SecureSection() {
  const { mode: darkMode } = useSelector((state) => state.screenMode); // boolean

  const navigate = useNavigate()
  
  const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

  const outerHoverGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";
 const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";
  return (
    <section
      className={`relative overflow-hidden z-0 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${bgGradient}`}
    >
    
      <Bubbles darkMode={darkMode} />

      {/* Glass Card */}
      <div
        className={`mx-auto max-w-7xl ${border} rounded-3xl p-10 text-center backdrop-blur-xl border transition-all duration-300 ${glassBg} ${innerGlow} ${outerHoverGlow} ${
          darkMode ? "border-[#1de0e6]/30" : "border-[#0e6371]/20"
        }`}
      >
        <motion.h2
          className={`text-3xl font-bold ${darkMode ? "text-[#efe043]" : "text-[#627d32]"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reason To Invest With Us
        </motion.h2>

        <h3
          className={`mt-2 text-2xl sm:text-3xl font-bold ${darkMode ? "text-[#10e2ea]" : "text-[#0e6371]"}`}
        >
          Trust Us, Your Savings Are In Safe Hands
        </h3>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-300 hover:scale-[1.03] hover:rotate-[-1deg] ${innerGlow} ${outerHoverGlow} ${
                darkMode
                  ? "bg-[#0d0f16]/70 border border-[#1de0e6]/10"
                  : "bg-white/60 border border-[#0e6371]/10"
              }`}
              variants={itemVariants}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="h-24 w-24 object-contain mb-4"
              />
              <h4
                className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}
              >
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        <p className={`mt-8 max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          We value the trust you place in us—that’s why we are committed to maintaining the highest standards for securing transactions and customer confidentiality.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className={`px-6 py-2 rounded-md ${darkMode ? "bg-[#10e2ea] text-black" : "bg-[#0e6371] text-white"} hover:bg-emerald-700 hover:text-white`}>
            Start Investing with us
          </button>
          <button onClick={() => navigate("/contact")} className="px-6 py-2 rounded-md bg-[#efe043] text-black hover:text-white hover:bg-emerald-900 transition">
            Get Call Back
          </button>
        </div>
      </div>
    </section>
  );
}
