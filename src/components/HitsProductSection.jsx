import Image from "next/image";

export default function HitsProductSection({ title, products }) {
  return (
    <section className="my-5 container">
      <h2 className="fw-bold mb-4 text-start text-muted text-gray-600 text-2xl">
        {title}
      </h2>
      <div className="row g-3">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <div className="p-3 rounded-3 shadow-sm d-flex align-items-center bg-light">
              <Image
                src={product.image}
                alt={product.name}
                width={60}
                height={60}
                className="me-3 border"
              />
              <div>
                <h6 className="mb-1 fw-bold text-black">{product.name}</h6>
                <p className="text-muted small mb-1">{product.description}</p>
                <span
                  className={`badge ${
                    product.status === "Tersedia" ? "bg-success" : "bg-danger"
                  }`}
                >
                  {product.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
