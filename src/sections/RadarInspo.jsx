
import "./RadarInspo.css";

export default function RadarInspo() {
  return (
    <section className="radarinspo-section">
      {/* Titel reuse'r din eksisterende .cillecyclus-title styling */}
      <h2 className="radarinspo1">INSPIRATION & MOCKUPS</h2>

       <img
              src="/images/moodradar.png"
              alt="Ekstra grafik"
              className="radarinspoimg1"
            /> 
        <img
              src="/images/mockupforside.png"
              alt="Ekstra grafik"
              className="radarinspoimg2"
            />
         <img
              src="/images/mockuptime.png"
              alt="Ekstra grafik"
              className="radarinspoimg3"
            /> 
        <img
              src="/images/mockupjoin.png"
              alt="Ekstra grafik"
              className="radarinspoimg4"
            />
        <img
              src="/images/radx.png"
              alt="Ekstra grafik"
              className="radarinspoimg5"
            /> 
            
    </section>
  );
}