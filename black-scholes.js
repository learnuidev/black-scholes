// Black-Scholes Option Pricing Model in JavaScript

const { getCallOptionPrice, getPutOptionPrice } = require("./utils");

/**
 * Function to calculate the Black-Scholes option price
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

module.exports.blackScholes = blackScholes;
