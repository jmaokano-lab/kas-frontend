"use client";

import { countryOptions } from "@/data";
import { registerUser } from "@/services/AuthService";
import { PayloadData } from "@/types/User";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();

  const [useEmail, setUseEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const fullPhone: string | null = useEmail ? null : `${phoneNumber}`;

    const payload: PayloadData = {
      name: fd.get("name") as string | null,
      email_or_phone: useEmail ? "email" : "phone",
      phone: fullPhone,
      email: useEmail ? (fd.get("email") as string | null) : null,
      password: fd.get("password") as string | null,
      password_confirmation: fd.get("password_confirmation") as string | null,
      acceptTerms: fd.get("acceptTerms") === "on",
    };

    console.log("Register payload:", payload);
    try {
      console.log(payload);
      const res = await registerUser(payload);
      //  setIsLoading(true);
      if (res?.result) {
        console.log(res);
        toast.success(res?.message);
        router.push("/");
      } else {
        console.log(res);
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountryCode(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg px-10 py-10">
        {/* Header */}
        <h1 className="text-2xl font-bold text-[#119d3e] mb-6">
          CREATE AN ACCOUNT.
        </h1>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 text-gray-800 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e]"
              placeholder="Full Name"
            />
          </div>

          {/* Phone / Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {useEmail ? "Email" : "Phone"}
            </label>

            {useEmail ? (
              // ---------- EMAIL FIELD ----------
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e]"
                  placeholder="you@example.com"
                />
                <button
                  type="button"
                  onClick={() => setUseEmail(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#119d3e] italic hover:underline"
                >
                  *Use Phone Instead
                </button>
              </div>
            ) : (
              // ---------- PHONE FIELD ----------
              <div className="flex flex-col gap-2 text-gray-800">
                {/* hidden field for final phone (for FormData) */}
                <input
                  type="hidden"
                  name="phone"
                  value={`${selectedCountryCode}${phoneNumber}`}
                />

                <div className="flex items-center gap-2">
                  {/* Country dropdown + flag */}
                  <div className="relative w-44">
                    <img
                      src={
                        countryOptions.find(
                          (c) => c.dialCode === selectedCountryCode
                        )?.flag
                      }
                      alt="flag"
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-4 rounded object-cover"
                    />
                    <select
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                      className="w-full appearance-none border border-gray-300 rounded px-2 py-2 pl-10 pr-6 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e]"
                    >
                      {countryOptions.map((c) => (
                        <option key={c.code} value={c.dialCode}>
                          {c.label} {c.dialCode}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                      ▼
                    </span>
                  </div>

                  {/* Local number */}
                  <input
                    type="tel"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e]"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setUseEmail(true)}
                  className="text-xs text-[#119d3e] italic hover:underline self-start"
                >
                  *Use Email Instead
                </button>
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative text-gray-800">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                minLength={6}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e]"
                placeholder="••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                👁
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Password must contain at least 6 digits
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative text-gray-800">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password_confirmation"
                required
                minLength={6}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e]"
                placeholder="Confirm Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                👁
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-xs">
            <input
              type="checkbox"
              name="acceptTerms"
              required
              className="mt-1 rounded border-gray-300 text-[#119d3e] focus:ring-[#119d3e]"
            />
            <p className="text-gray-600">
              By signing up you agree to our{" "}
              <a href="#" className="text-[#119d3e] font-semibold">
                terms and conditions
              </a>
            </p>
          </div>

          {/* Create Account button */}
          <button
            type="submit"
            className="w-full bg-[#119d3e] hover:bg-emerald-700 text-white font-semibold py-2.5 rounded transition"
          >
            Create Account
          </button>
        </form>

        {/* Login link */}
        <p className="mt-6 text-xs text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#119d3e] font-semibold hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
