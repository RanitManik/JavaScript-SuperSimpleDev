//Calculate the 10% tax exactly. Hint: use Math.round().
// a toaster ($18.99) | 1 t-shirt ($7.50 each) | 1 basketball ($20.95)
toaster = 1899;
Shirt = 799;
basketball = 2095;
shipping_handling = 499;
total_cost = toaster + Shirt + basketball + shipping_handling;
tax_amount = Math.round((total_cost * 0.1)) / 100;
console.log("The total tax amount is $", tax_amount);