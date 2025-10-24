import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Client/C_Navbar.jsx";
import Scroll from "@/Components/Client/A_Cover.jsx";
import GalleryGrid from "@/Components/Client/Gallery/GalleryGrid.jsx";
import Footer from "@/Components/Client/Footer.jsx";
import Button from "@/Components/ui/Button.jsx";
import Img from "/Gallery/MainImg.jpg";
import api from "@/utlis/axios.js"; // Make sure your axios instance is configured

export default function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  // ✅ Fetch gallery images from backend
  useEffect(() => {
  const fetchGallery = async () => {
    try {
      const res = await api.get("/gallery"); // GET request to your API
      // Map the image path to full URL
      const dataWithFullUrl = res.data.map((item) => ({
        ...item,
        image: item.image_path
          ? `${import.meta.env.VITE_API_URL.replace("/api", "")}/storage/${item.image_path}`
          : null,
      }));
      setGalleryData(dataWithFullUrl);
    } catch (err) {
      console.error("Error fetching gallery:", err);
    }
  };
  fetchGallery();
}, []);


  const handleToggle = () => {
    setVisibleCount(visibleCount === 6 ? galleryData.length : 6);
  };

  const allVisible = visibleCount >= galleryData.length;

  return (
    <>
      <Navbar />
      <Scroll
        backgroundImage={Img}
        title="Gallery"
        subtitle="Capturing the Beauty of Every Moment"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[80px]">
        <h2 className="text-2xl md:text-7xl font-extrabold text-gray-800 mb-20 text-center">
          Snapshots of Adventure
        </h2>
        <GalleryGrid images={galleryData.slice(0, visibleCount)} />
        {galleryData.length > 6 && (
          <div className="mt-6 flex flex-col items-center">
            <div className="w-1/2 border-b border-gray-300 mb-4"></div>
            <Button
              text={allVisible ? "Show Less" : "Load More"}
              onClick={handleToggle}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
