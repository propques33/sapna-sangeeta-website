import React from "react";
import meetingImg from "../assets/meetingroom.jpeg";
import privatecabin from "../assets/privatecabin.jpeg";
import opendesk from "../assets/opendesk.jpeg";
import collabdesk from "../assets/collab.jpeg";
const Workspaces = () => {
  const workspaces = [
    {
      image: meetingImg,
      price: "$30.00/day",
      title: "Meeting Room",
      description:
        "Collaborate and innovate in the Collaboration Hub, a dynamic space equipped for all your professional needs.",
      buttonLabel: "View Deal",
    },
    {
      image: privatecabin,
      price: "$20.00/day",
      title: "Private Cabine",
      description:
        "Host Professional Meetings in The Conference Suite - a state-of-the-art space designed for team collaboration.",
      buttonLabel: "View Deal",
    },
    {
      image: opendesk,
      price: "$20.00/day",
      title: "Open Desk",
      description:
        "Connect and network in this refreshing lounge - a stylish and comfortable setting for all professionals.",
      buttonLabel: "View Deal",
    },
    {
      image: collabdesk,
      price: "$20.00/day",
      title: "Collaborative Desk",
      description:
        "Bringing Together Complete Tools and Features to Meet All Your Workspace Needs.",
      buttonLabel: "View Deal",
    },
    // {
    //   image: "https://via.placeholder.com/300",
    //   price: "$20.00/day",
    //   title: "05-Workspace Green",
    //   description:
    //     "Combining Functionality and Eco-Friendly Practices to Create a Sustainable Workspace Experience.",
    //   buttonLabel: "View Deal",
    // },
    // {
    //   image: "https://via.placeholder.com/300",
    //   price: "$20.00/day",
    //   title: "06-The Conference Private",
    //   description:
    //     "Where Privacy Meets Professionalism in a Space Designed for High-impact Meetings.",
    //   buttonLabel: "View Deal",
    // },
  ];

  return (
    <div className="bg-gray- py-8 md:px-10 px-4">
      <div className="text-center mb-8">
        <h1 className="md:text-4xl lg:text-4xl text-3xl font-semibold">
          Find A <span className="font-semibold text-orange-500"> Workspace Near You</span>
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Discover a convenient and inspiring professional workspace tailored to
          meet your needs and designed to promote productivity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workspaces.map((workspace, index) => (
          <div
            key={index}
            className="bg-white rounded-lg hover:shadow-lg transition-all ease-in-out overflow-hidden"
          >
            <img
              src={workspace.image}
              alt={workspace.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                {/* <span className="text-purple-600 font-bold">
                  {workspace.price}
                </span>
                <button className="bg-purple-600 text-white text-sm px-3 py-1 rounded-lg">
                  {workspace.buttonLabel}
                </button> */}
              </div>
              <h3 className="text-xl font-semibold mt-2">{workspace.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {workspace.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspaces;
