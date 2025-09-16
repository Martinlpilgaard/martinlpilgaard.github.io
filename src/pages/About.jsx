import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutInfo from "../sections/AboutInfo";
import Illustration from "../components/Illustration";

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
      <Footer />
    </>
  );
}
