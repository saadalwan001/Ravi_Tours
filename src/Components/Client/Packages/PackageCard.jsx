import React, { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import api from "@/utlis/axios.js"; 

// Helper to limit words
function truncateWords(text, limit) {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}

export default function TourPackages() {
  const [packages, setPackages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await api.get("/tour-packages"); 
      setPackages(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching packages:", error);
      setLoading(false);
    }
  };

  const handleToggle = () => {
    if (visibleCount < packages.length) {
      setVisibleCount((prev) => prev + 4);
    } else {
      setVisibleCount(4);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Loading packages...
      </div>
    );
  }

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[80px]">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-2 md:text-7xl">
          Packages
        </h2>
      </div>

      {/* Packages Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.slice(0, visibleCount).map((item) => (
          <Link
            key={item.id}
            to={`/Packages/${item.id}`}
            className="block cursor-pointer bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
          >
            {/* Image */}
            <div className="p-2">
              <img
                src={`${import.meta.env.VITE_API_URL.replace("/api", "")}${item.main_image}`}
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
                <Clock size={16} />{" "}
                <span>{item.total_days || "Duration not specified"} Days</span>
              </div>

              <p className="text-gray-600 text-sm">
                {truncateWords(item.description || "", 15)}
              </p>

              <div className="flex items-center gap-2 text-blue-600 font-medium mt-2">
                <span>Know More</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* See More / Show Less Button */}
      <div className="flex justify-center mt-12">
        {packages.length > 4 && (
          <button
            onClick={handleToggle}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            {visibleCount < packages.length ? "See More" : "Show Less"}
          </button>
        )}
      </div>
    </section>
  );
}
