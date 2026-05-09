import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft, Calendar, Shield, Star } from "lucide-react";
import { Bubbles } from "../utils/Bubble";
import { getSchemeDetails } from "../api/mutualFunds";
import {
  formatCurrency,
  formatPercent,
  getNumberToneClass,
} from "../components/MutualFunds/MutualFundCard";

function formatAmount(value) {
  if (value === null || value === undefined) return "N/A";
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return "N/A";

  return `Rs. ${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(numericValue)}`;
}

function cleanExitLoad(value) {
  if (!value) return "N/A";
  return value.replace(/<br\s*\/?>/gi, " | ");
}

function DetailTile({ label, value, darkMode, valueClassName = "" }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        darkMode
          ? "border-white/10 bg-white/10"
          : "border-black/10 bg-white/75"
      }`}
    >
      <p className="mb-1 text-xs font-semibold uppercase opacity-60">{label}</p>
      <p className={`text-base font-semibold ${valueClassName}`}>{value}</p>
    </div>
  );
}

function Section({ title, children, darkMode }) {
  return (
    <section
      className={`rounded-2xl border p-5 backdrop-blur-md ${
        darkMode ? "border-white/10 bg-white/10" : "border-black/10 bg-white/75"
      }`}
    >
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

const MutualFundDetails = () => {
  const { amfiCode } = useParams();
  const { mode: darkMode } = useSelector((state) => state.screenMode);
  const [fund, setFund] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    getSchemeDetails(amfiCode)
      .then((scheme) => {
        if (isMounted) {
          setFund(scheme);
          setError("");
        }
      })
      .catch(() => {
        if (isMounted) setError("This mutual fund detail could not be loaded.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [amfiCode]);

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-[#0b0d1a] to-[#081c29]"
    : "bg-gradient-to-br from-[#f0faff] to-[#d9e9ff]";

  const primaryColor = darkMode ? "#10e2ea" : "#0e6371";
  const textColor = darkMode ? "text-white" : "text-slate-950";

  if (loading) {
    return (
      <main className={`relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-20 ${bgGradient}`}>
        <Bubbles darkMode={darkMode} />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className={`h-80 animate-pulse rounded-2xl ${darkMode ? "bg-white/10" : "bg-white/70"}`} />
        </div>
      </main>
    );
  }

  if (error || !fund) {
    return (
      <main className={`relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-20 ${bgGradient}`}>
        <Bubbles darkMode={darkMode} />
        <div className={`relative z-10 mx-auto max-w-7xl ${textColor}`}>
          <Link to="/mutual-funds" className="mb-6 inline-flex items-center gap-2 font-semibold">
            <ArrowLeft size={18} />
            Back to Mutual Funds
          </Link>
          <p className={darkMode ? "text-red-200" : "text-red-700"}>{error}</p>
        </div>
      </main>
    );
  }

  const returns = fund.returns || {};
  const ratios = fund.ratios || {};

  return (
    <main className={`relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-20 ${bgGradient}`}>
      <Bubbles darkMode={darkMode} />

      <div className={`relative z-10 mx-auto max-w-7xl ${textColor}`}>
        <Link
          to="/mutual-funds"
          className="mb-6 inline-flex items-center gap-2 font-semibold"
          style={{ color: primaryColor }}
        >
          <ArrowLeft size={18} />
          Back to Mutual Funds
        </Link>

        <section
          className={`mb-8 rounded-2xl border p-6 backdrop-blur-md ${
            darkMode ? "border-white/10 bg-white/10" : "border-black/10 bg-white/80"
          }`}
        >
          <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase opacity-70">
                {fund.category || "Mutual Fund"} | {fund.plan_type || "Plan"} | {fund.option_type || "Option"}
              </p>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl">{fund.name}</h1>
              <p className="mt-3 text-base opacity-75">{fund.amc_name || "N/A"}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {fund.morningstar ? (
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
                  style={{ backgroundColor: `${primaryColor}22`, color: primaryColor }}
                >
                  <Star size={18} fill="currentColor" />
                  {fund.morningstar} Star
                </span>
              ) : null}
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
                style={{ backgroundColor: `${primaryColor}22`, color: primaryColor }}
              >
                <Shield size={18} />
                {fund.risk_label || "Risk N/A"}
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DetailTile label="NAV" value={fund.nav ? `Rs. ${fund.nav}` : "N/A"} darkMode={darkMode} />
            <DetailTile label="NAV Date" value={fund.nav_date || "N/A"} darkMode={darkMode} />
            <DetailTile
              label="Day Change"
              value={formatPercent(fund.day_change_pct)}
              darkMode={darkMode}
              valueClassName={getNumberToneClass(fund.day_change_pct)}
            />
            <DetailTile label="AUM" value={formatCurrency(fund.aum)} darkMode={darkMode} />
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <Section title="Fund Information" darkMode={darkMode}>
            <div className="grid gap-4 sm:grid-cols-2">
              <DetailTile label="AMFI Code" value={fund.amfi_code || "N/A"} darkMode={darkMode} />
              <DetailTile label="ISIN" value={fund.isin || "N/A"} darkMode={darkMode} />
              <DetailTile label="Benchmark" value={fund.benchmark || "N/A"} darkMode={darkMode} />
              <DetailTile label="Launch Date" value={fund.launch_date || "N/A"} darkMode={darkMode} />
              <DetailTile label="Expense Ratio" value={formatPercent(fund.expense_ratio)} darkMode={darkMode} />
              <DetailTile label="Status" value={fund.is_active ? "Active" : "Inactive"} darkMode={darkMode} />
            </div>
          </Section>

          <Section title="Investment Minimums" darkMode={darkMode}>
            <div className="grid gap-4 sm:grid-cols-2">
              <DetailTile label="Minimum SIP" value={formatAmount(fund.min_sip)} darkMode={darkMode} />
              <DetailTile label="Minimum Lumpsum" value={formatAmount(fund.min_lumpsum)} darkMode={darkMode} />
              <DetailTile label="Minimum Additional" value={formatAmount(fund.min_additional)} darkMode={darkMode} />
              <DetailTile label="Exit Load" value={cleanExitLoad(fund.exit_load)} darkMode={darkMode} />
            </div>
          </Section>

          <Section title={`Returns${returns.as_of_date ? ` as of ${returns.as_of_date}` : ""}`} darkMode={darkMode}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <DetailTile label="1 Month" value={formatPercent(returns.return_1m)} darkMode={darkMode} valueClassName={getNumberToneClass(returns.return_1m)} />
              <DetailTile label="3 Months" value={formatPercent(returns.return_3m)} darkMode={darkMode} valueClassName={getNumberToneClass(returns.return_3m)} />
              <DetailTile label="6 Months" value={formatPercent(returns.return_6m)} darkMode={darkMode} valueClassName={getNumberToneClass(returns.return_6m)} />
              <DetailTile label="1 Year" value={formatPercent(returns.return_1y)} darkMode={darkMode} valueClassName={getNumberToneClass(returns.return_1y)} />
              <DetailTile label="3 Years" value={formatPercent(returns.return_3y)} darkMode={darkMode} valueClassName={getNumberToneClass(returns.return_3y)} />
              <DetailTile label="5 Years" value={formatPercent(returns.return_5y)} darkMode={darkMode} valueClassName={getNumberToneClass(returns.return_5y)} />
              <DetailTile label="Since Inception" value={formatPercent(returns.return_inception)} darkMode={darkMode} valueClassName={getNumberToneClass(returns.return_inception)} />
              <DetailTile label="Category Rank Total" value={returns.rank_total || "N/A"} darkMode={darkMode} />
            </div>
          </Section>

          <Section title={`Ratios${ratios.as_of_date ? ` as of ${ratios.as_of_date}` : ""}`} darkMode={darkMode}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <DetailTile label="P/E" value={ratios.valuation?.pe_ratio ?? "N/A"} darkMode={darkMode} />
              <DetailTile label="P/B" value={ratios.valuation?.pb_ratio ?? "N/A"} darkMode={darkMode} />
              <DetailTile label="Sharpe" value={ratios.returns?.sharpe_ratio ?? "N/A"} darkMode={darkMode} valueClassName={getNumberToneClass(ratios.returns?.sharpe_ratio)} />
              <DetailTile label="Alpha" value={ratios.returns?.jensens_alpha ?? "N/A"} darkMode={darkMode} valueClassName={getNumberToneClass(ratios.returns?.jensens_alpha)} />
              <DetailTile label="Beta" value={ratios.risk?.beta ?? "N/A"} darkMode={darkMode} />
              <DetailTile label="Std Deviation" value={ratios.risk?.std_deviation ?? "N/A"} darkMode={darkMode} />
              <DetailTile label="Sortino" value={ratios.risk?.sortino_ratio ?? "N/A"} darkMode={darkMode} valueClassName={getNumberToneClass(ratios.risk?.sortino_ratio)} />
              <DetailTile label="R Squared" value={ratios.risk?.r_squared ?? "N/A"} darkMode={darkMode} />
            </div>
          </Section>
        </div>

        {fund.related_variants?.length ? (
          <div className="mt-6">
            <Section title="Related Variants" darkMode={darkMode}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {fund.related_variants.map((variant) => (
                  <Link
                    key={variant.amfi_code}
                    to={`/mutual-funds/${variant.amfi_code}`}
                    className={`rounded-xl border p-4 transition hover:-translate-y-1 ${
                      darkMode
                        ? "border-white/10 bg-white/10"
                        : "border-black/10 bg-white/75"
                    }`}
                  >
                    <p className="mb-2 font-semibold">{variant.name}</p>
                    <div className="flex items-center gap-2 text-sm opacity-70">
                      <Calendar size={16} />
                      NAV {variant.nav ? `Rs. ${variant.nav}` : "N/A"} | {variant.nav_date || "N/A"}
                    </div>
                  </Link>
                ))}
              </div>
            </Section>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default MutualFundDetails;
