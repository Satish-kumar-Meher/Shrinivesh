import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Bubbles } from "../utils/Bubble";
import SEO from "../utils/SEO";

const News = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const apiKey = import.meta.env.VITE_NEWS_API_KEY ;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=mutual%20funds&language=en&sortBy=publishedAt&pageSize=15&apiKey=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.articles && data.articles.length > 0) {
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
            source: article.source?.name || "Unknown Source",
            publishedAt: article.publishedAt,
          }));
          setNewsList(articles);
        } else {
          setNewsList([]);
          setError("No news articles found");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again later.");
        setNewsList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <SEO 
        title="Latest Financial News - Shri Nivesh" 
        description="Stay updated with the latest news about mutual funds, SIPs, and financial markets. Get insights on market trends and investment opportunities." 
      />
      
      <section
        className={`relative z-0 min-h-screen py-20 overflow-hidden transition-colors duration-500 ${bgGradient}`}
      >
        <Bubbles darkMode={darkMode} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl sm:text-5xl font-bold ${textColor} mb-4`}
            >
              Latest Financial News
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg ${subTextColor} max-w-2xl mx-auto`}
            >
              Stay informed with the latest updates on mutual funds, SIPs, and financial markets
            </motion.p>
          </div>

          {/* News Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className={`text-center ${subTextColor}`}>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-current mx-auto mb-4"></div>
                <p className="text-lg">Loading latest news...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-20">
              <div className={`text-center ${subTextColor}`}>
                <div className="text-6xl mb-4">📰</div>
                <p className="text-lg mb-2">Oops! Something went wrong</p>
                <p className="text-sm">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className={`mt-4 px-6 py-2 rounded-full ${primaryText} border border-current hover:opacity-80 transition`}
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : newsList.length === 0 ? (
            <div className="flex justify-center items-center py-20">
              <div className={`text-center ${subTextColor}`}>
                <div className="text-6xl mb-4">📰</div>
                <p className="text-lg">No news articles found</p>
                <p className="text-sm">Please check back later for updates</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsList.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-3xl overflow-hidden border ${glassBg} ${innerGlow} ${outerHoverGlow} ${
                    darkMode ? "border-[#1de0e6]/20" : "border-[#0e6371]/10"
                  } transition-transform duration-300 hover:scale-[1.02] p-6 flex flex-col justify-between group`}
                >
                  <div>
                    {/* Source and Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-[#0e6371]/20 text-[#10e2ea]' : 'bg-[#0e6371]/10 text-[#0e6371]'}`}>
                        {item.source}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={12} />
                        <span>{formatDate(item.publishedAt)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold mb-3 line-clamp-2 ${textColor} group-hover:underline`}>
                      {item.title}
                    </h3>
                    
                    {/* Divider */}
                    <div className="w-8 border-t border-gray-400/40 mb-3" />
                    
                    {/* Description */}
                    <p className={`text-sm mb-4 line-clamp-3 ${subTextColor}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <span className={`text-xs ${subTextColor}`}>
                      {item.date}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs transition-colors"
                      title="Read full article"
                    >
                      <span>Read</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Footer Info */}
          {newsList.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <p className={`text-sm ${subTextColor}`}>
                Showing {newsList.length} latest articles • Updated every hour
              </p>
              <p className={`text-xs ${subTextColor} mt-2`}>
                News powered by NewsAPI • Click "Read" to view full articles
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default News;
