import React, { useEffect } from "react";
import HeroForm from "./HeroForm";

const Contact = () => {
  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="pt-20 bg-black md:px-10 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-white">
          Find Us On The{" "}
          <span className="text-orange-500 font-semibold">Map/Contact</span>
        </h1>
        <p className="text-orange-300 mt-4">Explore Our Exact Location Here!</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Map Section */}
        <div className="w-full lg:w-1/2">
          <iframe
            title="Sapna Sangeeta Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.622694424113!2d75.86918731543184!3d22.72097258510695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0541105797%3A0xd3f2c13db477a953!2sSapna%20Sangeeta%20Rd%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1694535432098!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-gray900 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-500 mb-6 text-center">
              Get In Touch
            </h2>
            <HeroForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
