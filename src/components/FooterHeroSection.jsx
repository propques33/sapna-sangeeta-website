import React from "react";
import opendesk from "../assets/opendesk.jpeg";
import cafe from "../assets/cafe.jpeg";
import collabdesk from "../assets/collabdesk.jpeg";

const HeroSection = () => {
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
        <h1 className="text-4xl md:text-5xl  mb-6">
          Get the Workspace That Fits Your Needs at <br />{" "}
          <span className="tex-orange-500 font-bold">
            {" "}
            Sapna Sangeeta Offices.
          </span>{" "}
          <br />
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font- px-6 py-3 rounded-full shadow-lg">
          Book Now
        </button>
      </div>

      {/* Floating Images */}
      <div className="absolute flex justify-between items-center w-full px-6 top-1/3">
        <img
          src={cafe} // Replace with your image URL
          alt="Workspace 1"
          className="w-48 h-36 rounded-lg shadow-lg transform rotate-6 object-cover"
        />
        <img
          src={collabdesk} // Replace with your image URL
          alt="Workspace 2"
          className="w-48 h-36 rounded-lg shadow-lg object-cover transform -rotate-6"
        />
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-600"></div>
    </div>
  );
};

export default HeroSection;
