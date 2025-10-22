import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import api from "@/utlis/axios.js"; // Make sure this points to your axios instance

const DestinationSection = () => {
  const [destinations, setDestinations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await api.get("/attractions"); 
        // Adjust endpoint to match your backend
        // Example response expected: [{ id, title, image, description }]
        setDestinations(response.data);
      } catch (err) {
        console.error("Error fetching attractions:", err);
        setError("Failed to load attractions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, destinations.length));
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600">
        Loading attractions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="py-16 mb-[80px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-7xl font-extrabold text-gray-800 mb-20">
          Explore Sri Lanka
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {destinations.slice(0, visibleCount).map((dest) => (
            <Link
              key={dest.id}
              to={`/location/${dest.id}`}
              className="relative w-full h-[400px] [perspective:1000px] group block"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">

                {/* Front Side */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-md [backface-visibility:hidden]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL.replace('/api', '')}${dest.front_img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/25"></div>
                  <h3 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
                    {dest.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 rounded-xl overflow-hidden shadow-md [backface-visibility:hidden] rotate-y-180 flex flex-col justify-center items-center text-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL.replace('/api', '')}${dest.front_img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 px-4">
                    <h3 className="text-2xl font-bold mb-3 text-white">{dest.title}</h3>
                    <p className="text-gray-200 text-base mb-5">{dest.description
        ? dest.description.split(" ").slice(0, 5).join(" ") + "..."
        : ""}</p>
                    <div className="flex items-center gap-3 font-medium text-[15px] text-white hover:underline justify-center">
                      Discover More
                      <span className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {visibleCount < destinations.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSeeMore}
              className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              SEE MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationSection;
