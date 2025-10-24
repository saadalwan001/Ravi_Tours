import React, { useEffect, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import Button from "./../ui/Button.jsx";
import api from "@/utlis/axios.js"; 

export default function PackagesSection() {
  const [packagesData, setPackagesData] = useState([]);

  // Fetch packages from backend
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await api.get("/tour-packages");
        const baseUrl = import.meta.env.VITE_APP_API_URL;

        const data = res.data.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.main_image ? baseUrl + item.main_image : "/fallback.jpg",
          days: item.days || `${item.total_days} Days`,
          description: item.description,
        }));

        setPackagesData(data);
      } catch (err) {
        console.error("Error fetching tour packages:", err);
      }
    };
    fetchPackages();
  }, []);

  // Helper function to shorten long descriptions
  function truncateWords(text, limit) {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
  }

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
        {packagesData.length > 0 ? (
          packagesData.map((item) => (
            <a
              key={item.id}
              href={`/packages/${item.id}`} // ✅ link to detailed page if available
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
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            Loading packages...
          </p>
        )}
      </div>

      {/* Button at Bottom */}
      <div className="flex justify-center mt-12">
        <Button text="Explore More" link="/packages" />
      </div>
    </section>
  );
}
