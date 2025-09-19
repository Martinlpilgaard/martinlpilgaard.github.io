import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import Stripes from "../components/Stripes";
import PlakatHero from "../components/PlakatHero";
import "./plakaten.css"; // ← sørg for at stien passer

export default function Plakaten() {
  return (
    <>
      <Header />
      <main className="plakat-page">
        <PlakatHero color="#E34C31" line1="STILRENT" line2="WEB" line3="TOOL" />

        <section className="plakat-section">
          <h1 className="plakaten-title">PLAKATEN</h1>
          <p className="plakaten-project-intro">
            "Hvordan kan vi skabe en mere helstøbt brugeroplevelse for plakatens kunder, både før, under og efter deres besøg i den fysiske butik?""
          </p>

          <img
            src="/images/kunde.png"      // ← læg din fil i public/images/
            alt="Kunde/partner"
            className="plakaten-image"
          />

         <h2 className="plakaten-subtitle">PLAKATEN</h2>

         <VideoPlayer
                    src="/videos/plakathome.mp4"      // ← læg din fil i public/videos/
                    className="plakaten-video"
                  />
            <h3 className="plakaten-caption">
                    Butiksfacaden til Plakaten sat som stemningsfuld hero-video
                  </h3>
        <VideoPlayer
                    src="/videos/kunstnerecom.mp4"      // ← læg din fil i public/videos/
                    className="plakaten-video-video2"
                  />
            <img
            src="/images/facaden.png"      // ← læg din fil i public/images/
            alt="facade"
            className="plakaten-image1"
          />
        
        <VideoPlayer
                    src="/videos/phome.mp4"      // ← læg din fil i public/videos/
                    className="plakaten-video-video3"
                  />
             <h3 className="plakaten-caption2">
                    Mobilformat fra app
                  </h3>
            <VideoPlayer
                    src="/videos/pudvalg.mp4"      // ← læg din fil i public/videos/
                    className="plakaten-video-video4"
                  />
             <img
            src="/images/plainfo1.png"      // ← læg din fil i public/images/
            alt="facade"
            className="plakaten-image2"
          />
            <h3 className="plakaten-caption3">
                    Infographic til inspiration på site
                  </h3>

        </section>


        <section aria-label="Dekorative striber">
                          <Stripes
                            colors={[
                              "#E74A1C",
                              "#EC6E41",
                              "#847A7E",
                              "#9E91F5",
                              "#0F3580",
                              "#6096BD",
                              "#FF8A8C",
                              "#CDC5A7",
                            ]}
                            height="20px"
                            gap="14px"
                            duration="1000ms"
                            stagger="100ms"
                            rounded={true}
                          />
               <img
            src="/images/mockup.png"      // ← læg din fil i public/images/
            alt="facade"
            className="plakaten-image3"
          />
                        </section>

      </main>
      <Footer />
    </>
  );
}
