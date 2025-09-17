import Header from "../components/Header";
import Footer from "../components/Footer";
import LoopVideo from "../components/LoopVideo";
import CilleHero from "../components/CilleHero";
import ArrowRight from "../components/ArrowRight";
import CilleParallax from "../components/CilleParallax";  
import Stripes from "../components/Stripes"; 
import CilleDesign from "../sections/CilleDesign";
import CilleDesign2 from "../sections/CilleDesign2";

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

          <LoopVideo
            src="/videos/loop-video.mp4"
            className="rounded-2xl shadow-lg mt-8"
          />

          <h2 className="cillecyclus-title2">MEN-STRU-A-TION</h2>

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

        {/* 👇 Parallax-billederne */}
        <CilleParallax />

        {/* 👇 NY sektion med striber */}
       <section aria-label="Dekorative-striber">
  <Stripes
    colors={[
      "#801322",
      "#C2858A",
      "#925146",
      "#7E2F2B",
      "#A36974",
      "#AA8286",
      "#8BA1BD",
      "#6F8095"
    ]}
    lineHeight="22px"
    gap="14px"
    duration="1000ms"
    stagger="100ms"
    rounded={true}
  />
</section>

<CilleDesign />
{/* Video under CilleDesign */}
<section className="cille-design-video" aria-label="Cille Design video">
  <LoopVideo
    src="/videos/cille-loop.mov"
    className="rounded-2xl shadow-lg mt-6"
  />
</section>

{/* Endnu en video: cilletid */}
<section className="cille-design-video2" aria-label="Cille Design tid video">
  <LoopVideo
    src="/videos/cilletid.mp4"
    className="rounded-2xl shadow-lg mt-6"
  />
</section>
<CilleDesign2 />

{/* Endnu en video: cilletid */}
<section className="cille-design-video3" aria-label="Cille Design tid video">
  <LoopVideo
    src="/videos/luteal.mp4"
    className="rounded-2xl shadow-lg mt-6"
  />
</section>
{/* Endnu en video: cilletid */}
<section className="cille-design-video4" aria-label="Cille Design tid video">
  <LoopVideo
    src="/videos/mood.mp4"
    className="rounded-2xl shadow-lg mt-6"
  />
</section>
      </main>
      <Footer />
    </>
  );
}
