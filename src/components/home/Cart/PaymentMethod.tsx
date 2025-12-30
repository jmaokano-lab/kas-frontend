"use client";

import { Car, DollarSign } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export type PaymentType = "cod" | "zelle";

interface Props {
  onChange?: (method: PaymentType) => void;
}

export default function PaymentMethod({ onChange }: Props) {
  const [payment, setPayment] = useState<PaymentType>("cod");

  const handleChange = (value: PaymentType) => {
    setPayment(value);
    onChange?.(value);
  };

  return (
    <div className="space-y-4 border rounded-xl p-4">
      <h3 className="text-lg font-semibold text-gray-200">
        Select Payment Method
      </h3>

      {/* Cash on Delivery */}
      <label className="flex items-center duration-500 ease-in-out bg-green-100/20 group gap-2 cursor-pointer border rounded-lg p-3 hover:bg-gray-50">
        <input
          type="radio"
          name="payment"
          checked={payment === "cod"}
          onChange={() => handleChange("cod")}
          className="accent-[#119d3e]"
        />

        {/* Car Icon */}
        <div className="w-12 h-12 relative font-bold flex items-center justify-center rounded-full bg-green-100 text-[#119d3e]">
          <Car className="size-8"></Car>
          <DollarSign className="absolute top-1 left-2 "></DollarSign>
        </div>

        <div>
          <p className="font-medium text-gray-50  group-hover:text-gray-800">
            Cash on Delivery
          </p>
          <p className="text-sm text-gray-400">
            Pay when you receive the product
          </p>
        </div>
      </label>

      {/* Zelle Payment */}
      <label className="flex items-center duration-500 ease-in-out bg-green-100/20 group gap-2 cursor-pointer border rounded-lg p-2 hover:bg-gray-50 hover:text-gray-900">
        <input
          type="radio"
          name="payment"
          value="zelle"
          checked={payment === "zelle"}
          onChange={() => handleChange("zelle")}
          className="accent-[#119d3e]"
        />
        {/* Car Icon */}
        <div className="w-14 h-14 font-bold flex items-center justify-center rounded-full bg-green-100 text-[#119d3e]">
          <Image src={"/zelle-png.webp"} width={36} height={36} alt="logo" />
        </div>
        <div>
          <p className="font-medium text-gray-200 group-hover:text-gray-900">
            Zelle Payment
          </p>
          <p className="text-sm text-gray-400">
            Pay securely using Zelle transfer
          </p>
        </div>
      </label>
    </div>
  );
}
