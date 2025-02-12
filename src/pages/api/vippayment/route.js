export async function POST(req) {
  const apiKey =
    "uh8MBAcKQd9YjvyaqDRB0yBw1xkZoCNYsolBXw38deR9v5UB0pFRbxN5zg59rDYf";
  const sign = "678e507c7da3775a93a0da4fc1ed3a9a"; // md5(API_ID + API_KEY)

  try {
    const response = await fetch(
      "https://vip-reseller.co.id/api/game-feature",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: apiKey,
          sign: sign,
          type: "services",
          filter_type: "game",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.message || "Gagal mengambil data" },
        { status: response.status }
      );
    }

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
