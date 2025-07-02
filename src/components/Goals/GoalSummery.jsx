import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../../utils/Bubble";

const GoalSummary = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const goal = useSelector((state) => state.goalData.Data);

  const {
    monthlyExpenses = 0,
    retirementCorpus = 0,
    currentSavings = 0,
    futureValue = 0,
    savingYears = 0,
    requiredSIP = 0,
    costToday = 0,
  } = goal;

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const cardGlass = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

  const outerGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

  const textPrimary = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const labelColor = darkMode ? "text-white" : "text-black";
  const subText = darkMode ? "text-gray-300" : "text-gray-700";
  const border = darkMode ? "border-[#10e2ea]" : "border-[#0e6371]";

  const data = [
    {
      label: "Your Current Monthly household Expenses",
      sub: "(in today’s value)",
      value: `₹ ${monthlyExpenses.toLocaleString("en-IN")}`,
    },
    {
      label: "Retirement Corpus Amount",
      sub: "(adjusting for 12% inflation)",
      value: `₹ ${retirementCorpus.toLocaleString("en-IN")}`,
    },
    {
      label: "Your Current Savings Now",
      value: `₹ ${currentSavings.toLocaleString("en-IN")}`,
    },
    {
      label: " Your Targeted Amount (in today's value)",
      value: `₹ ${costToday.toLocaleString("en-IN")}`,
    },

    {
      label: "Future Value of your current Savings",
      value: `₹ ${futureValue.toLocaleString("en-IN")}`,
    },
    {
      label: "Number of Years You Need To Save",
      value: savingYears,
    },
    {
      label: "Monthly SIP Investment Required",
      value: `₹ ${requiredSIP.toLocaleString("en-IN")}`,
    },
  ];
  //   "https://shrinivesh.com/"

  return (
    <section
      className={`relative z-0 pt-15 pb-10 overflow-hidden transition-colors duration-500 ${bgGradient}`}
    >
      <Bubbles darkMode={darkMode} />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-6 md:p-10 border ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.01] ${border}`}
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold text-center mb-10 ${textPrimary}`}
          >
            Goal Summary
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {data
              .filter((item) => item.value !== "₹ 0")
              .map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl px-6 py-6 border text-center ${cardGlass} ${border} ${innerGlow} ${outerGlow}`}
                >
                  <p className={`text-lg font-semibold mb-1 ${labelColor}`}>
                    {item.value}
                  </p>
                  <p className={`text-sm font-medium ${subText}`}>
                    {item.label}
                    {item.sub && (
                      <span className="block text-xs mt-1">{item.sub}</span>
                    )}
                  </p>
                </div>
              ))}
          </div>
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
            {/* Existing Client Box */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`transition-all cursor-pointer px-6 py-6 rounded-xl border text-center w-full md:w-[340px] ${
                darkMode
                  ? "bg-[#10e2ea]/30 border-[#10e2ea]/30 text-white hover:bg-[#10e2ea]/20"
                  : "bg-[#0e6371]/80 border-[#0e6371]/20 text-white hover:bg-[#d7f9ff] hover:text-[#0e6371]/80"
              } shadow-lg ${innerGlow} ${outerGlow}`}
            >
              <p className="text-lg font-semibold mb-2">
                Are you an existing client?
              </p>
              <p className="text-sm font-medium">
                If yes, please click here and map your existing <br />{" "}
                investments to this goal
              </p>
            </motion.div>

            {/* New Client Box */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`transition-all cursor-pointer px-6 py-6 rounded-xl border text-center w-full md:w-[340px] ${
                darkMode
                  ? "bg-transparent  text-white hover:bg-[#10e2ea]/10"
                  : "bg-transparent  text-[#0e6371] hover:bg-[#e5faff]"
              } shadow-lg ${border} ${innerGlow} ${outerGlow}`}
            >
              <p className="text-lg font-semibold mb-2">
                No, I do not have investments with you
              </p>
              <p className="text-sm font-medium">
                Take me to the plan without mapping any <br /> existing
                investments
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoalSummary;
