const assert = require("assert");
const { backTrack } = require("../index");

const { testData } = require("./test-data");

const {
  strikePrice,
  time,
  rate,
  minVolatility,
  maxVolatility,
  minStockPrice,
  maxStockPrice,
} = testData;

describe("black scholes", () => {
  it("should calculate call price", () => {
    const backTrackedValues = backTrack({
      minVolatility,
      maxVolatility,
      minStockPrice,
      maxStockPrice,
      strikePrice,
      time,
      rate,
    });

    console.log(backTrackedValues);

    assert.equal(Array.isArray(backTrackedValues), true);
    assert.equal(backTrackedValues?.length, 41);
  });
});
