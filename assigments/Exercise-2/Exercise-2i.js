// Calculate Order total at the bottom.
toaster = 1899;
Shirt = 799;
basketball = 2095;
shipping_handling = 499;
total_cost = toaster + Shirt + basketball + shipping_handling;
tax_amount = total_cost * 0.1;
order_total = Math.round(total_cost + tax_amount) / 100;
console.log("The total order cost is $", order_total);