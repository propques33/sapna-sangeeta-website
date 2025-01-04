import React, { useEffect } from "react";

const AboutUs = () => {
    useEffect(() => {
      // Ensure scrolling to the top of the document when the component is mounted
      window.scrollTo({
        top: 0,
        behavior: "auto", // You can use "auto" for instant scroll
      });

      // As a fallback, scroll the root element
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <div className="bg-black  text-white">
      {/* Hero Section */}
      <section className="relative text-center py-16 px-6  bg-black">
        <h1 className="text-4xl font-bold text-orange-500 mt-20">
          About Sapna Sangeeta Cinema
        </h1>
        <p className="mt-4 text-lg">
          A landmark of cinema and business, merging creativity, fun, and
          commercial opportunities under one roof.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Sapna Sangeeta Road, Swadesh Nagar, Indore, Madhya Pradesh, 452001
        </p>
      </section>

      {/* History Section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">
          Our Journey
        </h2>
        <h3 className="text-center text-4xl font-bold mb-8">
          Where It All <span className="text-orange-500">Began.</span>
        </h3>
        <p className="text-center max-w-3xl mx-auto text-gray-400">
          Sapna Sangeeta Cinema has been a beloved part of Indore’s cultural
          scene since 1985, located in the tranquil surroundings of Sneha Nagar
          and Agrawal Nagar. For over 39 years, this twin-screen theatre has
          captivated audiences, offering a classic movie-going experience.
        </p>

        {/* Carousel Section */}
        <div className="mt-12 flex justify-center items-center">
          {/* <img
            src="https://via.placeholder.com/800x400"
            alt="Theater Image"
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </section>

      {/* Revitalization Section */}
      <section className="py-16 px-6 bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-500">2024</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400">
            Revitalizing for the Future: This year, we completed a full-scale
            renovation, unveiling four state-of-the-art screens equipped with
            Dolby 9.1 sound systems and premium amenities. These upgrades now
            offer an exceptional cinematic experience.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">
          Tolani's: Dynamic Leadership
        </h2>
        <h3 className="text-center text-4xl font-bold mb-8">
          Pioneering Cinematic{" "}
          <span className="text-orange-500">Excellence.</span>
        </h3>
        <p className="text-center max-w-3xl mx-auto text-gray-400">
          Sapna Sangeeta Cinema is promoted by the renowned Tolani family of
          Indore. With over 39 years of experience in the film distribution
          industry, the family has played a significant role in shaping Indore's
          cinema culture.
        </p>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">
          Milestones
        </h2>
        <h3 className="text-center text-4xl font-bold mb-8">
          Defined by the <span className="text-orange-500">Numbers.</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          <div>
            <h4 className="text-3xl font-bold">826+</h4>
            <p className="text-gray-400">Shows Annually</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">25+</h4>
            <p className="text-gray-400">Visitors Per Year</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">12+</h4>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">580+</h4>
            <p className="text-gray-400">Movies Screened</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
