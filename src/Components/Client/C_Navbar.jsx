import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const C_Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses = (path) => {
    const isActive = location.pathname === path;
    return `
      transition-colors duration-300 font-bold text-[15px] leading-[23px]
      ${scrolled ? "text-black" : "text-white/90"}
      hover:text-blue-500
      ${isActive ? "text-blue-600" : ""}
    `;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-md bg-white/90 border-gray-300 shadow-md"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className={linkClasses(item.path)}>
              {item.name}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-black hover:bg-gradient-to-r hover:bg-blue-700 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setNavOpen(!navOpen)} className="focus:outline-none">
            {navOpen ? (
              <X className={`w-7 h-7 ${scrolled ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`w-7 h-7 ${scrolled ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          navOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`flex flex-col space-y-4 px-6 py-4 ${
            scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-black/50 backdrop-blur-md"
          }`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setNavOpen(false)}
              className={linkClasses(item.path)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setNavOpen(false)}
            className={`block text-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              scrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-black hover:bg-blue-700 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default C_Navbar;
