export async function getAllProducts() {
  const res = await fetch('192.168.128.7:3000/api/products');
  const result = await res.json();
  return result;
}

export async function getProduct(id) {
  const res = await fetch(`192.168.128.7:3000/api/products/${id}`);
  const result = await res.json();
  return result;
}
