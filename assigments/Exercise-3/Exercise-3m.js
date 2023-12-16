// Create the third line: 'Total before tax: $67.86' (use math).
basketball = 2095;
shirts = 799;
noBasketball = 2;
noshirts = 2;
basketballShipping = 499;
shirtsShipping = 499;
shippingHandling = (basketballShipping + shirtsShipping);
totalCost = (basketball * noBasketball + shirts * noshirts + shippingHandling) / 100;
console.log(`Total before tax: \t$${totalCost}`);