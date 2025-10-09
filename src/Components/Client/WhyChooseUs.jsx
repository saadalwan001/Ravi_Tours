import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "../ui/Button";

// Import your local images
import mainImage from "../../../public/Why/Main.jpg";
import img1 from "../../../public/Why/Img1.jpg";
import img2 from "../../../public/Why/Img2.jpg";
import img3 from "../../../public/Why/Img3.jpg";
import img4 from "../../../public/Why/Img4.jpg";
import img5 from "../../../public/Why/Img5.jpg";
import img6 from "../../../public/Why/Img6.jpg";

export default function WhyChooseUs() {
  const gridImages = [img1, img2, img3, img4, img5, img6];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white mb-[80px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="flex flex-col lg:flex-row lg:gap-10"
        variants={itemVariants}
      >
        {/* ===== Left Column ===== */}
        <motion.div className="flex-1 flex flex-col justify-between" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-7xl font-bold mb-6 text-gray-800">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mb-6 md:text-[20px] text-justify">
              With Ravi Tours, explore the beauty of Sri Lanka and beyond through
              unforgettable journeys, personalized experiences, and professional
              guidance designed to make every moment of your trip seamless and
              extraordinary.
            </p>
            <Button text="Read More" link="#about" className="mb-6" />
          </motion.div>

          {/* Grid Images */}
          <motion.div className="grid grid-cols-3 gap-4 mt-6" variants={itemVariants}>
            {gridImages.map((img, index) => (
              <motion.div
                key={index}
                className="w-full"
                variants={itemVariants}
              >
                <img
                  src={img}
                  alt={`Grid ${index + 1}`}
                  className="w-full h-32 md:h-60 object-cover rounded-lg shadow transform transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== Right Column ===== */}
        <motion.div className="flex-1 mt-8 lg:mt-0" variants={itemVariants}>
          <img
            src={mainImage}
            alt="Why choose us"
            className="w-full h-full max-h-[700px] md:max-h-[800px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
