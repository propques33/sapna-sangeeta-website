import React, { useState, useEffect } from "react";
import HeroForm from "./HeroForm";
import heroimg from "../assets/heroimg.jpg";

const Hero = () => {
  const [dynamicWord, setDynamicWord] = useState("Opportunity");
  const [animate, setAnimate] = useState(false);

  const words = [
    "Opportunity",
    "Success",
    "Innovation",
    "Collaboration",
    "Growth",
  ];

  useEffect(() => {
    let wordIndex = 0;
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        setDynamicWord(words[wordIndex]);
        setAnimate(false);
      }, 500); // Match with animation duration
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col relative md:flex-row bg-gray-50 h-screen"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full md:bg-gradient-to-t md:from-black md:to-transparent lg:to-transparent bg-gradient-to-b from-black to-[#000000b0] absolute"></div>

      {/* Left Section: Hero Image with Text */}
      <div className="w-full z-10 md:w-1/2 h-1/2 md:h-full md:pt-0 pt-20">
        <div className="h-full w-full flex flex-col justify-center items-start px-10">
          <div className="bg-white bg-opacity-30 px-4 py-1 md:mb-4 mb-2 rounded-lg text-sm text-white">
            Coworking Space
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-white md:mb-4 mb-2">
            A Spaces For{" "}
            <span
              className={`inline-block mt-0 md:mt-2 lg:mt-2 font-semibold text-orange-500 transform transition-all duration-500 ${
                animate
                  ? "translate-y-full opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              {dynamicWord}
            </span>
          </h1>
          <p className="text-white text-sm md:text-base">
            Coworking spaces offer cost savings and foster collaboration, making
            them ideal for small and growing businesses.
          </p>
        </div>
      </div>

      {/* Right Section: Search Form */}
      <div className="w-full z-10 md:w-1/2 flex flex-col justify-center items-end p-6">
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 w-full max-w-md">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
            Quickly Locate Your Next <br /> Coworking Space
          </h2>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
