import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildEstimateRequestLines,
  estimateRetainingWall,
  formatBudgetRange,
  formatSquareFeet,
  getMinimumStatus,
  parseDimension,
  RETAINING_WALL_PROJECT_MINIMUM,
  RETAINING_WALL_RATE_HIGH,
  RETAINING_WALL_RATE_LOW,
} from "./retaining-wall-estimate.ts";

function estimateFromInput(length, height) {
  const parsedLength = parseDimension(length, "wall length");
  const parsedHeight = parseDimension(height, "average wall height");
  if (!parsedLength.ok || !parsedHeight.ok) {
    return null;
  }
  return estimateRetainingWall(parsedLength.value, parsedHeight.value);
}

describe("planning rates", () => {
  it("uses $40–$55 per square foot of wall face and a $10,000 minimum", () => {
    assert.equal(RETAINING_WALL_RATE_LOW, 40);
    assert.equal(RETAINING_WALL_RATE_HIGH, 55);
    assert.equal(RETAINING_WALL_PROJECT_MINIMUM, 10_000);
  });
});

describe("estimateRetainingWall acceptance cases", () => {
  const cases = [
    ["50", "4", 200, "$8,000–$11,000", "crosses"],
    ["60", "4", 240, "$9,600–$13,200", "crosses"],
    ["100", "4", 400, "$16,000–$22,000", "at-or-above"],
    ["50.5", "4", 202, "$8,080–$11,110", "crosses"],
    ["40", "4", 160, "$6,400–$8,800", "below"],
  ];

  for (const [length, height, area, range, status] of cases) {
    it(`${length} ft x ${height} ft`, () => {
      const estimate = estimateFromInput(length, height);
      assert.ok(estimate);
      assert.equal(estimate.areaSqFt, area);
      assert.equal(formatSquareFeet(estimate.areaSqFt), `${area} sq ft`);
      assert.equal(formatBudgetRange(estimate), range);
      assert.equal(estimate.minimumStatus, status);
    });
  }
});

describe("precision and rounding", () => {
  it("keeps full precision internally and rounds only for display", () => {
    const estimate = estimateRetainingWall(12.345, 3.21);
    assert.ok(estimate);
    assert.equal(estimate.areaSqFt, 12.345 * 3.21);
    assert.equal(estimate.low, 12.345 * 3.21 * 40);
    assert.equal(estimate.high, 12.345 * 3.21 * 55);
    assert.equal(formatSquareFeet(estimate.areaSqFt), "39.63 sq ft");
    assert.equal(formatBudgetRange(estimate), "$1,585–$2,180");
  });

  it("keeps fractional dollars until display", () => {
    const estimate = estimateRetainingWall(50.5, 4);
    assert.ok(estimate);
    assert.equal(estimate.low, 8080);
    assert.equal(estimate.high, 11110);

    const fractional = estimateRetainingWall(10.01, 1);
    assert.ok(fractional);
    assert.equal(fractional.low, 10.01 * 40);
    assert.equal(fractional.high, 10.01 * 55);
    assert.equal(formatBudgetRange(fractional), "$400–$551");
  });

  it("never floors the result to the project minimum", () => {
    const estimate = estimateRetainingWall(40, 4);
    assert.ok(estimate);
    assert.equal(estimate.low, 6400);
    assert.equal(estimate.high, 8800);
    assert.equal(formatBudgetRange(estimate), "$6,400–$8,800");
  });
});

describe("invalid input never produces an estimate", () => {
  const invalid = ["", "   ", "0", "0.0", "-5", "-0.5", "abc", "5ft", "1,200", "1e3", "Infinity", "NaN", ".", "5..2", "9".repeat(400)];

  for (const value of invalid) {
    it(`rejects ${JSON.stringify(value.length > 20 ? `${value.slice(0, 8)}…(${value.length} chars)` : value)}`, () => {
      const result = parseDimension(value, "wall length");
      assert.equal(result.ok, false);
      assert.ok(result.error.length > 0);
      assert.equal(estimateFromInput(value, "4"), null);
      assert.equal(estimateFromInput("50", value), null);
    });
  }

  it("rejects non-finite and non-positive numbers passed directly", () => {
    for (const [length, height] of [
      [0, 4],
      [50, 0],
      [-1, 4],
      [50, -4],
      [Number.NaN, 4],
      [50, Number.POSITIVE_INFINITY],
      [1e200, 1e200],
    ]) {
      assert.equal(estimateRetainingWall(length, height), null);
    }
  });

  it("accepts positive decimals with surrounding whitespace", () => {
    assert.deepEqual(parseDimension(" 50.5 ", "wall length"), { ok: true, value: 50.5 });
    assert.deepEqual(parseDimension(".5", "wall length"), { ok: true, value: 0.5 });
    assert.deepEqual(parseDimension("7.", "wall length"), { ok: true, value: 7 });
  });
});

describe("project minimum status", () => {
  it("classifies ranges against $10,000", () => {
    assert.equal(getMinimumStatus(7272.72, 9999.99), "below");
    assert.equal(getMinimumStatus(7272.73, 10000), "crosses");
    assert.equal(getMinimumStatus(9999.99, 13749.99), "crosses");
    assert.equal(getMinimumStatus(10000, 13750), "at-or-above");
  });
});

describe("bid request lines", () => {
  it("labels dimensions as customer inputs and the range as preliminary", () => {
    const estimate = estimateRetainingWall(60, 4);
    assert.ok(estimate);
    assert.deepEqual(buildEstimateRequestLines(estimate), [
      "Customer-entered wall length: 60 ft",
      "Customer-entered average wall height above footing: 4 ft",
      "Preliminary calculator result (not a quote): 240 sq ft of wall face at $40–$55/sq ft = $9,600–$13,200",
    ]);
  });

  it("keeps decimal inputs in the request lines", () => {
    const estimate = estimateRetainingWall(50.5, 4);
    assert.ok(estimate);
    assert.deepEqual(buildEstimateRequestLines(estimate), [
      "Customer-entered wall length: 50.5 ft",
      "Customer-entered average wall height above footing: 4 ft",
      "Preliminary calculator result (not a quote): 202 sq ft of wall face at $40–$55/sq ft = $8,080–$11,110",
    ]);
  });
});
