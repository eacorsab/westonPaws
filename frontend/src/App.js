import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Partial from "./pages/Services/Partial";
import Full from "./pages/Services/Full";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/partial-grooming" element={<Partial />} />
        <Route path="/full-grooming" element={<Full />} />
        <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
