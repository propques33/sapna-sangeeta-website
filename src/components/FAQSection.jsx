import React, { useState } from "react";
import meetingImg from "../assets/heroimg.jpg";

const FAQWithImages = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "What are the office timings?",
      answer:
        "Our Sapna Sangeeta offices are open from 9 AM to 8 PM, Monday through Saturday.",
    },
    {
      question: "What amenities are available?",
      answer:
        "The Sapna Sangeeta offices provide high-speed Wi-Fi, private cabins, meeting rooms, refreshments, and ample parking space.",
    },
    {
      question: "Can I book a meeting room for an hour?",
      answer:
        "Yes, our Sapna Sangeeta offices offer hourly booking options for meeting rooms.",
    },
    {
      question: "Is there a cafeteria in the office?",
      answer:
        "Yes, we have a cafeteria with a variety of food and beverage options to keep you refreshed throughout the day.",
    },

    {
      question: "Do you have printing and scanning facilities?",
      answer:
        "Yes, our office is equipped with printing and scanning facilities for your convenience.",
    },
    {
      question: "Are there private lockers available?",
      answer:
        "Yes, private lockers are available to securely store your belongings.",
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
