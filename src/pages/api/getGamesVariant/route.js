export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.vipayment.com/topup/games"); // Ganti dengan endpoint API yang sesuai
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data" });
  }
}
