import React, { useState } from "react";

const FAQWithImages = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "What is a coworking space?",
      answer:
        "A coworking space is a shared workspace that provides a professional environment and amenities for individuals and teams.",
    },
    {
      question: "What amenities are provided?",
      answer:
        "Our coworking spaces offer high-speed Wi-Fi, meeting rooms, comfortable seating, refreshments, and more.",
    },
    {
      question: "Can I book a coworking space for a day?",
      answer:
        "Yes, most of our coworking spaces offer flexible booking options, including daily and hourly passes.",
    },
    {
      question: "Do coworking spaces have private rooms?",
      answer:
        "Yes, many coworking spaces include private offices and meeting rooms for confidential work and discussions.",
    },
  ];

  return (
    <div className="bg-black  py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Coworking Space FAQs</h1>
        <p className="text-orange-300 mt-4">
          Find answers to your questions about coworking spaces
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 md:mr-10 lg:mr-10">
          <img
            src="https://via.placeholder.com/600x400" // Replace with an actual image URL
            alt="Coworking Space"
            className="rounded-lg shadow-lg"
          />
          <p className="text-white mt-4">
            Explore modern coworking spaces designed for productivity and
            collaboration.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-1/2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveQuestion(activeQuestion === index ? null : index)
              }
              className="bg-white rounded-lg shadow-lg p-4 mb-4 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-orange-500">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl ${
                    activeQuestion === index
                      ? "text-green-500"
                      : "text-gray-400"
                  }`}
                >
                  {activeQuestion === index ? "−" : "+"}
                </span>
              </div>
              {activeQuestion === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQWithImages;
