import React from "react";
import { ArrowRight } from "lucide-react";

export default function Button({ text, link, onClick, type = "button", className = "" }) {
  const Tag = link ? "a" : "button";

  return (
    <Tag
      href={link}
      type={Tag === "button" ? type : undefined}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-blue-600 text-black px-6 py-3 transition-all duration-300 ease-out hover:cursor-pointer ${className}`}
    >
      {/* Animated background fill */}
      <span className="absolute inset-0 bg-blue-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>

      {/* Text + Icon */}
      <span className="relative flex items-center gap-2 z-10 transition-colors duration-300 group-hover:text-white">
        {text}
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Tag>
  );
}
