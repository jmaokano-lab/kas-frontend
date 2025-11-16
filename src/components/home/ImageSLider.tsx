"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderImage = {
    src: string;
    alt?: string;
};

type ImageSliderProps = {
    images: SliderImage[];
    interval?: number; // auto-slide time in ms
    className?: string;
};

export function ImageSlider({
    images,
    interval = 3000,
    className = "",
}: ImageSliderProps) {
    const [index, setIndex] = useState(0);


    // console.log(images)

    // If no images, render nothing
    if (!images || images.length === 0) {
        return null;
    }

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Auto-slide
    useEffect(() => {
        if (images.length <= 1) return;

        const id = window.setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => window.clearInterval(id);
    }, [images.length, interval]);

    return (
       <div
      className={`relative w-full h-64 lg:h-[420px] overflow-hidden ${className}`}
    >
      {images.map((img, i) => (
        <div
          key={img.src + i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt ?? "Slider image"}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )} */}
    </div>
  );
}
