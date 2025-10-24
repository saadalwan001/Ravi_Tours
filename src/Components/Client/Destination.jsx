import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./../ui/Button.jsx";
import api from "@/utlis/axios.js";

export default function DestinationSection() {
  const [allImages, setAllImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  // Fetch destinations from backend
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await api.get("/attractions");
        const baseUrl = import.meta.env.VITE_APP_API_URL;
        const data = res.data.map((item) => ({
          id: item.id,
          src:baseUrl + item.front_img,
          name: item.title,
          description: item.description,
        }));
        setAllImages(data);
      } catch (err) {
        console.error("Error fetching destinations:", err);
      }
    };
    fetchDestinations();
  }, []);

  const visibleImages = allImages.slice(startIndex, startIndex + 5);

  const handleNext = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handlePrev = () => {
    if (startIndex + 5 < allImages.length) setStartIndex(startIndex + 1);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative mb-[80px]">
      {/* Heading and Description */}
      <div className="text-center mb-12">
        <h2 className="text-7xl font-bold text-gray-900 mb-3">Destinations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-[20px]">
          Discover the most beautiful places across Sri Lanka, from tropical
          beaches and historic cities to misty hills and cultural landmarks.
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={startIndex + 5 >= allImages.length}
        className={`absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg z-10 ${
          startIndex + 5 >= allImages.length
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        disabled={startIndex === 0}
        className={`absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg z-10 ${
          startIndex === 0
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {visibleImages.map((img, index) => {
          const isBig = index === 0;
          return (
            <motion.div
              key={img.id}
              layout
              className={`relative rounded-xl overflow-hidden shadow-lg ${
                isBig ? "col-span-2 row-span-2" : ""
              }`}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={img.src}
                alt={img.name}
                loading="lazy"
                className={`w-full ${
                  isBig
                    ? "h-96 md:h-[500px] object-cover"
                    : "h-52 md:h-60 object-cover"
                }`}
              />

              {/* Overlay */}
              <div className="absolute bottom-0 w-full bg-black/50 bg-opacity-70 text-white p-4 flex flex-col justify-end">
                {/* Title always visible */}
                <h3
                  className={
                    isBig ? "text-2xl font-bold" : "text-xl font-semibold"
                  }
                >
                  {img.name}
                </h3>

                {/* Description only for the first (big) image */}
                {isBig && <p className="mt-1 text-sm">{img.description}</p>}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Button at the Bottom */}
      <div className="flex justify-center mt-12">
        <Button text="Explore More" link="/Destination" />
      </div>
    </section>
  );
}
