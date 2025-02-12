import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ProductCardSection from "@/components/ProductCardSection";
import Navbar from "@/components/Navbar";
import CustomCarousel from "@/components/Carousel";
import HitsProductSection from "@/components/HitsProductSection";
import Footer from "@/components/Footer";

// Inisialisasi Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      console.log("Fetched products:", data); // Lihat data yang diambil
      console.log("Fetch error:", error); // Lihat apakah ada error

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CustomCarousel />

      <HitsProductSection
        title="Lagi Hits"
        products={products.filter((p) => p.category === "hits")}
      />
      <ProductCardSection
        title="E-Wallet"
        products={products.filter((p) => p.category === "e-wallet")}
      />
      <ProductCardSection
        title="Top-Up Game"
        products={products.filter((p) => p.category === "topup-games")}
      />

      <Footer />
    </div>
  );
}
