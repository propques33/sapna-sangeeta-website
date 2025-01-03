import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-20 top-0 left-0 w-full transition duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 px-6 md:px-0 lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={scrolled ? logo1 : logo2}
            alt="Logo"
            className="w-32 transition duration-300"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black lg:bg-transparent lg:static lg:flex lg:items-center lg:justify-end lg:space-x-8 p-6 lg:p-0 lg:h-auto transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Close Button (Mobile) */}
          <div className="lg:hidden mb-6 flex justify-between items-center">
            <img src={logo1} alt="Logo" className="w-28" />
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white focus:outline-none"
            >
              <FiX size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="lg:flex lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 text-center lg:text-right">
            <a
              href="#"
              className={`block lg:inline-block text-base ${
                scrolled ? "text-white" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              Demos
            </a>
            <a
              href="#"
              className={`block lg:inline-block text-base ${
                scrolled ? "text-white" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              About
            </a>
            <a
              href="#"
              className={`block lg:inline-block text-base ${
                scrolled ? "text-white" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              Blog
            </a>
            <a
              href="#"
              className={`block lg:inline-block text-base ${
                scrolled ? "text-white" : "text-white"
              } hover:text-orange-500 transition duration-300`}
            >
              Contact
            </a>
          </div>

          {/* Register Button */}
          <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
            <button
              className={`px-6 py-2 rounded-3xl  ${
                scrolled
                  ? "bg-orange-500 text-white"
                  : "bg-white text-orange-500"
              } hover:bg-orange-600 transition duration-300`}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
