# Black Scholes

Black Scholes Algorithm in pure JS

## Install

```bash
npm install scholes
```

## Usage

```javascript
// Using Require
const { blackScholes } = require("scholes");

// Using Import
// import { blackScholes } from "scholes";

const stockPrice = 100; // Current stock price
const strikePrice = 100; // Strike price
const time = 1; // Time to maturity in years
const rate = 0.05; // Risk-free interest rate
const volatility = 0.2; // Volatility

const callPrice = blackScholes({
  stockPrice,
  strikePrice,
  time,
  rate,
  volatility,
  optionType: "call",
});

console.log(callPrice === 10.450575415435083);
```
