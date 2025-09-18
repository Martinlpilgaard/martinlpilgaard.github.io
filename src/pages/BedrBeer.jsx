import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import Stripes from "../components/Stripes"; 
import "./BedrBeer.css";

export default function BedrBeer() {
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project-section">
          <h1 className="bedrbeer-title">BEDR BEER</h1>
          <p className="project-intro">
            Hvordan skaber man en brandidentitet, der både tiltrækker unge, loyale forbrugere
            med interesse for alkoholfrie øl-alternativer, og samtidig appellerer til dem, der
            normalt er mere skeptiske?
          </p>

          <img
            src="/images/kunde.png"  // ← læg fil i public/images/
            alt="Kunde/partner"
            className="kundeimg"
          />

          <h2 className="bedrbeer-subtitle">BEDR BEER</h2>

          <VideoPlayer
            src="/videos/bedrforside.mp4"   // ← læg fil i public/videos/
            className="rounded-2xl shadow-lg mt-8"
          />

          <h3 className="section-caption">
            Landingpage med kampagne og interaktiv 3D-visualisering af dåse
          </h3>
        </section>

        <section aria-label="Dekorative striber">
          <Stripes
            colors={[
              "#3E3735",
              "#BC3339",
              "#D95B67",
              "#E96A4D",
              "#EF854F",
              "#426466",
              "#B6DA88",
              "#F8E488",
            ]}
            height="20px"
            gap="14px"
            duration="1000ms"
            stagger="100ms"
            rounded={true}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
