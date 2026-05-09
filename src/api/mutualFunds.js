const API_BASE_URL = "https://mfdata.in/api/v1";
const SCHEMES_PAGE_SIZE = 1000;
const TOP_ONE_YEAR_AMFI_CODES = [
  "120754",
  "119424",
  "120398",
  "120389",
  "119568",
  "147567",
];

let allSchemesCache = null;
let featuredSchemesCache = null;
let topOneYearSchemesCache = null;

function wait(ms) {
  return new Promise((resolve) => {
    globalThis.setTimeout(resolve, ms);
  });
}

async function fetchJson(url, attempt = 1) {
  const response = await fetch(url);

  if (!response.ok) {
    if ((response.status === 429 || response.status >= 500) && attempt < 8) {
      await wait(1000 * attempt);
      return fetchJson(url, attempt + 1);
    }

    throw new Error(`Mutual fund API request failed: ${response.status}`);
  }

  const payload = await response.json();

  if (payload.status !== "success") {
    throw new Error("Mutual fund API returned an unsuccessful response");
  }

  return payload;
}

export async function getSchemesPage(limit = 6, offset = 0) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
  });
  const payload = await fetchJson(`${API_BASE_URL}/schemes?${params.toString()}`);
  return {
    data: payload.data || [],
    meta: payload.meta || {},
  };
}

export async function getSchemeDetails(amfiCode) {
  if (!amfiCode) return null;
  const payload = await fetchJson(`${API_BASE_URL}/schemes/${amfiCode}`);
  return payload.data || null;
}

export async function getFeaturedSchemes(limit = 6) {
  if (featuredSchemesCache) {
    return featuredSchemesCache.slice(0, limit);
  }

  const { data } = await getSchemesPage(limit, 0);
  const details = await Promise.all(
    data.map(async (scheme) => {
      try {
        const detail = await getSchemeDetails(scheme.amfi_code);
        return detail ? { ...scheme, ...detail } : scheme;
      } catch {
        return scheme;
      }
    })
  );

  featuredSchemesCache = details;
  return details.slice(0, limit);
}

export async function getTopOneYearSchemes(limit = 6) {
  if (topOneYearSchemesCache) {
    return topOneYearSchemesCache.slice(0, limit);
  }

  const details = await Promise.all(
    TOP_ONE_YEAR_AMFI_CODES.map(async (amfiCode) => {
        try {
          return getSchemeDetails(amfiCode);
        } catch {
          return null;
        }
      }
    )
  );

  topOneYearSchemesCache = details
    .filter(Boolean)
    .filter((scheme) => isFiniteNumberValue(scheme.returns?.rank_1y))
    .sort((a, b) => {
      const rankDifference = Number(a.returns.rank_1y) - Number(b.returns.rank_1y);
      if (rankDifference !== 0) return rankDifference;
      return Number(b.returns?.return_1y || 0) - Number(a.returns?.return_1y || 0);
    });

  if (topOneYearSchemesCache.length === 0) {
    return getFeaturedSchemes(limit);
  }

  return topOneYearSchemesCache.slice(0, limit);
}

function isFiniteNumberValue(value) {
  return value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
}

export async function getAllSchemes() {
  if (allSchemesCache) return allSchemesCache;

  const firstAttempt = await getSchemesPage(SCHEMES_PAGE_SIZE, 0);

  if (!firstAttempt.meta?.has_next) {
    allSchemesCache = firstAttempt.data;
    return allSchemesCache;
  }

  const allSchemes = [...firstAttempt.data];
  const limit = firstAttempt.meta.limit || SCHEMES_PAGE_SIZE;
  const total = firstAttempt.meta.total || firstAttempt.data.length;
  const offsets = [];

  for (let offset = firstAttempt.meta.offset + firstAttempt.meta.count; offset < total; offset += limit) {
    offsets.push(offset);
  }

  for (const offset of offsets) {
    await wait(150);
    const page = await getSchemesPage(limit, offset);
    allSchemes.push(...page.data);
  }

  allSchemesCache = allSchemes;
  return allSchemesCache;
}

export function filterSchemesByPrefix(schemes, query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return schemes;

  return schemes.filter((scheme) => {
    const normalizedName = normalizeSearchText(scheme.name || "");
    return (
      normalizedName.startsWith(normalizedQuery) ||
      normalizedName.split(" ").some((part) => part.startsWith(normalizedQuery))
    );
  });
}

export function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function createSchemeSearchIndex(schemes) {
  return schemes.map((scheme) => {
    const normalizedName = normalizeSearchText(scheme.name);
    return {
      scheme,
      normalizedName,
      nameParts: normalizedName.split(" ").filter(Boolean),
    };
  });
}

export function searchSchemeIndex(index, query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return index.map((entry) => entry.scheme);

  return index
    .filter((entry) => {
      return (
        entry.normalizedName.startsWith(normalizedQuery) ||
        entry.nameParts.some((part) => part.startsWith(normalizedQuery))
      );
    })
    .map((entry) => entry.scheme);
}
