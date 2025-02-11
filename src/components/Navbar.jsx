import { useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{ backgroundColor: "#6c3fa5" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-white ms-5" href="#">
          Game<span className="text-light">verse</span>
        </a>

        {/* Search Bar */}
        <form className="d-flex flex-grow-1 justify-content-center">
          <div className="input-group w-auto">
            <input
              className="form-control"
              type="search"
              placeholder="Cari produk & transaksi"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </div>
        </form>

        {/* Icons */}
        <ul className="navbar-nav d-flex align-items-center">
          <li className="nav-item me-3">
            <i className="bi bi-moon text-white fs-5"></i>
          </li>
          <li className="nav-item me-3 position-relative">
            <i className="bi bi-cart text-white fs-5"></i>
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </li>
          <li className="nav-item me-3">
            <i className="bi bi-house text-white fs-5"></i>
          </li>
          <li className="nav-item">
            <i className="bi bi-person text-white fs-5 me-5"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
