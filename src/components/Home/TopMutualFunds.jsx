import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import { Bubbles } from "../../utils/Bubble";
import { getTopOneYearSchemes } from "../../api/mutualFunds";
import MutualFundCard from "../MutualFunds/MutualFundCard";

const TopMutualFunds = () => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  useEffect(() => {
    let isMounted = true;

    getTopOneYearSchemes(6)
      .then((schemes) => {
        if (isMounted) {
          setFunds(schemes);
          setError("");
        }
      })
      .catch(() => {
        if (isMounted) {
          setError("Live mutual fund data is temporarily unavailable.");
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const primaryColor = darkMode ? "#10e2ea" : "#0e6371";

  return (
    <section className={`relative overflow-hidden px-4 py-20 transition-colors duration-500 md:px-20 ${bgGradient}`}>
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
        <h2 className={`text-center text-4xl font-bold drop-shadow md:text-left md:text-5xl ${darkMode ? "text-green-500" : "text-green-700"}`}>
          Top Performing Funds
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            to="/mutual-funds"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2 font-semibold shadow-lg transition hover:scale-105 ${
              darkMode ? "text-[#0b0d1a]" : "text-white"
            }`}
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 0 15px ${primaryColor}`,
            }}
          >
            View More
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {error ? (
        <p className={`relative z-10 text-center ${darkMode ? "text-red-200" : "text-red-700"}`}>
          {error}
        </p>
      ) : null}

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`h-72 animate-pulse rounded-2xl ${
                  darkMode ? "bg-white/10" : "bg-white/70"
                }`}
              />
            ))
          : funds.map((fund) => (
              <Tilt
                key={fund.amfi_code}
                glareEnable
                glareMaxOpacity={0.25}
                glareColor={primaryColor}
                glarePosition="all"
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
              >
                <MutualFundCard
                  fund={fund}
                  darkMode={darkMode}
                  primaryColor={primaryColor}
                />
              </Tilt>
            ))}
      </div>
    </section>
  );
};

export default TopMutualFunds;
