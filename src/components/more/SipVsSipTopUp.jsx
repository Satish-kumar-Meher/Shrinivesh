// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Bubbles } from "../../utils/Bubble";
// import clsx from "clsx";
// import { ChevronDown } from "lucide-react";

// const dropdownOptions = {
//   annualTopUp: [5, 10, 15, 20, 25, 50],
//   period: [5, 10, 15, 20, 25, 30],
//   returns: [7, 10, 11, 12, 15],
// };

// const SIPvsSIPTopUp = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);
//   const neonBorder = darkMode ? "#10e2ea" : "#0e6371";
//   const textColor = darkMode ? "text-white" : "text-black";

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const glassBg = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/60 to-[#0b1925]/40"
//     : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/50";

//   const [form, setForm] = useState({
//     sipAmount: 10000,
//     period: 30,
//     annualTopUp: 10,
//     topUpAmount: 0,
//     returns: 12,
//   });

//   const handleChange = (field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const calculateSIP = () => {
//     const { sipAmount, period, annualTopUp, returns } = form;
//     const months = period * 12;
//     const r = returns / 100 / 12;

//     // Without Top-Up
//     const fvWithoutTopUp =
//       sipAmount * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
//     const investedWithoutTopUp = sipAmount * months;

//     // With Top-Up
//     let investedWithTopUp = 0;
//     let fvWithTopUp = 0;
//     for (let year = 1; year <= period; year++) {
//       const yearlySIP = sipAmount * Math.pow(1 + annualTopUp / 100, year - 1);
//       investedWithTopUp += yearlySIP * 12;
//       const n = (period - year + 1) * 12;
//       const fvYear = yearlySIP * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
//       fvWithTopUp += fvYear;
//     }

//     return {
//       investedWithoutTopUp,
//       fvWithoutTopUp,
//       investedWithTopUp,
//       fvWithTopUp,
//     };
//   };

//   const results = calculateSIP();

//   const format = (val) =>
//     `₹ ${Math.round(val).toLocaleString("en-IN")}`;

//   return (
//     <div className={`relative w-full py-16 px-4 md:px-20 ${bgGradient}`}>
//       <Bubbles darkMode={darkMode} />
//       <div
//         className={clsx(
//           "rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-lg",
//           glassBg,
//           textColor
//         )}
//         style={{
//           borderColor: neonBorder,
//           boxShadow: `inset 0 0 20px ${neonBorder}55`,
//         }}
//       >
//         {/* Heading Box */}
//         <div
//           className={clsx(
//             "rounded-xl px-6 py-4 mb-6",
//             darkMode
//               ? "bg-gradient-to-br from-[#111827]/90 to-[#0f172a]/90"
//               : "bg-gradient-to-br from-[#e0f7ff]/90 to-[#faffff]/90"
//           )}
//           style={{
//             border: `1px solid ${neonBorder}`,
//             boxShadow: `0 0 15px ${neonBorder}88`,
//             color: darkMode ? "#e0f7ff" : "#0c2d38",
//           }}
//         >
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
//             SIP vs SIP Top-Up Calculator
//           </h1>
//         </div>

//         {/* Inputs */}
//         <div className="grid md:grid-cols-3 gap-4 mb-10">
//           <input
//             type="number"
//             className="rounded-xl px-4 py-2 text-black shadow-md"
//             value={form.sipAmount}
//             onChange={(e) => handleChange("sipAmount", +e.target.value)}
//             placeholder="Monthly SIP Amount"
//           />

//           <select
//             className="rounded-xl px-4 py-2 text-black shadow-md"
//             value={form.period}
//             onChange={(e) => handleChange("period", +e.target.value)}
//           >
//             {dropdownOptions.period.map((p) => (
//               <option key={p} value={p}>{`${p} Years`}</option>
//             ))}
//           </select>

//           <select
//             className="rounded-xl px-4 py-2 text-black shadow-md"
//             value={form.annualTopUp}
//             onChange={(e) => handleChange("annualTopUp", +e.target.value)}
//           >
//             {dropdownOptions.annualTopUp.map((p) => (
//               <option key={p} value={p}>{`${p}% Annual Top-Up`}</option>
//             ))}
//           </select>

//           <input
//             type="number"
//             className="rounded-xl px-4 py-2 text-black shadow-md"
//             value={form.topUpAmount}
//             onChange={(e) => handleChange("topUpAmount", +e.target.value)}
//             placeholder="Top Up Amount (optional)"
//           />

//           <select
//             className="rounded-xl px-4 py-2 text-black shadow-md"
//             value={form.returns}
//             onChange={(e) => handleChange("returns", +e.target.value)}
//           >
//             {dropdownOptions.returns.map((r) => (
//               <option key={r} value={r}>{`${r}% Returns`}</option>
//             ))}
//           </select>
//         </div>

//         {/* Result Table */}
//         <div className="overflow-auto">
//           <table className="w-full text-sm text-center">
//             <thead>
//               <tr>
//                 <th style={{ border: `1px solid ${neonBorder}` }}>
//                   Details
//                 </th>
//                 <th style={{ border: `1px solid ${neonBorder}` }}>Without Top-Up</th>
//                 <th style={{ border: `1px solid ${neonBorder}` }}>With Top-Up</th>
//                 <th style={{ border: `1px solid ${neonBorder}` }}>Difference</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>
//                   Monthly SIP Amount
//                 </td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{format(form.sipAmount)}</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{format(form.sipAmount)}</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>-</td>
//               </tr>
//               <tr>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>
//                   Annual Top-Up %
//                 </td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>-</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{form.annualTopUp}%</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>-</td>
//               </tr>
//               <tr>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>Investment Period</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{form.period} Years</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{form.period} Years</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>-</td>
//               </tr>
//               <tr>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>Assumed Return</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{form.returns}%</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{form.returns}%</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>-</td>
//               </tr>
//               <tr>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>Total Invested</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{format(results.investedWithoutTopUp)}</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{format(results.investedWithTopUp)}</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>
//                   {format(results.investedWithTopUp - results.investedWithoutTopUp)}
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>Final Value</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{format(results.fvWithoutTopUp)}</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>{format(results.fvWithTopUp)}</td>
//                 <td style={{ border: `1px solid ${neonBorder}` }}>
//                   {format(results.fvWithTopUp - results.fvWithoutTopUp)}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SIPvsSIPTopUp;







import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { Bubbles } from "../../utils/Bubble";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";



const periodOptions = [5, 10, 15, 20, 25, 30];
const topUpOptions = [5, 10, 15, 20, 25, 50];
const returnOptions = [7, 10, 11, 12, 15];

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const toggle = () => setIsOpen(!isOpen);
  const select = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  const bg = darkMode ? "bg-[#1e2b3a]" : "bg-white";
  const border = darkMode ? "border-[#10e2ea]" : "border-[#007d9c]";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <div className={`relative ${bg} ${border} border rounded-xl w-full`}>
      <button
        onClick={toggle}
        className={`w-full text-left px-4 py-2 flex justify-between items-center ${textColor}`}
      >
        <span>{value}</span>
        <ChevronDown className="h-4 w-4 opacity-80" />
      </button>
      {isOpen && (
        <ul
          className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${bg} ${textColor}`}
        >
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => select(opt)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-500/20"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SIPvsSIPTopUp = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [monthlySIP, setMonthlySIP] = useState(10000);
  const [annualTopUp, setAnnualTopUp] = useState(10);
  const [returns, setReturns] = useState(12);
  const [period, setPeriod] = useState(30);
  const [topUpAmount, setTopUpAmount] = useState(0);

  const neonBorder = darkMode ? "#10e2ea" : "#007d9c";
  const accentColor = darkMode ? "#10e2ea" : "#007d9c";
  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";
  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/60 to-[#0b1925]/40"
    : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/50";
  const textColor = darkMode ? "text-white" : "text-black";

  const calcSIPWithoutTopUp = () => {
    const n = period * 12;
    const r = returns / 100 / 12;
    const FV = monthlySIP * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    return Math.round(FV);
  };

  const calcSIPWithTopUp = () => {
    const r = returns / 100;
    let futureValue = 0;
    let invested = 0;
    let sip = monthlySIP;

    for (let y = 1; y <= period; y++) {
      let annualSip = sip * 12;
      invested += annualSip;
      futureValue += annualSip * Math.pow(1 + r, period - y);
      sip += topUpAmount > 0 ? topUpAmount : (sip * annualTopUp) / 100;
    }

    return { futureValue: Math.round(futureValue), invested };
  };



  const withoutTopUpFV = calcSIPWithoutTopUp();
  const withTopUpData = calcSIPWithTopUp();


  const generateChartData = () => {
  const r = returns / 100;
  const data = [];
  let sip = monthlySIP;
  let topUpSip = monthlySIP;
  let sipInvested = 0;
  let sipFV = 0;
  let topUpInvested = 0;
  let topUpFV = 0;

  for (let year = 1; year <= period; year++) {
    // Without Top-up
    sipInvested += sip * 12;
    sipFV += sip * 12 * Math.pow(1 + r, period - year);

    // With Top-up
    topUpInvested += topUpSip * 12;
    topUpFV += topUpSip * 12 * Math.pow(1 + r, period - year);

    data.push({
      year: new Date().getFullYear() - period + year,
      sipInvestment: Math.round(sipInvested),
      sipGrowth: Math.round(sipFV),
      topUpInvestment: Math.round(topUpInvested),
      topUpGrowth: Math.round(topUpFV),
    });

    topUpSip += topUpAmount > 0 ? topUpAmount : (topUpSip * annualTopUp) / 100;
  }

  return data;
};


  return (
    <div className={`relative w-full py-16 px-4 md:px-20 ${bgGradient}`}>
      <Bubbles darkMode={darkMode} />
      <div
        className={clsx(
          "rounded-2xl p-6 shadow-xl backdrop-blur-xl",
          glassBg,
          textColor
        )}
        style={{
          border: `1px solid ${neonBorder}`,
          boxShadow: `inset 0 0 20px ${neonBorder}55`,
        }}
      >
        {/* Heading */}
        <div
          className={clsx(
            "rounded-xl px-6 py-5 mb-6 shadow-lg backdrop-blur-lg",
            darkMode
              ? "bg-gradient-to-br from-[#111827]/90 to-[#0f172a]/90"
              : "bg-gradient-to-br from-[#e0f7ff]/90 to-[#faffff]/90"
          )}
          style={{
            border: `1px solid ${neonBorder}`,
            boxShadow: `0 0 15px ${neonBorder}88`,
            color: accentColor,
          }}
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-1">
            SIP vs SIP Top Up
          </h1>
          <p className="text-base md:text-lg font-medium opacity-85">
            Compare growth of SIP with and without Top-Up
          </p>
        </div>

        {/* Inputs */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Monthly SIP amount (₹)</label>
            <input
              type="number"
              value={monthlySIP}
              onChange={(e) => setMonthlySIP(Number(e.target.value))}
              className={`rounded-xl px-4 py-2 ${textColor}`}
               style={{ border: `1px solid ${neonBorder}` }}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Period (Years)</label>
            <CustomDropdown
              options={periodOptions}
              value={`${period} Years`}
              onChange={(val) => setPeriod(Number(val))}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Assumed Annual Returns (%)</label>
            <CustomDropdown
              options={returnOptions.map((r) => `${r}%`)}
              value={`${returns}%`}
              onChange={(val) => setReturns(Number(val.replace("%", "")))}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Annual Top Up (%)</label>
            <CustomDropdown
              options={topUpOptions.map((r) => `${r}%`)}
              value={`${annualTopUp}%`}
              onChange={(val) => setAnnualTopUp(Number(val.replace("%", "")))}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Annual Top Up Amount (₹)</label>
            <input
              type="number"
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(Number(e.target.value))}
              className={`rounded-xl px-4  py-2 ${textColor}`}
              style={{ border: `1px solid ${neonBorder}` }}
            />
          </div>
        </div>

        {/* Result Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse text-sm text-center">
            <thead>
              <tr className="font-semibold text-base">
                {["Parameter", "SIP without Top Up", "SIP with Top Up", "Difference"].map((head) => (
                  <th
                    key={head}
                    style={{
                      border: `1px solid ${neonBorder}`,
                      padding: "18px",
                      color: accentColor,
                    }}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly SIP Amount", `₹${monthlySIP.toLocaleString()}`, `₹${monthlySIP.toLocaleString()}`, "-"],
                ["Annual Top Up (%) / Amount", "-", topUpAmount > 0 ? `₹${topUpAmount}` : `${annualTopUp}%`, "-"],
                ["Period of Investment", `${period} Years`, `${period} Years`, "-"],
                ["Assumed Returns (%)", `${returns}%`, `${returns}%`, "-"],
                ["Total Invested", `₹${(monthlySIP * period * 12).toLocaleString()}`, `₹${Math.round(withTopUpData.invested).toLocaleString()}`, `₹${(Math.round(withTopUpData.invested) - (monthlySIP * period * 12)).toLocaleString()}`],
                ["Value at End of Period", `₹${withoutTopUpFV.toLocaleString()}`, `₹${withTopUpData.futureValue.toLocaleString()}`, `₹${(withTopUpData.futureValue - withoutTopUpFV).toLocaleString()}`],
              ].map(([label, a, b, c], i) => (
                <tr key={i} className="hover:bg-white/10 transition-all text-base" style={{ height: "64px" }}>
                  <td style={{ border: `1px solid ${neonBorder}` }}>{label}</td>
                  <td style={{ border: `1px solid ${neonBorder}` }}>{a}</td>
                  <td style={{ border: `1px solid ${neonBorder}` }}>{b}</td>
                  <td style={{ border: `1px solid ${neonBorder}` }}>{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-center text-gray-400 mt-6 italic">
          Calculations are based on assumed returns and may vary in real-world market conditions.
        </p>
      </div>


      {/* Dynamic SIP Growth Graph */}
<div
  className={`mt-12 p-4 md:p-6 rounded-2xl shadow-xl backdrop-blur-xl ${glassBg}`}
  style={{
    border: `1px solid ${neonBorder}`,
    boxShadow: `inset 0 0 20px ${neonBorder}55`,
  }}
>
  <h2
    className="text-xl md:text-2xl font-semibold mb-4 text-center"
    style={{ color: accentColor }}
  >
    SIP with Annual Top-up of {topUpAmount > 0 ? `₹${topUpAmount}` : `${annualTopUp}%`}
  </h2>

  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={generateChartData()}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="sipColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={accentColor} stopOpacity={0.8} />
          <stop offset="95%" stopColor={accentColor} stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#2e2e2e" : "#ccc"} />
      {/* <XAxis dataKey="year" stroke={textColor} />
      <YAxis stroke={textColor}  tickFormatter={(v) => `₹${(v / 1e5).toFixed(0)}L`} /> */}
      <XAxis
        dataKey="year"
         stroke={darkMode ? "#ffffff" : "#000000"}
        tick={{ fill: darkMode ? "#ffffff" : "#000000" }}
        />
        <YAxis
        stroke={darkMode ? "#ffffff" : "#000000"}
        tick={{ fill: darkMode ? "#ffffff" : "#000000" }}
        tickFormatter={(v) => `₹${(v / 1e5).toFixed(0)}L`}
        />
      <Tooltip
        formatter={(val) => `₹${val.toLocaleString()}`}
        contentStyle={{
          backgroundColor: darkMode ? "#1f2937" : "#f9fafb",
          border: `1px solid ${accentColor}`,
          borderRadius: "10px",
        }}
        labelStyle={{ color: accentColor }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="sipInvestment"
        stroke="#00bcd4"
        strokeWidth={2}
        dot={false}
        name="SIP Investment"
      />
      <Line
        type="monotone"
        dataKey="sipGrowth"
        stroke="#4caf50"
        strokeWidth={2}
        dot={false}
        name="SIP Growth"
      />
      <Line
        type="monotone"
        dataKey="topUpInvestment"
        stroke="#ff9800"
        strokeWidth={2}
        dot={false}
        name="SIP Top Up Investment"
      />
      <Line
        type="monotone"
        dataKey="topUpGrowth"
        stroke="#d0b3ff"
        strokeWidth={2}
        dot={false}
        name="SIP Top Up Growth"
      />
    </LineChart>
  </ResponsiveContainer>
</div>

    </div>

    
  );
};

export default SIPvsSIPTopUp;
