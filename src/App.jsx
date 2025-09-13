import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Nav from "./components/NavLink";

const About    = () => <section className="container"><h2>Om mig</h2></section>;
const Contact  = () => <section className="container"><h2>Kontakt</h2></section>;
const Projects = () => <section className="container"><h2>Projekter</h2></section>;


function App() {
  return (
    <main className ="App">
      <Nav />
    <Routes>
      {/* Routes go here */}
     <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
    </main>
  );
}

export default App;
