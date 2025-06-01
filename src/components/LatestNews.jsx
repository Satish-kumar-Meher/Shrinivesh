
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LatestNews = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const primaryText = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=mutual%20funds&language=en&sortBy=publishedAt&pageSize=6&apiKey=cbf2ee78ad4541568a5edf22b78e5460`
        );
        const data = await response.json();
        if (data.articles) {
          const articles = data.articles.map((article, index) => ({
            id: index,
            title: article.title,
            description: article.description,
            date: new Date(article.publishedAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            url: article.url,
          }));
          setNewsList(articles);
        } else {
          setNewsList([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section
      className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}
    >
      {/* Bubbles */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(15)].map((_, i) => {
          const size = 5 + i * 8;
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          const bubbleColor = darkMode ? "#10e2ea" : "#0e6371";

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top,
                left,
                backgroundColor: bubbleColor,
                opacity: 0.12,
                boxShadow: `0 0 20px 5px ${bubbleColor}`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          );
        })}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <h2 className={`text-3xl sm:text-4xl font-bold ${textColor}`}>Latest News</h2>
          <button
            className={`px-5 py-2 text-sm font-semibold rounded-full ${primaryText} border border-current hover:opacity-80 transition`}
          >
            View All
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className={`${subTextColor}`}>Loading news...</p>
          ) : newsList.length === 0 ? (
            <p className={`${subTextColor}`}>No news found.</p>
          ) : (
            newsList.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`rounded-3xl overflow-hidden border ${glassBg} ${innerGlow} ${outerHoverGlow} ${
                  darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
                } transition-transform duration-300 hover:scale-[1.02] p-6 flex flex-col justify-between`}
              >
                <div>
                  <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${textColor}`}>
                    {item.title}
                  </h3>
                  <div className="w-8 border-t border-gray-400/40 mb-2" />
                  <p className={`text-sm mb-4 line-clamp-3 ${subTextColor}`}>
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className={`text-sm ${subTextColor}`}>{item.date}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white"
                  >
                    <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;













// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const newsList = [
//   {
//     id: 1,
//     title: "Groww Mutual Fund Launches Groww Nifty 500 Low Vol...",
//     description:
//       "The investment objective of the Scheme is to generate long-term capita...",
//     date: "28-May-25",
//   },
//   {
//     id: 2,
//     title: "Union Mutual Fund Launches Union Income Plus Arbit...",
//     description:
//       "The objective of the Scheme is to provide income over medium to long t...",
//     date: "22-May-25",
//   },
//   {
//     id: 3,
//     title: "Nippon India Mutual Fund Launches Nippon India BSE...",
//     description:
//       "The investment objective of the scheme is to provide investment return...",
//     date: "21-May-25",
//   },
// ];

// const LatestNews = () => {
//   const { mode: darkMode } = useSelector((state) => state.screenMode);

//   const bgGradient = darkMode
//     ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
//     : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

//   const glassBg = darkMode
//     ? "bg-gradient-to-br from-[#1a2a38]/40 to-[#0b1925]/20"
//     : "bg-gradient-to-br from-white/50 to-[#d2f2ff]/30";

//   const innerGlow = darkMode
//     ? "shadow-[inset_0_0_20px_rgba(16,226,234,0.3)]"
//     : "shadow-[inset_0_0_20px_rgba(14,99,113,0.25)]";

//   const outerHoverGlow = darkMode
//     ? "hover:shadow-[0_0_25px_rgba(16,226,234,0.45)]"
//     : "hover:shadow-[0_0_25px_rgba(14,99,113,0.35)]";

//   const textColor = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";
//   const subTextColor = darkMode ? "text-gray-300" : "text-gray-600";
//   const bubbleColor = darkMode ? "#10e2ea" : "#0e6371";
//   const primaryText = darkMode ? "text-[#10e2ea]" : "text-[#0e6371]";

//   return (
//     <section
//       className={`relative z-0 py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}
//     >
//       {/* Bubbles */}
//       <motion.div
//         className="absolute inset-0 z-0 pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         {[...Array(15)].map((_, i) => {
//           const size = 5 + i * 8;
//           const top = `${Math.random() * 100}%`;
//           const left = `${Math.random() * 100}%`;
//           const bubbleColor = darkMode ? "#10e2ea" : "#0e6371";

//           return (
//             <motion.div
//               key={i}
//               className="absolute rounded-full"
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 top,
//                 left,
//                 backgroundColor: bubbleColor,
//                 opacity: 0.12,
//                 boxShadow: `0 0 20px 5px ${bubbleColor}`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 x: [0, 15, 0],
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 duration: 6 + i * 0.3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.2,
//               }}
//             />
//           );
//         })}
//       </motion.div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
//           <h2 className={`text-3xl sm:text-4xl font-bold ${textColor}`}>Latest News</h2>
//           <button
//             className={`px-5 py-2 text-sm font-semibold rounded-full ${primaryText} border border-current hover:opacity-80 transition`}
//           >
//             View All
//           </button>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {newsList.map((item, i) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.2 }}
//               className={`rounded-3xl overflow-hidden border ${glassBg} ${innerGlow} ${outerHoverGlow} ${
//                 darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
//               } transition-transform duration-300 hover:scale-[1.02] p-6 flex flex-col justify-between`}
//             >
//               <div>
//                 <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${textColor}`}>
//                   {item.title}
//                 </h3>
//                 <div className="w-8 border-t border-gray-400/40 mb-2" />
//                 <p className={`text-sm mb-4 line-clamp-3 ${subTextColor}`}>
//                   {item.description}
//                 </p>
//               </div>
//               <div className="flex items-center justify-between pt-2">
//                 <span className={`text-sm ${subTextColor}`}>{item.date}</span>
//                 <button className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white">
//                   <ArrowRight size={16} />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestNews;



