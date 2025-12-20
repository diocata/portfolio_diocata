import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Journey from "@/components/journey";
import Skills from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
