import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import RadarHero from "../components/RadarHero";     // helt ny hero-komponent
import "./Radar.css";

export default function Radar() {
  return (
    <>
      <Header />
      <main className="radar-page">
        {/* Hero (kan tilpasses via props) */}
        <RadarHero
          color="#E62860"
          line1="KULTURELT"
          line2="& FÆNGENDE"
          line3="RE-DESIGN"
        />

        <section className="radar-section">
          <h1 className="radar-title">RADAR</h1>

          <p className="radar-intro">
            "Hvordan kan Radar synliggøre sin rolle i et presset kulturliv, mobilisere lokalsamfundet og skabe optimale koncertoplevelser for både kunstnere og publikum?”
          </p>

          <img
            src="/images/kunde.png"      // ← læg din fil i public/images/
            alt="Kunde/partner"
            className="radar-image"
          />

          <h2 className="radar-subtitle">RADAR</h2>


          <VideoPlayer
            src="/videos/radar-intro.mp4"      // ← læg din fil i public/videos/
            className="radar-video"
          />

          <h3 className="radar-caption">
            Event-oversigt med rytme, bevægelse og filtrering
          </h3>
        </section>
      </main>
      <Footer />
    </>
  );
}
