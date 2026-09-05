import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function ProdukPage() {
  return (
    <main className="w-full bg-white text-neutral-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Product />
    </main>
  );
}
