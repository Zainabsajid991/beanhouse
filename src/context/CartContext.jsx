/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from "react";

const CART_KEY = "beanhouse_cart";
const CartContext = createContext(null);

function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => readCart());

  const update = (next) => {
    setItems(next);
    writeCart(next);
  };

  const addToCart = (product) => {
    const exists = items.find((item) => item.id === product.id);
    if (exists) {
      update(items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
      return;
    }
    update([
      ...items,
      {
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        category: product.category,
        quantity: 1
      }
    ]);
  };

  const removeFromCart = (productId) => {
    update(items.filter((item) => item.id !== productId));
  };

  const changeQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    update(items.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  };

  const clearCart = () => update([]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, changeQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
