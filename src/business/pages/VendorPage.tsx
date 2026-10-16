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
      title: "What is the VaMijo Vendor Portal?",
      content:
        "The VaMijo Vendor Portal is a dedicated platform that allows businesses, e-commerce stores and online vendors to request and manage multiple deliveries using VaMijo’s delivery network. The portal also leverages on the digital addressing solution for accurate pickup and drop off.",
    },
    {
      title: "Who can use the Vendor Portal?",
      content:
        "The portal is designed for online vendors, e-commerce businesses, retailers, restaurants and other businesses that need reliable delivery services.",
    },
    {
      title: "Can I request multiple deliveries at once?",
      content:
        "Yes. The Vendor Portal allows you to submit multiple delivery requests in one go, making it easier to manage high order volumes and save time.",
    },
    {
      title: "Do I need to have my own delivery riders?",
      content:
        "No. You can leverage VaMijo’s existing network of bikers to fulfil your delivery requests without having to build and manage your own delivery network.",
    },
    {
      title: "Can I track and manage my delivery requests?",
      content: "Yes, you can track all orders from pick up to drop off.",
    },
    {
      title: "Is the Vendor Portal secure?",
      content:
        "VaMijo provides a secure and dedicated portal for business users, with Multi-factor authentication(MFA) allowing for one-time passcodes.",
    },
    {
      title: "How do I get started?",
      content:
        "Register your business through the Vendor Portal. Once your account has been created and approved, where required, you can access the portal and begin making delivery requests.",
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
