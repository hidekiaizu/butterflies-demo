import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <main>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </>
  );
}
