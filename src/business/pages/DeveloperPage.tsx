import DevFeatures from "./components/developer/DevFeatures";
import DevHero from "./components/developer/DevHero";
import DevPlug from "./components/developer/DevPlug";
import DevSteps from "./components/developer/DevSteps";
import DevGetStarted from "./components/developer/DevGetStarted";
import Faqs from "./components/Faqs";

const DeveloperPage = () => {
  const faqs = [
    {
      title: "What can I do with the VaMijo API?",
      content:
        "The VaMijo API lets you request, track, and manage deliveries directly from your own platform  from checkout to doorstep. It connects you to the VaMijo Delivery API for creating and tracking delivery requests, plus the AsaaseGPS Digital Address Verification API for confirming pickup and drop-off addresses before a rider is dispatched. Every account also gets a dashboard showing order trends, request statuses, and all your active projects in one place.",
    },
    {
      title: "How do I get API credentials?",
      content:
        "Sign up on the VaMijo Vendor API platform with your business name, business phone number, and a contact person's details, matching the information on file from your Vendor registration. Once approved, create a project to generate a dedicated API key and secret key, along with the IP addresses you want whitelisted for it. The secret key is shown once at creation and can't be recovered, only reissued  so store it securely right away.",
    },
    {
      title: "Can I test before going live?",
      content:
        "Yes. Every project gets a dedicated sandbox environment with its own rate limits, so you can build and test your full integration  from creating a delivery request to receiving status updates  without touching real orders or your live wallet. Once you're ready, switch to your live credentials and the same integration goes into production.",
    },
    {
      title: "How does billing work?",
      content:
        "The Delivery API runs on a pay-as-you-go wallet, topped up from any telco. A small amount is deducted for each successfully completed delivery request, which covers the delivery itself plus the SMS confirmations sent along the way. Digital Address Verification is billed separately per lookup if you choose to use it. Every transaction is logged against its project, exportable as a report, and wallet funds can be spent on deliveries but not withdrawn.",
    },
    {
      title: "Can I integrate VaMijo with my existing e-commerce platform?",
      content:
        "Yes. The Delivery API is built to slot into your existing checkout flow  you send a delivery request when an order is placed and get tracking and status updates back through the same integration. Address verification can run at checkout to catch bad addresses before you commit to a delivery, and sandbox credentials let you test the full flow before switching to live keys.",
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
        <DevPlug />
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
