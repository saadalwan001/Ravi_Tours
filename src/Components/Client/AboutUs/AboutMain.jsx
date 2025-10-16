import React from "react";
import { Globe2, Map, Clock4, Star } from "lucide-react";


import mainImg from "/About/About1.jpg";
import topLeftImg from "/About/About2.jpg";
import bottomLeftImg from "/About/About3.jpg";
import logoImg from "/vite.svg";




function AboutMain() {
  return (
    <section className="mb-[80px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
        
        {/* ================== COLUMN 1 (IMAGES) ================== */}
        <div className="relative flex justify-center items-center">
          {/* Main Image */}
          <img
            src={mainImg}
            alt="Main Tour"
            className="w-[70%] lg:w-[65%] h-[520px] object-cover rounded-2xl shadow-xl mx-auto transition-all duration-300"
          />

          {/* Top Left Small Image */}
          <img
            src={topLeftImg}
            alt="Top Left"
            className="hidden lg:block absolute top-[-40px] left-10 w-60 h-44 object-cover rounded-lg border-[6px] border-white shadow-xl"
          />

          {/* Bottom Left Small Image */}
          <img
            src={bottomLeftImg}
            alt="Bottom Left"
            className="hidden lg:block absolute bottom-[-40px] left-10 w-60 h-36 object-cover rounded-lg border-[6px] border-white shadow-xl"
          />

          {/* Overlay Logo Box */}
          <div className="hidden lg:flex absolute right-12 bg-white bg-opacity-95 rounded-2xl shadow-xl px-8 py-5 flex-col items-center">
            <img src={logoImg} alt="Logo" className="w-12 h-16 mb-3" />
            <h4 className="font-bold text-gray-800 text-xl">Ravi Tours</h4>
          </div>
        </div>

        {/* ================== COLUMN 2 (TEXT CONTENT) ================== */}
        <div className="flex flex-col gap-10">
          {/* About Text */}
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-base md:text-[20px] md:text-justify sm:text-lg leading-relaxed text-gray-600">
              At <strong>Ravi Tours</strong>, we turn every journey into a
              lifelong memory. From serene beaches to misty mountains, our
              tailor-made experiences let you uncover the real essence of Sri
              Lanka — blending comfort, adventure, and culture.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {/* Card 1 */}
            <div className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 text-center">
              <Globe2 className="text-blue-600 group-hover:text-white mx-auto mb-3 w-8 h-8 transition-colors duration-300" />
              <h3 className="text-xl font-bold">1000+ Tourists</h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100">
                From around the world
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 text-center">
              <Map className="text-blue-600 group-hover:text-white mx-auto mb-3 w-8 h-8 transition-colors duration-300" />
              <h3 className="text-xl font-bold">500+ Tours</h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100">
                Across Sri Lanka
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 text-center">
              <Clock4 className="text-blue-600 group-hover:text-white mx-auto mb-3 w-8 h-8 transition-colors duration-300" />
              <h3 className="text-xl font-bold">10+ Years</h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100">
                Of travel excellence
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 text-center">
              <Star className="text-blue-600 group-hover:text-white mx-auto mb-3 w-8 h-8 transition-colors duration-300" />
              <h3 className="text-xl font-bold">4.9 Rating</h3>
              <p className="text-sm text-gray-500 group-hover:text-blue-100">
                Customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
