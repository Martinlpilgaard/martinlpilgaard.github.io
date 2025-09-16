import bg from "../assets/martin3.png"; // henter billedet fra src/assets
import "./AboutInfo.css";

export default function AboutInfo() {
  return (
    <section className="aboutinfo">
      {/* Billedet fylder hele sektionen (som på Home Info) */}
      <img
        src={bg}
        alt="Martin design"
        className="aboutinfo__img"
        loading="lazy"
        decoding="async"
      />

      {/* (valgfrit) overlay for kontrast – samme som på Home */}
      <div className="aboutinfo__overlay" aria-hidden="true" />

      {/* Tekst ovenpå billedet */}
      <div className="aboutinfo__textbox">
        <h3>
        Navnet er Martin, og jeg brænder for at skabe lækkert og gennemført design.
    For mig er godt design mødet mellem kreativitet, kvalitet og formål og hvordan vi kan skabe noget værdifuldt der både er visuelt flot og funktionelt. 
<br></br>
<br></br>
Motivationen for mit arbejde er af den grund muligheden for at arbejde intuitivt, og føre en ide ud i virkeligheden. Her gennem kreative processer hvor der er plads til at drømme stort, og hvor man i fællesskab kan opnå ambitiøse resultater.
<br></br>
        <br></br>
Som person drives jeg af at mærke verden – hvad enten det sker gennem adrenalin i nye oplevelser eller i fællesskab med venner i hverdagen. Finder jeg her min inspiration og nyder at inddrage den i mit arbejde for at skabe noget meningsfuldt og unikt. 
  <br></br>
    <br></br>
  Af den grund har jeg altid mig selv med i det jeg laver, og stræber til enhver tid, efter at være nysgerrig, tage chancer og udvikle mine kompetencer.

          </h3>
      </div>
    </section>
  );
}
