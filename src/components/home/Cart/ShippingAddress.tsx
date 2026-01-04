"use client";

import { useCart } from "@/context/CartContext";
import { createShippingAddress } from "@/services/Checkout";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Props, ShippingForm } from "@/types/Address";

const ShippingAddress = ({ countries, states, cities, areas }: Props) => {
  const { setShippingAddress } = useCart();

  const [form, setForm] = useState<ShippingForm>({
    phone: "",
    address: "",
    country_id: "",
    state_id: "",
    city_id: "",
    area_id: "",
    postal_code: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      state_id: "",
      city_id: "",
      area_id: "",
    }));
  }, [form.country_id]);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      city_id: "",
      area_id: "",
    }));
  }, [form.state_id]);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      area_id: "",
    }));
  }, [form.city_id]);

  /* =====================
     Filtered lists
  ===================== */

  const filteredStates = useMemo(
    () =>
      states?.filter((s) => String(s.country_id) === String(form.country_id)),
    [states, form.country_id]
  );

  const filteredCities = useMemo(
    () => cities?.filter((c) => String(c.state_id) === String(form.state_id)),
    [cities, form.state_id]
  );

  const filteredAreas = useMemo(
    () => areas?.filter((a) => String(a.city_id) === String(form.city_id)),
    [areas, form.city_id]
  );

  /* =====================
     Save
  ===================== */

  const handleSave = async () => {
    try {
      await createShippingAddress(form);
      setShippingAddress(form);
    } catch (error) {
      console.error("Save failed", error);
    }
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
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      />

      {/* Country */}
      <select
        name="country_id"
        value={form.country_id}
        onChange={handleChange}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      >
        <option value="">Select Country</option>
        {countries?.map((c) => (
          <option key={c.id} value={c.id} className="bg-white text-black">
            {c.name}
          </option>
        ))}
      </select>

      {/* State */}
      <select
        name="state_id"
        value={form.state_id}
        onChange={handleChange}
        disabled={!form.country_id}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      >
        <option value="">Select State</option>
        {filteredStates.map((s) => (
          <option key={s.id} value={s.id} className="bg-white text-black">
            {s.name}
          </option>
        ))}
      </select>

      {/* City */}
      <select
        name="city_id"
        value={form.city_id}
        onChange={handleChange}
        disabled={!form.state_id}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      >
        <option value="">Select City</option>
        {filteredCities.map((c) => (
          <option key={c.id} value={c.id} className="bg-white text-black">
            {c.name}
          </option>
        ))}
      </select>

      {/* Area */}
      <select
        name="area_id"
        value={form.area_id}
        onChange={handleChange}
        disabled={!form.city_id}
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      >
        <option value="">Select Area</option>
        {filteredAreas.map((a) => (
          <option key={a.id} value={a.id} className="bg-white text-black">
            {a.name}
          </option>
        ))}
      </select>

      {/* Address */}
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Street Address"
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      />

      {/* Postal Code */}
      <input
        type="text"
        name="postal_code"
        value={form.postal_code}
        onChange={handleChange}
        placeholder="Postal Code"
        className="w-full bg-black/20 rounded-lg px-3 py-2"
      />

      {/* Save */}
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
