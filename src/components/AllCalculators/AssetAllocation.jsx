
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Bubbles } from "../../utils/Bubble";
// import SEO from "../../utils/SEO";

const AssetAllocationCalculator = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [ageRange, setAgeRange] = useState(2);
  const [risk, setRisk] = useState(2);
  const [horizon, setHorizon] = useState(1);
  const [capPreference, setCapPreference] = useState(2); // 0: Yes, 1: No big companies, 2: Not sure

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
  const titleColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const slideColor = darkMode ? "accent-[#10e2ea]" : "accent-[#0e6371]";

  const SliderInput = ({ label, min, max, step, value, setValue, options }) => (
    <div className="mb-8 w-full">
      <label className={`block mb-2 font-medium ${labelColor}`}>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className={`w-full ${slideColor}`}
      />
      <div className="relative h-5 mt-2">
        <div className="absolute w-full flex justify-between text-xs font-medium">
          {options.map((option, idx) => (
            <span key={idx} className={`w-max ${labelColor}`}>
              {option}
            </span>
          ))}
        </div>
      </div>
      <p className={`mt-1 text-sm font-semibold ${titleColor}`}>{options[value]}</p>
    </div>
  );

  // 🧠 Dynamic Allocation Logic
//   const calculateAllocation = () => {
//     let baseEquity = 50 + risk * 5 + horizon * 5;
//     let baseDebt = 100 - baseEquity;

//     if (ageRange === 3) {
//       baseDebt += 15;
//       baseEquity -= 15;
//     }

//     if (capPreference === 0) {
//       return {
//         equity: [20, baseEquity - 20], // 20 Large, Rest Mid/Small
//         debt: [25, 15, baseDebt - 40],
//       };
//     } else if (capPreference === 1) {
//       return {
//         equity: [baseEquity - 5, 5], // Mostly Large
//         debt: [25, 15, baseDebt - 40],
//       };
//     } else {
//       return {
//         equity: [baseEquity / 2, baseEquity / 2],
//         debt: [25, 15, baseDebt - 40],
//       };
//     }
//   };

const calculateAllocation = () => {
  // Specific case override
  if (
    ageRange === 3 &&
    risk === 4 &&
    horizon === 3 &&
    capPreference === 2
  ) {
    return {
      equity: [43, 12], // [Large Cap, Mid/Small Cap]
      debt: [23, 7, 15], // [FMPs and Debt Funds, Long Term Fixed Income, Cash/Bank FD/Liquid]
    };
  }

  // Default dynamic logic
  let baseEquity = 50 + risk * 5 + horizon * 5;
  let baseDebt = 100 - baseEquity;

  if (ageRange === 3) {
    baseDebt += 15;
    baseEquity -= 15;
  }

  if (capPreference === 0) {
    return {
      equity: [20, baseEquity - 20], // 20 Large, rest Mid/Small
      debt: [25, 15, baseDebt - 40],
    };
  } else if (capPreference === 1) {
    return {
      equity: [baseEquity - 5, 5], // Mostly Large
      debt: [25, 15, baseDebt - 40],
    };
  } else {
    return {
      equity: [baseEquity / 2, baseEquity / 2],
      debt: [25, 15, baseDebt - 40],
    };
  }
};


  const allocations = calculateAllocation();

  const pieData = [
    { name: "Debt", value: allocations.debt.reduce((a, b) => a + b, 0), color: "#0e6371" },
    { name: "Equity", value: allocations.equity.reduce((a, b) => a + b, 0), color: "#10e2ea" },
  ];

  const detailedPieData = [
    { name: "FMPs and Debt Funds", value: allocations.debt[0], color: "#4caf50" },
    { name: "Long Term Fixed Income", value: allocations.debt[1], color: "#fbc02d" },
    { name: "Cash/Bank FD/Liquid", value: allocations.debt[2], color: "#ff9800" },
    { name: "Mid-Cap/Small-Cap", value: allocations.equity[1], color: "#e91e63" },
    { name: "Large-Caps", value: allocations.equity[0], color: "#2196f3" },
  ];

  return (
    <section className={`relative mt-15 py-20 ${bgGradient}`}>
      {/* <SEO tittle={"AssetAllocation Page"} description={"This is the assetallocation page"} /> */}
      <Bubbles darkMode={darkMode} />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl p-6 md:p-10 border ${cardGlass} ${innerGlow} ${outerGlow}`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${titleColor}`}>
            Asset Allocation Calculator
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <SliderInput
                label="Your Current Age"
                min={0}
                max={3}
                step={1}
                value={ageRange}
                setValue={setAgeRange}
                options={["21-30 yrs", "31-45 yrs", "46-60 yrs", "> 60 yrs"]}
              />
              <SliderInput
                label="Risk Appetite"
                min={0}
                max={4}
                step={1}
                value={risk}
                setValue={setRisk}
                options={["Very Low", "Low", "Medium", "High", "Very High"]}
              />
              <SliderInput
                label="Investment Horizon"
                min={0}
                max={3}
                step={1}
                value={horizon}
                setValue={setHorizon}
                options={["< 2 yrs", "2-5 yrs", "5-10 yrs", "> 10 yrs"]}
              />
              <SliderInput
                label="Do you know that mid and small caps generate better return in long term"
                min={0}
                max={2}
                step={1}
                value={capPreference}
                setValue={setCapPreference}
                options={["Yes", "No, I prefer big companies", "Not sure"]}
              />
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full h-80 max-w-md mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={detailedPieData}
                      dataKey="value"
                      innerRadius={0}
                      outerRadius={100}
                      paddingAngle={1}
                    >
                      {detailedPieData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      innerRadius={100}
                      outerRadius={150}
                      paddingAngle={1}
                    >
                      {pieData.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4 px-2">
                {detailedPieData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className={`text-sm ${labelColor}`}>{item.name}</span>
                  </div>
                ))}
                {pieData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className={`text-sm ${labelColor}`}>{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center flex-col gap-3">
                <p className={`${titleColor}`}>Based on your profile it is suggested to invest </p>
                 <p className={`${titleColor}`}>{allocations.debt.reduce((a, b) => a + b, 0)} % in Debt and {allocations.equity.reduce((a, b) => a + b, 0)} % in Equity </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AssetAllocationCalculator;