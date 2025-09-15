import Header from "../components/Header";
import Hero from "../components/Hero";
import Welcome from "../sections/Welcome";
import Info from "../sections/Info";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Info />
      <Projects />
    </>
  );
}
