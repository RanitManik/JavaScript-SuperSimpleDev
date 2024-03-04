// Calculate the Total before tax.
// a toaster ($18.99) | 1 t-shirt ($7.50 each) | 1 basketball ($20.95)
// shipping and handling cost = $4.99
toaster = 1899;
Shirt = 799;
basketball = 2095;
shipping_handling = 499;
total_cost = Math.round(toaster + Shirt + basketball + shipping_handling) / 100;
console.log("The total cost of the products before tax is $", total_cost);