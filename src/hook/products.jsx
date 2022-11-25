const API = 'http://localhost:3004';

export async function getAllProducts() {
  const res = await fetch(`${API}/products`);
  const result = await res.json();
  return result;
}

export async function getProduct(id) {
  const res = await fetch(`${API}/products/${id}`);
  const result = await res.json();
  return result;
}
