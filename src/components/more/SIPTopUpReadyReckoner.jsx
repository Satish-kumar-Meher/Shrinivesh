
import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Bubbles } from "../../utils/Bubble";

const SIPTopUpReadyReckoner = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const columns = ["7", "10", "12", "13"];

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const sections1 = [ /* FIRST TABLE DATA (you already included) */ 
    {
      tenure: "5 Years",
      data: [
        ["10 Lacs", 11666, 10858, 10329, 10128],
        ["25 Lacs", 29016, 27095, 25824, 25270],
        ["50 Lacs", 58033, 54090, 51649, 50441],
        ["1 Crore", 115967, 108081, 103199, 100883],
        ["2 Crore", 231835, 216162, 206398, 201667],
        ["5 Crore", 579439, 540405, 515995, 504217],
        ["10 Crore", 1158779, 1080711, 1031890, 1008335],
      ],
    },
    {
      tenure: "10 Years",
      data: [
        ["10 Lacs", 3913, 3363, 3063, 2931],
        ["25 Lacs", 9633, 8409, 7658, 7379],
        ["50 Lacs", 19266, 16819, 15317, 14658],
        ["1 Crore", 38533, 33638, 30635, 29217],
        ["2 Crore", 76966, 67176, 61271, 58434],
        ["5 Crore", 192365, 167791, 152978, 146085],
        ["10 Crore", 384631, 335582, 305957, 292070],
      ],
    },
    {
      tenure: "15 Years",
      data: [
        ["10 Lacs", 1796, 1389, 1301, 1128],
        ["25 Lacs", 4290, 3524, 3052, 2821],
        ["50 Lacs", 8581, 6949, 6105, 5642],
        ["1 Crore", 17062, 13899, 12111, 11285],
        ["2 Crore", 34025, 27798, 24222, 22570],
        ["5 Crore", 85013, 69495, 60457, 56327],
        ["10 Crore", 169927, 138890, 120914, 112654],
      ],
    },
    {
      tenure: "20 Years",
      data: [
        ["10 Lacs", 859, 681, 587, 562],
        ["25 Lacs", 2198, 1653, 1417, 1307],
        ["50 Lacs", 4296, 3306, 2735, 2514],
        ["1 Crore", 8492, 6512, 5371, 4929],
        ["2 Crore", 16884, 13024, 10742, 9758],
        ["5 Crore", 42161, 32362, 26856, 24447],
        ["10 Crore", 84322, 64724, 53712, 48794],
      ],
    },
    {
      tenure: "25 Years",
      data: [
        ["10 Lacs", 469, 404, 287, 300],
        ["25 Lacs", 1174, 811, 668, 652],
        ["50 Lacs", 2249, 1622, 1337, 1204],
        ["1 Crore", 4498, 3244, 2574, 2308],
        ["2 Crore", 8997, 6488, 5149, 4517],
        ["5 Crore", 22294, 16120, 12773, 11344],
        ["10 Crore", 44589, 32140, 25447, 22588],
      ],
    },
    {
      tenure: "30 Years",
      data: [
        ["10 Lacs", 250, 180, 224, 165],
        ["25 Lacs", 625, 502, 411, 364],
        ["50 Lacs", 1251, 904, 722, 629],
        ["1 Crore", 2502, 1709, 1345, 1158],
        ["2 Crore", 4905, 3418, 2591, 2217],
        ["5 Crore", 12314, 8346, 6328, 5492],
        ["10 Crore", 24529, 16693, 12557, 10885],
      ],
    },
  ];

