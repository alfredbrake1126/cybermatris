import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Eleven from "./components/Eleven/Eleven";
import Ceven from "./components/Ceven/Ceven";
import NotFound from "./components/NotFound";
import ScrollToTop from "./ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "./LanguageContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Ceven />} />
          {/* <Route path="/eleven" element={<Eleven />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
