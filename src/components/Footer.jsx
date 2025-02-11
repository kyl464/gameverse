import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer-custom py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Navigasi */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold footer-text-light">Navigasi</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link
                  href="/home"
                  className="footer-text-light text-decoration-none footer-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="footer-text-light text-decoration-none footer-link"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/topup-guide"
                  className="text-light text-decoration-none"
                >
                  Panduan Top-Up
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-light text-decoration-none"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Metode Pembayaran */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white">Metode Pembayaran</h5>
            <div className="d-flex flex-wrap gap-3 mt-3">
              <Image
                src="/images/gopay.png"
                alt="GoPay"
                width={40}
                height={40}
                className="bg-white p-1"
              />
              <Image
                src="/images/ovo.png"
                alt="OVO"
                width={40}
                height={40}
                className="bg-white p-1"
              />
              <Image
                src="/images/dana.png"
                alt="DANA"
                width={40}
                height={40}
                className="bg-white p-1"
              />
              <Image
                src="/images/linkaja.png"
                alt="LinkAja"
                width={40}
                height={40}
                className="bg-white p-1"
              />
            </div>
          </div>

          {/* Media Sosial */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white">Ikuti Kami</h5>
            <div className="d-flex align-items-center mt-3">
              <Link
                href="https://facebook.com"
                className="text-light me-3 fs-4"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-light me-3 fs-4"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="https://twitter.com" className="text-light fs-4">
                <i className="bi bi-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-top border-light" />
        <div className="text-center text-light small mt-3">
          © 2025 GameVerse. Semua Hak Dilindungi |{" "}
          <Link href="/terms" className="text-decoration-none text-light">
            Kebijakan Privasi
          </Link>
        </div>
      </div>
    </footer>
  );
}
