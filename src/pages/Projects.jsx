import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <Header />

      {/* Tom sektion – plads til din effekt */}
      <section className="projects-stage" aria-labelledby="projects-heading">
        <div className="container">
          <h1 id="projects-heading" className="projects-title">Projekter</h1>

          {/* Placeholder – her kommer dine projekter senere */}
          <div className="projects-placeholder">
            <p>Din projekt-effekt kommer her…</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
