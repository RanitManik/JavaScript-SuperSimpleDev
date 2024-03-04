// Continuing from 5f, calculate the total (cost + tax), save it in a variable called 'totalCost', and display the message 'Total cost: $$' in the console.
const coffee = 5;
const bagels = 3;
const soup = 9;
const taxPercent = 10;
let cost = coffee + bagels + soup;
let tax = (coffee + bagels + soup) / 10;
let totalCost = tax + cost;
console.log(`The Total cost after 10% tax is: $${totalCost}`);