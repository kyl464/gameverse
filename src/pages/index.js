import ProductCardSection from "@/components/ProductCardSection";
import {
  hitsProducts,
  eWalletProducts,
  gameTopUpProducts,
} from "@/data/products";
import Navbar from "@/components/Navbar";
import CustomCarousel from "@/components/Carousel";
import HitsProductSection from "@/components/HitsProductSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CustomCarousel />

      <HitsProductSection title="Lagi Hits" products={hitsProducts} />
      <ProductCardSection title="E-Wallet" products={eWalletProducts} />
      <ProductCardSection title="Top-Up Game" products={gameTopUpProducts} />

      <Footer />
    </div>
  );
}
