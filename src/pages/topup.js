"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TopUpPage() {
  const searchParams = useSearchParams();
  const game = searchParams.get("game");

  const [topUpOptions, setTopUpOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!game) return;

    const fetchTopUpOptions = async () => {
      setLoading(true);
      try {
        const apiKey = process.env.VIPPAYMENT_API_KEY; // Ganti dengan API Key kamu
        const response = await fetch(
          `https://vip-reseller.co.id/api/game-feature?key=${apiKey}&game=${game}`
        );
        const data = await response.json();

        if (data.status === true) {
          setTopUpOptions(data.data);
        } else {
          setTopUpOptions([]);
        }
      } catch (error) {
        console.error("Error fetching top-up options:", error);
        setTopUpOptions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopUpOptions();
  }, [game]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        {game ? `Top Up ${game.replace("-", " ")}` : "Pilih Game"}
      </h1>

      <form className="bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-2 text-sm font-medium">ID Game:</label>
        <input
          type="text"
          placeholder="Masukkan ID Game"
          className="w-full p-2 border rounded-lg mb-4"
          required
        />

        <h2 className="text-lg font-semibold mb-2">Pilih Nominal:</h2>

        {loading ? (
          <p>Loading...</p>
        ) : topUpOptions.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {topUpOptions.map((option, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <p className="text-sm font-medium">{option.nominal}</p>
                <p className="text-gray-600">Rp {option.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">Data tidak tersedia</p>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4"
        >
          Lanjutkan
        </button>
      </form>
    </div>
  );
}
