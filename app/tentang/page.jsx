import Navbar from "@/components/Navbar";
import StorySnippet from "@/components/StorySnippet";

export default function TentangPage() {
  return (
    <main className="w-full bg-white text-neutral-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <StorySnippet />
    </main>
  );
}
