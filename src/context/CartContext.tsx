"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CartItem, ShippingAddress } from "@/types/Cart";

interface CartContextType {
  items: CartItem[];
  promoCode: string | null;
  discount: number;
  shippingAddress: ShippingAddress | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  applyPromo: (code: string) => void;
  setShippingAddress: (address: ShippingAddress) => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress | null>(null);

  // Persist cart
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const applyPromo = (code: string) => {
    // demo promo logic
    if (code === "SAVE10") {
      setPromoCode(code);
      setDiscount(0.1); // 10%
    } else {
      setPromoCode(null);
      setDiscount(0);
    }
  };

  const total =
    items.reduce((sum, i) => sum + i.price * i.quantity, 0) * (1 - discount);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        promoCode,
        discount,
        shippingAddress,
        addToCart,
        removeFromCart,
        updateQty,
        applyPromo,
        setShippingAddress,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
