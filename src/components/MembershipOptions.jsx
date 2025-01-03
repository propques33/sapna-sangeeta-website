import React from "react";

const MembershipOptions = () => {
  const memberships = [
    {
      title: "Hot Desk",
      price: "₹5000 / Seat!",
      features: [
        "Sitting space",
        "12/6 access",
        "Unlimited wifi",
        "Electricity",
        "Unlimited tea coffee",
        "Drinking water",
        "Housekeeping services",
        "2 hours conference room",
      ],
      button: "Book Now",
    },
    {
      title: "Day Pass",
      price: "₹500 / Seat!",
      features: [
        "Sitting space",
        "12 hour access",
        "Unlimited wifi",
        "Electricity",
        "Unlimited tea coffee",
        "Drinking water",
        "Housekeeping services",
      ],
      button: "Book Now",
    },
    {
      title: "Conference",
      price: "₹800 / Hour",
      features: [
        "8 seater space",
        "Hourly access",
        "Unlimited wifi",
        "Electricity",
        "Screen connectivity",
        "Unlimited tea coffee",
        "Drinking water",
        "Housekeeping services",
      ],
      button: "Book Now",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">
          <span className="text-orange-500 font-semibold">Membership</span>{" "}
          Options
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                {membership.title}
              </h3>
              <p className="text-xl font-semibold text-orange-500 mb-6">
                {membership.price}
              </p>
              <ul className="space-y-3 text-gray-600">
                {membership.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="mr-2 text-green-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">
              {membership.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipOptions;
