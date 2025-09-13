import bg from "../assets/Martin2.png"; // henter billedet fra src/assets
import "./Info.css";

export default function Info() {
  return (
    <section className="info-section">
      {/* Billedet fylder hele sektionen */}
      <img src={bg} alt="Martin design" className="info-image" />

      {/* Tekst ovenpå billedet */}
      <div className="info-textbox">
        <h3>
       Jeg er nysgerrig, idérig og elsker at samarbejde for at bringe idéer til liv.
<br/>
<br/>
MÅLET er at skabe visuelle universer, der inspirerer og gør en forskel – og med min frontend-erfaring kan jeg tage designet det ekstra skridt fra idé til virkelighed.
<br/>
<br/>
Udforsk projekterne, og se hvordan jeg arbejder med design, processer og storytelling – og hvorfor jeg kan være et stærkt kort på jeres fremtidige team. </h3>
      </div>
    </section>
  );
}
