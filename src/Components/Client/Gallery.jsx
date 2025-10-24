import React, { useEffect, useState } from "react";
import api from "@/utlis/axios.js";
import Button from "./../ui/Button.jsx";

export default function GallerySection() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await api.get("/gallery");

        // Map API data and prepend full backend URL for images

        // define baseUrl here
        const baseUrl = import.meta.env.VITE_API_URL.replace(/\/api\/?$/, "")
        const data = res.data.map((item) => ({
          id: item.id,
           src: `${baseUrl}/storage/${item.image_path}`, // uses .env base URL
          title: item.title,
          description: item.description,
        }));

        setGalleryImages(data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center text-gray-600">Loading gallery...</div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className="py-16 text-center text-gray-600">
        No images available.
      </div>
    );
  }

  // Helper functions for consistent column layout
  const getImg = (index) => galleryImages[index]?.src || "/fallback.jpg";
  const getAlt = (index) => galleryImages[index]?.title || "";

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[80px]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 md:text-7xl">
          Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto md:text-[20px]">
          A glimpse into breathtaking landscapes, rich culture, and unforgettable experiences. Explore the beauty of Sri Lanka via our lens.
        </p>
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Column 1 */}
        <div className="flex justify-center items-center md:h-[500px]">
          <img
            src={getImg(0)}
            alt={getAlt(0)}
            className="rounded-xl object-cover h-[250px] w-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:h-[500px]">
          <img
            src={getImg(1)}
            alt={getAlt(1)}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={getImg(2)}
            alt={getAlt(2)}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 3 (Center) */}
        <div className="flex justify-center md:h-[500px]">
          <img
            src={getImg(3)}
            alt={getAlt(3)}
            className="rounded-xl object-cover h-[250px] w-full md:h-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 md:h-[500px]">
          <img
            src={getImg(4)}
            alt={getAlt(4)}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={getImg(5)}
            alt={getAlt(5)}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 5 */}
        <div className="flex justify-center items-center md:h-[500px]">
          <img
            src={getImg(6)}
            alt={getAlt(6)}
            className="rounded-xl object-cover h-[250px] w-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Button at the bottom */}
      <div className="flex justify-center mt-12">
        <Button text="View More" link="/gallery" />
      </div>
    </section>
  );
}
