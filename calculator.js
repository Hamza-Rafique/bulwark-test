
export function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

export function applyDiscount(price, discount) {
  if (discount > 50) {
    throw new Error('Discount cannot exceed 50%');
  }
  return price - (price * discount / 100);
}
export function calculateDiscount(price, percentage) {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage must be between 0 and 100');
  }
  return price * (percentage / 100);
}