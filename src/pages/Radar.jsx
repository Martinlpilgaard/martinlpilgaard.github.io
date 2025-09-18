import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import RadarHero from "../components/RadarHero";   
import Stripes from "../components/Stripes";
import RadarInspo from "../sections/RadarInspo";  

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
            src="/videos/radarhome.mp4"      // ← læg din fil i public/videos/
            className="radar-video"
          />
          <h3 className="radar-caption">
            Forside med interaktive radar-ringe og highlights
          </h3>
        </section>
        <RadarInspo/>
        
        <section aria-label="Dekorative striber">
                  <Stripes
                    colors={[
                      "#322E27",
                      "#EE185C",
                      "#3EC2D0",
                      "#800DEC",
                      "#FF82E7",
                      "#0A5066",
                      "#F6B5D1",
                      "#8CEAEA",
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
