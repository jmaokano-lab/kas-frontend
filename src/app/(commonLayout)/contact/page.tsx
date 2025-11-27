"use client";
// import MapComponent from '@/components/home/MapComponent';
import PageBanner from "@/components/shared/PageBanner";
import { Mail, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
const MapComponent = dynamic(() => import("@/components/home/MapComponent"), {
  ssr: false, // Disable SSR for this component
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Ensure the response is parsed correctly

      // Handle successful submission
      console.log("Form submitted successfully:", data);
      setIsSubmitting(false);
    } catch (err) {
      // setError('There was an error');
      console.error("Error:", err);
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-[#FCFDFD] pb-6">
      <PageBanner title="CONTACT US" pagePath="Home // Contact Us"></PageBanner>
      <section className="bg-white pt-16">
        <div className="max-w-7xl mx-auto px-7 grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Column (Contact Information) */}
          <div className=" col-span-2 ">
            <div className="flex justify-start items-center gap-1">
              <p className="h-1 w-10 bg-[#119d3e] rounded-2xl"></p>

              <p className="text-md font-medium text-center items-center text-[#119d3e]  px-2">
                CONTACT US
              </p>
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold  text-gray-800 mb-8   mt-1">
              Get In Touch With Us
            </h2>

            <p className="text-sm text-[#119d3e] font-semibold">
              ADDRESS:{" "}
              <span className="text-gray-600">
                Roda WQ 966 Munich Express,
                <br /> 70Germany, Park Lan, TX 7859
              </span>
            </p>
            {/* <p className="text-gray-600">Roda WQ 966 Munich Express, 70Germany, Park Lan, TX 7859</p> */}
            <div>
              <div className="flex justify-start items-center gap-4 mt-9">
                <div className="flex justify-center items-center hover:border-[#052F35]  border-4 rounded-full size-16 border-[#24b752] p-2">
                  <div className="size-[58px] rounded-full bg-[#119d3e] hover:bg-[#052F35]  flex justify-center items-center px-4">
                    <Phone className="h-8 w-8"></Phone>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-semibold">
                    CUSTOMER SERVICE:
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="text-gray-500 font-medium">
                      +9-555-888-679
                    </span>
                    ,{" "}
                    <span className="text-gray-500 font-medium">
                      +9-666-888-679
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-4 mt-3">
                <div className="flex justify-center items-center hover:border-[#052F35]  border-4 rounded-full size-16 border-[#24b752] p-2">
                  <div className="size-[58px] rounded-full bg-[#119d3e] hover:bg-[#052F35]  flex justify-center items-center px-4">
                    <Mail className="h-8 w-8"></Mail>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-semibold">
                    CAREERS:
                  </p>
                  <p className="text-gray-500 font-medium">exemple@info.com</p>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-dashed border-gray-300 mt-3"></div>
            <div className="flex justify-start items-center gap-2">
              <p className="text-gray-600 font-semibold"></p>
              {/* <div className="flex items-center justify-center p-3 space-x-3 ">
                <a
                  rel="noopener noreferrer"
                  href=""
                  title="Email"
                  className=" hover:text-[#119d3e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href=""
                  title="Twitter"
                  className=" hover:text-[#119d3e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href=""
                  title="LinkedIn"
                  className=" hover:text-[#119d3e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className=" hover:text-[#119d3e]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>

          {/* Right Column (Contact Form) */}
          <div className="col-span-3 ">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col">
                  {/* <label htmlFor="first-name" className="text-lg font-semibold text-gray-700">First Name *</label> */}
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="p-4 border border-gray-300 text-gray-950 font-bold bg-gray-200 rounded-lg mt-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                    placeholder="First Name *"
                  />
                </div>
                <div className="flex flex-col">
                  {/* <label htmlFor="last-name" className="text-lg font-semibold text-gray-700">Last Name *</label> */}
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="p-4 border border-gray-300 font-bold text-gray-950  bg-gray-200 rounded-lg mt-2 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                    placeholder="Last Name *"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col">
                  {/* <label htmlFor="phone" className="text-lg font-semibold text-gray-700">Your Phone *</label> */}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-4 border border-gray-300 font-bold text-gray-950 bg-gray-200 rounded-lg mt-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                    placeholder="Your Phone *"
                  />
                </div>

                <div className="flex flex-col">
                  {/* <label htmlFor="email" className="text-lg font-semibold text-gray-700">Your Email *</label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-4 border border-gray-300 font-bold text-gray-950 bg-gray-200 rounded-lg mt-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                    placeholder="Your Email *"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                {/* <label htmlFor="message" className="text-lg font-semibold text-gray-700">Your Message</label> */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="p-3 border border-gray-300 font-bold text-gray-950 bg-gray-200 rounded-lg mt-1 focus:outline-none focus:ring-1 focus:ring-green-500"
                  placeholder="Your Message *"
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="bg-green-600 text-white font-medium py-3 px-6 rounded-full mt-5 hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="-z-10">
        <MapComponent></MapComponent>
      </div>
    </div>
  );
};

export default ContactPage;
