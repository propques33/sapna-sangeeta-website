import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Term from "./Term.jsx";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-conditions" element={<Term />} />
      </Routes>
    </div>
  );
};

export default Routing;
