// Planning rates for the /retaining-walls campaign page only. Do not publish
// these on other pages without owner approval.
export const RETAINING_WALL_RATE_LOW = 35;
export const RETAINING_WALL_RATE_HIGH = 45;
export const RETAINING_WALL_PROJECT_MINIMUM = 10_000;

export type RetainingWallMinimumStatus = "below" | "crosses" | "at-or-above";

export type RetainingWallEstimate = {
  lengthFt: number;
  heightFt: number;
  areaSqFt: number;
  low: number;
  high: number;
  minimumStatus: RetainingWallMinimumStatus;
};

export type DimensionResult =
  | { ok: true; value: number }
  | { ok: false; error: string };

const DECIMAL_PATTERN = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;

export function parseDimension(raw: string, label: string): DimensionResult {
  const text = raw.trim();

  if (!text) {
    return { ok: false, error: `Enter the ${label} in feet.` };
  }

  if (!DECIMAL_PATTERN.test(text)) {
    return {
      ok: false,
      error: `Enter the ${label} as a number of feet, like 50 or 50.5.`,
    };
  }

  const value = Number(text);

  if (!Number.isFinite(value)) {
    return { ok: false, error: `Enter a smaller ${label}.` };
  }

  if (value <= 0) {
    return { ok: false, error: `The ${label} must be greater than 0 feet.` };
  }

  return { ok: true, value };
}

export function getMinimumStatus(
  low: number,
  high: number,
): RetainingWallMinimumStatus {
  if (high < RETAINING_WALL_PROJECT_MINIMUM) {
    return "below";
  }

  if (low < RETAINING_WALL_PROJECT_MINIMUM) {
    return "crosses";
  }

  return "at-or-above";
}

/** Returns null unless both dimensions are positive finite numbers. */
export function estimateRetainingWall(
  lengthFt: number,
  heightFt: number,
): RetainingWallEstimate | null {
  if (
    !Number.isFinite(lengthFt) ||
    !Number.isFinite(heightFt) ||
    lengthFt <= 0 ||
    heightFt <= 0
  ) {
    return null;
  }

  const areaSqFt = lengthFt * heightFt;
  const low = areaSqFt * RETAINING_WALL_RATE_LOW;
  const high = areaSqFt * RETAINING_WALL_RATE_HIGH;

  if (!Number.isFinite(areaSqFt) || !Number.isFinite(high)) {
    return null;
  }

  return {
    lengthFt,
    heightFt,
    areaSqFt,
    low,
    high,
    minimumStatus: getMinimumStatus(low, high),
  };
}

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const feetFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 3,
});

const areaFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

export function formatUsd(amount: number) {
  return usdFormatter.format(amount);
}

export function formatFeet(feet: number) {
  return `${feetFormatter.format(feet)} ft`;
}

export function formatSquareFeet(squareFeet: number) {
  return `${areaFormatter.format(squareFeet)} sq ft`;
}

export function formatBudgetRange(estimate: RetainingWallEstimate) {
  return `${formatUsd(estimate.low)}–${formatUsd(estimate.high)}`;
}

/** Lines added to a bid request when the customer submits it with a calculation. */
export function buildEstimateRequestLines(estimate: RetainingWallEstimate) {
  return [
    `Customer-entered wall length: ${formatFeet(estimate.lengthFt)}`,
    `Customer-entered average wall height above footing: ${formatFeet(estimate.heightFt)}`,
    `Preliminary calculator result (not a quote): ${formatSquareFeet(estimate.areaSqFt)} of wall face at $${RETAINING_WALL_RATE_LOW}–$${RETAINING_WALL_RATE_HIGH}/sq ft = ${formatBudgetRange(estimate)}`,
  ];
}
