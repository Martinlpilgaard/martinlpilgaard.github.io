import Header from "../components/Header";
import Footer from "../components/Footer";
import LoopVideo from "../components/LoopVideo";
import "./CilleCyclus.css";   // 👈 import CSS

export default function CilleCyclus() {
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project-section">
          <h1 className="cillecyclus-title">Cilles Cyklus</h1>
          <p>
           "Hvordan kan man skabe et interaktivt formidlingselement til en udstilling om menstruation og kvindekroppens cyklus, målrettet børn og unge?"
          </p>

          {/* Inline video */}
          <LoopVideo
            src="/videos/loop-video.mp4"
            className="rounded-2xl shadow-lg mt-8"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
