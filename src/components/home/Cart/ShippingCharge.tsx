"use client";

import { useCart } from "@/context/CartContext";

export default function ShippingChargeInput() {
  const { shippingCharge, setShippingCharge } = useCart();

  return (
    <div>
      <label className="block font-medium mb-1">Shipping Charge</label>
      <input
        type="number"
        value={shippingCharge}
        onChange={(e) => setShippingCharge(Number(e.target.value) || 0)}
        className="border px-3 py-2 rounded w-full"
        placeholder="Enter shipping cost"
      />
    </div>
  );
}
