import React from "react";
import HeroForm from "./HeroForm";
import heroimg from "../assets/heroimg.jpg";

const Hero = () => {
  return (
    <div
      className="flex flex-col relative md:flex-row bg-gray-50 h-screen md:pt-0 pt-40"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute "></div>
      {/* Left Section: Hero Image with Text */}
      <div className="w-full z-10 md:w-1/2 h-1/2 md:h-full">
        <div className="h-full w-full flex flex-col justify-center items-start px-10">
          <div className="bg-white bg-opacity-30 px-4 py-1 mb-4 rounded-lg text-sm text-white">
            Coworking Space
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
            Your Next Great Idea Starts Here!
          </h1>
          <p className="text-white text-lg md:text-xl">
            From cost savings to increased collaboration opportunities,
            coworking spaces can make for ideal offices, especially for small
            and growing businesses.
          </p>
        </div>
      </div>

      {/* Right Section: Search Form */}
      <div className="w-full z-10 md:w-1/2 flex flex-col justify-center items-end p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
            Quickly Locate Your Next Coworking Space.
          </h2>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
