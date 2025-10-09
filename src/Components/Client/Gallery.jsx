import React from "react";
import Button from "./../ui/Button.jsx";

// Sample images
import img1 from "../../../public/Gallery/Img1.jpg";
import img2 from "../../../public/Gallery/Img2.jpg";
import img3 from "../../../public/Gallery/Img3.jpg";
import img4 from "../../../public/Gallery/Img4.jpg";
import img5 from "../../../public/Gallery/Img5.jpg";
import img6 from "../../../public/Gallery/Img6.jpg";
import img7 from "../../../public/Gallery/Img7.jpg";

const galleryImages = [
  { id: 1, src: img1, alt: "Gallery image 1" },
  { id: 2, src: img2, alt: "Gallery image 2" },
  { id: 3, src: img3, alt: "Gallery image 3" },
  { id: 4, src: img4, alt: "Gallery image 4" },
  { id: 5, src: img5, alt: "Gallery image 5" },
  { id: 6, src: img6, alt: "Gallery image 6" },
  { id: 7, src: img7, alt: "Gallery image 7" },
];

export default function GallerySection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[80px]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4  md:text-7xl">Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto md:text-[20px]">
          A glimpse into breathtaking landscapes, rich culture, and unforgettable experiences. Explore the beauty of Sri Lanka via our lens.
        </p>
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Column 1 */}
        <div className="flex justify-center items-center md:h-[500px]">
          <img
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="rounded-xl object-cover h-[250px] w-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:h-[500px]">
          <img
            src={galleryImages[1].src}
            alt={galleryImages[1].alt}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={galleryImages[2].src}
            alt={galleryImages[2].alt}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 3 (Center) */}
        <div className="flex justify-center md:h-[500px]">
          <img
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="rounded-xl object-cover h-[250px] w-full md:h-full transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 md:h-[500px]">
          <img
            src={galleryImages[4].src}
            alt={galleryImages[4].alt}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={galleryImages[5].src}
            alt={galleryImages[5].alt}
            className="rounded-xl object-cover flex-1 w-full h-[250px] md:h-auto transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Column 5 */}
        <div className="flex justify-center items-center md:h-[500px]">
          <img
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
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
