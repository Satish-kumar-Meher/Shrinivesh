import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function formatCurrency(value) {
  if (value === null || value === undefined) return "N/A";

  const amountInCrore = Number(value) / 10000000;
  if (!Number.isFinite(amountInCrore)) return "N/A";

  return `${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: amountInCrore >= 100 ? 0 : 2,
  }).format(amountInCrore)} Cr`;
}

export function formatPercent(value) {
  if (value === null || value === undefined) return "N/A";
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return "N/A";
  return `${numericValue.toFixed(2)}%`;
}

export function getNumberToneClass(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue === 0) return "";
  return numericValue > 0 ? "text-green-500" : "text-red-500";
}

function InfoRow({ label, value, valueClassName = "" }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="font-semibold opacity-80">{label}</span>
      <span className={`text-right ${valueClassName}`}>{value}</span>
    </div>
  );
}

const MutualFundCard = ({ fund, darkMode, primaryColor }) => {
  const returns = fund.returns || {};
  const cardBg = darkMode
    ? "bg-gradient-to-br from-[#1a2a38]/60 to-[#0b1925]/40 border-white/10 text-white"
    : "bg-gradient-to-br from-white/80 to-[#d2f2ff]/50 border-black/10 text-slate-950";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="h-full"
    >
      <Link
        to={`/mutual-funds/${fund.amfi_code}`}
        className={`flex h-full flex-col rounded-2xl border p-5 shadow-xl backdrop-blur-md transition ${cardBg}`}
        style={{ boxShadow: `inset 0 0 18px ${primaryColor}33` }}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase opacity-70">
              {fund.category || "Mutual Fund"}
            </p>
            <h3 className="text-base font-semibold leading-snug">{fund.name}</h3>
          </div>
          {fund.morningstar ? (
            <div
              className="flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-bold"
              style={{
                backgroundColor: `${primaryColor}22`,
                color: primaryColor,
              }}
              title="Morningstar rating"
            >
              <Star size={14} fill="currentColor" />
              {fund.morningstar}
            </div>
          ) : null}
        </div>

        <div className="space-y-2">
          <InfoRow label="AMC" value={fund.amc_name || "N/A"} />
          <InfoRow label="NAV" value={fund.nav ? `Rs. ${fund.nav}` : "N/A"} />
          <InfoRow label="NAV Date" value={fund.nav_date || "N/A"} />
          <InfoRow
            label="Day Change"
            value={formatPercent(fund.day_change_pct)}
            valueClassName={getNumberToneClass(fund.day_change_pct)}
          />
          <InfoRow label="AUM" value={formatCurrency(fund.aum)} />
          <InfoRow label="Expense Ratio" value={formatPercent(fund.expense_ratio)} />
          <InfoRow label="Risk" value={fund.risk_label || "N/A"} />
          <InfoRow label="1Y Rank" value={returns.rank_1y || "N/A"} />
        </div>

        <div className="my-4 border-t border-white/20" />

        <div>
          <p className="mb-2 text-sm font-semibold">Returns</p>
          <div className="grid grid-cols-3 gap-2 text-sm font-semibold">
            <span>
              <span className="opacity-70">1Y:</span>{" "}
              <span className={getNumberToneClass(returns.return_1y)}>
                {formatPercent(returns.return_1y)}
              </span>
            </span>
            <span>
              <span className="opacity-70">3Y:</span>{" "}
              <span className={getNumberToneClass(returns.return_3y)}>
                {formatPercent(returns.return_3y)}
              </span>
            </span>
            <span>
              <span className="opacity-70">5Y:</span>{" "}
              <span className={getNumberToneClass(returns.return_5y)}>
                {formatPercent(returns.return_5y)}
              </span>
            </span>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <span
            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold ${
              darkMode ? "text-[#0b0d1a]" : "text-white"
            }`}
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 0 12px ${primaryColor}55`,
            }}
          >
            View Details
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default MutualFundCard;
