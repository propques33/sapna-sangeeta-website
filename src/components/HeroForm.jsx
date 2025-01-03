import React from "react";
import { FiSearch, FiMapPin, FiUser, FiPhone } from "react-icons/fi";

const HeroForm = () => {
  return (
    <div className="bg-gray-50">
      <div className="container text-center px-4">
        {/* Search Form */}
        <div className="">
          <form className="space-y-4">
            {/* Name Input */}
            <div className="flex items-center md:text-base text-sm bg-gray-100 rounded-md p-2">
              <FiUser className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="flex items-center md:text-base text-sm bg-gray-100 rounded-md p-2">
              <FiPhone className="text-gray-500 text-xl mr-2" />
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Dropdown for Coworking Space Type */}
            <div className="bg-gray-100 rounded-md p-2 md:text-base text-sm">
              <select
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select type of coworking space
                </option>
                <option value="private-cabin">Private Cabin</option>
                <option value="hot-desk">Hot Desk</option>
                <option value="dedicated-desk">Dedicated Desk</option>
                <option value="meeting-room">Meeting Room</option>
              </select>
            </div>

            {/* Get Started Button */}
            <button
              type="submit"
              className="w-full md:text-base text-sm bg-orange-500 text-white md:py-3 py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Let{"'"}s Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
