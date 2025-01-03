import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import footerlogo from '../assets/footerlogo.png'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={footerlogo} // Replace with your logo
              alt="Logo"
              className="w-28"
            />
          </div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Redefining Workspaces
          </h3>
          <p className="text-sm">
            A modern coworking space designed to inspire collaboration, boost
            productivity, and provide all the amenities you need under one roof.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Terms & Conditions
            </li>
            {/* <li className="hover:text-orange-500 cursor-pointer">Disclaimer</li> */}
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Pages</h4>
          <ul className="space-y-3">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
            {/* <li className="hover:text-orange-500 cursor-pointer">
              Entertainment
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Brands</li>
            <li className="hover:text-orange-500 cursor-pointer">Dine In</li> */}
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Address</h4>
          <p className="text-sm mb-6">
            3rd Floor, Sapna Sangeeta Mall, Sapna Sangeeta Rd, Indore, Madhya
            Pradesh 452001
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/sapna_sangeeta_offices/"
              className="hover:text-orange-500 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/p/Sapna-Sangeeta-Offices-61552158005194/?locale=es_ES"
              className="hover:text-orange-500 transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            {/* <a
              href="#"
              className="hover:text-orange-500 transition duration-300"
            >
              <FaTwitter size={20} />
            </a> */}
            <a
              href="https://in.linkedin.com/in/sapna-sangeeta-offices-281141296"
              className="hover:text-orange-500 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        <p>
          All Rights Reserved @ SapnaSangeeta 2025 | Powered By{" "}
          <a href="https://propques.com/">Propques</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
