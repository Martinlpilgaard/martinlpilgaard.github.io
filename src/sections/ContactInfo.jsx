import "./ContactInfo.css";
import ArrowUp from "../components/UpArrow";

export default function ContactInfo() {
  return (
    <section className="contactinfo">
      <img
        src="/images/martin1udenbaggrund.png"
        alt="Kontakt illustration"
        className="contactinfo__img"
      />

      <div className="contactinfo__overlay" aria-hidden="true" />

      <div className="contactinfo__textbox">
        <h2 className="contactinfo__heading">martinlpilgaard@gmail.com</h2>

        {/* FANG MIG + pil i samme række */}
    
          <h1 className="contactinfo__title">FANG MIG</h1>

          {/* Pilen – justér som Illustration: overlap, width, style (marginLeft ...) */}
          <ArrowUp
            src="/images/pil.png"
            alt="Pil op"
            overlap="-15rem"            /* løft pilen en smule */
            width="100px"
            style={{ marginLeft: "800px" }}  /* ← ret her til fx 700px som du vil */
          />

        <h1 className="contactinfo__title2">HER</h1>
      </div>
    </section>
  );
}
