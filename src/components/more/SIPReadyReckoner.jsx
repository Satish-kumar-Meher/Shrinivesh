import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Bubbles } from "../../utils/Bubble";

const SIPReadyReckoner = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const columns = ["7", "10", "12", "13"];

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const sections1 = [
  {
    tenure: "5 Years",
    data: [
      ["10 Lacs", "13,968", "12,959", "12,331", "12,029"],
      ["25 Lacs", "34,919", "32,397", "30,827", "30,073"],
      ["50 Lacs", "69,838", "64,794", "61,653", "60,145"],
      ["1 Crore", "1,39,675", "1,29,588", "1,23,306", "1,20,290"],
      ["2 Crore", "2,79,350", "2,59,176", "2,46,611", "2,40,580"],
      ["5 Crore", "6,98,375", "6,47,938", "6,16,527", "6,01,449"],
      ["10 Crore", "13,96,749", "12,95,876", "12,33,053", "12,02,897"]
    ]
  },
  {
    tenure: "10 Years",
    data: [
      ["10 Lacs", "5,814", "4,965", "4,465", "4,233"],
      ["25 Lacs", "14,535", "12,411", "11,161", "10,581"],
      ["50 Lacs", "29,070", "24,822", "22,321", "21,161"],
      ["1 Crore", "58,139", "49,644", "44,641", "42,322"],
      ["2 Crore", "1,16,278", "99,287", "89,281", "84,643"],
      ["5 Crore", "2,90,695", "2,48,217", "2,23,201", "2,11,607"],
      ["10 Crore", "5,81,390", "4,96,433", "4,46,402", "4,23,214"]
    ]
  },
  {
    tenure: "15 Years",
    data: [
      ["10 Lacs", "3,197", "2,491", "2,102", "1,929"],
      ["25 Lacs", "7,992", "6,226", "5,254", "4,823"],
      ["50 Lacs", "15,984", "12,452", "10,508", "9,645"],
      ["1 Crore", "31,968", "24,903", "21,015", "19,289"],
      ["2 Crore", "63,936", "49,806", "42,030", "38,577"],
      ["5 Crore", "1,59,838", "1,24,515", "1,05,073", "96,442"],
      ["10 Crore", "3,19,676", "2,49,029", "2,10,146", "1,92,884"]
    ]
  },
  {
    tenure: "20 Years",
    data: [
      ["10 Lacs", "1,960", "1,382", "1,088", "964"],
      ["25 Lacs", "4,900", "3,454", "2,719", "2,408"],
      ["50 Lacs", "9,799", "6,908", "5,437", "4,816"],
      ["1 Crore", "19,597", "13,816", "10,874", "9,632"],
      ["2 Crore", "39,193", "27,631", "21,747", "19,263"],
      ["5 Crore", "97,981", "69,076", "54,368", "48,157"],
      ["10 Crore", "1,95,962", "1,38,152", "1,08,735", "96,314"]
    ]
  },
  {
    tenure: "25 Years",
    data: [
      ["10 Lacs", "1,271", "805", "588", "502"],
      ["25 Lacs", "3,176", "2,012", "1,470", "1,253"],
      ["50 Lacs", "6,352", "4,024", "2,939", "2,506"],
      ["1 Crore", "12,703", "8,047", "5,877", "5,011"],
      ["2 Crore", "25,405", "16,093", "11,753", "10,021"],
      ["5 Crore", "63,511", "40,231", "29,381", "25,051"],
      ["10 Crore", "1,27,021", "80,461", "58,762", "50,101"]
    ]
  },
  {
    tenure: "30 Years",
    data: [
      ["10 Lacs", "851", "482", "325", "266"],
      ["25 Lacs", "2,127", "1,203", "812", "665"],
      ["50 Lacs", "4,253", "2,406", "1,624", "1,330"],
      ["1 Crore", "8,506", "4,811", "3,247", "2,660"],
      ["2 Crore", "17,011", "9,622", "6,494", "5,319"],
      ["5 Crore", "42,528", "24,054", "16,234", "8,881"],
      ["10 Crore", "85,055", "48,108", "32,468", "26,593"]
    ]
  }
];


