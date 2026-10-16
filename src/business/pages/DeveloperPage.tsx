import DevFeatures from "./components/developer/DevFeatures";
import DevHero from "./components/developer/DevHero";
import DevPlug from "./components/developer/DevPlug";
import DevSteps from "./components/developer/DevSteps";
import DevGetStarted from "./components/developer/DevGetStarted";
import Faqs from "./components/Faqs";

const DeveloperPage = () => {
  const faqs = [
    {
      title: "What is the VaMijo Vendor API?",
      content:
        "The VaMijo Vendor API enables businesses with their own digital platforms to integrate with VaMijo and initiate delivery requests directly from their systems.",
    },
    {
      title: "Who should use the Vendor API?",
      content:
        "The API is suitable for e-commerce platforms, online marketplaces, retailers, restaurants, logistics businesses and other organisations that want to integrate delivery into their existing applications.",
    },
    {
      title: "Do I need my own website or application?",
      content:
        "Yes. The Vendor API is primarily intended for businesses that already have a website, application, or software platform that can be connected to an external API.",
    },
    {
      title: "How does the integration work?",
      content:
        "Your technical team connects your platform to VaMijo using the API documentation and credentials provided during onboarding. Once the integration is configured and tested, your system can send delivery requests to VaMijo.",
    },
    {
      title:
        "Can delivery requests be created automatically when a customer places an order?",
      content:
        "Yes, this is a key use case. Your platform can be configured to trigger a delivery request when an order is placed or reaches a specified stage, subject to the API capabilities and your integration setup.",
    },
    {
      title: "Is there a fee for using the Vendor API?",
      content:
        "This service is currently running free. Should charges apply, you will be informed.",
    },
    {
      title: "How do I obtain API documentation and access credentials?",
      content:
        "Once you sign up on the portal, you will be provided with API documentation with instructions on how to obtain the keys.",
    },
  ];
  return (
    <>
      <section id="dev-hero">
        <DevHero />
      </section>
      <section id="dev-features">
        <DevFeatures />
      </section>
      <section id="steps">
        <DevSteps />
      </section>
      <section id="plug">
        <DevPlug text=" Plug delivery into the experience you already built" />
      </section>
      <section id="dev-get-started">
        <DevGetStarted />
      </section>
      <section id="dev-get-faqs">
        <Faqs faqs={faqs} />
      </section>
    </>
  );
};

export default DeveloperPage;
