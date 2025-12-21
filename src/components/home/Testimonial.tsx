"use client";
import { useUser } from "@/context/UserContext";
import { getAllTestimonials } from "@/services/Testimonial";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at Fresh Fish Co.",
    quote:
      "I’ve never had a better experience with seafood delivery. The fish is always fresh, and the service is exceptional. Highly recommend for anyone looking for top-quality fish!",
    image: "/team/blog-post-user-1.jpg",
  },
  {
    name: "Samantha Green",
    role: "Chef & Restaurateur",
    quote:
      "As a chef, quality ingredients are a must. The fish from this service is always fresh and arrives in perfect condition. It’s my go-to supplier for seafood in my restaurant.",
    image: "/team/blog-post-user-2.jpg",
  },
  {
    name: "Mark Johnson",
    role: "Owner of Ocean Breeze Seafood",
    quote:
      "The variety and quality of fish offered are unmatched. The freshness is incredible, and our customers have noticed the difference. I trust them for all my seafood needs.",
    image: "/team/blog-post-user-3.jpg",
  },
  {
    name: "Laura M.",
    role: "Regular Customer",
    quote:
      "I’ve been ordering from here for months, and the quality is always consistent. The fish is always fresh and delicious, and I love the convenience of the delivery service.",
    image: "/team/blog-post-admin-1.jpg",
  },
  {
    name: "Samuel Thompson",
    role: "Sustainability Advocate",
    quote:
      "As someone who cares deeply about sustainable sourcing, I appreciate how this company prioritizes eco-friendly fishing practices. I’m proud to support a business with such ethical standards.",
    image: "/team/team-img-1-3.png",
  },
];

export default function Testimonial() {
  // const [testimonials, setTestimonials] = useState([]);
  // const { user, setIsLoading, refetchUser } = useUser();

  console.log(testimonials);

  // useEffect(() => {
  //   const fetchTestimonials = async () => {
  //     try {
  //       const data = await getAllTestimonials();
  //       setTestimonials(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTestimonials();
  // }, []);
  return (
    <section
      className="py-16 px-6 bg-[#052F35] text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/map-shape-1.png')" }}
    >
      <div className="flex justify-center items-center gap-1">
        <p className="h-1 w-10 bg-[#119d3e] rounded-2xl"></p>

        <p className="text-md  text-center items-center text-[#119d3e]  px-2">
          WHAT OUR CLIENT SAY
        </p>
        <p className="h-1 w-10 rounded-2xl bg-[#119d3e]"></p>
      </div>
      <h2 className="text-4xl font-extrabold text-center text-White mb-8 px-2 mt-2">
        Testimonials
      </h2>

      {/* Marquee component for smooth scrolling */}
      <Marquee gradient={false} speed={30} direction="left" pauseOnHover>
        {/* Map over testimonials and display */}
        {testimonials?.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#083a3f] p-6 rounded-lg shadow-xl mx-6 max-w-80 h-[400px]"
            style={{ backgroundImage: "url('/map-shape-2.png')" }}
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
                <Image
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p>
                <i />
              </p>
              <p className="text-lg text-center italic">
                "{testimonial?.quote.slice(0, 150)}
                {testimonial?.quote.length > 150 ? "..." : ""}"
              </p>
              <div className="mt-4 text-center">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-[#27c36e]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
