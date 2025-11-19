// define variables and assign values
let principal = 1000;
let rate = 5; // percent per year
let timeInYears = 3;

// calculate simple interest and display result
let simpleInterest = (principal * rate * timeInYears) / 100;
console.log("Simple Interest:", simpleInterest);

// calculate compound interest and display result (compound annually)
let amount = principal * Math.pow(1 + rate / 100, timeInYears);
let compoundInterest = amount - principal;
console.log("Compound Interest:", compoundInterest.toFixed(2));
