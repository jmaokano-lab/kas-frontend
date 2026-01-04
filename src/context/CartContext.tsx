"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "@/types/Cart";
import { PaymentType } from "@/components/home/Cart/PaymentMethod";
import { Area, City, Country, ShippingForm, State } from "@/types/Address";

interface CartContextType {
  items: CartItem[];
  promoCode: string | null;
  discount: number;
  shippingCharge: number;
  shippingAddress: ShippingForm | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  applyPromo: (code: string) => void;
  setShippingAddress: (address: ShippingForm) => void;
  setShippingCharge: (charge: number) => void;

  total: number;
  grandTotal: number;
  itemCount: number;
  buyNow: (item: CartItem) => void;
  clearCart: () => void;
  paymentMethod: PaymentType;
  setPaymentMethod: (method: PaymentType) => void;
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  setStates: React.Dispatch<React.SetStateAction<State[]>>;
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
  setAreas: React.Dispatch<React.SetStateAction<Area[]>>;
  states: State[];
  cities: City[];
  loading: boolean;
  areas: Area[];
  // ShipAddress: ShippingAddress[];
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const [shippingAddress, setShippingAddress] = useState<ShippingForm | null>(
    null
  );
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("cod");

  /* Persist cart */
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
    if (code === "SAVE10") {
      setPromoCode(code);
      setDiscount(0.1);
    } else {
      setPromoCode(null);
      setDiscount(0);
    }
  };

  const total =
    items.reduce((sum, i) => sum + i.price * i.quantity, 0) * (1 - discount);

  const grandTotal = total + shippingCharge;

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const buyNow = (item: CartItem) => {
    setItems([item]);
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode(null);
    setDiscount(0);
    setShippingCharge(0);
    setShippingAddress(null);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        promoCode,
        discount,
        shippingCharge,
        shippingAddress,
        addToCart,
        removeFromCart,
        updateQty,
        applyPromo,
        setShippingAddress,
        setShippingCharge,
        total,
        grandTotal,
        itemCount,
        buyNow,
        clearCart,
        countries,
        setCountries,
        states,
        setStates,
        cities,
        setCities,
        areas,
        setAreas,
        loading,

        setPaymentMethod,
        paymentMethod,
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
