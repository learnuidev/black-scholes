const assert = require("assert");
const { blackScholes } = require("../index");
const { testData } = require("./test-data");

const { stockPrice, strikePrice, time, rate, volatility } = testData;

describe("black scholes", () => {
  it("should calculate call price", () => {
    const callPrice = blackScholes({
      stockPrice,
      strikePrice,
      time,
      rate,
      volatility,
      optionType: "call",
    });

    assert.equal(callPrice, 10.450575415435083);
  });

  it("should calculate put price", () => {
    const putPrice = blackScholes({
      stockPrice,
      strikePrice,
      time,
      rate,
      volatility,
      optionType: "put",
    });

    assert.equal(putPrice, 5.573517865506496);
  });
});
