import React, { useState } from "react";
import opendesk from "../assets/opendesk.jpeg";
import HeroForm from "./HeroForm"; // Import the HeroForm component

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  return (
    <div className="relative bg-gray-100 h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={opendesk} // Replace with your background image URL
          alt="Coworking Space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-6">
          Get the Workspace That Fits Your Needs at <br />
          <span className="text-orange-500 font-bold">
            Sapna Sangeeta Offices.
          </span>
          <br />
        </h1>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font- px-6 py-3 rounded-full shadow-lg"
          onClick={() => setIsModalOpen(true)} // Open the modal
        >
          Book Now
        </button>
      </div>

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
    </div>
  );
};

export default HeroSection;
