"use client";
import PageBanner from "@/components/shared/PageBanner";
import { useState } from "react";

const FishGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc); // Set the selected image URL
    setIsModalOpen(true); // Open the modal
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedImage(""); // Reset selected image
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
          <div className="flex-col lg:flex-row space-x-4">
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
              // className="bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden transform duration-500 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(image.src)}
                className="w-full h-full  object-cover"
              />
              {/* <div className="p-4">
                <h3 className="text-md text-gray-800 font-medium">
                  {image.label}
                </h3>
              </div> */}
            </div>
          ))}
        </div>
        {/* Modal for Image Preview */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-xl font-bold text-gray-600"
                >
                  X
                </button>
              </div>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FishGalleryPage;
