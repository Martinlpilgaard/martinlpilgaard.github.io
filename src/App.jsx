import { Route, Routes } from "react-router";
import {Navigate} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";
import Nav from "./components/NavLink";

function App() {
  return (
    <main className ="App">
      <Nav />
    <Routes>
      {/* Routes go here */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    </main>
  );
}

export default App;
