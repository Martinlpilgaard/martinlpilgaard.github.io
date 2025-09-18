import Header from "../components/Header";
import Footer from "../components/Footer";
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
        </section>
      </main>
      <Footer />
    </>
  );
}
