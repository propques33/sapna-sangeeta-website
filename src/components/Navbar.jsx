import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo2 from "../assets/logo2.png";
import logo1 from "../assets/logo1.png";
import HeroForm from "./HeroForm"; // Import the HeroForm component
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed z-20 top-0 left-0 w-full transition duration-300 ${
          scrolled ? "bg-black shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto py-4 px-6 md:px-0 lg:px-0 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={scrolled ? logo1 : logo1}
                alt="Logo"
                className="w-32 transition duration-300"
              />
            </Link>
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
              <Link
                to="/about"
                className={`block lg:inline-block text-base ${
                  scrolled ? "text-white" : "text-white"
                } hover:text-orange-500 transition duration-300`}
                onClick={closeMenu} // Close the menu when clicked
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block lg:inline-block text-base ${
                  scrolled ? "text-white" : "text-white"
                } hover:text-orange-500 transition duration-300`}
                onClick={closeMenu} // Close the menu when clicked
              >
                Contact
              </Link>
            </div>

            {/* Register Button */}
            <div className="mt-4 lg:mt-0 lg:ml-6 text-center lg:text-left">
              <button
                className={`px-6 py-2 rounded-3xl  ${
                  scrolled
                    ? "bg-orange-500 text-white"
                    : "bg-white text-orange-500"
                } hover:bg-orange-600 transition duration-300`}
                onClick={() => {
                  closeMenu();
                  setIsModalOpen(true); // Open the modal
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-4xl text-black hover:text-red-500"
              onClick={() => setIsModalOpen(false)} // Close the modal
            >
              &times;
            </button>
            <div className="bg-white rounded-lg p-2 md:p-4 w-full max-w-md">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
                Quickly Locate Your Next <br /> Coworking Space
              </h2>
              <HeroForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
