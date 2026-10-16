import CallToAction from "./components/landingPage/CallToAction";
import DeveloperSection from "./components/landingPage/DeveloperSection";
import FleetSection from "./components/landingPage/FleetSection";
import HeroSection from "./components/landingPage/HeroSection";
// import OnboardedCompanies from "./components/landingPage/OnboardedCompanies";
import VendorSection from "./components/landingPage/VendorSection";
import Contact from "./components/landingPage/Contact";
import { navigateToSection } from "../../router";

const BusinessLandingPage = () => {
  const handleScroll = (id: string) => {
    navigateToSection("/business", id);
  };
  return (
    <div className="" id="">
      <HeroSection />
      {/* <section id="onboarded-companies" className="">
        <OnboardedCompanies />
      </section> */}
      <div className="gradientDiv">
        <section id="fleet-section" className="">
          <FleetSection />
        </section>
        <section id="developer-section" className="">
          <DeveloperSection />
        </section>
        <section id="vendor-section" className="">
          <VendorSection />
        </section>
      </div>
      <section id="business-cta" className="">
        <CallToAction
          title="Ready to Move Your Business"
          subtitle=" Whether you need fleet management, delivery operations or seamless
            API integration, <br />
            VaMijo can help you build a better delivery experience."
          buttonText="Talk to us"
          onClick={() => handleScroll("business-contact")}
        />
      </section>
      <section id="business-contact" className="">
        <Contact />
      </section>
    </div>
  );
};

export default BusinessLandingPage;
