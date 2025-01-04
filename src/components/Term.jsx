import React, { useEffect } from "react";

const TermsAndConditions = () => {
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
    <div className="bg-black text-white py-16 px-6 ">
      <div className="max-w-6xl mx-auto pt-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-300">
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Interpretation and Definitions */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Interpretation and Definitions
            </h2>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Interpretation
            </h3>
            <p className="text-gray-400 mb-4">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or plural.
            </p>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">
              Definitions
            </h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong>Affiliate:</strong> An entity that controls, is
                controlled by, or is under common control with a party.
              </li>
              <li>
                <strong>Country:</strong> Madhya Pradesh, India
              </li>
              <li>
                <strong>Company:</strong> Refers to Sap (also referred to as
                "We," "Us," or "Our").
              </li>
              <li>
                <strong>Device:</strong> Any device that can access the Service.
              </li>
              <li>
                <strong>Service:</strong> Refers to the Website.
              </li>
              <li>
                <strong>Website:</strong> Sapna Sangeeta, accessible from
                sapnasangeeta.com
              </li>
              <li>
                <strong>You:</strong> The individual or entity accessing the
                Service.
              </li>
            </ul>
          </section>

          {/* Acknowledgment */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Acknowledgment
            </h2>
            <p className="text-gray-400 mb-4">
              These are the Terms and Conditions governing the use of this
              Service and the agreement between You and the Company.
            </p>
            <p className="text-gray-400 mb-4">
              By accessing or using the Service, You agree to be bound by these
              Terms. If You disagree with any part of these Terms, You may not
              access the Service.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Links to Other Websites
            </h2>
            <p className="text-gray-400 mb-4">
              Our Service may contain links to third-party websites that are not
              owned or controlled by the Company. We are not responsible for
              their content or policies.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-400 mb-4">
              We may terminate or suspend Your access immediately, without
              notice, for any reason, including breach of these Terms.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-400 mb-4">
              The Company's liability is limited to the amount paid by You
              through the Service or $100 if no payment was made.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Governing Law
            </h2>
            <p className="text-gray-400 mb-4">
              The laws of Madhya Pradesh, India, govern these Terms.
            </p>
          </section>

          {/* Disputes Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Disputes Resolution
            </h2>
            <p className="text-gray-400 mb-4">
              If You have any concerns, You agree to first try to resolve them
              informally by contacting the Company.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              If you have any questions about these Terms and Conditions, you
              can contact us:
            </p>
            <p className="text-orange-400 underline">*******@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
