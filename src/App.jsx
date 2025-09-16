import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Overview from "./pages/Overview";     
import Contact from "./pages/Contact";
import CilleCyclus from "./pages/CilleCyclus";
import Plakaten from "./pages/Plakaten";
import BedrBeer from "./pages/BedrBeer";
import Radar from "./pages/Radar";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Overview />} />  {/* ⟵ projekter = overview */}
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/cillecyclus" element={<CilleCyclus />} />
      <Route path="/plakaten" element={<Plakaten />} />
      <Route path="/bedrbeer" element={<BedrBeer />} />
      <Route path="/radar" element={<Radar />} />

    </Routes>
  );
}
