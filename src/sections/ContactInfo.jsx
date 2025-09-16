import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <section className="contactinfo">
      <img
        src="/images/martin1udenbaggrund.png"   // dit eget billede
        alt="Kontakt illustration"
        className="contactinfo__img"
      />

      <div className="contactinfo__overlay" aria-hidden="true" />

      <div className="contactinfo__textbox">
        <h2 className="contactinfo__heading">martinlpilgaard@gmail.com</h2>
        <h1 className="contactinfo__title">FANG MIG</h1>
        <h1 className="contactinfo__title2">HER</h1>
    
      </div>
    </section>
  );
}
