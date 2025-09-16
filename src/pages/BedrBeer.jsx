import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BedrBeer() {
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project-section">
          <h1>BedrBeer</h1>
          <p>
            Dette er en placeholder-side for projektet <em>BedrBeer</em>.  
            Her kan du senere tilføje info om koncept, proces og design.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
