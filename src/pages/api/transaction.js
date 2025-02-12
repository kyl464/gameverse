export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, gameId, amount } = req.body;

    // Validasi data
    if (!userId || !gameId || !amount) {
      return res.status(400).json({ message: "Data tidak lengkap." });
    }

    // Simulasikan proses top-up
    try {
      // Contoh logika top-up atau panggilan API eksternal
      res.status(200).json({ message: "Top-up berhasil!" });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Metode ${req.method} tidak diizinkan.`);
  }
}
