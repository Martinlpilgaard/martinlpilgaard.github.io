import Header from "../components/Header";
import Footer from "../components/Footer";
import LoopVideo from "../components/LoopVideo";

export default function CilleCyclus() {
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project-section">
          <h1>Cilles Cyklus</h1>
          <p>
            Dette er en placeholder-side for projektet <em>Cilles Cyklus</em>.  
            Her kan du tilføje tekst, billeder og selvfølgelig video.
          </p>

          {/* Inline video som "GIF" */}
          <LoopVideo src="/videos/loop-video.mp4" className="rounded-2xl shadow-lg mt-8" />
        </section>
      </main>
      <Footer />
    </>
  );
}
