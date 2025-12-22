"use client";

import PromoCode from "@/components/home/Cart/PromoCode";
import ShippingAddress from "@/components/home/Cart/ShippingAddress";
import PageBanner from "@/components/shared/PageBanner";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQty, removeFromCart, total } = useCart();

  return (
    <div>
      <PageBanner title="Cart" pagePath="Home // Cart Details"></PageBanner>
      <div
        className="  pt-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/client-bg1.jpg')" }}
      >
        <div className="container mx-auto py-10 grid md:grid-cols-3 gap-8">
          {/* Items */}
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 border p-4">
                <img src={item.image} className="h-20 w-20" />
                <div className="flex-1">
                  <h3>{item.name}</h3>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                    className="border w-20"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 px-3 py1.5 rounded-xl bg-[#119d3e]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-6 border p-6">
            <PromoCode />
            <ShippingAddress />
            <div className="text-xl font-bold">Total: ৳{total}</div>
            <button className="bg-green-600 text-white w-full py-3">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
