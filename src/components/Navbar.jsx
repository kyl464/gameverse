import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full py-3 px-5 shadow-lg bg-purple-700 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a className="text-white text-2xl font-bold" href="#">
          Game<span className="text-gray-300">verse</span>
        </a>

        {/* Search Bar (Dibungkus div flex agar tetap center) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="bg-white rounded-md p-1 shadow-md w-72 flex">
            <input
              type="text"
              className="px-3 py-1 w-full outline-none text-gray-800 rounded-l-md"
              placeholder="Cari produk..."
            />
            <button className="px-3 py-1 bg-purple-500 text-white rounded-r-md hover:bg-purple-600">
              Cari
            </button>
          </div>
        </div>

        {/* Kategori Dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white text-lg focus:outline-none flex items-center"
          >
            Kategori ▼
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-white text-gray-700 shadow-lg rounded-md w-48 z-50">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Top-Up Game
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  E-Wallet
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Voucher Digital
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Burger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-purple-700 py-3 shadow-md">
          {/* Dropdown di mobile */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white text-lg focus:outline-none flex items-center"
            >
              Kategori ▼
            </button>
            {dropdownOpen && (
              <ul className="absolute mt-2 bg-white text-gray-700 shadow-lg rounded-md w-48 z-50">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Top-Up Game
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    E-Wallet
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Voucher Digital
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
