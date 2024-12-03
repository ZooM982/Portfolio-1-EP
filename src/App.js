import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/CV.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";

const App = () => {
  return (
    <div className="transition duration-300">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="text-center py-20 text-gray-500">Page non trouvée.</div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
