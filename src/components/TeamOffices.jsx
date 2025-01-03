import React from "react";
import { FaUsers } from "react-icons/fa";
import opendesk from "../assets/heroimg.jpg";

const TeamOffices = () => {
  const teamSizes = [
    { label: "For Single", range: "1/2 people" },
    { label: "For Small Teams", range: "5-20 people" },
    { label: "For Medium Teams", range: "20-40 people" },
  ];

  return (
    <div className="bg-black min-h-screen text-white flex flex-col lg:flex-row gap-6 items-center lg:justify-between py-10 md:px-10 px-6">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 ">
        <h4 className="text-gray-400 uppercase text-sm">Any Size & Location</h4>
        <h1 className="text-3xl sm:text-4xl font-semibold mt-4">
          We Have Office Space for any{" "}
          <span className="text-orange-600 font-semibold">Team Size</span>
        </h1>
        <p className="text-gray-400 mt-4">
          No matter how many people you need to accommodate, we have offices
          that are perfect for any team size, ranging from two to 100+ people or
          more.
        </p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamSizes.map((size, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center bg-white text-black rounded-lg px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaUsers className="text-gray-700 text-2xl mb-2 sm:mb-0 sm:mr-4" />
              <div className="text-center sm:text-left">
                <p className="font-semibold text-base">{size.label}</p>
                <p className="text-gray-500 text-sm">{size.range}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
          Book Now
        </button>
      </div>

      {/* Image and Options Section */}
      <div className="lg:w-1/2 flex flex-col items-end justify-center">
        <div className="relative ">
          <img
            src={opendesk} // Replace with the actual image URL
            alt="Office Example"
            className="rounded-lg w-full"
          />
          {/* <div className="absolute md:top-3/4 lg:top-3/2 top-1/2 -translate-y-1/2 -left-10 sm:-left-16 lg:-left-20 flex flex-col space-y-4">
            {teamSizes.map((size, index) => (
              <div
                key={index}
                className="flex items-center bg-white text-black rounded-lg px-4 py-2 shadow-lg"
              >
                <FaUsers className="text-gray-700 mr-2" />
                <div>
                  <p className="font-bold text-sm">{size.label}</p>
                  <p className="text-gray-500 text-xs">{size.range}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeamOffices;
