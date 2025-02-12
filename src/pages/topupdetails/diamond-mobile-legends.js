import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TopUpDetail = () => {
  const [selectedVarian, setSelectedVarian] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const varianList = [
    { id: 1, name: "5 (5+0) Diamonds", price: 1539 },
    { id: 2, name: "10 (9+1) Diamonds", price: 3120 },
    { id: 3, name: "12 (11+1) Diamonds", price: 3590 },
  ];

  const paymentMethods = [
    { id: "qris", name: "QRIS", icon: "/images/qris.png" },
    { id: "dana", name: "DANA", icon: "/images/dana.png" },
    { id: "bca", name: "BCA", icon: "/images/bca.png" },
  ];

  const totalPrice = selectedVarian ? selectedVarian.price * quantity : 0;
  return (
    <>
      <Navbar />;
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto p-4 ">
        <div className="w-full md:w-2/3 space-y-6">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold">Nama Game</h1>
            <img
              src="/game-image.jpg"
              alt="Game"
              className="w-full h-40 object-cover mt-2 rounded-lg"
            />
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="grid grid-cols-[auto_1fr]">
              <h2 className="text-lg bg-purple-500 font-semibold px-4 text-white pt-2 pb-2 rounded-tl-lg">
                1.
              </h2>
              <h2 className="text-lg bg-gray-500 font-semibold pl-4 text-white pt-2 pb-2 rounded-tr-lg">
                Masukkan Data Akun
              </h2>
            </div>
            <div className="mt-3 pl-4 pb-4 pr-4">
              <input
                type="text"
                placeholder="Ketikan ID"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="grid grid-cols-[auto_1fr]">
              <h2 className="text-lg bg-purple-500 font-semibold px-4 text-white pt-2 pb-2 rounded-tl-lg">
                2.
              </h2>
              <h2 className="text-lg bg-gray-500 font-semibold pl-4 text-white pt-2 pb-2 rounded-tr-lg">
                Pilih Varian
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-3 pl-4 pb-4 pr-4">
              {varianList.map((item) => (
                <div
                  key={item.id}
                  className={`p-3 rounded-lg cursor-pointer border-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                    selectedVarian?.id === item.id
                      ? "border-purple-500 bg-gray-700"
                      : "border-gray-700"
                  }`}
                  onClick={() => setSelectedVarian(item)}
                >
                  <p className="text-white text-center mt-1">{item.name}</p>
                  <p className="text-purple-400 text-center font-bold">
                    Rp {item.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="grid grid-cols-[auto_1fr]">
              <h2 className="text-lg bg-purple-500 font-semibold px-4 text-white pt-2 pb-2 rounded-tl-lg">
                3.
              </h2>
              <h2 className="text-lg bg-gray-500 font-semibold pl-4 text-white pt-2 pb-2 rounded-tr-lg">
                Metode Pembayaran
              </h2>
            </div>
            <div className="grid grid-cols-3 mt-3 pl-4 pb-4 pr-4 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-3 rounded-lg cursor-pointer border-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
                    selectedPayment?.id === method.id
                      ? "border-purple-500 bg-gray-700"
                      : "border-gray-700"
                  }`}
                  onClick={() => setSelectedPayment(method)}
                >
                  <img
                    src={method.icon}
                    alt={method.name}
                    className="w-10 mx-auto"
                  />
                  <p className="text-white text-center mt-1">{method.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detail Kontak */}
          <div className="bg-gray-800 rounded-lg">
            <div className="grid grid-cols-[auto_1fr]">
              <h2 className="text-lg bg-purple-500 font-semibold px-4 text-white pt-2 pb-2 rounded-tl-lg">
                4.
              </h2>
              <h2 className="text-lg bg-gray-500 font-semibold pl-4 text-white pt-2 pb-2 rounded-tr-lg">
                Detail Kontak
              </h2>
            </div>

            <div className="mt-3 pl-4 pb-4 pr-4">
              <input
                type="text"
                placeholder="Nomor WhatsApp"
                className="w-full p-2 rounded bg-gray-700 text-white mt-2"
              />
            </div>
          </div>

          {/* Kode Promo */}
          <div className="bg-gray-800 rounded-lg">
            <div className="grid grid-cols-[auto_1fr]">
              <h2 className="text-lg bg-purple-500 font-semibold px-4 text-white pt-2 pb-2 rounded-tl-lg">
                5.
              </h2>
              <h2 className="text-lg bg-gray-500 font-semibold pl-4 text-white pt-2 pb-2 rounded-tr-lg">
                Kode Promo
              </h2>
            </div>

            <div className="mt-3 pl-4 pb-4 pr-4">
              <input
                type="text"
                placeholder="Masukkan Kode Promo"
                className="w-full p-2 rounded bg-gray-700 text-white mt-2"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 md:sticky top-4 h-fit space-y-4 md:ml-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center shadow-lg">
            <h2 className="text-lg font-semibold text-white">
              Ulasan dan Rating
            </h2>
            <p className="text-3xl text-yellow-400 font-bold mt-2">4.9 ⭐</p>
            <p className="text-gray-300 text-sm">Berdasarkan 4.2jt rating</p>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-lg bg-purple-500 font-semibold text-center text-white pt-2 pb-2 rounded-tr-lg">
              Ringkasan Pembelian
            </h2>
            <div className="mt-3 pl-4 pb-4 pr-4">
              {selectedVarian ? (
                <>
                  <div className="flex justify-between text-gray-400 mt-2">
                    <span>Produk:</span>{" "}
                    <span className="text-right">{selectedVarian.name}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Harga:</span>{" "}
                    <span className="text-right">
                      Rp {selectedVarian.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Biaya:</span> <span className="text-right">Rp 0</span>
                  </div>
                  <hr className="border-gray-600 my-2 border" />
                  <div className="flex justify-between text-white text-2xl font-bold mt-2">
                    <span>Total:</span>{" "}
                    <span className="text-right">
                      Rp {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </>
              ) : (
                <p className="text-gray-400">
                  Pilih produk untuk melihat total
                </p>
              )}
            </div>
          </div>

          <button className="w-full p-3 text-white font-bold rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Pesan Sekarang
          </button>
        </div>
      </div>
      {/* Deskripsi */}
      <div className="flex flex-col   w-full max-w-screen-xl mx-auto p-4 ">
        <div className="grid grid-cols-[auto_1fr]">
          <h2 className="text-lg bg-purple-500 font-semibold px-4 text-white pt-2 pb-2 rounded-tl-lg">
            {/* Judul kiri */}
          </h2>
          <h2 className="text-lg bg-gray-500 font-semibold px-4 text-white pt-2 pb-2 rounded-tr-lg">
            Deskripsi
          </h2>
        </div>
        <div className=" bg-gray-800 pl-4 pb-4 pr-4">
          <div className="text-gray-300 mt-4">
            Ini adalah deskripsi tentang game dan top-up.Ini adalah deskripsi
            tentang game dan top-up.Ini adalah deskripsi tentang game dan
            top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.Ini adalah deskripsi tentang game
            dan top-up.Ini adalah deskripsi tentang game dan top-up.Ini adalah
            deskripsi tentang game dan top-up.
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default TopUpDetail;
