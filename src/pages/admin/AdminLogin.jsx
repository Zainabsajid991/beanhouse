import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_SESSION_KEY } from "../../data/siteData";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
      navigate("/admin");
      return;
    }
    setError("Invalid admin credentials.");
  };

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px", background: "linear-gradient(130deg, #111, #2b1d12)" }}>
      <form onSubmit={handleSubmit} style={{ width: "min(100%, 420px)", background: "#fff", borderRadius: "12px", padding: "28px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
        <h1 style={{ marginTop: 0, marginBottom: "8px", fontSize: "28px", color: "#2f1f14" }}>Admin Portal</h1>
        <p style={{ marginTop: 0, marginBottom: "20px", color: "#666", fontSize: "14px" }}>Sign in to manage products, orders, and trending items.</p>

        <label style={labelStyle}>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={inputStyle} placeholder="admin@beanhouse.com" />

        <label style={labelStyle}>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={inputStyle} placeholder="Enter password" />

        {error && <p style={{ color: "#b42318", marginTop: 0, marginBottom: "14px", fontSize: "13px" }}>{error}</p>}

        <button className="btn-animate" type="submit" style={{ width: "100%", padding: "12px", border: "none", borderRadius: "8px", cursor: "pointer", background: "#603601", color: "#fff", fontWeight: 700 }}>
          Login
        </button>

        <p style={{ color: "#888", marginBottom: 0, marginTop: "14px", fontSize: "12px" }}>Default: {ADMIN_EMAIL} / {ADMIN_PASSWORD}</p>
      </form>
    </main>
  );
};

const labelStyle = { display: "block", marginBottom: "6px", marginTop: "10px", fontSize: "13px", color: "#473222", fontWeight: 600 };
const inputStyle = { width: "100%", marginBottom: "8px", padding: "10px 12px", border: "1px solid #d0c6be", borderRadius: "8px", fontSize: "14px" };

export default AdminLogin;
