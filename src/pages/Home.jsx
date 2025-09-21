import Header from "../components/Header";
import Hero from "../components/Hero";
import Welcome from "../sections/Welcome";
import Info from "../sections/Info";
import Projects from "../sections/Projects";
import Illustration from "../components/Illustration";
import BackToTop from "../components/BackToTop"; 
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />

<Illustration
  src="/images/illustration.png"
  alt="Overgang mellem velkomst og info"
  overlap="-15rem"
  width="25px"
  style={{ marginLeft: "700px" }}   // 👈 skubber lidt til højre
/>

<Info />

<Illustration
  src="/images/illustration-2.png"
  alt="Overgang mellem info og projekter"
  overlap="-10rem"
  width="50px"
  style={{ marginRight: "750px" }} // 👈 skubber lidt til venstre
/>

<Projects />

 <BackToTop color= "#E8E8E8" bg="#3E3735" />

      <Footer />
    </>
  );
}
