import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Destinations", path: "/Destination" },
    { name: "Packages", path: "/All_Packages" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Column 1: Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p className="font-medium mb-2">Ravi Tours</p>

          <p className="flex items-center mb-2">
            <MapPin className="mr-2" size={18} />
            <a
              href="https://goo.gl/maps/YOUR_MAP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              123 Main Street, Colombo, Sri Lanka
            </a>
          </p>

          <p className="flex items-center mb-2">
            <Phone className="mr-2" size={18} />
            <a
              href="tel:+94123456789"
              className="hover:text-blue-600 transition-colors"
            >
              +94 123 456 789
            </a>
          </p>

          <p className="flex items-center">
            <Mail className="mr-2" size={18} />
            <a
              href="mailto:info@raviTours.com"
              className="hover:text-blue-600 transition-colors"
            >
              info@raviTours.com
            </a>
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name} className="flex items-center">
                <span className="mr-2">{">"}</span>
                <Link
                  to={link.path}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter & Social Media */}
        <div>
          <p className="mb-4">
            Join our community to receive the latest updates and offers.
          </p>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 px-4 py-3 rounded-l-md outline-none text-black placeholder-gray-500 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors">
              Submit
            </button>
          </div>

          <h3 className="text-xl font-semibold mb-4">Social Media Links</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; 2025 Ravi Tours. All Rights Reserved. Developed by{" "}
        <a
          href="https://corechipdigital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition-colors"
        >
          CoreChip Digital
        </a>
      </div>
    </footer>
  );
}
