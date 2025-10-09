import React from "react";
import { ArrowRight } from "lucide-react";

export default function Button({ text, link }) {
  return (
    <a
      href={link}
      className="group relative flex items-center justify-center overflow-hidden rounded-full bg-blue-600 text-white transition-all duration-300 ease-out w-12 hover:w-40 py-3"
    >
      {/* Text — hidden initially, slides in on hover */}
      <span
        className="absolute left-6 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap"
      >
        {text}
      </span>

      {/* Arrow — centered initially, moves right on hover */}
      <ArrowRight
        className="h-5 w-5 transform transition-all duration-300 group-hover:translate-x-14"
      />
    </a>
  );
}
