// Create the fourth line of text: 'Estimated tax (10%): $6.79' (use math and Math.round( ... ); to calculate the exact number).
basketball = 2095;
shirts = 799;
noBasketball = 2;
noshirts = 2;
basketballShipping = 499;
shirtsShipping = 499;
shippingHandling = (basketballShipping + shirtsShipping);
totalCost = (basketball * noBasketball + shirts * noshirts + shippingHandling);
tax_amount = Math.round(totalCost * 0.1) / 100;
console.log(`Estimated tax (10%): $${tax_amount}`);