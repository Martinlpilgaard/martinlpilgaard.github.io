import bg from "../assets/Martin3.png"; // henter billedet fra src/assets
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
          Jeg er nysgerrig, idérig og elsker at samarbejde for at bringe idéer til liv.
          <br/><br/>
          Målet er at skabe visuelle universer der inspirerer og gør en forskel – og med min
          frontend-erfaring kan jeg tage designet fra idé til virkelighed.
          <br/><br/>
          Udforsk projekterne, og se hvordan jeg arbejder med design, processer og storytelling –
          og hvorfor jeg kan være et stærkt kort på jeres fremtidige team.
        </h3>
      </div>
    </section>
  );
}
