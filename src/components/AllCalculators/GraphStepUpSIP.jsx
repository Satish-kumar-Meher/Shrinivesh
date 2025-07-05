import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Bubbles } from "../../utils/Bubble";
import SEO from "../../utils/SEO";

const GraphStepUpSIP = ({ sipAmount, stepUpPercent, rate, years }) => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const r = rate / 100 / 12; // Monthly interest rate
  const yearlyData = [];

  for (let year = 1; year <= years; year++) {
    let totalInvestment = 0;
    let totalMaturity = 0;

    for (let i = 1; i <= year; i++) {
      const currentSIP = sipAmount * Math.pow(1 + stepUpPercent / 100, i - 1);

      for (let m = 0; m < 12; m++) {
        const monthsRemaining = (year - i) * 12 + (12 - m);
        const fv = currentSIP * Math.pow(1 + r, monthsRemaining);
        totalMaturity += fv;
      }

      totalInvestment += currentSIP * 12;
    }

    yearlyData.push({
      year: `${year}`,
      investment: Math.round(totalInvestment),
      returns: Math.round(totalMaturity - totalInvestment),
      maturity: Math.round(totalMaturity),
    });
  }

  // Styling variables
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

  const labelColor = darkMode ? "text-white" : "text-black";
  const tableTextColor = darkMode ? "text-gray-300" : "text-gray-800";
  const headingColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const tableTextMaturityColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const tableTextReturnColor = darkMode ? "text-green-500" : "text-green-700";

  return (
    <section className={`relative mt-16 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}>
      <SEO tittle={"StepUp sip Graph Page"} description={"This is the StepUp sip Graph page"} />
      <Bubbles darkMode={darkMode} />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-6 md:p-10 border ${cardGlass} ${innerGlow} ${outerGlow} transition-transform hover:scale-[1.01] ${
            darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${headingColor}`}>Yearly Return Summary</h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Bar Chart */}
            <div className="w-full ml-2 h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                  <XAxis dataKey="year" stroke={darkMode ? "#ffffff" : "#333333"} />
                  <YAxis
                    stroke={darkMode ? "#ffffff" : "#333333"}
                    tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? "#0e1824" : "#ffffff",
                      borderColor: darkMode ? "#10e2ea" : "#0e6371",
                    }}
                    labelStyle={{ color: darkMode ? "#10e2ea" : "#0e6371" }}
                    itemStyle={{ color: darkMode ? "#ffffff" : "#000000" }}
                    formatter={(value) => `₹ ${value.toLocaleString("en-IN")}`}
                  />
                  <Bar dataKey="investment" fill="#0e6371" name="Investment" />
                  <Bar dataKey="returns" fill="#10e2ea" name="Returns" />
                </BarChart>
              </ResponsiveContainer>

              <div className="flex justify-center gap-8 text-sm font-medium mt-3">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#0e6371]" />
                  <span className={labelColor}>Total Investment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#10e2ea]" />
                  <span className={labelColor}>Returns</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-auto max-h-[400px]">
              <table className="min-w-full text-sm text-left border-collapse">
                <thead>
                  <tr className={`${labelColor} border-b ${darkMode ? "border-[#10e2ea]/30" : "border-[#0e6371]/20"}`}>
                    <th className="px-4 py-2 font-semibold">Year</th>
                    <th className="px-4 py-2 font-semibold">Total Investment</th>
                    <th className="px-4 py-2 font-semibold">Returns</th>
                    <th className="px-4 py-2 font-semibold">Maturity Value</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyData.map((row, index) => (
                    <tr key={index} className="border-b last:border-none border-gray-500/10">
                      <td className={`px-4 py-2 ${tableTextColor}`}>{row.year}</td>
                      <td className={`px-4 py-2 ${tableTextColor}`}>₹ {row.investment.toLocaleString("en-IN")}</td>
                      <td className={`px-4 py-2 ${tableTextReturnColor}`}>₹ {row.returns.toLocaleString("en-IN")}</td>
                      <td className={`px-4 py-2 ${tableTextMaturityColor}`}>₹ {row.maturity.toLocaleString("en-IN")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GraphStepUpSIP;
