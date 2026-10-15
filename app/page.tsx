import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BypassInfo } from "@/components/BypassInfo";
import { ProductCatalog } from "@/components/ProductCatalog";
import { HowToOrder } from "@/components/HowToOrder";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWA } from "@/components/FloatingWA";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans w-full max-w-full overflow-x-hidden relative">
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <BypassInfo />
        <ProductCatalog />
        <HowToOrder />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
