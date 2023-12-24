// Continuing from 5e, display 'Tax (10%): $$' in the console.
const coffee = 5;
const bagels = 3;
const soup = 9;
let cost = coffee + bagels + soup;
const taxPercent = 10;
let tax = (coffee + bagels + soup) / 10;
console.log(`Tax (10%): $${tax}`);