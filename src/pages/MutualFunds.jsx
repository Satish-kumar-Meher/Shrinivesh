import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "lucide-react";
import { Bubbles } from "../utils/Bubble";
import {
  createSchemeSearchIndex,
  getAllSchemes,
  getTopOneYearSchemes,
  searchSchemeIndex,
} from "../api/mutualFunds";
import MutualFundCard from "../components/MutualFunds/MutualFundCard";

const INITIAL_VISIBLE_COUNT = 6;

const MutualFunds = () => {
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [featuredFunds, setFeaturedFunds] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [query, setQuery] = useState("");
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [loadingSearchData, setLoadingSearchData] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    getTopOneYearSchemes(INITIAL_VISIBLE_COUNT)
      .then((schemes) => {
        if (isMounted) setFeaturedFunds(schemes);
      })
      .catch(() => {
        if (isMounted) setError("Live mutual fund data is temporarily unavailable.");
      })
      .finally(() => {
        if (isMounted) setLoadingFeatured(false);
      });

    getAllSchemes()
      .then((schemes) => {
        if (!isMounted) return;
        setSearchIndex(createSchemeSearchIndex(schemes));
      })
      .catch(() => {
        if (isMounted) setError("Search data could not be loaded right now.");
      })
      .finally(() => {
        if (isMounted) setLoadingSearchData(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const trimmedQuery = query.trim();
  const hasSearchText = trimmedQuery.length > 0;

  const searchedFunds = useMemo(() => {
    if (!hasSearchText || searchIndex.length === 0) return [];
    return searchSchemeIndex(searchIndex, trimmedQuery);
  }, [hasSearchText, searchIndex, trimmedQuery]);

  const displayedFunds = featuredFunds.slice(0, INITIAL_VISIBLE_COUNT);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const primaryColor = darkMode ? "#10e2ea" : "#0e6371";
  const showSuggestions = hasSearchText && searchedFunds.length > 0;
  const showSearchLoading = hasSearchText && loadingSearchData;

  return (
    <main className={`relative min-h-screen overflow-hidden px-4 pb-20 pt-32 transition-colors duration-500 md:px-20 ${bgGradient}`}>
      <Bubbles darkMode={darkMode} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8">
          <p className={`mb-2 text-sm font-semibold ${darkMode ? "text-cyan-200" : "text-[#0e6371]"}`}>
            Live mutual fund data
          </p>
          <h1 className={`text-4xl font-bold md:text-5xl ${darkMode ? "text-white" : "text-slate-950"}`}>
            Mutual Funds
          </h1>
        </div>

        <div className="relative mb-8">
          <div
            className={`flex items-center rounded-2xl border p-3 backdrop-blur-md ${
              darkMode
                ? "border-white/10 bg-white/10"
                : "border-black/10 bg-white/75"
            }`}
          >
            <div className="relative flex-1">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                  darkMode ? "text-cyan-100" : "text-[#0e6371]"
                }`}
                size={20}
              />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search fund name, e.g. SBI"
                className={`h-12 w-full rounded-xl border bg-transparent pl-12 pr-4 outline-none transition ${
                  darkMode
                    ? "border-white/10 text-white placeholder:text-white/50 focus:border-cyan-300"
                    : "border-black/10 text-slate-950 placeholder:text-slate-500 focus:border-[#0e6371]"
                }`}
              />
            </div>
          </div>

          {showSuggestions ? (
            <div
              className={`absolute left-0 right-0 top-full z-30 mt-2 max-h-96 overflow-y-auto rounded-2xl border shadow-2xl backdrop-blur-md ${
                darkMode
                  ? "border-white/10 bg-[#0b1925]/95 text-white"
                  : "border-black/10 bg-white/95 text-slate-950"
              }`}
            >
              {searchedFunds.map((fund) => (
                <Link
                  key={fund.amfi_code}
                  to={`/mutual-funds/${fund.amfi_code}`}
                  className={`flex items-center justify-between gap-4 px-4 py-3 text-left transition ${
                    darkMode ? "hover:bg-white/10" : "hover:bg-[#e6f7fb]"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-semibold">{fund.name}</span>
                    <span className="block truncate text-sm opacity-65">
                      {fund.amc_name || "AMC N/A"} | {fund.category || "Category N/A"}
                    </span>
                  </span>
                  <span
                    className="shrink-0 rounded-full px-3 py-1 text-xs font-bold"
                    style={{ backgroundColor: `${primaryColor}22`, color: primaryColor }}
                  >
                    {fund.amfi_code}
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {hasSearchText ? (
          <p className={`mb-6 text-sm ${darkMode ? "text-white/70" : "text-slate-600"}`}>
            {showSearchLoading
              ? "Preparing search data..."
              : searchedFunds.length > 0
                ? `${searchedFunds.length} result${searchedFunds.length === 1 ? "" : "s"} for "${trimmedQuery}"`
                : `No mutual funds found for "${trimmedQuery}"`}
          </p>
        ) : null}

        {error ? (
          <p className={`mb-6 ${darkMode ? "text-red-200" : "text-red-700"}`}>
            {error}
          </p>
        ) : null}

        {!hasSearchText ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {loadingFeatured
            ? Array.from({ length: INITIAL_VISIBLE_COUNT }).map((_, index) => (
                <div
                  key={index}
                  className={`h-80 animate-pulse rounded-2xl ${
                    darkMode ? "bg-white/10" : "bg-white/70"
                  }`}
                />
              ))
            : displayedFunds.map((fund) => (
                <MutualFundCard
                  key={fund.amfi_code}
                  fund={fund}
                  darkMode={darkMode}
                  primaryColor={primaryColor}
                />
              ))}
          </div>
        ) : null}

        {!hasSearchText && !loadingFeatured && displayedFunds.length === 0 ? (
          <p className={`mt-10 text-center ${darkMode ? "text-white/70" : "text-slate-600"}`}>
            No mutual funds found.
          </p>
        ) : null}
      </div>
    </main>
  );
};

export default MutualFunds;
