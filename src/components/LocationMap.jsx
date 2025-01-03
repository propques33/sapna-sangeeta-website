import React from "react";

const LocationMap = () => {
  return (
    <div className="bg-black py-12 md:px-10 px-6 md:rounded-t-[0px] lg:rounded-t-[0px] ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          Find Us On The <span className="text-orange-500">Map.</span>
        </h1>
        <p className="text-orange-300 mt-4">Explore Our Exact Location Here!</p>
      </div>

      {/* Map Section */}
      <div className="flex justify-center">
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
    </div>
  );
};

export default LocationMap;
