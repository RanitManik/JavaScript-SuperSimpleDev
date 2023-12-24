// Let's say the restaurant charges a 10% tax. Using the 'cost' variable from 5c, calculate the tax (hint: multiply by 0.1), and save the result in a variable.
const coffee = 5;
const bagels = 3;
const soup = 9;
let cost = coffee + bagels + soup;
const taxPercent = 10;
let tax = (coffee + bagels + soup) / 10;
console.log(`The Total cost after 10% tax is: $${tax}`);