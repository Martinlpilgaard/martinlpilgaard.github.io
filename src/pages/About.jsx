import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutInfo from "../sections/AboutInfo";
import Illustration from "../components/Illustration";
import BackToTop from "../components/BackToTop";  

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <Illustration
        src="/images/illustration.png"
        alt="Overgang mellem velkomst og info"
        overlap="19rem"
        width="20px"
        style={{ marginLeft: "0px" }}   // 👈 skubber lidt til højre
      />
      <AboutInfo />

       <BackToTop color= "#E8E8E8" bg="#354F41" />
      <Footer />
    </>
  );
}
