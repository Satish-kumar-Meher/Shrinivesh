import React, { useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Bubbles } from "../../utils/Bubble";
import { motion } from "framer-motion";

const WhyStartSIPEarlyPage = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const [formData, setFormData] = useState({
    ageA: 25,
    ageB: 30,
    ageC: 35,
    sipA: 10000,
    sipB: 10000,
    sipC: 10000,
    endAge: 55,
    returnRate: 12,
  });

  const [resultData, setResultData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateResults = () => {
    const r = parseFloat(formData.returnRate) / 1200;

    const getData = (age, sip) => {
      const n = (formData.endAge - age) * 12;
      const totalInvestment = sip * n;
      const finalAmount = sip * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      return {
        startAge: age,
        endAge: formData.endAge,
        sipPeriod: formData.endAge - age,
        monthlySIP: sip,
        totalInvestment,
        returnRate: formData.returnRate,
        finalAmount,
      };
    };

    const A = getData(Number(formData.ageA), Number(formData.sipA));
    const B = getData(Number(formData.ageB), Number(formData.sipB));
    const C = getData(Number(formData.ageC), Number(formData.sipC));

    const requiredMonthly = (targetValue, age) => {
      const n = (formData.endAge - age) * 12;
      const sip = targetValue / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
      return Math.round(sip);
    };

    const requiredForB = B.finalAmount < A.finalAmount ? requiredMonthly(A.finalAmount, Number(formData.ageB)) : null;
    const requiredForC = C.finalAmount < A.finalAmount ? requiredMonthly(A.finalAmount, Number(formData.ageC)) : null;

    setResultData([
      {
        name: "Mr. A",
        image: "/avatars/mr-a.png",
        ...A,
        monthlyRequired: null,
      },
      {
        name: "Mr. B",
        image: "/avatars/mr-b.png",
        ...B,
        monthlyRequired: requiredForB,
      },
      {
        name: "Ms. C",
        image: "/avatars/ms-c.png",
        ...C,
        monthlyRequired: requiredForC,
      },
    ]);
  };

  const inputBox = "rounded-lg px-3 py-2 text-sm border w-full";

  return (
    <div className="relative w-full px-4 sm:px-8 py-10">
      <Bubbles />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={clsx("text-2xl sm:text-3xl font-bold text-center mb-8", {
          "text-white": darkMode,
          "text-black": !darkMode,
        })}
      >
        Why Start SIP Early?
      </motion.h2>

      {/* Form Inputs */}
      <div
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-6 rounded-2xl",
          "backdrop-blur-lg shadow-md",
          darkMode
            ? "bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/70 border border-white/10 text-white"
            : "bg-gradient-to-br from-white via-gray-100 to-white border border-black/10 text-black"
        )}
      >
        {["A", "B", "C"].map((label) => (
          <div key={label} className="flex flex-col gap-2">
            <label>Age of Mr./Ms. {label}:</label>
            <input
              type="number"
              name={`age${label}`}
              value={formData[`age${label}`]}
              onChange={handleChange}
              className={inputBox}
            />
            <label>SIP amount for Mr./Ms. {label}:</label>
            <input
              type="number"
              name={`sip${label}`}
              value={formData[`sip${label}`]}
              onChange={handleChange}
              className={inputBox}
            />
          </div>
        ))}
        <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
          <label>Investment till age:</label>
          <input
            type="number"
            name="endAge"
            value={formData.endAge}
            onChange={handleChange}
            className={inputBox}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Assumed rate of return (%):</label>
          <input
            type="number"
            name="returnRate"
            value={formData.returnRate}
            onChange={handleChange}
            className={inputBox}
          />
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <button
          onClick={calculateResults}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all shadow-md"
        >
          Submit
        </button>
      </div>

      {/* Results */}
      {resultData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {resultData.map((person, index) => (
            <div
              key={index}
              className={clsx(
                "rounded-2xl p-4 w-[300px] backdrop-blur-lg transition-all duration-300 shadow-xl",
                darkMode
                  ? "bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 text-white"
                  : "bg-gradient-to-br from-white to-gray-100 border border-black/10 text-black"
              )}
            >
              <img src={person.image} className="w-20 h-20 mx-auto mb-2" alt={person.name} />
              <h3 className="text-center font-semibold text-lg mb-2">{person.name}</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td>Starts at age</td>
                    <td className="text-right">{person.startAge} yrs</td>
                  </tr>
                  <tr>
                    <td>Investment till</td>
                    <td className="text-right">{person.endAge} yrs</td>
                  </tr>
                  <tr>
                    <td>SIP Period</td>
                    <td className="text-right">{person.sipPeriod} yrs</td>
                  </tr>
                  <tr>
                    <td>Monthly SIP</td>
                    <td className="text-right">₹{person.monthlySIP.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Total Investment</td>
                    <td className="text-right">₹{person.totalInvestment.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Return Rate</td>
                    <td className="text-right">{person.returnRate}%</td>
                  </tr>
                  <tr className="font-semibold text-green-400 dark:text-green-300">
                    <td>Final Value</td>
                    <td className="text-right">₹{person.finalAmount.toLocaleString()}</td>
                  </tr>
                  {person.monthlyRequired && (
                    <tr className="text-red-500 dark:text-red-400">
                      <td>Monthly SIP to match Mr. A</td>
                      <td className="text-right">₹{person.monthlyRequired.toLocaleString()}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default WhyStartSIPEarlyPage;
