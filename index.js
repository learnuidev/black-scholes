// Black-Scholes Option Pricing Model in JavaScript

/**
 * Calculates the cumulative distribution function for a standard normal distribution
 * @param {number} x - The value to evaluate
 * @returns {number} - The CDF value
 */

function cumulativeNormalDistribution(value) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const sign = value < 0 ? -1 : 1;
  const absX = Math.abs(value) / Math.sqrt(2.0);

  const t = 1.0 / (1.0 + p * absX);
  const y = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t;
  return 0.5 * (1.0 + sign * (1.0 - Math.exp(-absX * absX) * y));
}

// Black-Scholes Option Pricing Model in JavaScript

// Helper function to calculate d1 and d2
function getDelta({ stockPrice, strikePrice, time, rate, volatility }) {
  return (
    (Math.log(stockPrice / strikePrice) +
      (rate + (volatility * volatility) / 2.0) * time) /
    (volatility * Math.sqrt(time))
  );
}
function calculateD1D2(props) {
  const { stockPrice, strikePrice, time, rate, volatility } = props;
  const d1 = getDelta({
    stockPrice,
    strikePrice,
    time,
    rate,
    volatility,
  });

  const d2 = d1 - volatility * Math.sqrt(time);
  return { d1, d2 };
}

function getCallOptionPrice(props) {
  const { stockPrice, strikePrice, time, rate, volatility } = props;
  const { d1, d2 } = calculateD1D2({
    stockPrice,
    strikePrice,
    time,
    rate,
    volatility,
  });

  const N_d1 = cumulativeNormalDistribution(d1);
  const N_d2 = cumulativeNormalDistribution(d2);

  return stockPrice * N_d1 - strikePrice * Math.exp(-rate * time) * N_d2;
}

// Function to calculate the Black-Scholes option price
function getPutOptionPrice(props) {
  const { stockPrice, strikePrice, time, rate, volatility } = props;
  const { d1, d2 } = calculateD1D2({
    stockPrice,
    strikePrice,
    time,
    rate,
    volatility,
  });

  const N_minusD1 = cumulativeNormalDistribution(-d1);
  const N_minusD2 = cumulativeNormalDistribution(-d2);
  return (
    strikePrice * Math.exp(-rate * time) * N_minusD2 - stockPrice * N_minusD1
  );
}

// Function to calculate the Black-Scholes option price
/**
 * Black-Scholes pricing model
 * @param {number} stockPrice - Current stock price
 * @param {number} strikePrice - Option strike price
 * @param {number} time - Time to maturity (in years)
 * @param {number} rate - Risk-free interest rate (annual rate)
 * @param {number} volatility - Volatility of the stock (annualized standard deviation)
 * @param {string} optionType - Type of the option ('call' or 'put')
 * @returns {number} - The price of the option
 */

function blackScholes(props) {
  const {
    stockPrice,
    strikePrice,
    time,
    rate,
    volatility,
    optionType = "call",
  } = props;

  if (optionType === "call") {
    return getCallOptionPrice({
      stockPrice,
      strikePrice,
      time,
      rate,
      volatility,
    });
  } else {
    return getPutOptionPrice({
      stockPrice,
      strikePrice,
      time,
      rate,
      volatility,
    });
  }
}

module.exports = {
  blackScholes,
};
