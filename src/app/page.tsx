import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { WaitlistSection } from "@/components/WaitlistSection";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid products={products} />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
