import React from "react";
import {
  FaWifi,
  FaCoffee,
  FaParking,
  FaUsers,
  FaPlug,
  FaPrint,
  FaShieldAlt,
  FaBroom,
} from "react-icons/fa";

const Amenities = () => {
  const amenities = [
    {
      icon: <FaWifi size={40} className="text-orange-500" />,
      label: "Fast Internet",
    },
    {
      icon: <FaCoffee size={40} className="text-orange-500" />,
      label: "Cafeteria",
    },
    {
      icon: <FaParking size={40} className="text-orange-500" />,
      label: "Huge Parking",
    },
    {
      icon: <FaUsers size={40} className="text-orange-500" />,
      label: "Meeting Rooms",
    },
    {
      icon: <FaPlug size={40} className="text-orange-500" />,
      label: "Power Backup",
    },
    {
      icon: <FaPrint size={40} className="text-orange-500" />,
      label: "High Quality Printer",
    },
    {
      icon: <FaShieldAlt size={40} className="text-orange-500" />,
      label: "Best Security",
    },
    {
      icon: <FaBroom size={40} className="text-orange-500" />,
      label: "Cleaning",
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold ">
          Our <span className="text-orange-500 font-semibold">Amenities</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {amenity.icon}
            <p className="mt-4 text-lg font-medium text-gray-800">
              {amenity.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
