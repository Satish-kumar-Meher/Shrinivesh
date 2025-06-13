import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Bubbles } from "../../utils/Bubble";


const faqs = [
  {
    question: "What are the types of mutual funds?",
    answer:
      "Broadly there are two types of mutual fund categories: Equity & Debt. There are various combinations of these two categories that create hybrid funds.",
  },
  {
    question: "Why are mutual fund investments better than other investment products?",
    answer:
      "Mutual funds offer diversification, professional management, and flexibility — often with lower costs compared to directly managing a portfolio.",
  },
  {
    question: "What is the risk of investing in Mutual Funds?",
    answer:
      "Risks vary based on the fund type. Equity funds carry market risk, while debt funds carry interest rate and credit risks.",
  },
  {
    question: "Are there any tax benefits in mutual funds?",
    answer:
      "Yes. ELSS (Equity Linked Savings Scheme) mutual funds offer tax deductions under Section 80C up to ₹1.5 lakhs per year.",
  },
  {
    question: "Is it a good time to invest in mutual funds?",
    answer:
      "The best time to invest is when you have clear goals and a disciplined SIP strategy. Timing the market isn't necessary for long-term success.",
  },
  {
    question: "What returns can be expected from Equity oriented funds?",
    answer:
      "Returns depend on market performance and fund selection. Historically, equity funds deliver higher returns over the long term.",
  },
  {
    question: "Can I plan to save for my future financial goals using mutual funds?",
    answer:
      "Absolutely. Mutual funds are ideal for long-term goals like retirement, education, and buying a home through disciplined investing.",
  },
];

const MutualFundsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const handleToggle = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0e1525] to-[#081824]"
    : "bg-gradient-to-br from-[#f9fcfe] to-[#dff4ff]";

  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const textColor = darkMode ? "text-white" : "text-black";
  const highlight = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const divider =
    "h-[2px] w-full bg-gradient-to-r from-transparent via-[#10e2ea] to-transparent my-6";

  const glow = darkMode
    ? "shadow-[inset_0_0_10px_rgba(16,226,234,0.2),0_0_20px_rgba(16,226,234,0.1)]"
    : "shadow-[inset_0_0_10px_rgba(14,99,113,0.1),0_0_20px_rgba(14,99,113,0.08)]";

  return (
    <section
      className={`relative z-0 min-h-screen px-4 py-20 sm:px-8 md:px-12 lg:px-20 ${bgGradient} transition-colors duration-500`}
    >
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl font-bold ${textColor}`}
        >
          Frequently Asked <span className={highlight}>Questions</span>
        </motion.h2>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05, type: "spring" }}
            viewport={{ once: true }}
            className={`p-5 rounded-xl backdrop-blur-xl ${cardGlass} border ${glow} ${
              darkMode ? "border-[#10e2ea]/40" : "border-[#0e6371]/30"
            }`}
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className={`text-lg sm:text-xl font-semibold ${textColor}`}>
                {faq.question}
              </h3>
              <span className={highlight}>
                {openIndex === index ? <Minus /> : <Plus />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`overflow-hidden mt-3 text-sm sm:text-base leading-relaxed ${textColor} opacity-90`}
                >
                  <div>{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={divider}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MutualFundsFAQ;
