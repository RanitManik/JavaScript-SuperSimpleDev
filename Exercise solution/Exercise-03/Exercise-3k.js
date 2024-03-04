// order summary =>
// 2 basketballs ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.

// Items (4):              $57.88
// Shipping & handling:    $9.98
// Total before tax:       $67.86
// Estimated tax (10%):    $6.79
// Order total:            $74.65

// Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).

basketball = 2095;
shirts = 799;
noBasketball = 2;
noshirts = 2;
totalItems = noshirts + noBasketball;
itemTotalCost = (basketball * noBasketball + shirts * noshirts) / 100;
console.log(`Items (${totalItems}): \t$${itemTotalCost}`);