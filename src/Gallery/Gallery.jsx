import React, { useState } from "react";
import { ArrowDown } from "lucide-react";
import Navbar from "@/Components/Client/C_Navbar.jsx";
import Scroll from "@/Components/Client/A_Cover.jsx";
import GalleryGrid from "@/Components/Client/Gallery/GalleryGrid.jsx";
import Footer from "@/Components/Client/Footer.jsx";
import Button from "@/Components/ui/Button.jsx"

import Img from "/Gallery/MainImg.jpg";

//Images
const galleryData = [
  {
    id: 1,
    image: "/Gallery/food.jpg",
    title: "Foods",
    description: "Discover the flavors of paradise.",
  },
  {
    id: 2,
    image: "/Gallery/culture.jpg",
    title: "Culture",
    description: "Explore heritage sites and traditions.",
  },
  {
    id: 3,
    image: "/Gallery/nature.jpg",
    title: "Nature",
    description: "Experience lush landscapes and wildlife.",
  },
  {
    id: 4,
    image: "/Gallery/Adventure.jpg",
    title: "Adventure",
    description: "Thrilling activities and outdoor experiences.",
  },
  {
    id: 5,
    image: "/Gallery/Beach.jpg",
    title: "Beaches",
    description: "Relax on golden sands and tropical sun.",
  },
  {
    id: 6,
    image: "/Gallery/heritage.jpg",
    title: "Heritage",
    description: "Step into history through ancient sites.",
  },
  {
    id: 7,
    image: "/Gallery/arial.jpg",
    title: "Arial",
    description: "Explore urban landscapes and city vibes.",
  },
  {
    id: 8,
    image: "/Gallery/galleface.jpg",
    title: "Galle Face",
    description: "Seaside promenade with city views.",
  },
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);

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
        <GalleryGrid images={galleryData.slice(0, visibleCount)} />
        <div className="mt-6 flex flex-col items-center">
          <div className="w-1/2 border-b border-gray-300 mb-4"></div>
          <Button
    text={allVisible ? "Show Less" : "Load More"}
    onClick={handleToggle}
    
  />
        </div>
      </div>

      <Footer />
    </>
  );
}
