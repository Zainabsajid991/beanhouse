import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages aur Components ke imports
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Story from "./pages/Story.jsx";
import Contact from "./pages/Contact.jsx"; // Naya Contact page import
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      {/* Navbar har page pe dikhega */}
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Story />} />
        <Route path="/contact" element={<Contact />} /> {/* Naya Route */}
      </Routes>

      {/* Footer har page pe dikhega */}
      <Footer />
    </Router>
  );
}

export default App;