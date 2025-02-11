import Image from "next/image";

export default function CustomCarousel() {
  return (
    <div className="container my-5">
      <div
        id="customCarousel"
        className="carousel slide rounded shadow"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/Game.png"
              className="d-block w-100 rounded"
              alt="Banner 1"
              width={1000}
              height={350}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/banner2.png"
              className="d-block w-100 rounded"
              alt="Banner 2"
              width={1000}
              height={350}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/banner3.png"
              className="d-block w-100 rounded"
              alt="Banner 3"
              width={1000}
              height={350}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
