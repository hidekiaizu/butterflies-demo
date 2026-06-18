import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </>
  );
}
