"use client";

import { useCart } from "@/context/CartContext";
import { useState, ChangeEvent } from "react";

/* =====================
   Types
===================== */

type Option = {
  id: number | string;
  name: string;
};

type ShippingForm = {
  phone: string;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
};

type Props = {
  countries: Option[];
  states: Option[];
  cities: Option[];
};

/* =====================
   Component
===================== */

const ShippingAddress = ({ countries, states, cities }: Props) => {
  const { setShippingAddress } = useCart();

  const [form, setForm] = useState<ShippingForm>({
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  /* =====================
     Handlers
  ===================== */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setShippingAddress(form);
  };

  /* =====================
     UI
  ===================== */

  return (
    <div className="space-y-4 border rounded-xl p-4">
      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      />

      {/* Country */}
      <select
        name="country"
        value={form.country}
        onChange={handleChange}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      >
        <option value="">Select Country</option>

        {countries.length > 0
          ? countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))
          : ""}
      </select>

      {/* State */}
      <select
        name="state"
        value={form.state}
        onChange={handleChange}
        className="w-full bg-black/20  rounded-lg px-3 py-2"
      >
        <option value="">Select State</option>
        {states.length > 0
          ? states.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))
          : ""}
      </select>

      {/* City */}
      <select
        name="city"
        value={form.city}
        onChange={handleChange}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      >
        <option value="">Select City</option>
        {cities.length > 0
          ? cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))
          : ""}
      </select>
      {/* Address */}
      <input
        type="text"
        name="address"
        placeholder="Street Address"
        value={form.address}
        onChange={handleChange}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      />

      {/* Postal Code */}
      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={form.postalCode}
        onChange={handleChange}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      />

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-[#119d3e] text-white w-full py-2 rounded-xl hover:opacity-90"
      >
        Save Address
      </button>
    </div>
  );
};
export default ShippingAddress;
