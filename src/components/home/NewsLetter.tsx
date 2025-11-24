"use client";
import Image from "next/image";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Logic for email submission (like calling an API or service to store the email)
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      className="py-12 lg:px-40  bg-[#083a3f] text-white bg-cover bg-center max-w-7xl rounded-2xl  mx-auto"
      style={{
        backgroundImage: "url('/counter-shape-3-1.png')",
      }}
    >
      <div className=" hidden lg:flex p-2 lg:p-0 ">
        <div className=" w-full  ">
          <div className="flex justify-center items-center mb-3">
            <Image
              src={"/newsletter-icon.svg"}
              alt="newsletter"
              height={48}
              width={48}
            />
          </div>
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-white mb-4 text-center">
            Subscribe Newsletter
          </h2>
          <p className="text-lg text-white mb-4">
            Subscribe to our newsletter to get the latest updates on fresh
            seafood, special offers, and more.
          </p>

          {/* Newsletter Form */}
          <form className="max-w-md mx-auto">
            <div className="flex justify-between flex-col sm:flex-row gap-4 border border-[#27c36e] rounded-3xl">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 text-lg w-full rounded-3xl  text-white placeholder-gray-400 focus:outline-none "
              />
              <button
                type="submit"
                className="px-2 py-1.5
                             rounded-3xl cursor-pointer bg-[#27c36e] text-white font-semibold  shadow-md transition duration-300 hover:bg-[#119d3e] focus:outline-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
