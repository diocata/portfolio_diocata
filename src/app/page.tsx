import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import NowPlaying from "@/components/now-playing";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <NowPlaying />
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
