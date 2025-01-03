import React from "react";
import di from '../assets/di.png'
import adi from '../assets/adi.png'
import sheetal from '../assets/sheetal.png'
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sheetal Gaikwad",
      company: "Johnson",
      feedback:
        "Awesome place to work.. looks nice and people who work there are friendly... Totally recommend it..",
      rating: 5,
      date: "11 months ago",
      avatar: sheetal, // Replace with actual avatar URL
    },
    {
      id: 2,
      name: "Dilip Ahuja",
      company: "Brown",
      feedback:
        "Great work environment...services they provide are just awesome...perfect for office vibe",
      rating: 5,
      date: "1 year ago",
      avatar: di // Replace with actual avatar URL
    },
    {
      id: 3,
      name: "Aditya Chouhan",
      company: "Smith Industries",
      feedback:
        "Great place to work...Housekeeping is dedicated and experienced in their work",
      rating: 5,
      date: "1 year ago",
      avatar: adi, // Replace with actual avatar URL
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h4 className="text-gray-600 uppercase text-sm tracking-wide">
          What Clients Say
        </h4>
        <h2 className="text-3xl font-semibold mt-2">
          We’re trusted by the most important teams
        </h2>
        <div className="flex justify-center gap-8 mt-4">
          <p className="text-gray-700 flex items-center">
            <span className="text-green-600 mr-2">✅</span> 10+ Customers
          </p>
          <p className="text-gray-700 flex items-center">
            <span className="text-green-600 mr-2">✅</span> 99% Satisfaction
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-3xl shadow-md p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h- rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                {/* <p className="text-sm text-gray-500">{testimonial.company}</p> */}
              </div>
            </div>
            <p className="text-gray-800 text-lg italic mb-4">
              “{testimonial.feedback}”
            </p>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">{testimonial.date}</p>
              <div className="flex">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                  <span key={i} className="text-gray-300 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
