import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySnippet from "@/components/StorySnippet";
import Product from "@/components/Product";
import SectionOrder from "@/components/SectionOrder";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <main className="w-full bg-white text-neutral-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Hero />
      <StorySnippet />
      <WhySection />
      <Product />
      <SectionOrder />
    </main>
  );
}