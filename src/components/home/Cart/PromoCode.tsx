"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function PromoCode() {
  const { applyPromo } = useCart();
  const [code, setCode] = useState("");

  return (
    <div className="flex gap-2">
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Promo code"
        className="bg-black/20  p-2 w-full"
      />
      <button
        onClick={() => applyPromo(code)}
        className="bg-[#119d3e] text-white px-4 cursor-pointer"
      >
        Apply
      </button>
    </div>
  );
}
