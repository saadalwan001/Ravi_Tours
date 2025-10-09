import React from "react";
import Button from "../ui/Button.jsx";

// Sample background image
import contactBg from "../../../public/Contact/Img.jpg";

export default function GetInTouch() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[80px]">
      <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src={contactBg}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 sm:px-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 md:text-7xl">
            Let's Get In Touch
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl md:text-[20px]">
            Have questions or need help planning your next adventure? Reach out to us, and we’ll make your journey unforgettable.
          </p>

          {/* Button */}
          <Button text="Contact Us" link="/contact" />
        </div>
      </div>
    </section>
  );
}
