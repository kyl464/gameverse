import Image from "next/image";

export default function HitsProductSection({ title, products }) {
  return (
    <section className="my-5 container">
      <h2 className="fw-bold mb-4 text-start text-muted text-gray-600 text-2xl">
        {title}
      </h2>
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6">
            <div className="product-card p-3 rounded-3 shadow-sm d-flex align-items-center bg-light transition-all">
              <img
                src={product.img_url}
                alt={product.name}
                width={60}
                height={60}
                className="me-3 border rounded"
              />
              <div>
                <h6 className="mb-1 fw-bold text-black">{product.name}</h6>
                <p className="text-muted small mb-1">{product.description}</p>
                <span className="badge bg-success">Tersedia</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
