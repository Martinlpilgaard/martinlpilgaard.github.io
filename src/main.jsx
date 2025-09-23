import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./styles/mobile-overrides.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter>
     <ScrollToTop behavior="auto" /> {/* eller "smooth" */}
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

