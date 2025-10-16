import React from 'react';

function A_Cover({ backgroundImage, title, subtitle }) {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center overflow-hidden mb-[80px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        {title && (
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-md mb-3">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default A_Cover;
