const API_KEY =
  "fvGnShnVVTj4clljIc5K37qSprdqrrwUhAWoCHiIk3wjFHzBnkf2B2I385ZYkua6";
const BASE_URL = "https://vip-reseller.co.id/api/game";

export async function getGameServices() {
  const response = await fetch(`${BASE_URL}/services`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  return response.json();
}

export async function createOrder(orderData) {
  const response = await fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  return response.json();
}
