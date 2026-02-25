import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ADMIN_SESSION_KEY,
  getOrders,
  getProducts,
  getTrending,
  setOrders,
  setProducts,
  setTrending
} from "../../data/siteData";

const emptyProduct = { id: "", category: "", name: "", price: "", desc: "", img: "" };

const AdminPortal = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProductsState] = useState(getProducts());
  const [orders, setOrdersState] = useState(getOrders());
  const [trending, setTrendingState] = useState(getTrending());
  const [productForm, setProductForm] = useState(emptyProduct);
  const [editMode, setEditMode] = useState(false);
  const [trendingForm, setTrendingForm] = useState({ productId: "", tag: "Best Seller" });
  const [customCategory, setCustomCategory] = useState("");

  const categories = useMemo(
    () => [...new Set(products.map((item) => item.category).filter(Boolean))],
    [products]
  );

  const stats = useMemo(
    () => ({
      products: products.length,
      orders: orders.length,
      pending: orders.filter((o) => o.status === "Pending").length,
      trending: trending.length
    }),
    [products, orders, trending]
  );

  const logout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    navigate("/admin/login");
  };

  const saveProduct = (e) => {
    e.preventDefault();
    const finalCategory = (productForm.category || customCategory).trim();
    if (!productForm.name || !finalCategory) return;

    const payload = {
      ...productForm,
      category: finalCategory,
      id: productForm.id || `p-${Date.now()}`
    };

    const next = editMode
      ? products.map((p) => (p.id === payload.id ? payload : p))
      : [payload, ...products];

    setProducts(next);
    setProductsState(next);
    setProductForm(emptyProduct);
    setCustomCategory("");
    setEditMode(false);
  };

  const startEdit = (product) => {
    setProductForm(product);
    setCustomCategory("");
    setEditMode(true);
    setActiveTab("products");
  };

  const removeProduct = (id) => {
    const nextProducts = products.filter((p) => p.id !== id);
    const nextTrending = trending.filter((t) => t.productId !== id);
    setProducts(nextProducts);
    setTrending(nextTrending);
    setProductsState(nextProducts);
    setTrendingState(nextTrending);
  };

  const saveTrendingItem = (e) => {
    e.preventDefault();
    if (!trendingForm.productId) return;
    const exists = trending.some((item) => item.productId === trendingForm.productId);
    if (exists) return;
    const next = [{ id: `t-${Date.now()}`, ...trendingForm }, ...trending];
    setTrending(next);
    setTrendingState(next);
    setTrendingForm({ productId: "", tag: "Best Seller" });
  };

  const removeTrendingItem = (id) => {
    const next = trending.filter((item) => item.id !== id);
    setTrending(next);
    setTrendingState(next);
  };

  const updateOrderStatus = (id, status) => {
    const next = orders.map((order) => (order.id === id ? { ...order, status } : order));
    setOrders(next);
    setOrdersState(next);
  };

  const clearOrder = (id) => {
    const next = orders.filter((order) => order.id !== id);
    setOrders(next);
    setOrdersState(next);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f7f7f9", padding: "20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ background: "#1f130a", color: "#fff", borderRadius: "12px", padding: "18px 20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "24px" }}>BeanHouse Admin</h1>
            <p style={{ margin: "6px 0 0", color: "#d1bdad", fontSize: "13px" }}>Manage products, orders, and trending products.</p>
          </div>
          <button className="btn-animate" onClick={logout} style={{ background: "#8b5a2b", color: "white", border: "none", borderRadius: "8px", padding: "10px 14px", cursor: "pointer", fontWeight: 700 }}>
            Logout
          </button>
        </header>

        <section style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
          <StatCard label="Products" value={stats.products} />
          <StatCard label="Orders" value={stats.orders} />
          <StatCard label="Pending Orders" value={stats.pending} />
          <StatCard label="Trending Items" value={stats.trending} />
        </section>

        <section style={{ marginTop: "20px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <TabButton active={activeTab === "products"} onClick={() => setActiveTab("products")} label="Products" />
          <TabButton active={activeTab === "trending"} onClick={() => setActiveTab("trending")} label="Trending" />
          <TabButton active={activeTab === "orders"} onClick={() => setActiveTab("orders")} label="Orders" />
        </section>

        {activeTab === "products" && (
          <section style={panelStyle}>
            <h2 style={sectionTitleStyle}>{editMode ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={saveProduct} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
              <input style={fieldStyle} placeholder="Name" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} required />
              <select
                style={fieldStyle}
                value={categories.includes(productForm.category) ? productForm.category : "__custom__"}
                onChange={(e) => {
                  if (e.target.value === "__custom__") {
                    setProductForm({ ...productForm, category: customCategory });
                  } else {
                    setCustomCategory("");
                    setProductForm({ ...productForm, category: e.target.value });
                  }
                }}
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
                <option value="__custom__">+ Add New Category</option>
              </select>
              {(productForm.category === "" || !categories.includes(productForm.category) || customCategory) && (
                <input
                  style={fieldStyle}
                  placeholder="New Category Name"
                  value={customCategory}
                  onChange={(e) => {
                    setCustomCategory(e.target.value);
                    setProductForm({ ...productForm, category: e.target.value });
                  }}
                  required={!categories.includes(productForm.category)}
                />
              )}
              <input style={fieldStyle} placeholder="Price (Rs. 1,000)" value={productForm.price} onChange={(e) => setProductForm({ ...productForm, price: e.target.value })} />
              <input style={fieldStyle} placeholder="Image URL" value={productForm.img} onChange={(e) => setProductForm({ ...productForm, img: e.target.value })} />
              <textarea style={{ ...fieldStyle, gridColumn: "1 / -1", minHeight: "74px" }} placeholder="Description" value={productForm.desc} onChange={(e) => setProductForm({ ...productForm, desc: e.target.value })} />
              <div style={{ gridColumn: "1 / -1", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <button className="btn-animate" type="submit" style={primaryBtnStyle}>{editMode ? "Update Product" : "Add Product"}</button>
                {editMode && (
                  <button className="btn-animate" type="button" style={ghostBtnStyle} onClick={() => { setProductForm(emptyProduct); setEditMode(false); }}>
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>

            <div style={{ marginTop: "16px", overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Price</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td style={tdStyle}>{product.name}</td>
                      <td style={tdStyle}>{product.category}</td>
                      <td style={tdStyle}>{product.price}</td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          <button className="btn-animate" onClick={() => startEdit(product)} style={tinyBtnStyle}>Edit</button>
                          <button className="btn-animate" onClick={() => removeProduct(product.id)} style={{ ...tinyBtnStyle, background: "#a22" }}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === "trending" && (
          <section style={panelStyle}>
            <h2 style={sectionTitleStyle}>Manage Trending Products</h2>
            <form onSubmit={saveTrendingItem} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
              <select style={fieldStyle} value={trendingForm.productId} onChange={(e) => setTrendingForm({ ...trendingForm, productId: e.target.value })} required>
                <option value="">Select product</option>
                {products.map((item) => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </select>
              <select style={fieldStyle} value={trendingForm.tag} onChange={(e) => setTrendingForm({ ...trendingForm, tag: e.target.value })}>
                <option>Best Seller</option>
                <option>Popular</option>
                <option>New</option>
              </select>
              <button className="btn-animate" type="submit" style={primaryBtnStyle}>Add Trending Item</button>
            </form>

            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Product</th>
                    <th style={thStyle}>Tag</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {trending.map((item) => {
                    const product = products.find((p) => p.id === item.productId);
                    return (
                      <tr key={item.id}>
                        <td style={tdStyle}>{product?.name || "Deleted product"}</td>
                        <td style={tdStyle}>{item.tag}</td>
                        <td style={tdStyle}>
                          <button className="btn-animate" onClick={() => removeTrendingItem(item.id)} style={{ ...tinyBtnStyle, background: "#a22" }}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === "orders" && (
          <section style={panelStyle}>
            <h2 style={sectionTitleStyle}>Orders</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Date</th>
                    <th style={thStyle}>Product</th>
                    <th style={thStyle}>Qty</th>
                    <th style={thStyle}>Price</th>
                    <th style={thStyle}>Customer</th>
                    <th style={thStyle}>Contact</th>
                    <th style={thStyle}>Address</th>
                    <th style={thStyle}>Payment</th>
                    <th style={thStyle}>Source</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td style={tdStyle}>{new Date(order.createdAt).toLocaleString()}</td>
                      <td style={tdStyle}>{order.productName}</td>
                      <td style={tdStyle}>{order.quantity || 1}</td>
                      <td style={tdStyle}>{order.price}</td>
                      <td style={tdStyle}>{order.customerName}</td>
                      <td style={tdStyle}>{order.customerContact}</td>
                      <td style={tdStyle}>{order.customerAddress}</td>
                      <td style={tdStyle}>{order.paymentMethod}</td>
                      <td style={tdStyle}>{order.source}</td>
                      <td style={tdStyle}>
                        <select value={order.status} onChange={(e) => updateOrderStatus(order.id, e.target.value)} style={fieldStyle}>
                          <option>Pending</option>
                          <option>In Progress</option>
                          <option>Completed</option>
                          <option>Cancelled</option>
                        </select>
                      </td>
                      <td style={tdStyle}>
                        <button className="btn-animate" onClick={() => clearOrder(order.id)} style={{ ...tinyBtnStyle, background: "#a22" }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

const StatCard = ({ label, value }) => (
  <article style={{ background: "#fff", borderRadius: "12px", padding: "14px 16px", border: "1px solid #ececec" }}>
    <p style={{ margin: 0, color: "#666", fontSize: "13px" }}>{label}</p>
    <h3 style={{ margin: "6px 0 0", color: "#1f130a", fontSize: "26px" }}>{value}</h3>
  </article>
);

const TabButton = ({ active, onClick, label }) => (
  <button className="btn-animate" onClick={onClick} style={{ border: active ? "1px solid #603601" : "1px solid #d6d6d6", background: active ? "#603601" : "#fff", color: active ? "#fff" : "#333", borderRadius: "8px", padding: "10px 14px", cursor: "pointer", fontWeight: 700 }}>
    {label}
  </button>
);

const panelStyle = { background: "#fff", marginTop: "14px", borderRadius: "12px", padding: "16px", border: "1px solid #ececec" };
const sectionTitleStyle = { marginTop: 0, marginBottom: "12px", color: "#2a1b10", fontSize: "20px" };
const fieldStyle = { padding: "10px 12px", borderRadius: "8px", border: "1px solid #d6d6d6", fontSize: "14px", minWidth: "160px" };
const primaryBtnStyle = { background: "#603601", color: "white", border: "none", borderRadius: "8px", padding: "10px 14px", fontWeight: 700, cursor: "pointer" };
const ghostBtnStyle = { background: "#fff", color: "#333", border: "1px solid #d6d6d6", borderRadius: "8px", padding: "10px 14px", fontWeight: 700, cursor: "pointer" };
const tinyBtnStyle = { background: "#603601", color: "white", border: "none", borderRadius: "6px", padding: "6px 10px", fontSize: "12px", cursor: "pointer", fontWeight: 600 };
const tableStyle = { width: "100%", borderCollapse: "collapse", minWidth: "680px" };
const thStyle = { textAlign: "left", borderBottom: "1px solid #ddd", color: "#333", fontSize: "13px", padding: "10px 8px" };
const tdStyle = { borderBottom: "1px solid #eee", color: "#444", fontSize: "13px", padding: "10px 8px", verticalAlign: "top" };

export default AdminPortal;
