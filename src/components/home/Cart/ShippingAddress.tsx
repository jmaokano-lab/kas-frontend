"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ShippingAddress() {
  const { setShippingAddress } = useCart();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  return (
    <div className="space-y-3">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <button
        onClick={() => setShippingAddress(form)}
        className="bg-primary text-white w-full py-2"
      >
        Save Address
      </button>
    </div>
  );
}
