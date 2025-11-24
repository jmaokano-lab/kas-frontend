"use client";
import { useState } from "react";
import { Phone, UserPlus, LogIn } from "lucide-react"; // Importing icons
import PageBanner from "@/components/shared/PageBanner";

const VideoGalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>(""); // Store selected video URL

  // Array of videos with YouTube links (replace these with actual YouTube video links)
  const videos = [
    {
      youtubeUrl: "https://www.youtube.com/watch?v=dEXhuiLywu8",

      title: "Fish Feeding",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=boVLzv2g_wg",

      title: "Fish Tank Setup",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=cNaa87mzlQg",

      title: "Aquarium Maintenance",
    },
    {
      youtubeUrl: "https://www.youtube.com/watch?v=As7-_PLbsE0",

      title: "Fish Care Tips",
    },
  ];

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0]; // Extract video ID from URL
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Generate YouTube video thumbnail URL
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0]; // Extract video ID from URL
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Use high-quality thumbnail
  };

  // Handle video click to open modal
  const handleVideoClick = (youtubeUrl: string) => {
    const embedUrl = getYouTubeEmbedUrl(youtubeUrl); // Get YouTube embed URL
    setSelectedVideoUrl(embedUrl); // Set the selected video URL
    setIsModalOpen(true); // Open the modal
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedVideoUrl(""); // Reset selected video URL
  };

  return (
    <div className="">
      <PageBanner title="GALLERY" pagePath="Home // Our Videos"></PageBanner>
      <div
        className="bg-white max-w-7xl mx-auto px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/client-bg1.jpg')" }}
      >
        {/* Video Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden group"
            >
              <img
                src={getYouTubeThumbnail(video.youtubeUrl)} // Use YouTube thumbnail URL
                alt={video.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => handleVideoClick(video.youtubeUrl)} // Open modal on video click
              />
              <div className="p-4">
                <h3 className="text-gray-700 text-md font-semibold">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Video Preview */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-4xl w-full">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-xl font-bold text-gray-600"
                >
                  X
                </button>
              </div>
              <iframe
                src={selectedVideoUrl}
                title="YouTube Video"
                width="100%"
                height="400"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGalleryPage;
