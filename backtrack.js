const { blackScholes } = require("./black-scholes");

/**
 * Function to calculate the Backtrack Black-Scholes option price
 * @param {number} minVolatility - Minimum volatility
 * @param {number} maxVolatility - Maximum volatility
 * @param {number} minStockPrice - Min stock price
 * @param {number} maxStockPrice - Max stock price
 * @param {number} strikePrice - Option strike price
 * @param {number} time - Time to maturity (in years)
 * @param {number} rate - Risk-free interest rate (annual rate)
 * @returns {number} - The price of the option
 */

const backTrack = (props) => {
  const {
    minVolatility,
    maxVolatility,
    minStockPrice,
    maxStockPrice,
    strikePrice,
    time,
    rate,
  } = props;

  const volatilityArrSize = parseInt((maxVolatility - minVolatility) * 100) + 1;

  const volatilityArr = Array(volatilityArrSize)
    .fill(minVolatility)
    .map((val, i) => val + i * 0.01);

  const stockPriceArrSize = parseInt(maxStockPrice - minStockPrice);

  const stockPriceArr = Array(stockPriceArrSize)
    .fill(120)
    .map((x, i) => x + i);

  return volatilityArr.map((volatility) => {
    return stockPriceArr.map((stockPrice) => {
      const callPrice = blackScholes({
        stockPrice,
        strikePrice,
        time,
        rate,
        volatility,
        optionType: "call",
      });
      const putPrice = blackScholes({
        stockPrice,
        strikePrice,
        time,
        rate,
        volatility,
        optionType: "call",
      });

      return {
        volatility,
        stockPrice,
        putPrice,
        callPrice,
      };
    });
  });
};

module.exports.backTrack = backTrack;
