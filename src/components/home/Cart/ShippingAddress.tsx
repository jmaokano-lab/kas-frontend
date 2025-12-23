"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ShippingAddress() {
  const { setShippingAddress } = useCart();
  const [form, setForm] = useState({
    FullName: "",
    Phone: "",
    Address: "",
    City: "",
    PostalCode: "",
  });

  return (
    <div className="space-y-3 border rounded-xl p-2">
      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          className=" p-2 w-full bg-black/20 "
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}

      <button
        onClick={() => setShippingAddress(form)}
        className="border-2 border-[#119d3e] text-white w-full py-2 cursor-pointer hover:bg-[#119d3e] rounded-b-xl "
      >
        Save Address
      </button>
    </div>
  );
}
