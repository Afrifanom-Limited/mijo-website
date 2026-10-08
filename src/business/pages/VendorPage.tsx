import VendorHero from "./components/vendor/VendorHero";
import VendorFeatures from "./components/vendor/VendorFeatures";
import VendorSteps from "./components/vendor/VendorSteps";
import Faqs from "./components/Faqs";
import Contact from "./components/landingPage/Contact";
import DevPlug from "./components/developer/DevPlug";
import VendorFocus from "./components/vendor/VendorFocus";
import CallToAction from "./components/landingPage/CallToAction";

import { vendorAppLink } from "../../utils";

const VendorPage = () => {
  const faqs = [
    {
      title: "Do I need to receive orders through VaMijo?",
      content:
        "No. You can use VaMijo to deliver orders your customers place directly with your business.",
    },
    // { title: "How do I request a rider?", content: "" },
    {
      title: "How does billing work?",
      content:
        "The Delivery API runs on a pay-as-you-go wallet, topped up from any telco. A small amount is deducted for each successfully completed delivery request, which covers the delivery itself plus the SMS confirmations sent along the way. Digital Address Verification is billed separately per lookup if you choose to use it. Every transaction is logged against its project, exportable as a report, and wallet funds can be spent on deliveries but not withdrawn.",
    },
    // { title: "", content: "" },
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
        <CallToAction
          title="Ready to simplify your deliveries?"
          subtitle="Manage your orders, riders, and deliveries from one powerful workspace."
          buttonText="Get started"
          onClick={() => {
            window.open(vendorAppLink, "_blank", "noopener,noreferrer");
          }}
        />
      </section>
      <section id="vendor-sales">
        <Contact />
      </section>
    </>
  );
};

export default VendorPage;
