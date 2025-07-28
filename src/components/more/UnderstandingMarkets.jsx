import React, { useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { Bubbles } from "../../utils/Bubble";
import { ChevronDown } from "lucide-react";

const columns = ["1Y", "3Y", "5Y", "7Y", "10Y", "12Y", "15Y"];

const dataNifty = [
    {
      year: "Apr‑1991", value: 372.7,
      cagr: ["242.24%", "46.94%", "21.7%", "11.81%", "16.04%", "14.74%", "12.88%"]
    },
    {
      year: "Apr‑1992", value: 1275.51,
      cagr: ["‑47.37%", "‑7.63%", "‑5.33%", "‑1.13%", "7.23%", "7.40%", "8.24%"]
    },
    {
      year: "Apr‑1993", value: 671.36,
      cagr: ["76.11%", "14.01%", "11.37%", "3.90%", "13.92%", "11.29%", "11.50%"]
    },
    {
      year: "Apr‑1994", value: 1182.33,
      cagr: ["‑14.97%", "‑6.38%", "‑2.10%", "4.41%", "6.55%", "9.08%", "9.59%"]
    },
    {
      year: "Apr‑1995", value: 1005.37,
      cagr: ["‑1.05%", "4.59%", "8.83%", "7.48%", "11.71%", "11.32%", "8.79%"]
    },
    {
      year: "Apr‑1996", value: 994.80,
      cagr: ["‑2.48%", "2.25%", "2.73%", "13.32%", "12.51%", "10.78%", "11.42%"]
    },
    {
      year: "Apr‑1997", value: 970.15,
      cagr: ["18.55%", "16.52%", "3.26%", "14.12%", "12.01%", "11.93%", "12.31%"]
    },
    {
      year: "Apr‑1998", value: 1150.10,
      cagr: ["‑7.53%", "‑0.35%", "‑3.07%", "15.21%", "11.26%", "11.54%", "11.48%"]
    },
    {
      year: "Apr‑1999", value: 1063.45,
      cagr: ["44.32%", "2.31%", "11.34%", "11.15%", "13.08%", "12.72%", "12.98%"]
    },
    {
      year: "Apr‑2000", value: 1534.75,
      cagr: ["‑25.84%", "‑13.76%", "6.14%", "13.17%", "12.16%", "8.78%", "11.47%"]
    },
    {
      year: "Apr‑2001", value: 1138.10,
      cagr: ["0.07%", "16.93%", "25.00%", "17.74%", "13.61%", "13.71%", ""]
    },
    {
      year: "Apr‑2002", value: 1138.95,
      cagr: ["‑13.58%", "21.99%", "26.11%", "16.66%", "14.98%", "14.69%", ""]
    },
    {
      year: "Apr‑2003", value: 984.30,
      cagr: ["84.87%", "52.24%", "36.94%", "19.20%", "16.88%", "15.44%", ""]
    },
    {
      year: "Apr‑2004", value: 1819.65,
      cagr: ["13.63%", "25.93%", "10.96%", "13.96%", "13.19%", "13.39%", ""]
    },
    {
      year: "Apr‑2005", value: 2067.65,
      cagr: ["67.98%", "31.85%", "20.67%", "15.30%", "9.67%", "12.84%", ""]
    },
    {
      year: "Apr‑2006", value: 3473.30,
      cagr: ["4.62%", "‑4.13%", "10.90%", "8.30%", "10.18%", "", ""]
    },
    {
      year: "Apr‑2007", value: 3633.60,
      cagr: ["30.44%", "13.34%", "7.91%", "9.78%", "11.12%", "", ""]
    },
    {
      year: "Apr‑2008", value: 4739.55,
      cagr: ["‑35.43%", "7.12%", "3.76%", "7.98%", "9.06%", "", ""]
    },
    {
      year: "Apr‑2009", value: 3060.35,
      cagr: ["72.87%", "20.22%", "17.04%", "14.32%", "14.21%", "", ""]
    },
    {
      year: "Apr‑2010", value: 5290.50,
      cagr: ["10.12%", "2.52%", "10.17%", "4.55%", "10.35%", "", ""]
    },
    {
      year: "Apr‑2011", value: 5826.05,
      cagr: ["‑8.72%", "4.88%", "5.77%", "9.82%", "", "", ""]
    },
    {
      year: "Apr‑2012", value: 5317.90,
      cagr: ["7.20%", "17.32%", "11.68%", "12.76%", "", "", ""]
    },
    {
      year: "Apr‑2013", value: 5700.85,
      cagr: ["17.90%", "10.60%", "12.37%", "11.80%", "", "", ""]
    },
    {
      year: "Apr‑2014", value: 6721.05,
      cagr: ["27.75%", "11.18%", "11.67%", "12.82%", "", "", ""]
    },
    {
      year: "Apr‑2015", value: 8586.25,
      cagr: ["‑10.17%", "5.95%", "‑0.79%", "10.43%", "", "", ""]
    },
    {
      year: "Apr‑2016", value: 7713.05,
      cagr: ["19.77%", "14.80%", "14.03%", "", "", "", ""]
    },
    {
      year: "Apr‑2017", value: 9237.85,
      cagr: ["10.54%", "‑3.68%", "13.85%", "", "", "", ""]
    },
    {
      year: "Apr‑2018", value: 10211.80,
      cagr: ["14.27%", "13.34%", "11.24%", "", "", "", ""]
    },
    {
      year: "Apr‑2019", value: 11669.15,
      cagr: ["‑29.27%", "14.83%", "13.99%", "", "", "", ""]
    },
    {
      year: "Apr‑2020", value: 8253.80,
      cagr: ["80.13%", "28.22%", "22.92%", "", "", "", ""]
    },
    {
      year: "Apr‑2021", value: 14867.35,
      cagr: ["18.85%", "14.75%", "", "", "", "", ""]
    },
    {
      year: "Apr‑2022", value: 17670.45,
      cagr: ["‑1.54%", "9.45%", "", "", "", "", ""]
    },
    {
      year: "Apr‑2023", value: 17398.05,
      cagr: ["29.11%", "", "", "", "", "", ""]
    },
    {
      year: "Apr‑2024", value: 22462.00,
      cagr: ["3.13%", "", "", "", "", "", ""]
    },
    {
      year: "Apr‑2025", value: 23165.70,
      cagr: ["", "", "", "", "", "", ""]
    },
    {
      year: "Probability of Gain", value: "", cagr: ["22/34", "26/32", "26/30", "24/25", "20/20", "15/15", "10/10"]
    },
    { year: "Average", value: "", cagr: ["20.49%", "12.13%", "11.37%", "11.15%", "11.99%", "11.98%", "11.07%"] },
    { year: "Maximum", value: "", cagr: ["242.24%", "52.24%", "36.94%", "19.20%", "16.88%", "15.44%", "12.98%"] },
    { year: "Minimum", value: "", cagr: ["‑47.37%", "‑13.76%", "‑5.33%", "‑1.13%", "6.55%", "7.40%", "8.24%"] }
  ];

// For now, we'll use same dummy data for Sensex, replace with real later
const dataSensex = [
  {
    year: "Apr‑1979", value: 124.15,
    cagr: ["3.5%", "21.18%", "14.73%", "19.28%", "25.57%", "18.48%", "16.57%"]
  },
  {
    year: "Apr‑1980", value: 128.5,
    cagr: ["35.25%", "18.28%", "22.29%", "19.78%", "24.2%", "20.15%", "17.07%"]
  },
  {
    year: "Apr‑1981", value: 173.79,
    cagr: ["27.12%", "12.4%", "26.4%", "21.25%", "21.85%", "16.31%", "18.28%"]
  },
  {
    year: "Apr‑1982", value: 220.93,
    cagr: ["-3.76%", "16.73%", "18.24%", "34.51%", "20.05%", "14.81%", "17.5%"]
  },
  {
    year: "Apr‑1983", value: 212.63,
    cagr: ["16.06%", "38.16%", "13.31%", "26.78%", "21.55%", "14.3%", "18.75%"]
  },
  {
    year: "Apr‑1984", value: 246.65,
    cagr: ["5.17%", "17.57%", "15.74%", "17.96%", "19.93%", "14.74%", "18.67%"]
  },
  {
    year: "Apr‑1985", value: 259.42,
    cagr: ["25.44%", "20.65%", "18.45%", "16.4%", "18.06%", "14.24%", "18.47%"]
  },
  {
    year: "Apr‑1986", value: 325.51,
    cagr: ["6.49%", "14.88%", "19.86%", "18.89%", "17.79%", "13.86%", "18.13%"]
  },
  {
    year: "Apr‑1987", value: 346.67,
    cagr: ["26.86%", "15.93%", "21.83%", "20.08%", "17.45%", "13.74%", "17.99%"]
  },
  {
    year: "Apr‑1988", value: 439.89,
    cagr: ["37.23%", "16.46%", "24.09%", "21.42%", "16.9%", "13.57%", "17.74%"]
  },
  {
    year: "Apr‑1989", value: 603.91,
    cagr: ["46.36%", "29.18%", "28.29%", "22.98%", "17.44%", "13.65%", "17.77%"]
  },
  {
    year: "Apr‑1990", value: 884.94,
    cagr: ["76.89%", "42.77%", "33.89%", "25.59%", "18.59%", "13.93%", "17.73%"]
  },
  {
    year: "Apr‑1991", value: 1564.18,
    cagr: ["35.96%", "43.28%", "33.5%", "25.53%", "18.83%", "14.29%", "17.63%"]
  },
  {
    year: "Apr‑1992", value: 2125.34,
    cagr: ["4.97%", "14.9%", "13.91%", "17.65%", "17.96%", "15.09%", "17.42%"]
  },
  {
    year: "Apr‑1993", value: 2230.36,
    cagr: ["19.76%", "12.94%", "12.62%", "16.95%", "17.65%", "14.91%", "17.27%"]
  },
  {
    year: "Apr‑1994", value: 2670.47,
    cagr: ["-13.42%", "5.56%", "10.42%", "13.41%", "15.28%", "14.05%", "17.04%"]
  },
  {
    year: "Apr‑1995", value: 2312.71,
    cagr: ["2.67%", "4.25%", "7.71%", "11.02%", "13.44%", "13.25%", "16.89%"]
  },
  {
    year: "Apr‑1996", value: 2374.95,
    cagr: ["1.99%", "7.62%", "7.38%", "10.64%", "12.75%", "12.52%", "16.58%"]
  },
  {
    year: "Apr‑1997", value: 2422.94,
    cagr: ["-14.44%", "2.88%", "6.32%", "9.36%", "11.73%", "12.21%", "16.37%"]
  },
  {
    year: "Apr‑1998", value: 2072.03,
    cagr: ["-4.31%", "1.23%", "6.54%", "8.43%", "11.06%", "11.62%", "16.05%"]
  },
  {
    year: "Apr‑1999", value: 1982.65,
    cagr: ["-8.49%", "3.52%", "5.57%", "7.61%", "10.57%", "11.14%", "15.76%"]
  },
  {
    year: "Apr‑2000", value: 1813.31,
    cagr: ["-11.44%", "2.91%", "3.92%", "6.4%", "9.8%", "10.41%", "15.46%"]
  },
  {
    year: "Apr‑2001", value: 1605.3,
    cagr: ["-3.84%", "2.86%", "3.68%", "5.93%", "9.03%", "9.77%", "15.1%"]
  },
  {
    year: "Apr‑2002", value: 1542.47,
    cagr: ["3.44%", "6.21%", "6.31%", "6.99%", "8.93%", "9.74%", "14.8%"]
  },
  {
    year: "Apr‑2003", value: 1595.56,
    cagr: ["83.38%", "43.89%", "23.5%", "11.29%", "9.13%", "9.94%", "14.37%"]
  },
  {
    year: "Apr‑2004", value: 2926.33,
    cagr: ["14.32%", "26.83%", "17.7%", "12.47%", "9.39%", "9.73%", "14.07%"]
  },
  {
    year: "Apr‑2005", value: 3343.39,
    cagr: ["73.73%", "40.93%", "27.48%", "15.97%", "11.63%", "11.26%", "13.84%"]
  },
  {
    year: "Apr‑2006", value: 5810.65,
    cagr: ["19.45%", "27.94%", "19.3%", "13.64%", "10.91%", "10.68%", "13.56%"]
  },
  {
    year: "Apr‑2007", value: 6940.36,
    cagr: ["17.35%", "28.4%", "17.89%", "13.23%", "10.74%", "10.7%", "13.41%"]
  },
  {
    year: "Apr‑2008", value: 8145.37,
    cagr: ["-23.89%", "6.25%", "3.87%", "8.73%", "9.45%", "9.94%", "13.13%"]
  },
  {
    year: "Apr‑2009", value: 6201.73,
    cagr: ["81.03%", "18.56%", "9.1%", "9.98%", "9.96%", "10.41%", "13.12%"]
  },
  {
    year: "Apr‑2010", value: 11226.89,
    cagr: ["8.42%", "7.17%", "7.68%", "9.67%", "9.88%", "10.42%", "12.91%"]
  },
  {
    year: "Apr‑2011", value: 12170.6,
    cagr: ["-10.48%", "6.28%", "5.5%", "8.86%", "9.88%", "10.76%", "12.86%"]
  },
  {
    year: "Apr‑2012", value: 10897.25,
    cagr: ["7.65%", "5.38%", "7.5%", "8.71%", "10.08%", "11.1%", "12.79%"]
  },
  {
    year: "Apr‑2013", value: 11730.73,
    cagr: ["17.31%", "10.9%", "9.27%", "9.67%", "10.43%", "11.57%", "12.76%"]
  },
  {
    year: "Apr‑2014", value: 13767.45,
    cagr: ["24.89%", "13.28%", "8.41%", "9.32%", "10.12%", "11.47%", "12.77%"]
  },
  {
    year: "Apr‑2015", value: 17186.84,
    cagr: ["-9.34%", "5.92%", "6.88%", "8.56%", "9.97%", "11.39%", "12.67%"]
  },
  {
    year: "Apr‑2016", value: 15584.64,
    cagr: ["15.52%", "9.18%", "9.09%", "9.75%", "11.07%", "12.26%", ""]
  },
  {
    year: "Apr‑2017", value: 17998.33,
    cagr: ["11.52%", "9.21%", "8.6%", "10.57%", "11.44%", "", ""]
  },
  {
    year: "Apr‑2018", value: 20065.58,
    cagr: ["14.01%", "9.1%", "8.28%", "10.42%", "", "", ""]
  },
  {
    year: "Apr‑2019", value: 22872.29,
    cagr: ["-13.55%", "7.23%", "7.57%", "", "", "", ""]
  },
  {
    year: "Apr‑2020", value: 19775.44,
    cagr: ["67.33%", "23.47%", "", "", "", "", ""]
  },
  {
    year: "Apr‑2021", value: 33092.87,
    cagr: ["21.17%", "13.79%", "", "", "", "", ""]
  },
  {
    year: "Apr‑2022", value: 40107.21,
    cagr: ["5.45%", "", "", "", "", "", ""]
  },
  {
    year: "Apr‑2023", value: 42385.35,
    cagr: ["2.72%", "", "", "", "", "", ""]
  },
  {
    year: "Apr‑2024", value: 74014.55,
    cagr: ["", "", "", "", "", "", ""]
  },
  {
    year: "Apr‑2025", value: 76024.51,
    cagr: ["", "", "", "", "", "", ""]
  },
  {
    year: "Probability of Gain", value: "", cagr: ["32/46", "37/44", "38/41", "36/37", "32/32", "27/27", "22/22"]
  },
  {
    year: "Average", value: "", cagr: ["21.73%", "16.39%", "16.2%", "15.16%", "14.53%", "14.16%", "14.02%"]
  },
  {
    year: "Maximum", value: "", cagr: ["258.99%", "80.9%", "53.03%", "34.51%", "25.57%", "20.16%", "18.75%"]
  },
  {
    year: "Minimum", value: "", cagr: ["-46.78%", "-15.2%", "-4.94%", "-2%", "6.63%", "7.28%", "8.08%"]
  }
];


const UnderstandingMarket = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // 0: Nifty, 1: Sensex

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/60 to-[#0b1925]/40"
    : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/50";

  const neonBorder = darkMode ? "#10e2ea" : "#0e6371";
  const textColor = darkMode ? "text-white" : "text-black";

  const dataToRender = selectedIndex === 0 ? dataNifty : dataSensex;
  const labelToRender = selectedIndex === 0 ? "CNX NIFTY" : "BSE SENSEX";

//   const renderTable = () => (
//     <table className="w-full border-collapse text-sm md:text-xs text-center">
//       <thead>
//         <tr>
//           <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
//             YEAR
//           </th>
//           <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
//             {labelToRender.toUpperCase()} LEVEL
//           </th>
//           <th className="p-2 font-semibold" colSpan={columns.length} style={{ border: `1px solid ${neonBorder}` }}>
//             CAGR (%)
//           </th>
//         </tr>
//         <tr>
//           {columns.map((label, idx) => (
//             <th key={idx} className="p-2 font-semibold text-[13px]" style={{ border: `1px solid ${neonBorder}` }}>
//               {label}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {dataToRender.map((row, idx) => (
//           <tr
//             key={idx}
//             className={clsx(idx % 2 === 0 ? "bg-white/10" : "bg-white/5", "transition-all hover:bg-white/20")}
//           >
//             <td className="p-2 font-medium text-left pl-4" style={{ border: `1px solid ${neonBorder}` }}>
//               {row.year}
//             </td>
//             <td className="p-2 font-medium" style={{ border: `1px solid ${neonBorder}` }}>
//               {row.value ? row.value.toLocaleString("en-IN") : "-"}
//             </td>
//             {columns.map((_, i) => (
//               <td key={i} className="p-2" style={{ border: `1px solid ${neonBorder}` }}>
//                 {row.cagr[i] || "-"}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );



const renderTable = () => {
  const getBgColor = (val) => {
    if (isNaN(val)) return "transparent";

    const abs = Math.abs(val);
    let alpha = 0;

    if (abs < 5) alpha = 0;         // Neutral
    else if (abs < 10) alpha = 0.2;
    else if (abs < 15) alpha = 0.4;
    else if (abs < 20) alpha = 0.6;
    else if (abs < 30) alpha = 0.75;
    else alpha = 0.9;

    return val > 0
      ? `rgba(0, 255, 0, ${alpha})`    // Green shades
      : `rgba(255, 0, 0, ${alpha})`;   // Red shades
  };

  return (
    <table className="w-full border-collapse text-sm md:text-xs text-center">
      <thead>
        <tr>
          <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
            YEAR
          </th>
          <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
            {labelToRender.toUpperCase()} LEVEL
          </th>
          <th className="p-2 font-semibold" colSpan={columns.length} style={{ border: `1px solid ${neonBorder}` }}>
            CAGR (%)
          </th>
        </tr>
        <tr>
          {columns.map((label, idx) => (
            <th key={idx} className="p-2 font-semibold text-[13px]" style={{ border: `1px solid ${neonBorder}` }}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataToRender.map((row, idx) => (
          <tr
            key={idx}
            className={clsx(idx % 2 === 0 ? "bg-white/10" : "bg-white/5", "transition-all hover:bg-white/20")}
          >
            <td className="p-2 font-medium text-left pl-4" style={{ border: `1px solid ${neonBorder}` }}>
              {row.year}
            </td>
            <td className="p-2 font-medium" style={{ border: `1px solid ${neonBorder}` }}>
              {row.value ? row.value.toLocaleString("en-IN") : "-"}
            </td>
            {columns.map((_, i) => {
              const rawValue = row.cagr[i];
              const parsed = rawValue?.replace("‑", "-").replace("%", "");
              const numericValue = parseFloat(parsed);
              const backgroundColor = getBgColor(numericValue);

              return (
                <td
                  key={i}
                  className="p-2"
                  style={{
                    border: `1px solid ${neonBorder}`,
                    backgroundColor,
                  }}
                >
                  {rawValue || "-"}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};




// const renderTable = () => {
//   const getBgColorAndTextColor = (val) => {
//     if (isNaN(val)) return { backgroundColor: "transparent", textColor: darkMode ? "#fff" : "#000" };

//     const abs = Math.abs(val);
//     let alpha = 0;

//     if (abs < 5) alpha = 0;
//     else if (abs < 10) alpha = 0.2;
//     else if (abs < 15) alpha = 0.4;
//     else if (abs < 20) alpha = 0.6;
//     else if (abs < 30) alpha = 0.75;
//     else alpha = 0.9;

//     let backgroundColor = "";
//     let textColor = "";

//     if (val > 0) {
//       // GREEN for positive values
//       backgroundColor = `rgba(0, 255, 0, ${alpha})`;
//       if (darkMode) {
//         // In dark mode, green bg ⇒ darker text as alpha increases
//         const darkness = Math.round((1 - alpha) * 255);
//         textColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
//       } else {
//         // In light mode, green bg ⇒ keep text black
//         textColor = "#000";
//       }
//     } else {
//       // RED for negative values
//       backgroundColor = `rgba(255, 0, 0, ${alpha})`;
//       if (darkMode) {
//         // In dark mode, red bg ⇒ keep text white
//         textColor = "#fff";
//       } else {
//         // In light mode, red bg ⇒ lighter text as red increases
//         const lightness = Math.round((1 - alpha) * 255);
//         textColor = `rgb(${lightness}, ${lightness}, ${lightness})`;
//       }
//     }

//     return { backgroundColor, textColor };
//   };

//   return (
//     <table className="w-full border-collapse text-sm md:text-xs text-center">
//       <thead>
//         <tr>
//           <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
//             YEAR
//           </th>
//           <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
//             {labelToRender.toUpperCase()} LEVEL
//           </th>
//           <th className="p-2 font-semibold" colSpan={columns.length} style={{ border: `1px solid ${neonBorder}` }}>
//             CAGR (%)
//           </th>
//         </tr>
//         <tr>
//           {columns.map((label, idx) => (
//             <th key={idx} className="p-2 font-semibold text-[13px]" style={{ border: `1px solid ${neonBorder}` }}>
//               {label}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {dataToRender.map((row, idx) => (
//           <tr
//             key={idx}
//             className={clsx(idx % 2 === 0 ? "bg-white/10" : "bg-white/5", "transition-all hover:bg-white/20")}
//           >
//             <td className="p-2 font-medium text-left pl-4" style={{ border: `1px solid ${neonBorder}` }}>
//               {row.year}
//             </td>
//             <td className="p-2 font-medium" style={{ border: `1px solid ${neonBorder}` }}>
//               {row.value ? row.value.toLocaleString("en-IN") : "-"}
//             </td>
//             {columns.map((_, i) => {
//               const rawValue = row.cagr[i];
//               const parsed = rawValue?.replace("‑", "-").replace("%", "");
//               const numericValue = parseFloat(parsed);
//               const { backgroundColor, textColor } = getBgColorAndTextColor(numericValue);

//               return (
//                 <td
//                   key={i}
//                   className="p-2"
//                   style={{
//                     border: `1px solid ${neonBorder}`,
//                     backgroundColor,
//                     color: textColor,
//                     fontWeight: "500",
//                   }}
//                 >
//                   {rawValue || "-"}
//                 </td>
//               );
//             })}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };







  return (
    <div className={`relative w-full py-16 px-4 md:px-20 transition-colors duration-500 ${bgGradient}`}>
      <Bubbles darkMode={darkMode} />
      <div
        className={clsx(
          "overflow-auto rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-lg",
          glassBg,
          textColor
        )}
        style={{
          borderColor: neonBorder,
          boxShadow: `inset 0 0 20px ${neonBorder}55`,
        }}
      >
        <div className="w-[1200px] md:w-full">
          {/* Heading Box */}
          <div
            className={clsx(
              "rounded-t-xl px-4 sm:px-6 py-4 sm:py-5 mb-4 shadow-lg backdrop-blur-lg w-full",
              darkMode
                ? "bg-gradient-to-br from-[#111827]/90 to-[#0f172a]/90"
                : "bg-gradient-to-br from-[#e0f7ff]/90 to-[#faffff]/90"
            )}
            style={{
              border: `1px solid ${neonBorder}`,
              boxShadow: `0 0 15px ${neonBorder}88`,
              color: darkMode ? "#e0f7ff" : "#0c2d38",
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-1">
              Understanding Markets - {labelToRender}
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide opacity-85">
              Historical CAGR based on Nifty Index
            </p>
          </div>

          {/* Custom Dropdown */}
          <div className="relative mb-6 w-[250px]">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={clsx(
                "w-full flex items-center justify-between px-4 py-2 rounded-xl font-medium text-base shadow-md",
                darkMode
                  ? "bg-[#1e293b] text-white"
                  : "bg-[#e6f7ff] text-[#1e293b]"
              )}
              style={{
                border: `1px solid ${neonBorder}`,
                boxShadow: `0 0 10px ${neonBorder}55`,
              }}
            >
              {labelToRender}
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {dropdownOpen && (
              <div
                className={clsx(
                  "absolute z-10 mt-2 w-full rounded-xl shadow-lg overflow-hidden transition-all",
                  darkMode
                    ? "bg-[#1e293b] text-white"
                    : "bg-white text-black"
                )}
                style={{
                  border: `1px solid ${neonBorder}`,
                  boxShadow: `0 0 10px ${neonBorder}55`,
                }}
              >
                {["CNX NIFTY", "BSE SENSEX"].map((label, i) => (
                  <div
                    key={label}
                    onClick={() => {
                      setSelectedIndex(i);
                      setDropdownOpen(false);
                    }}
                    className={clsx(
                      "px-4 py-2 cursor-pointer hover:bg-opacity-20",
                      darkMode ? "hover:bg-white/10" : "hover:bg-black/10"
                    )}
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Table */}
          {renderTable()}

          <p className="mt-4 text-xs text-center italic text-gray-400">
            CAGR values shown are based on historical {labelToRender} index data and may not reflect future returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingMarket;

