import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
      {/* Thank You Message */}
      <div className="text-center px-4">
        <h1 className="text-5xl font-semibold text-orange-500 mb-6">Thank You!</h1>
        <p className="md:text-xl text-base mb-8">
          Your submission has been received. We'll get back to you shortly.
        </p>

        {/* Go Back Button */}
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
