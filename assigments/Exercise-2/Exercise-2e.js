// Calculate a 20% tax for the total in 2c (remember that 1% = 1/100, so 20% = 20 / 100 = 0.2).
toaster = 18.50;
shirts = 7.50 * 2;
tax_amount = Math.round((toaster + shirts) * 100) / 100;
console.log("The total cost of the products are: $", total_cost);
taxCalculate = 20 * (total_cost) / 100;
console.log("The 20% tax will be $", taxCalculate);