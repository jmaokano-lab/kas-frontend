"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ImageType = {
  path: string;
};

export default function ProductGallery({ images }: { images?: ImageType[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setActive(images[0].path);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center border rounded-lg text-gray-400">
        No Images Available
      </div>
    );
  }

  return (
    <div>
      {/* Main Image */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden border">
        {active && (
          <Image
            src={active}
            alt="Product image"
            fill
            className="object-contain"
            priority
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(img.path)}
            className={`relative w-20 h-20 border rounded overflow-hidden ${
              active === img.path ? "border-primary" : ""
            }`}
          >
            <Image
              src={img.path}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
