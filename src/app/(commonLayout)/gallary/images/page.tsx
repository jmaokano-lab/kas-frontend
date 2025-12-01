"use client";
import PageBanner from "@/components/shared/PageBanner";
import Image from "next/image";
import { useState } from "react";

const FishGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const showPrev = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
  };

  const showNext = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
  };

  // Categories for filtering
  const categories = [
    "All",
    "Featured",
    "Freshwater",
    "Saltwater",
    "Aquarium Setup",
  ];

  // Array of images (for demonstration, replace these with actual product images)
  const images = [
    { src: "/hilsha.jpg", alt: "Fish 1", label: "Big Elish" },
    { src: "/hilsha.webp", alt: "Fish 2", label: "Elish" },
    { src: "/fresh-fish.jpg", alt: "Fish 3", label: "Slice Of Fish" },
    { src: "/multi2.png", alt: "Fish 4", label: "Multiple Fish" },
    { src: "/multiple.jpg", alt: "Fish 5", label: "Aquarium Fish " },
    { src: "/hilsha.jpg", alt: "Fish 1", label: "Big Elish" },
    { src: "/hilsha.webp", alt: "Fish 2", label: "Elish" },
    { src: "/fresh-fish.jpg", alt: "Fish 3", label: "Slice Of Fish" },
    { src: "/multi2.png", alt: "Fish 4", label: "Multiple Fish" },
    { src: "/multiple.jpg", alt: "Fish 5", label: "Aquarium Fish " },
    { src: "/shutki.webp", alt: "Fish 6", label: "Dry Fish " },
    { src: "/multi2.png", alt: "Fish 4", label: "Multiple Fish" },
    { src: "/multiple.jpg", alt: "Fish 5", label: "Aquarium Fish " },
    { src: "/shutki.webp", alt: "Fish 6", label: "Dry Fish " },
    { src: "/shutki.webp", alt: "Fish 6", label: "Dry Fish " },
  ];

  // Filter images based on the active category
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.label.includes(activeCategory));

  return (
    <div>
      <PageBanner title="Gallary" pagePath="Home // Our Gallery"></PageBanner>
      <div
        className="bg-white max-w-7xl mx-auto px-4 pt-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/client-bg1.jpg')" }}
      >
        {/* Category Filters */}
        <div className="px-4 py-2">
          {/* Centering the category filter buttons */}
          <div className="flex flex-wrap justify-center space-x-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  activeCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500 border border-green-500"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6 ">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`${
                index === 0 || index % 7 === 0
                  ? "col-span-2 row-span-2  object-fill h-[368px]"
                  : "transform duration-500 hover:scale-105 h-44"
              } bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                onClick={() => openModal(index)}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Modal for Image Preview */}
        {isModalOpen && currentIndex !== null && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-red-500"
              >
                ×
              </button>

              {/* Slider content */}
              <div className="flex items-center gap-4">
                {/* Prev arrow */}
                <button
                  onClick={showPrev}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  ‹
                </button>

                {/* Image */}
                <div className="flex-1">
                  <Image
                    src={filteredImages[currentIndex].src}
                    alt="Selected"
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                </div>

                {/* Next arrow */}
                <button
                  onClick={showNext}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  ›
                </button>
              </div>

              {/* Small indicator */}
              <div className="mt-3 text-center text-sm text-gray-500">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FishGalleryPage;
