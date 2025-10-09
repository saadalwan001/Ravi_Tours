import React from "react";
import { Clock, MapPin, Settings, UserCheck } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function AboutUs() {
  return (
    <section className="relative w-full py-20  overflow-hidden mb-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid: 2 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* First Row */}
          <motion.div
            className="flex items-center justify-center md:justify-start h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-8xl font-bold text-gray-800 text-ce">About Us</h2>
          </motion.div>

          <motion.div
            className="flex gap-4 h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/About/About2.jpg"
              alt="About 1"
              className="w-1/2 h-full object-cover rounded-xl border border-gray-200"
            />
            <img
              src="/About/About3.jpg"
              alt="About 2"
              className="w-1/2 h-full object-cover rounded-xl border border-gray-200"
            />
          </motion.div>

          {/* Second Row */}
<motion.div
  className="h-full"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <img
    src="/About/About1.jpg"
    alt="About Us"
    className="w-full h-auto max-h-[600px] object-cover rounded-xl border border-gray-200"
  />
</motion.div>

<motion.div
  className="flex flex-col h-full gap-4"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  {/* Description */}
  <p className="text-gray-700 text-base md:text-[20px] md:text-justify sm:text-lg leading-relaxed">
   Welcome to Ravi Tours, your trusted partner in discovering the beauty of Sri Lanka and beyond. We’re passionate about creating unforgettable travel experiences that connect people, places, and cultures. Whether you’re looking for serene beaches, lush mountains, rich history, or thrilling adventures, our team is here to craft the perfect journey for you.
With years of expertise and a deep love for travel, we make sure every moment of your trip is special, stress-free, and truly memorable. Join us, and let’s explore the wonders of Sri Lanka together, one unforgettable moment at a time. With Ravi Tours, every journey becomes a story worth remembering.
  </p> <br/>
  


  {/* Features */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
    <div className="flex flex-col items-center text-center">
      <Settings className="w-8 h-8 text-primary mb-1" />
      <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
        Tailor-Made <br /> Travel Plans
      </h3>
    </div>
    <div className="flex flex-col items-center text-center">
      <Clock className="w-8 h-8 text-primary mb-1" />
      <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
        Round-the-Clock <br /> Support
      </h3>
    </div>
    <div className="flex flex-col items-center text-center">
      <MapPin className="w-8 h-8 text-primary mb-1" />
      <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
        Flexible Travel <br /> Options
      </h3>
    </div>
    <div className="flex flex-col items-center text-center">
      <UserCheck className="w-8 h-8 text-primary mb-1" />
      <h3 className="text-gray-800 font-semibold text-sm sm:text-base">
        Local Expertise
      </h3>
      <br/><br/>
     
    </div>
    
  </div>
  <Button text="Read More" link="#"  className="pt-[2px]"/>
 
</motion.div>


        </div>
      </div>
    </section>
  );
}
