import React, { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";

// Pages aur Components ke imports
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Story from "./pages/Story.jsx";
import Contact from "./pages/Contact.jsx"; // Naya Contact page import
import Cart from "./pages/Cart.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminPortal from "./pages/admin/AdminPortal.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ADMIN_SESSION_KEY, seedSiteData } from "./data/siteData";

function ProtectedAdminRoute({ children }) {
  const isAuthed = sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
  return isAuthed ? children : <Navigate to="/admin/login" replace />;
}

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    seedSiteData();
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Story />} />
        <Route path="/contact" element={<Contact />} /> {/* Naya Route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminPortal />
            </ProtectedAdminRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
