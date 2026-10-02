import VendorHero from "./components/vendor/VendorHero";
import VendorFeatures from "./components/vendor/VendorFeatures";
import VendorSteps from "./components/vendor/VendorSteps";
import VendorGetStarted from "./components/vendor/VendorGetStarted";
import Faqs from "./components/Faqs";
import Contact from "./components/landingPage/Contact";
import DevPlug from "./components/developer/DevPlug";
import VendorFocus from "./components/vendor/VendorFocus";

const VendorPage = () => {
  const faqs = [
    {
      title: "",
      content: "",
    },
  ];
  return (
    <>
      <section id="vendor-hero">
        <VendorHero />
      </section>
      <section id="vendor-features">
        <VendorFeatures />
      </section>
      <section id="vendor-plug">
        <DevPlug text="Built for businesses that deliver" />
      </section>
      <section id="vendor-app">
        <VendorSteps />
      </section>

      <section id="vendor-wallet">
        <VendorFocus />
      </section>
      <section id="vendor-faqs">
        <Faqs faqs={faqs} />
      </section>
      <section id="vendor-get-started">
        <VendorGetStarted />
      </section>
      <section id="vendor-sales">
        <Contact />
      </section>
    </>
  );
};

export default VendorPage;
