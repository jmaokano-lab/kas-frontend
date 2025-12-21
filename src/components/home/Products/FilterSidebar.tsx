"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaStar } from "react-icons/fa"; // react-icons for star

export default function FilterSidebar() {
  const router = useRouter();
  const params = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(params.get("search") || "");

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    router.push(`/products?${newParams.toString()}`);
  };

  return (
    <div className="space-y-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6">
      <h2 className="text-2xl font-semibold">Filters</h2>

      {/* Search Bar */}
      <div className="z-20">
        <label className="block font-medium mb-1 ">Search</label>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search products..."
          className="w-full border p-2 rounded-xl"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateFilter("search", searchTerm);
            }
          }}
        />
      </div>

      {/* Category */}
      <div>
        <label className="block font-medium">Category</label>
        <select
          className="w-full border p-2 rounded-xl"
          onChange={(e) => updateFilter("category", e.target.value)}
          defaultValue={params.get("category") || ""}
        >
          <option value="">All</option>
          <option className="hover:bg-[#27c36e]" value="electronics">
            Electronics
          </option>
          <option value="fashion">Fashion</option>
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block font-medium">Price</label>
        <input
          type="number"
          placeholder="Min"
          className="w-full border rounded-xl p-2 mb-2"
          onBlur={(e) => updateFilter("minPrice", e.target.value)}
          defaultValue={params.get("minPrice") || ""}
        />
        <input
          type="number"
          placeholder="Max"
          className="w-full border p-2  rounded-xl"
          onBlur={(e) => updateFilter("maxPrice", e.target.value)}
          defaultValue={params.get("maxPrice") || ""}
        />
      </div>

      {/* Rating Filter with Stars */}
      <div>
        <label className="block font-medium mb-2">Rating</label>
        <div className="flex flex-col gap-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <label
              key={star}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="rating"
                value={star}
                onChange={(e) => updateFilter("rating", e.target.value)}
                defaultChecked={params.get("rating") === star.toString()}
              />
              <div className="flex text-yellow-400">
                {[...Array(star)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {[...Array(5 - star)].map((_, i) => (
                  <FaStar key={i} className="text-gray-300" />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="border p-2 rounded-xl">
        {/* New Arrival */}
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => updateFilter("new", String(e.target.checked))}
              defaultChecked={params.get("new") === "true"}
            />
            New Arrival
          </label>
        </div>
        {/* New Arrival */}
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => updateFilter("old", String(e.target.checked))}
              defaultChecked={params.get("old") === "true"}
            />
            Old Product
          </label>
        </div>
      </div>
    </div>
  );
}
