import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../utils/Bubble";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const navigate = useNavigate();

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f9fcfe] to-[#e3f2ff]";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const glow = darkMode
    ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.3),0_0_25px_rgba(16,226,234,0.2)]"
    : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2),0_0_25px_rgba(14,99,113,0.15)]";

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-8 ${bgGradient} transition-colors duration-500 overflow-hidden`}
    >
      <Bubbles darkMode={darkMode} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-xl w-full rounded-3xl p-10 sm:p-14 text-center backdrop-blur-xl border ${
          darkMode ? "border-[#10e2ea]" : "border-[#0e6371]"
        } ${cardGlass} ${glow}`}
      >
        <h1 className={`text-6xl sm:text-7xl font-extrabold mb-4 ${highlight}`}>
          404
        </h1>
        <h2 className={`text-2xl sm:text-3xl font-semibold ${textColor}`}>
          Page Not Found
        </h2>
        <p className={`mt-4 text-base sm:text-lg opacity-80 ${textColor}`}>
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className={`mt-8 px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 ${
            darkMode
              ? "bg-[#10e2ea]/10 text-[#10e2ea] hover:bg-[#10e2ea]/20"
              : "bg-[#0e6371]/10 text-[#0e6371] hover:bg-[#0e6371]/20"
          }`}
        >
          Go Back Home
        </button>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
