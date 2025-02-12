export default function ProductCardSection({ title, products }) {
  return (
    <section className="my-12 container mx-auto">
      <h3 className="font-bold mb-12 text-start text-gray-600 text-2xl">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-lg rounded-2xl transition-all duration-500 hover:scale-105 pt-16"
          >
            {/* Floating Large Image */}
            <div className="relative -mt-24 mx-auto w-40 h-40">
              <img
                src={product.img_url} // Ambil dari database
                alt={product.name}
                className="w-full h-full object-cover shadow-md border rounded-xl"
              />
            </div>

            {/* Card Content */}
            <div className="text-center px-4 pt-8 pb-5">
              <div className="text-muted text-xs">{product.description}</div>
              <div className="text-black fw-bold font-medium mt-1">
                {product.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
