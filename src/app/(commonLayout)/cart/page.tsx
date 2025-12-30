"use client";

import PaymentMethod from "@/components/home/Cart/PaymentMethod";
import PromoCode from "@/components/home/Cart/PromoCode";
import ShippingAddress from "@/components/home/Cart/ShippingAddress";
import ShippingChargeInput from "@/components/home/Cart/ShippingCharge";
import PageBanner from "@/components/shared/PageBanner";
import { Option, useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { getAllCountries } from "@/services/Checkout";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [countries, setCountries] = useState<Option[]>([]);
  const [states, setStates] = useState<Option[]>([]);
  const [cities, setCities] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);
  const {
    items,
    updateQty,
    removeFromCart,
    total,
    shippingCharge,
    grandTotal,
    // countries,
    // states,
    // cities,
    // loading,
  } = useCart();
  useEffect(() => {
    const loadCartData = async () => {
      try {
        const [
          countriesRes,
          //  statesRes, citiesRes
        ] = await Promise.all([
          getAllCountries(),
          // getAllState(),
          // getAllCities(),
        ]);

        setCountries(countriesRes);
        // setStates(statesRes);
        // setCities(citiesRes);
      } catch (error) {
        console.error("Failed to load cart data", error);
      } finally {
        setLoading(false);
      }
    };

    loadCartData();
  }, []);

  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <PageBanner title="Cart" pagePath="Home // Cart Details"></PageBanner>
      <div
        className="  pt-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/client-bg1.jpg')" }}
      >
        <div className="container mx-auto py-10 grid md:grid-cols-5 gap-8">
          {/* Items */}
          <div className="md:col-span-3 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border rounded-xl p-4 bg-black/20 hover:scale-105 duration-300 ease-in-out"
              >
                <img src={item.image} className="h-20 w-20" />
                <div className="flex-1">
                  <h3>{item.name}</h3>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                    className="border rounded-xl text-center w-20"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 px-3 py1.5 rounded-xl bg-[#119d3e]"
                  >
                    Remove
                  </button>
                </div>
                <div>৳{item.price}</div>
              </div>
            ))}

            <p className="text-2xl font font-semibold">Shipping Address :</p>

            <ShippingAddress
              countries={countries}
              states={states}
              cities={cities}
            />
          </div>

          {/* Summary */}
          <div className="md:col-span-2 space-y-6 border p-6  rounded-xl">
            <PromoCode />
            <ShippingChargeInput></ShippingChargeInput>
            <p>Subtotal: ৳{total.toFixed(2)}</p>
            <p>Shipping: ৳{shippingCharge.toFixed(2)}</p>
            <hr />
            <p className="font-bold text-[#119d3e]">
              Grand Total: ৳{grandTotal.toFixed(2)}
            </p>
            <div>
              <PaymentMethod></PaymentMethod>
            </div>
            <button className="bg-green-600 text-white w-full py-3 cursor-pointer  hover:transform hover:scale-105 duration-300 ease-in-out hover:rounded-2xl">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
