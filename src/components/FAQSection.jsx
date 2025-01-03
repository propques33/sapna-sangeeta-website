import React, { useState } from "react";
import meetingImg from "../assets/heroimg.jpg";

const FAQWithImages = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "Why Sapna Sangeeta Offices",
      answer:
        "Inside Sapna Sangeeta Mall, a prime Indore landmark since 1985, offers a classic yet youthful experience in the serene locales of Sneh Nagar and Agrawal Nagar. Over 39 years, it has become a cultural hub, blending nostalgia with modern vibes, captivating generations of moviegoers.",
    },
    {
      question: "What are the office timings?",
      answer:
        "Our Sapna Sangeeta offices are open from 9:30 AM to 7:30 PM, Monday through Saturday.",
    },
    {
      question: "What amenities are available?",
      answer:
        "The Sapna Sangeeta offices provide high-speed Wi-Fi, private cabins, meeting rooms, refreshments, and ample parking space.",
    },

    {
      question: "Do you have printing and scanning facilities?",
      answer:
        "Yes, our office is equipped with printing and scanning facilities for your convenience.",
    },

    
  ];

  return (
    <div className="bg-black  py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-white">Sapna Sangeeta Office FAQs</h1>
        <p className="text-orange-300 mt-4">
          Find answers to your questions about our Sapna Sangeeta offices
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 md:mr-10 lg:mr-10">
          <img
            src={meetingImg} // Replace with an actual image URL
            alt="Sapna Sangeeta Office"
            className="rounded-lg shadow-lg"
          />
          <p className="text-white mt-4">
            {/* Explore modern coworking spaces designed for productivity and
            collaboration. */}
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
                <h3 className="text-lg font-medium text-orange-500">
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
