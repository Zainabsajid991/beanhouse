const KEYS = {
  products: "beanhouse_products",
  trending: "beanhouse_trending",
  orders: "beanhouse_orders"
};

export const ADMIN_EMAIL = "admin@beanhouse.com";
export const ADMIN_PASSWORD = "BeanHouse@2026";
export const ADMIN_SESSION_KEY = "beanhouse_admin_auth";

const defaultProducts = [
  { id: "p1", category: "Cakes", name: "Lava Cake", price: "Rs. 2,000", desc: "Andar se pighla hua garm chocolate aur bahar se soft cake.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },
  { id: "p2", category: "Cakes", name: "Chocolate Cake", price: "Rs. 2,000", desc: "Rich dark chocolate layer cake.", img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400" },
  { id: "p3", category: "Cakes", name: "Cheese Cake", price: "Rs. 2,200", desc: "Creamy New York cheesecake.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
  { id: "p4", category: "Cakes", name: "Coffee Cake", price: "Rs. 1,800", desc: "Infused with espresso shot.", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400" },
  { id: "p5", category: "Cakes", name: "Vanilla Cake", price: "Rs. 1,500", desc: "Soft vanilla cream sponge.", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400" },
  { id: "p6", category: "Coffee", name: "Espresso", price: "Rs. 450", desc: "Strong Arabica shot.", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400" },
  { id: "p7", category: "Coffee", name: "Cappuccino", price: "Rs. 550", desc: "Milk foam & espresso.", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400" },
  { id: "p8", category: "Coffee", name: "Iced Latte", price: "Rs. 580", desc: "Chilled milk & espresso.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400" },
  { id: "p9", category: "Coffee", name: "Mocha", price: "Rs. 600", desc: "Chocolate & espresso blend.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
  { id: "p10", category: "Coffee", name: "Flat White", price: "Rs. 520", desc: "Double shot with micro-foam.", img: "https://images.unsplash.com/photo-1536939459926-301728717817?w=400" },
  { id: "p11", category: "Deserts", name: "Fluffy Pancakes", price: "Rs. 1,200", desc: "Golden pancakes with maple syrup.", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400" },
  { id: "p12", category: "Deserts", name: "Belgian Waffles", price: "Rs. 1,400", desc: "Crispy waffles with Nutella.", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400" },
  { id: "p13", category: "Deserts", name: "Brownie Sundae", price: "Rs. 950", desc: "Warm brownie with vanilla scoop.", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },
  { id: "p14", category: "Deserts", name: "Apple Pie", price: "Rs. 800", desc: "Classic cinnamon apple crust.", img: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400" },
  { id: "p15", category: "Deserts", name: "Fruit Tart", price: "Rs. 750", desc: "Fresh seasonal fruits and custard.", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400" },
  { id: "p16", category: "Deserts", name: "Tiramisu", price: "Rs. 1,100", desc: "Italian coffee flavored desert.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400" },
  { id: "p17", category: "Bakes", name: "Butter Croissant", price: "Rs. 450", desc: "Flaky and buttery French pastry.", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
  { id: "p18", category: "Bakes", name: "Garlic Bread", price: "Rs. 350", desc: "Toasted baguette with herbs and garlic butter.", img: "https://images.unsplash.com/photo-1544813545-4827b64fcacb?w=400" },
  { id: "p19", category: "Bakes", name: "Chicken Pattie", price: "Rs. 300", desc: "Savory chicken filling in puff pastry.", img: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=400" },
  { id: "p20", category: "Bakes", name: "Almond Danish", price: "Rs. 500", desc: "Sweet pastry with almond cream and nuts.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { id: "p21", category: "Milk-Shakes", name: "Oreo Madness", price: "Rs. 750", desc: "Thick chocolate blend with crushed Oreo.", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400" },
  { id: "p22", category: "Milk-Shakes", name: "Classic Vanilla", price: "Rs. 650", desc: "Smooth and rich vanilla bean shake.", img: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400" },
  { id: "p23", category: "Milk-Shakes", name: "Nutty Peanut Butter", price: "Rs. 780", desc: "Creamy peanut butter blended with milk.", img: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=400" }
];

const defaultTrending = [
  { id: "t1", productId: "p1", tag: "Best Seller" },
  { id: "t2", productId: "p2", tag: "New" },
  { id: "t3", productId: "p11", tag: "Popular" }
];

function safeRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeProducts(raw) {
  if (Array.isArray(raw)) {
    return raw
      .filter((item) => item && typeof item === "object")
      .map((item, index) => ({
        id: item.id || `p-migrated-${index}-${Date.now()}`,
        category: item.category || "Uncategorized",
        name: item.name || "Unnamed Product",
        price: item.price || "Rs. 0",
        desc: item.desc || item.description || "",
        img: item.img || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
      }));
  }

  if (raw && typeof raw === "object") {
    // Legacy object-by-category shape migration
    const migrated = Object.entries(raw).flatMap(([category, items]) =>
      Array.isArray(items)
        ? items.map((item, index) => ({
            id: item.id || `p-migrated-${category}-${index}-${Date.now()}`,
            category: item.category || category,
            name: item.name || "Unnamed Product",
            price: item.price || "Rs. 0",
            desc: item.desc || item.description || "",
            img: item.img || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
          }))
        : []
    );
    return migrated;
  }

  return [];
}

function normalizeTrending(raw, products) {
  if (!Array.isArray(raw)) return [];
  const validIds = new Set(products.map((p) => p.id));
  return raw
    .filter((item) => item && typeof item === "object")
    .map((item, index) => {
      const fallbackProductId = products[index]?.id;
      return {
        id: item.id || `t-migrated-${index}-${Date.now()}`,
        productId: validIds.has(item.productId) ? item.productId : fallbackProductId,
        tag: item.tag || "Popular"
      };
    })
    .filter((item) => item.productId);
}

function buildDefaultTrending(products) {
  const tags = ["Best Seller", "New", "Popular"];
  return products.slice(0, 3).map((product, index) => ({
    id: `t-default-${index + 1}`,
    productId: product.id,
    tag: tags[index] || "Popular"
  }));
}

function normalizeOrders(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item) => item && typeof item === "object")
    .map((item, index) => ({
      id: item.id || `o-migrated-${index}-${Date.now()}`,
      createdAt: item.createdAt || new Date().toISOString(),
      status: item.status || "Pending",
      productId: item.productId || "",
      productName: item.productName || item.name || "Unknown",
      quantity: Number(item.quantity) > 0 ? Number(item.quantity) : 1,
      price: item.price || "Rs. 0",
      source: item.source || "Menu",
      customerName: item.customerName || item.name || "Guest",
      customerContact: item.customerContact || item.customerPhone || "N/A",
      customerAddress: item.customerAddress || "N/A",
      paymentMethod: item.paymentMethod || "COD"
    }));
}

export function seedSiteData() {
  const rawProducts = safeRead(KEYS.products, null);
  const products = normalizeProducts(rawProducts);
  const finalProducts = products.length ? products : defaultProducts;
  safeWrite(KEYS.products, finalProducts);

  const rawTrending = safeRead(KEYS.trending, null);
  const trending = normalizeTrending(rawTrending, finalProducts);
  const normalizedDefaultTrending = normalizeTrending(defaultTrending, finalProducts);
  const finalTrending = trending.length
    ? trending
    : (normalizedDefaultTrending.length ? normalizedDefaultTrending : buildDefaultTrending(finalProducts));
  safeWrite(KEYS.trending, finalTrending);

  const rawOrders = safeRead(KEYS.orders, null);
  safeWrite(KEYS.orders, normalizeOrders(rawOrders));
}

export function getProducts() {
  const normalized = normalizeProducts(safeRead(KEYS.products, defaultProducts));
  if (!normalized.length) return defaultProducts;
  return normalized;
}

export function setProducts(products) {
  safeWrite(KEYS.products, products);
}

export function getTrending() {
  const products = getProducts();
  const normalized = normalizeTrending(safeRead(KEYS.trending, defaultTrending), products);
  if (!normalized.length) {
    const normalizedDefaultTrending = normalizeTrending(defaultTrending, products);
    if (normalizedDefaultTrending.length) return normalizedDefaultTrending;
    return buildDefaultTrending(products);
  }
  return normalized;
}

export function setTrending(trending) {
  safeWrite(KEYS.trending, trending);
}

export function getOrders() {
  return normalizeOrders(safeRead(KEYS.orders, []));
}

export function setOrders(orders) {
  safeWrite(KEYS.orders, orders);
}

export function addOrder(orderInput) {
  const next = {
    id: `o-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "Pending",
    customerName: "Guest",
    customerContact: "N/A",
    customerAddress: "N/A",
    paymentMethod: "COD",
    quantity: 1,
    ...orderInput
  };
  const orders = getOrders();
  setOrders([next, ...orders]);
}

export function addCartOrder(cartItems, customer) {
  const orders = getOrders();
  const now = new Date().toISOString();
  const nextOrders = cartItems.map((item) => ({
    id: `o-${Date.now()}-${item.id}`,
    createdAt: now,
    status: "Pending",
    productId: item.id,
    productName: item.name,
    quantity: item.quantity || 1,
    price: item.price,
    source: "Cart",
    customerName: customer.customerName,
    customerContact: customer.customerContact,
    customerAddress: customer.customerAddress,
    paymentMethod: customer.paymentMethod
  }));
  setOrders([...nextOrders, ...orders]);
}

export function getCategories(products) {
  return [...new Set(products.map((item) => item.category))];
}

export function groupProductsByCategory(products) {
  return products.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}
