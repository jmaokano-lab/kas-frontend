"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ImageType = {
  path: string;
};

export default function ProductGallery({
  images,
}: {
  images?: ImageType[]; // made optional
}) {
  // Initialize active safely
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (images && images.length > 0) {
      setActive(images[0].path);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center border rounded-lg text-gray-400">
        No Images
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full h-96 rounded-lg overflow-hidden border">
        <Image src={active} alt="Product" fill className="object-contain" />
      </div>

      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative w-20 h-20 border rounded cursor-pointer ${
              active === img.path ? "border-primary" : ""
            }`}
            onClick={() => setActive(img.path)}
          >
            <Image
              src={img.path}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
