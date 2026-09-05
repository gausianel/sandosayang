import Navbar from "@/components/Navbar";
import SectionOrder from "@/components/SectionOrder";

export default function PesanPage() {
  return (
    <main className="w-full bg-white text-neutral-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <SectionOrder />
    </main>
  );
}
