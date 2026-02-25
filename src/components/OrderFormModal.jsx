import React, { useState } from "react";

const OrderFormModal = ({ isOpen, product, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    customerName: "",
    customerContact: "",
    paymentMethod: "COD"
  });

  if (!isOpen || !product) return null;

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit({
      ...form,
      productId: product.id,
      productName: product.name,
      price: product.price
    });
    setForm({ customerName: "", customerContact: "", paymentMethod: "COD" });
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ marginTop: 0, marginBottom: "8px", color: "#2e1d12" }}>Place Order</h3>
        <p style={{ marginTop: 0, marginBottom: "16px", fontSize: "13px", color: "#666" }}>
          {product.name} ({product.price})
        </p>

        <form onSubmit={submitForm}>
          <label style={labelStyle}>Name</label>
          <input
            style={inputStyle}
            value={form.customerName}
            onChange={(e) => setForm({ ...form, customerName: e.target.value })}
            required
            placeholder="Your full name"
          />

          <label style={labelStyle}>Contact</label>
          <input
            style={inputStyle}
            value={form.customerContact}
            onChange={(e) => setForm({ ...form, customerContact: e.target.value })}
            required
            placeholder="03XXXXXXXXX"
          />

          <label style={labelStyle}>Payment Method</label>
          <select
            style={inputStyle}
            value={form.paymentMethod}
            onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
          >
            <option value="COD">Cash on Delivery (COD)</option>
            <option value="Online">Online</option>
          </select>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "14px" }}>
            <button type="button" className="btn-animate" style={cancelBtnStyle} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-animate" style={submitBtnStyle}>
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100dvh",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
  padding: "16px",
  overflowY: "auto"
};

const modalStyle = {
  width: "min(100%, 420px)",
  background: "#fff",
  borderRadius: "12px",
  padding: "18px",
  maxHeight: "calc(100dvh - 32px)",
  overflowY: "auto"
};

const labelStyle = { display: "block", marginBottom: "6px", marginTop: "8px", fontSize: "13px", color: "#444", fontWeight: 600 };
const inputStyle = { width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "14px" };
const cancelBtnStyle = { background: "#f3f4f6", border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 12px", cursor: "pointer", fontWeight: 600 };
const submitBtnStyle = { background: "#603601", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 12px", cursor: "pointer", fontWeight: 700 };

export default OrderFormModal;
