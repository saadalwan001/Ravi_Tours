import React from "react";

export default function VideoBackgroundSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden mb-[80px]">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    src="/h_video.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>
  <div className="absolute top-0 left-0 w-full h-full bg-black/20 -z-10"></div>
  <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug drop-shadow-lg">
        Where Every Step <br /> Tells A Story
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl drop-shadow-md">
        Explore the world with us
      </p>
      <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition">
        Discover Now
      </button>
    </div>
  </div>
</section>


  );
}
