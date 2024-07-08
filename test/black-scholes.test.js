const assert = require("assert");
const { blackScholes } = require("../index");

// Example usage
const stockPrice = 100; // Current stock price
const strikePrice = 100; // Strike price
const time = 1; // Time to maturity in years
const rate = 0.05; // Risk-free interest rate
const volatility = 0.2; // Volatility

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
