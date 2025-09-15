import Header from "../components/Header";
import Hero from "../components/Hero";
import Welcome from "../sections/Welcome";
import Info from "../sections/Info";
import Projects from "../sections/Projects";
import Illustration from "../components/Illustration";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Illustration /> {/* <- overlapper Welcome og Info fx */}
      <Info />
      <Projects />
      <Footer />
    </>
  );
}
