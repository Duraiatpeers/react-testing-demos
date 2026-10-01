export function calculatePrice(
  price: number,
  getDiscount: () => number
): number {
  const discount = getDiscount();

  return price - discount;
}