const sections2 = [
  {
    tenure: "5 Years",
    data: [
      ["1,000", "0.8 L", "0.9 L", "1.0 L", "1.0 L"],
      ["2,000", "1.7 L", "1.8 L", "1.9 L", "2.0 L"],
      ["5,000", "4.2 L", "4.6 L", "4.8 L", "4.9 L"],
      ["10,000", "8.5 L", "9.1 L", "9.5 L", "9.8 L"],
      ["15,000", "12.7 L", "13.7 L", "14.3 L", "14.7 L"],
      ["20,000", "17.0 L", "18.2 L", "19.1 L", "19.5 L"],
      ["25,000", "21.2 L", "22.8 L", "23.9 L", "24.4 L"],
      ["30,000", "25.5 L", "27.3 L", "28.6 L", "29.3 L"],
      ["35,000", "29.7 L", "31.9 L", "33.4 L", "34.2 L"],
      ["40,000", "34.0 L", "36.5 L", "38.2 L", "39.1 L"],
      ["50,000", "42.5 L", "45.6 L", "47.7 L", "48.9 L"]
    ]
  },
  {
    tenure: "10 Years",
    data: [
      ["1,000", "2.4 L", "2.8 L", "3.0 L", "3.2 L"],
      ["2,000", "4.8 L", "5.5 L", "6.1 L", "6.4 L"],
      ["5,000", "12.0 L", "13.8 L", "15.2 L", "16.0 L"],
      ["10,000", "24.0 L", "27.7 L", "30.4 L", "31.9 L"],
      ["15,000", "36.0 L", "41.5 L", "45.7 L", "47.9 L"],
      ["20,000", "48.0 L", "55.3 L", "60.9 L", "63.9 L"],
      ["25,000", "60.0 L", "69.1 L", "76.1 L", "79.9 L"],
      ["30,000", "72.0 L", "83.0 L", "91.3 L", "95.8 L"],
      ["35,000", "84.0 L", "96.8 L", "106.5 L", "111.8 L"],
      ["40,000", "96.0 L", "110.6 L", "121.7 L", "127.8 L"],
      ["50,000", "119.9 L", "138.3 L", "152.2 L", "159.7 L"]
    ]
  },
  {
    tenure: "15 Years",
    data: [
      ["1,000", "4.9 L", "6.1 L", "7.1 L", "7.7 L"],
      ["2,000", "9.9 L", "12.3 L", "14.3 L", "15.4 L"],
      ["5,000", "24.7 L", "30.7 L", "35.6 L", "38.5 L"],
      ["10,000", "49.3 L", "61.4 L", "71.3 L", "76.9 L"],
      ["15,000", "74.0 L", "92.0 L", "106.9 L", "115.4 L"],
      ["20,000", "98.6 L", "122.7 L", "142.6 L", "153.9 L"],
      ["25,000", "123.3 L", "153.4 L", "178.2 L", "192.3 L"],
      ["30,000", "147.9 L", "184.1 L", "213.9 L", "230.8 L"],
      ["35,000", "172.6 L", "214.8 L", "249.5 L", "269.5 L"],
      ["40,000", "197.2 L", "245.5 L", "285.2 L", "307.7 L"],
      ["50,000", "246.5 L", "306.8 L", "357.5 L", "384.7 L"]
    ]
  },
  {
    tenure: "20 Years",
    data: [
      ["1,000", "8.8 L", "12.0 L", "14.7 L", "16.4 L"],
      ["2,000", "17.7 L", "23.9 L", "29.5 L", "32.8 L"],
      ["5,000", "44.2 L", "59.8 L", "73.7 L", "82.0 L"],
      ["10,000", "88.4 L", "119.5 L", "147.4 L", "164.0 L"],
      ["15,000", "132.6 L", "179.3 L", "221.0 L", "246.0 L"],
      ["20,000", "176.8 L", "239.0 L", "294.7 L", "328.0 L"],
      ["25,000", "221.0 L", "298.8 L", "368.4 L", "410.0 L"],
      ["30,000", "265.2 L", "358.5 L", "442.1 L", "492.0 L"],
      ["35,000", "309.3 L", "418.3 L", "515.8 L", "574.0 L"],
      ["40,000", "353.5 L", "478.1 L", "589.5 L", "656.0 L"],
      ["50,000", "441.9 L", "597.6 L", "736.8 L", "820.0 L"]
    ]
  },
  {
    tenure: "25 Years",
    data: [
      ["1,000", "14.7 L", "21.7 L", "28.5 L", "32.9 L"],
      ["2,000", "29.4 L", "43.4 L", "57.1 L", "65.7 L"],
      ["5,000", "73.4 L", "108.5 L", "142.7 L", "164.3 L"],
      ["10,000", "146.8 L", "217.0 L", "285.5 L", "328.6 L"],
      ["15,000", "220.2 L", "325.5 L", "428.2 L", "492.8 L"],
      ["20,000", "293.6 L", "434.1 L", "570.9 L", "657.1 L"],
      ["25,000", "366.9 L", "542.6 L", "713.7 L", "821.4 L"],
      ["30,000", "440.3 L", "651.1 L", "856.4 L", "985.7 L"],
      ["35,000", "513.7 L", "759.6 L", "999.2 L", "1149.9 L"],
      ["40,000", "587.1 L", "868.1 L", "1141.9 L", "1314.2 L"],
      ["50,000", "733.9 L", "1085.2 L", "1427.4 L", "1642.8 L"]
    ]
  },
  {
    tenure: "30 Years",
    data: [
      ["1,000", "23.2 L", "37.8 L", "53.3 L", "63.6 L"],
      ["2,000", "46.5 L", "75.6 L", "106.6 L", "127.2 L"],
      ["5,000", "116.1 L", "189.0 L", "266.5 L", "317.9 L"],
      ["10,000", "232.3 L", "377.9 L", "532.9 L", "635.9 L"],
      ["15,000", "348.4 L", "566.9 L", "799.4 L", "953.8 L"],
      ["20,000", "464.5 L", "755.9 L", "1065.9 L", "1271.8 L"],
      ["25,000", "580.6 L", "944.8 L", "1332.3 L", "1589.7 L"],
      ["30,000", "696.8 L", "1133.8 L", "1598.8 L", "1907.7 L"],
      ["35,000", "812.9 L", "1322.8 L", "1865.3 L", "2225.6 L"],
      ["40,000", "929.0 L", "1511.7 L", "2131.7 L", "2543.6 L"],
      ["50,000", "1161.3 L", "1889.7 L", "2664.6 L", "3179.5 L"]
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
              Top Up Ready Reckoner
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
              Monthly SIP Amount to achieve Target Amount with 10% Annual Top-up
            </p>
          </div>

          {/* First Table */}
          {renderTable(sections1)}

          <p className="mt-4 text-xs text-center italic text-gray-400">
            Monthly SIP Amount based on assumed rate of return and investment tenure. With 10% annual SIP Top-Up.
          </p>

          {/* Second Table Heading */}
          <div
            className={clsx(
              "mt-10 mb-4 text-lg sm:text-xl md:text-2xl font-bold",
              darkMode ? "text-cyan-300" : "text-teal-700"
            )}
          >
            Estimated Investment Value of Monthly SIP with 10% Annual Top-up
          </div>

          {/* Second Table */}
          {renderTable(sections2)}

          <p className="mt-4 text-xs text-center italic text-gray-400">
            Estimated investment value ( in lacs) based on assumed rate of return on investment and corresponding tenure in years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SIPTopUpReadyReckoner;
