import Hero from "./Hero.jsx";

import Features from "./Features.jsx";
import Amenities from "./Amenities.jsx";
import Workspace from "./Workspace.jsx";
import TeamOffices from "./TeamOffices.jsx";
import Testimonial from "./Testimonial.jsx";
import FAQSection from "./FAQSection.jsx";
import MembershipOptions from "./MembershipOptions.jsx";
import FooterHeroSection from "./FooterHeroSection.jsx";
import LocationMap from "./LocationMap.jsx";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <Features />
      <Workspace />
      <Amenities />
      <TeamOffices />
      <MembershipOptions />
      <Testimonial />
      <LocationMap />
      <FAQSection />
      <FooterHeroSection />
    </div>
  );
};

export default Home;