const sections2 = [
  {
    tenure: "5 Years",
    data: [
      ["1,000", "0.7 L", "0.8 L", "0.8 L", "0.8 L"],
      ["2,000", "1.4 L", "1.5 L", "1.6 L", "1.7 L"],
      ["5,000", "3.6 L", "3.9 L", "4.1 L", "4.2 L"],
      ["10,000", "7.2 L", "7.7 L", "8.1 L", "8.3 L"],
      ["15,000", "10.7 L", "11.6 L", "12.2 L", "12.5 L"],
      ["20,000", "14.3 L", "15.4 L", "16.2 L", "16.6 L"],
      ["25,000", "17.9 L", "19.3 L", "20.3 L", "20.8 L"],
      ["30,000", "21.5 L", "23.2 L", "24.3 L", "24.9 L"],
      ["35,000", "25.1 L", "27.0 L", "28.4 L", "29.1 L"],
      ["40,000", "28.6 L", "30.9 L", "32.4 L", "33.3 L"],
      ["50,000", "35.8 L", "38.6 L", "40.6 L", "41.6 L"]
    ]
  },
  {
    tenure: "10 Years",
    data: [
      ["1,000", "1.7 L", "2.0 L", "2.2 L", "2.4 L"],
      ["2,000", "3.4 L", "4.0 L", "4.5 L", "4.7 L"],
      ["5,000", "8.6 L", "10.1 L", "11.2 L", "11.8 L"],
      ["10,000", "17.2 L", "20.1 L", "22.4 L", "23.6 L"],
      ["15,000", "25.8 L", "30.2 L", "33.6 L", "35.4 L"],
      ["20,000", "34.4 L", "40.3 L", "44.8 L", "47.3 L"],
      ["25,000", "43.0 L", "50.4 L", "56.0 L", "59.1 L"],
      ["30,000", "51.6 L", "60.4 L", "67.2 L", "70.9 L"],
      ["35,000", "60.2 L", "70.5 L", "78.4 L", "82.7 L"],
      ["40,000", "68.8 L", "80.6 L", "89.6 L", "94.5 L"],
      ["50,000", "86.0 L", "100.7 L", "112.0 L", "118.2 L"]
    ]
  },
  {
    tenure: "15 Years",
    data: [
      ["1,000", "3.1 L", "4.0 L", "4.8 L", "5.2 L"],
      ["2,000", "6.3 L", "8.0 L", "9.5 L", "10.4 L"],
      ["5,000", "15.6 L", "20.1 L", "23.8 L", "25.9 L"],
      ["10,000", "31.3 L", "40.2 L", "47.6 L", "51.9 L"],
      ["15,000", "46.9 L", "60.2 L", "71.4 L", "77.8 L"],
      ["20,000", "62.6 L", "80.3 L", "95.2 L", "103.7 L"],
      ["25,000", "78.2 L", "100.4 L", "119.0 L", "129.6 L"],
      ["30,000", "93.9 L", "120.5 L", "142.8 L", "155.6 L"],
      ["35,000", "109.5 L", "140.6 L", "166.6 L", "181.5 L"],
      ["40,000", "125.1 L", "160.6 L", "190.4 L", "207.4 L"],
      ["50,000", "156.4 L", "200.8 L", "238.0 L", "259.3 L"]
    ]
  },
  {
    tenure: "20 Years",
    data: [
      ["1,000", "5.1 L", "7.2 L", "9.2 L", "10.4 L"],
      ["2,000", "10.2 L", "14.5 L", "18.4 L", "20.8 L"],
      ["5,000", "25.5 L", "36.2 L", "46.0 L", "51.9 L"],
      ["10,000", "51.0 L", "72.4 L", "92.0 L", "103.8 L"],
      ["15,000", "76.6 L", "108.6 L", "138.0 L", "155.8 L"],
      ["20,000", "102.1 L", "144.8 L", "184.0 L", "207.7 L"],
      ["25,000", "127.6 L", "181.0 L", "230.0 L", "259.6 L"],
      ["30,000", "153.1 L", "217.2 L", "276.0 L", "311.5 L"],
      ["35,000", "178.6 L", "253.4 L", "322.0 L", "363.5 L"],
      ["40,000", "204.2 L", "289.6 L", "367.9 L", "415.4 L"],
      ["50,000", "255.2 L", "362.0 L", "459.9 L", "519.2 L"]
    ]
  },
  {
    tenure: "25 Years",
    data: [
      ["1,000", "7.9 L", "12.4 L", "17.0 L", "20.0 L"],
      ["2,000", "15.7 L", "24.9 L", "34.0 L", "39.9 L"],
      ["5,000", "39.4 L", "62.2 L", "85.1 L", "99.8 L"],
      ["10,000", "78.7 L", "124.3 L", "170.2 L", "199.6 L"],
      ["15,000", "118.1 L", "186.5 L", "255.3 L", "299.5 L"],
      ["20,000", "157.5 L", "248.6 L", "340.4 L", "399.3 L"],
      ["25,000", "196.9 L", "310.8 L", "425.6 L", "499.1 L"],
      ["30,000", "236.2 L", "372.9 L", "510.7 L", "598.9 L"],
      ["35,000", "275.6 L", "435.1 L", "595.8 L", "698.8 L"],
      ["40,000", "315.0 L", "497.3 L", "680.9 L", "798.6 L"],
      ["50,000", "393.7 L", "621.6 L", "851.1 L", "998.2 L"]
    ]
  },
  {
    tenure: "30 Years",
    data: [
      ["1,000", "11.8 L", "20.8 L", "30.8 L", "37.6 L"],
      ["2,000", "23.5 L", "41.6 L", "61.6 L", "75.2 L"],
      ["5,000", "58.8 L", "104.0 L", "154.0 L", "188.1 L"],
      ["10,000", "117.6 L", "207.9 L", "308.1 L", "376.2 L"],
      ["15,000", "176.4 L", "311.9 L", "462.1 L", "564.2 L"],
      ["20,000", "235.2 L", "415.9 L", "616.2 L", "752.3 L"],
      ["25,000", "294.0 L", "519.8 L", "770.2 L", "940.4 L"],
      ["30,000", "352.8 L", "623.8 L", "924.3 L", "1128.5 L"],
      ["35,000", "411.6 L", "727.8 L", "1078.3 L", "1316.5 L"],
      ["40,000", "470.4 L", "831.7 L", "1232.4 L", "1504.6 L"],
      ["50,000", "588.0 L", "1039.6 L", "1540.5 L", "1880.8 L"]
    ]
  }
];




  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/60 to-[#0b1925]/40"
    : "bg-gradient-to-br from-white/60 to-[#d2f2ff]/50";

  const neonBorder = darkMode ? "#10e2ea" : "#0e6371";
  const textColor = darkMode ? "text-white" : "text-black";

  const renderTable = (sections) => (
    <table className="w-full border-collapse text-sm md:text-xs text-center">
      <thead>
        <tr>
          <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
            TENURE
          </th>
          <th className="p-2 font-semibold" rowSpan={2} style={{ border: `1px solid ${neonBorder}` }}>
            TARGET
          </th>
          <th className="p-2 font-semibold" colSpan={columns.length} style={{ border: `1px solid ${neonBorder}` }}>
            ROI (%)
          </th>
        </tr>
        <tr>
          {columns.map((roi, idx) => (
            <th key={idx} className="p-2 font-semibold text-[13px]" style={{ border: `1px solid ${neonBorder}` }}>
              {roi}%
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sections.map((section, i) => (
          <React.Fragment key={i}>
            {section.data.map((row, j) => (
              <tr
                key={j}
                className={clsx(j % 2 === 0 ? "bg-white/10" : "bg-white/5", "transition-all hover:bg-white/20")}
              >
                {j === 0 && (
                  <td
                    rowSpan={section.data.length}
                    className="p-2 font-semibold text-sm"
                    style={{
                      backgroundColor: darkMode ? "#13202e" : "#e0f5ff",
                      color: neonBorder,
                      border: `1px solid ${neonBorder}`,
                    }}
                  >
                    {section.tenure}
                  </td>
                )}
                <td className="p-2 text-left pl-4 font-medium" style={{ border: `1px solid ${neonBorder}` }}>
                  {row[0]}
                </td>
                {row.slice(1).map((val, k) => (
                  <td key={k} className="p-2" style={{ border: `1px solid ${neonBorder}` }}>
                    {val.toLocaleString("en-IN")}
                  </td>
                ))}
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className={`relative w-full py-16 px-4 md:px-20 transition-colors duration-500 ${bgGradient}`}>
      <Bubbles darkMode={darkMode} />
      <div
        className={clsx(
          "overflow-auto rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-lg ",
          glassBg,
          textColor
        )}
        style={{
          borderColor: neonBorder,
          boxShadow: `inset 0 0 20px ${neonBorder}55`,
        }}
      >
        <div className="w-[1200px] md:w-full">
          {/* Heading Section */}
          <div
            className={clsx(
              "rounded-t-xl px-4 sm:px-6 py-4 sm:py-5 mb-4 shadow-lg backdrop-blur-lg w-full",
              darkMode ? "bg-gradient-to-br from-[#111827]/90 to-[#0f172a]/90" : "bg-gradient-to-br from-[#e0f7ff]/90 to-[#faffff]/90"
            )}
            style={{
              border: `1px solid ${neonBorder}`,
              boxShadow: `0 0 15px ${neonBorder}88`,
              color: darkMode ? "#e0f7ff" : "#0c2d38",
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-1">
              SYSTEMATIC INVESTMENT PLAN
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide opacity-85">
            Ready Reckoner
            </p>
          </div>

          {/* Subheading */}
          <div
            className={clsx(
              "rounded-r-full px-4 sm:px-6 py-2 sm:py-3 mb-4 w-fit font-medium backdrop-blur-md",
              darkMode ? "bg-gradient-to-r from-[#1e293b]/70 to-[#0f172a]/60" : "bg-gradient-to-r from-white/80 to-[#d2f2ff]/60"
            )}
            style={{
              border: `1px solid ${neonBorder}`,
              boxShadow: `inset 0 0 10px ${neonBorder}55`,
              color: darkMode ? "#a6e9ff" : "#003344"
            }}
          >
            <p className="text-xs sm:text-sm md:text-base">
              Monthly SIP Amount to achieve Target Amount 
            </p>
          </div>

          {/* First Table */}
          {renderTable(sections1)}

          <p className="mt-4 text-xs text-center italic text-gray-400">
            Monthly SIP Amount based on assumed rate of return on investments and corresponding tenure in years.
          </p>

          {/* Second Table Heading */}
          <div
            className={clsx(
              "mt-10 mb-4 text-lg sm:text-xl md:text-2xl font-bold",
              darkMode ? "text-cyan-300" : "text-teal-700"
            )}
          >
            Estimated Investment Value of Monthly SIP 
          </div>

          {/* Second Table */}
          {renderTable(sections2)}

          <p className="mt-4 text-xs text-center italic text-gray-400">
            Estimated investment value ( in lacs ) based on assumed rate of return on investment and corresponding tenure in years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SIPReadyReckoner;