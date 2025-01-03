import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Amenities from "./components/Amenities.jsx";
import Workspace from './components/Workspace.jsx'
import TeamOffices from './components/TeamOffices.jsx'
import Testimonial from './components/Testimonial.jsx'
import FAQSection from './components/FAQSection.jsx'
import MembershipOptions from './components/MembershipOptions.jsx'
import FooterHeroSection from './components/FooterHeroSection.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Workspace />
      <Amenities />
      <TeamOffices />
      <MembershipOptions />
      <Testimonial />
      <FAQSection />
      <FooterHeroSection />
      <Footer />
    </div>
  );
}

export default App