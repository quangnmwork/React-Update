export function generateProducts(): String[] {
  let products: string[] = [];
  for (let i = 1; i < 10000; i++) {
    products.push(`Product ${i}`);
  }
  return products;
}
