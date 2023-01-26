export async function getProducts() {
  const apiUrl = process.env.STORE_PRODUCTS_API!;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}
