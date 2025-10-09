import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import Button from "./../ui/Button.jsx";

import img1 from "../../../public/Packages/Img1.jpg";
import img2 from "../../../public/Packages/Img2.jpg";
import img3 from "../../../public/Packages/Img3.jpg";

// Temporary hardcoded data — can later be fetched from backend
const packagesData = [
  {
    id: 1,
    title: "Cultural Highlights of Kandy",
    image: img1,
    days: "3 Days / 2 Nights",
    description:
      "Experience the rich cultural heritage of Kandy with visits to the Temple of the Tooth, Peradeniya Botanical Gardens, and a traditional Kandyan dance show.",
  },
  {
    id: 2,
    title: "Southern Beach Getaway",
    image: img2,
    days: "4 Days / 3 Nights",
    description:
      "Relax along the stunning southern coastlines, enjoy water sports in Mirissa, and explore the historic Galle Fort during this beach-filled adventure.",
  },
  {
    id: 3,
    title: "Hill Country Adventure",
    image: img3,
    days: "5 Days / 4 Nights",
    description:
      "Take a scenic train ride through Sri Lanka’s tea country, explore waterfalls, and unwind in the cool climate of Nuwara Eliya and Ella.",
  },
];

// Helper function to shorten long descriptions
function truncateWords(text, limit) {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}

export default function PackagesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[80px]">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-2 md:text-7xl">Packages</h2>
      </div>

      {/* Sub Heading */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-8 md:text-4xl">Top Picks</h3>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packagesData.map((item) => (
          <a
            key={item.id}
            href="#"
            className="block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
          >
            {/* Image */}
            <div className="p-2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl w-full h-48 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {item.title}
              </h3>

              <div className="flex items-center text-gray-500 text-sm gap-2">
                <Clock size={16} /> <span>{item.days}</span>
              </div>

              <p className="text-gray-600 text-sm">
                {truncateWords(item.description, 15)}
              </p>

              <div className="flex items-center gap-2 text-blue-600 font-medium mt-2">
                <span>Know More</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Button at Bottom */}
      <div className="flex justify-center mt-12">
        <Button text="Explore More" link="/packages" />
      </div>
    </section>
  );
}
