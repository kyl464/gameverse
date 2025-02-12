export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://vip-reseller.co.id/api/game-feature",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          api_id: process.env.VIP_API_ID, // Simpan di .env.local
          api_key: process.env.VIP_API_KEY, // Simpan di .env.local
          sign: process.env.VIP_SIGN, // Simpan di .env.local
        },
      }
    );

    const text = await response.text(); // Debugging response dari API
    console.log("Raw API Response:", text);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = JSON.parse(text);
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: error.message });
  }
}
