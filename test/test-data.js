// Example usage
const stockPrice = 100; // Current stock price
const strikePrice = 100; // Strike price
const time = 1; // Time to maturity in years
const rate = 0.05; // Risk-free interest rate
const volatility = 0.2; // Volatility

const minVolatility = 0.1;
const maxVolatility = 0.5;
const minStockPrice = 100;
const maxStockPrice = 120;

module.exports.testData = {
  stockPrice,
  strikePrice,
  time,
  rate,
  volatility,
  minStockPrice,
  maxStockPrice,
  minVolatility,
  maxVolatility,
};
