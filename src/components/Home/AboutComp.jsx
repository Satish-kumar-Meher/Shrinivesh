
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Bubbles } from "../../utils/Bubble";

const AboutSection = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const navigate = useNavigate()

  // Main background gradient
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  // Glassmorphic background
  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  // Inner glow default (glass look) + outer glow on hover
  // const innerGlow = "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]";
  // const outerHoverGlow = "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]";

const handleNavigation = () => {
  navigate("/about")
}

  // Inner and outer glow colors based on theme
const innerGlow = darkMode
  ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
  : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

const outerHoverGlow = darkMode
  ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
  : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";


  return (
    <section
      className={`relative py-20 px-6 sm:px-10 transition-colors duration-500 ${bgGradient} ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <Bubbles darkMode={darkMode} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Glass Box with Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-xl text-center md:text-left p-8 rounded-3xl backdrop-blur-lg border border-white/10 ${glassBg} ${innerGlow} ${outerHoverGlow} shadow-2xl transition duration-300`}
        >
          <motion.p
            className="mb-2 text-3xl font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: darkMode ? "#efe043" : "#627d32" }}
          >
            About
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Your <span className="text-green-600">Financial Success</span> Is Our
            Priority
          </motion.h2>
          <p className="text-base leading-relaxed mb-6">
           At Shri Nivesh, we believe that financial planning is more than just numbers—it's about people, goals, and meaningful progress. Since 2017, we’ve been on a mission to help individuals and families make smarter financial decisions for a secure future.....
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-4 px-6 py-2 rounded-full font-semibold shadow-md transition ${
              darkMode
                ? "bg-[#10e2ea] hover:bg-[#efe043] text-black shadow-cyan-400/40"
                : "bg-[#0e6371] hover:bg-[#a79811] text-white shadow-cyan-600/30"
            }` 
          }
        onClick={handleNavigation}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <img
            src="https://www.moneysmatter.com/images/about/businessnew.png"
            alt="Piggy bank with growth"
            className="rounded-3xl shadow-xl object-contain w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};



export default AboutSection;
