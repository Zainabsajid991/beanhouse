import React, { useEffect, useMemo, useState } from "react";
import { addCartOrder } from "../data/siteData";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, removeFromCart, changeQuantity, clearCart } = useCart();
  const [pageAnimated, setPageAnimated] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    customerContact: "",
    customerAddress: "",
    paymentMethod: "COD"
  });

  useEffect(() => {
    const timer = setTimeout(() => setPageAnimated(true), 40);
    return () => clearTimeout(timer);
  }, []);

  const total = useMemo(() => {
    const toNumber = (price) => Number(String(price || "").replace(/[^\d]/g, "")) || 0;
    return items.reduce((sum, item) => sum + toNumber(item.price) * item.quantity, 0);
  }, [items]);

  const submitOrder = (e) => {
    e.preventDefault();
    if (!items.length) return;
    addCartOrder(items, form);
    clearCart();
    setForm({ customerName: "", customerContact: "", customerAddress: "", paymentMethod: "COD" });
    window.alert("Order placed successfully.");
  };

  return (
    <main
      className={`reveal ${pageAnimated ? "is-visible" : ""}`}
      style={{ minHeight: "100vh", background: "#f6f6f6", padding: "clamp(120px, 14vw, 150px) clamp(16px, 8vw, 10%) 60px" }}
    >
      <h1 className={`reveal ${pageAnimated ? "is-visible" : ""}`} style={{ marginTop: 0, marginBottom: "20px", color: "#2f2016", fontSize: "clamp(28px, 5vw, 40px)" }}>Your Cart</h1>

      <div className={`reveal reveal-delay-1 ${pageAnimated ? "is-visible" : ""}`} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
        <section style={panelStyle}>
          {items.length === 0 ? (
            <p style={{ margin: 0, color: "#666" }}>Your cart is empty.</p>
          ) : (
            <div style={{ display: "grid", gap: "10px" }}>
              {items.map((item, index) => (
                <article
                  key={item.id}
                  className={`reveal reveal-delay-${(index % 3) + 1} ${pageAnimated ? "is-visible" : ""}`}
                  style={{ display: "grid", gridTemplateColumns: "70px 1fr auto", gap: "10px", alignItems: "center", border: "1px solid #ececec", borderRadius: "10px", padding: "10px", transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#d7cfc7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#ececec";
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px", transition: "transform 0.28s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div>
                    <h3 style={{ margin: "0 0 4px", fontSize: "16px", color: "#1f1f1f" }}>{item.name}</h3>
                    <p style={{ margin: "0 0 8px", color: "#7a7a7a", fontSize: "12px" }}>{item.price}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button className="btn-animate" onClick={() => changeQuantity(item.id, item.quantity - 1)} style={qtyBtnStyle}>-</button>
                      <span style={{ minWidth: "20px", textAlign: "center", fontWeight: 700 }}>{item.quantity}</span>
                      <button className="btn-animate" onClick={() => changeQuantity(item.id, item.quantity + 1)} style={qtyBtnStyle}>+</button>
                    </div>
                  </div>
                  <button className="btn-animate" onClick={() => removeFromCart(item.id)} style={{ ...qtyBtnStyle, background: "#b42318", color: "#fff", borderColor: "#b42318" }}>
                    Remove
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

        <section
          className={`reveal reveal-delay-2 ${pageAnimated ? "is-visible" : ""}`}
          style={{ ...panelStyle, transition: "transform 0.26s ease, box-shadow 0.26s ease", transformOrigin: "top right" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "10px", color: "#2f2016", fontSize: "22px" }}>Checkout</h2>
          <p style={{ marginTop: 0, marginBottom: "16px", color: "#666", fontSize: "14px" }}>Total: <strong>Rs. {total.toLocaleString()}</strong></p>
          <form onSubmit={submitOrder}>
            <label style={labelStyle}>Name</label>
            <input style={inputStyle} value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} required />
            <label style={labelStyle}>Contact</label>
            <input style={inputStyle} value={form.customerContact} onChange={(e) => setForm({ ...form, customerContact: e.target.value })} required />
            <label style={labelStyle}>Address</label>
            <textarea
              style={{ ...inputStyle, minHeight: "78px", resize: "vertical" }}
              value={form.customerAddress}
              onChange={(e) => setForm({ ...form, customerAddress: e.target.value })}
              required
              placeholder="House #, street, area, city"
            />
            <label style={labelStyle}>Payment Method</label>
            <select style={inputStyle} value={form.paymentMethod} onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}>
              <option value="COD">Cash on Delivery (COD)</option>
              <option value="Online">Online</option>
            </select>
            <button className="btn-animate" type="submit" disabled={!items.length} style={{ ...checkoutBtnStyle, opacity: items.length ? 1 : 0.6 }}>
              Place Order
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

const panelStyle = { background: "#fff", borderRadius: "12px", padding: "14px", border: "1px solid #e7e7e7" };
const labelStyle = { display: "block", marginBottom: "6px", marginTop: "8px", fontSize: "13px", color: "#444", fontWeight: 600 };
const inputStyle = { width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #d6d6d6", marginBottom: "4px" };
const qtyBtnStyle = { border: "1px solid #d1d5db", background: "#f9fafb", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", fontWeight: 700 };
const checkoutBtnStyle = { marginTop: "12px", width: "100%", background: "#603601", color: "white", border: "none", borderRadius: "8px", padding: "11px", cursor: "pointer", fontWeight: 700 };

export default Cart;
