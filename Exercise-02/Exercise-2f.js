// Calculate the cost of the products (before shipping and taxes). Hint: calculate in cents to avoid inaccuracies.
// a toaster ($18.99) | 1 t-shirt ($7.50 each) | 1 basketball ($20.95)
toaster = 1899;
Shirt = 799;
basketball = 2095;
total_cost = Math.round(toaster + Shirt + basketball) / 100;
console.log("The total cost of the products before tax and shipping is $", total_cost);