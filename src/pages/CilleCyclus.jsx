import Header from "../components/Header";
import Footer from "../components/Footer";
import LoopVideo from "../components/LoopVideo";
import CilleHero from "../components/CilleHero";  // 👈 import
import "./CilleCyclus.css";

export default function CilleCyclus() {
  return (
    <>
      <Header />
      <main className="project-page">
        {/* Hero overlay ovenpå */}
        <CilleHero />

        <section className="project-section">
          <h1 className="cillecyclus-title">Cilles Cyklus</h1>
          <p>
            "Hvordan kan man skabe et interaktivt formidlingselement til en
            udstilling om menstruation og kvindekroppens cyklus, målrettet børn
            og unge?"
          </p>

          {/* Inline video */}
          <LoopVideo
            src="/videos/loop-video.mp4"
            className="rounded-2xl shadow-lg mt-8"
          />
          <h2 className="cillecyclus-title2">MEN-STRU-A-TION</h2>
          
        </section>
      </main>
      <Footer />
    </>
  );
}
