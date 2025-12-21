import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Journey from "@/components/journey";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import NowPlaying from "@/components/now-playing";
import KonamiCode from "@/components/konami-code";
import MagicCursor from "@/components/magic-cursor";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MagicCursor />
      <ScrollProgress />
      <NowPlaying />
      <KonamiCode />
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
