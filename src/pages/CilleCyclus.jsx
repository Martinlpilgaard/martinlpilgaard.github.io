import Header from "../components/Header";
import Footer from "../components/Footer";
import LoopVideo from "../components/LoopVideo";
import CilleHero from "../components/CilleHero";  // 👈 import
import ArrowRight from "../components/ArrowRight"; // 👈 nyt component
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
          
          {/* Pil under videoen */}
         <div className="cille-arrow-row">
        <ArrowRight
         width="clamp(28px,4vw,48px)"
         duration="2.4s"
         style={{ marginTop: "20px" }}
        />
        <img
  src="/images/sjovt.svg"
  alt="Ekstra grafik"
  className="cille-arrow-img"
/>
        </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
