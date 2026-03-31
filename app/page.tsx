import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

export default function HomePage() {
  return (
    <div className="mx-auto grid min-h-svh max-w-6xl grid-cols-1 md:grid-cols-[1fr_2fr]">
      <aside className="sticky top-0 h-fit max-md:relative max-md:border-b max-md:border-maroon/10 md:max-h-svh md:overflow-y-auto bg-cream p-4 md:p-6">
        <Sidebar />
      </aside>
      <main className="p-8 md:py-10 md:px-14">
        <MainContent />
      </main>
    </div>
  );
}
