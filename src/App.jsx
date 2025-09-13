import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// midlertidige sider – byt dem ud når de findes
const About = () => <section className="container"><h2>Om mig</h2></section>;
const Contact = () => <section className="container"><h2>Kontakt</h2></section>;
const Projects = () => <section className="container"><h2>Projekter</h2></section>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
