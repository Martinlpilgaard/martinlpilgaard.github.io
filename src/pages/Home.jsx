import Header from "../components/Header";
import Welcome from "../sections/Welcome";
import Hero from "../components/Hero"; 
import Info from "../sections/Info"


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Info />
    </>
  );
}
