import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildEstimateRequestLines,
  estimateRetainingWall,
  formatBudgetRange,
  formatSquareFeet,
  getMinimumStatus,
  parseDimension,
} from "./retaining-wall-estimate.ts";

function estimateFromInput(length, height) {
  const parsedLength = parseDimension(length, "wall length");
  const parsedHeight = parseDimension(height, "average wall height");
  if (!parsedLength.ok || !parsedHeight.ok) {
    return null;
  }
  return estimateRetainingWall(parsedLength.value, parsedHeight.value);
}

describe("estimateRetainingWall acceptance cases", () => {
  const cases = [
    ["50", "4", 200, "$7,000–$9,000", "below"],
    ["60", "4", 240, "$8,400–$10,800", "crosses"],
    ["100", "4", 400, "$14,000–$18,000", "at-or-above"],
    ["50.5", "4", 202, "$7,070–$9,090", "below"],
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
    assert.equal(estimate.low, 12.345 * 3.21 * 35);
    assert.equal(estimate.high, 12.345 * 3.21 * 45);
    assert.equal(formatSquareFeet(estimate.areaSqFt), "39.63 sq ft");
    assert.equal(formatBudgetRange(estimate), "$1,387–$1,783");
  });

  it("never floors the result to the project minimum", () => {
    const estimate = estimateRetainingWall(10, 2);
    assert.ok(estimate);
    assert.equal(estimate.low, 700);
    assert.equal(estimate.high, 900);
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
    assert.equal(getMinimumStatus(7000, 9999.99), "below");
    assert.equal(getMinimumStatus(7777.78, 10000), "crosses");
    assert.equal(getMinimumStatus(9999.99, 12857.13), "crosses");
    assert.equal(getMinimumStatus(10000, 12857.14), "at-or-above");
  });
});

describe("bid request lines", () => {
  it("labels dimensions as customer inputs and the range as preliminary", () => {
    const estimate = estimateRetainingWall(60, 4);
    assert.ok(estimate);
    assert.deepEqual(buildEstimateRequestLines(estimate), [
      "Customer-entered wall length: 60 ft",
      "Customer-entered average wall height above footing: 4 ft",
      "Preliminary calculator result (not a quote): 240 sq ft of wall face at $35–$45/sq ft = $8,400–$10,800",
    ]);
  });
});
