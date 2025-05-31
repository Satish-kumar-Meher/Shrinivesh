
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
});

const investments = [
  { label: 'Bank', rate: 3 },
  { label: 'Fixed Deposit', rate: 6 },
  { label: 'Gold', rate: 9 },
  { label: 'Sensex', rate: 11 },
  { label: 'Mutual Fund', rate: 15 },
];

const calculateReturns = (monthly, rate, years = 25) => {
  const months = years * 12;
  const r = rate / 100 / 12;
  return monthly * ((Math.pow(1 + r, months) - 1) / r);
};

export default function InvestmentReturns() {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [amount, setAmount] = useState(5000);

  const handleChange = (value) => {
    const numeric = Math.max(0, Number(value));
    setAmount(numeric);
  };

  const innerGlow = darkMode
    ? "shadow-[inset_0_0_15px_rgba(16,226,234,0.25)]"
    : "shadow-[inset_0_0_15px_rgba(14,99,113,0.2)]";

  const outerGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.35)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.25)]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/50 to-[#0b1925]/30"
    : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/40";

  const textMain = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const textSub = darkMode ? "text-yellow-300" : "text-yellow-700";
  const textAccent = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

  const btnGlass = `rounded-full p-2 ${glassBg} ${innerGlow} border ${darkMode ? "border-[#10e2ea]/30" : "border-[#0e6371]/20"} transition hover:scale-105`;

  return (
    <section className={`relative overflow-hidden z-0 py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-[#0b0d1a]" : "bg-[#f0faff]"}`}>
      {/* Bubbles */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = 6 + i * 6;
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          const bubbleColor = darkMode ? "#10e2ea" : "#0e6371";
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top,
                left,
                backgroundColor: bubbleColor,
                opacity: 0.08,
                boxShadow: `0 0 20px 5px ${bubbleColor}`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          );
        })}
      </motion.div>

      {/* Main Card */}
      <motion.div
        className={`relative z-10 max-w-7xl mx-auto rounded-3xl p-8 md:p-12 border backdrop-blur-xl ${glassBg} ${innerGlow} ${outerGlow}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Heading */}
        <motion.h2
          className={`text-3xl md:text-4xl font-bold text-center mb-6 ${textMain}`}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          How We Work In Your Best Interest
        </motion.h2>

        {/* Input Controls */}
        <div className="flex flex-col items-center gap-4 mb-8 max-w-2xl mx-auto">
          <p className={`text-lg ${textSub}`}>Monthly Investment</p>

          <div className="flex items-center gap-3">
            <button className={btnGlass} onClick={() => handleChange(amount - 500)}>
              <Minus size={18} className={textAccent} />
            </button>

            <input
              type="number"
              className={`w-32 p-2 text-center rounded-xl ${glassBg} ${innerGlow} border ${darkMode ? "text-white border-white/20" : "text-gray-800 border-[#0e6371]/10"} outline-none`}
              value={amount}
              onChange={(e) => handleChange(e.target.value)}
            />

            <button className={btnGlass} onClick={() => handleChange(amount + 500)}>
              <Plus size={18} className={textAccent} />
            </button>
          </div>

          {/* Range slider */}
          <input
            type="range"
            min="1000"
            max="100000"
            step="500"
            value={amount}
            onChange={(e) => handleChange(e.target.value)}
            className={`w-full h-2 rounded-full appearance-none transition-all duration-200
              ${darkMode ? "bg-[#10e2ea]/30 accent-[#10e2ea]" : "bg-[#0e6371]/30 accent-[#0e6371]"}`}
          />

          <div className={`text-md px-4 py-1 rounded-full font-medium ${darkMode ? "bg-white text-[#0e6371]" : "bg-[#0e6371] text-white"}`}>
            ₹ {amount.toLocaleString()} /-
          </div>

          <p className={`text-sm italic text-center ${textSub}`}>
            If you invest ₹{amount.toLocaleString()} monthly, after 25 years you will have accumulated the below returns:
          </p>
        </div>

        {/* Returns Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {investments.map((inv, idx) => {
            const returns = calculateReturns(amount, inv.rate);
            return (
              <motion.div
                key={inv.label}
                className={`rounded-2xl p-4 transition duration-300 hover:scale-105 shadow-xl border backdrop-blur-xl ${glassBg} ${innerGlow} ${outerGlow} ${darkMode ? "text-white border-white/10" : "text-gray-900 border-[#0e6371]/10"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <h3 className="text-center text-sm font-semibold text-amber-600">{inv.label}</h3>
                <p className="text-center text-xl font-bold mt-2">
                  {returns > 9999999
                    ? `₹ ${(returns / 10000000).toFixed(2)}Cr`
                    : `₹ ${(returns / 100000).toFixed(2)}L`}
                </p>
                <div className="mt-4 flex justify-center">
                  <span className="px-4 py-1 bg-emerald-800 text-white text-sm rounded-full shadow">
                    @{inv.rate}% Return
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
