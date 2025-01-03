import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Johnson",
      feedback: "Our entire team loved the offices",
      rating: 4,
      date: "7 days ago",
      avatar: "https://via.placeholder.com/50", // Replace with actual avatar URL
    },
    {
      id: 2,
      name: "Peter Brown",
      company: "Brown",
      feedback: "Great prices and excellent service",
      rating: 5,
      date: "7 days ago",
      avatar: "https://via.placeholder.com/50", // Replace with actual avatar URL
    },
    {
      id: 3,
      name: "John Smith",
      company: "Smith Industries",
      feedback: "Excellent selection of office spaces available",
      rating: 5,
      date: "7 days ago",
      avatar: "https://via.placeholder.com/50", // Replace with actual avatar URL
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
            <span className="text-green-600 mr-2">✅</span> 10K+ Customers
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
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
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
