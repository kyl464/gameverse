import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.VIPPAYMENT_API_KEY;
  const API_ID = process.env.VIPPAYMENT_API_ID;
  const SIGN = md5(API_ID + API_KEY); // Pastikan untuk menginstall dan import md5

  try {
    const response = await fetch(
      "https://vip-reseller.co.id/api/game-feature",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: API_KEY,
          sign: SIGN,
          type: "services",
          filter_type: "game",
          filter_status: "available",
        }),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data game" },
      { status: 500 }
    );
  }
}
