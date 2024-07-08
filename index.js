// Black-Scholes Option Pricing Model in JavaScript

const { backTrack } = require("./backtrack");
const { blackScholes } = require("./black-scholes");

module.exports = {
  blackScholes,
  backTrack,
};
