
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bubbles } from "../../utils/Bubble";

const blogs = [
  {
    id: 1,
    title: "Leveraging The PSU Rally To Su...",
    description:
      "Indian equities are one of the brighter corners of sunshine in the global market...",
    image: "https://mfportfolio.in/resources/images/blogs/Leveraging-the-PSU-rally-to-sustain-capex-growth/Leveraging-the-PSU-rally-to-sustain-capex-growth.jpg",
  },
  {
    id: 2,
    title: "Continued Benefits Of Debt Fun...",
    description:
      "On 24th March 2023, the Finance Minister proposed an amendment to the Finance Bi...",
    image: "https://mfportfolio.in/resources/images/blogs/Continued-Benefits-Debt-Funds/Continued-Benefits-Debt-Funds.jpg",
  },
  {
    id: 3,
    title: "How SWP And STP Taxation Works...",
    description:
      "Systematic Withdrawal Plan (SWP) and Systematic Transfer Plan (STP) are mutual f...",
    image: "https://mfportfolio.in/resources/images/blogs/SWP-STP-Taxation-Works/SWP-STP-Taxation-Works.jpg",
  },
];

const LatestBlog = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const glassBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
    : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

  const innerGlow = darkMode
    ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
    : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

  const outerHoverGlow = darkMode
    ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
    : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

  const textColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-600";
  const bubbleColor = darkMode ? "#10e2ea" : "#0e6371";
  const primaryText = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

  return (
    <section
      className={`relative z-0 py-20 overflow-hidden ${bgGradient} transition-colors duration-500`}
    >
  
    <Bubbles darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <h2 className={`text-3xl sm:text-4xl font-bold ${textColor}`}>Latest Blog</h2>
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-full ${primaryText} border border-current hover:opacity-80 transition`}
          >
            View All
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`rounded-3xl overflow-hidden border ${glassBg} ${innerGlow} ${outerHoverGlow} ${
                darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
              } transition-transform duration-300 hover:scale-[1.02]`}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${textColor}`}>{blog.title}</h3>
                <p className={`text-sm mb-4 line-clamp-3 ${subTextColor}`}>{blog.description}</p>
                <button
                  className={`px-4 py-2 rounded-full text-xs font-semibold ${primaryText} border border-current hover:opacity-80 transition`}
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
