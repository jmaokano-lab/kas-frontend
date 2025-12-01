"use client";

import { getCurrentUser, loginUser } from "@/services/AuthService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [usePhone, setUsePhone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usertype, setUsertype] = useState("customer");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = {
      // only one of these will exist in FormData
      email_or_phone: usePhone ? "phone" : "email",
      user_type: usertype,
      email: !usePhone ? (fd.get("email") as string | null) : "",
      phone: usePhone ? (fd.get("phone") as string | null) : "",
      password: fd.get("password") as string | null,
      remember: fd.get("remember") === "on",
    };

    console.log("form payload", payload);
    try {
      const data = await loginUser(payload);
      console.log("Login response data:", data);
      if (data.result) {
        const user = await getCurrentUser();
        console.log("Current user:", user);
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Left Side */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <div className=" aspect-[4/3]   flex items-center justify-center">
            <Image src={"/login.jpg"} width={520} height={635} alt="logo" />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 px-10 py-10">
          <div className="mb-4">
            <div className="h-12 w-12  flex items-center justify-center">
              <Image src={"/kasLogo.png"} width={44} height={44} alt="logo" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#119d3e] mb-1">
            WELCOME BACK !
          </h1>
          <p className="text-sm text-gray-500 mb-8">Login to your account.</p>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email / Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {usePhone ? "Phone Number" : "Email"}
              </label>
              <div className="relative">
                <input
                  name={usePhone ? "phone" : "email"}
                  type={usePhone ? "tel" : "email"}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e] text-gray-700"
                  placeholder={usePhone ? "01XXXXXXXXX" : "johndoe@example.com"}
                  required
                />
                <button
                  type="button"
                  onClick={() => setUsePhone((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#119d3e] hover:underline"
                >
                  {usePhone ? "Use Email Instead" : "Use Phone Number Instead"}
                </button>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#119d3e] focus:border-[#119d3e] text-gray-700"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  👁
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="rounded border-gray-300 text-[#119d3e] focus:ring-[#119d3e]"
                />
                <span className="text-gray-600">Remember Me</span>
              </label>
              <button type="button" className="text-[#119d3e] hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#119d3e] hover:bg-emerald-700 text-white font-semibold py-2.5 rounded transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-xs text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="text-[#119d3e] font-semibold hover:underline"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
