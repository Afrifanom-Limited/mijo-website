import VendorHero from "./components/vendor/VendorHero";
import VendorFeatures from "./components/vendor/VendorFeatures";
import VendorSteps from "./components/vendor/VendorSteps";
import VendorWallet from "./components/vendor/VendorWallet";
import VendorGetStarted from "./components/vendor/VendorGetStarted";
import Faqs from "./components/Faqs";

const VendorPage = () => {
  const faqs = [
    {
      title: "What do I need to register as a vendor?",
      content:
        "You'll need your Ghana Card ID number, a business contact phone number, and the digital address of your shop or pickup location. An email address and social media links are optional, but they help speed up approval.",
    },
    {
      title: "Do I need any technical integration to use the Vendor Portal?",
      content:
        "No. The Vendor Portal is a self-service web portal built for businesses that want to manage deliveries without any integration effort. Just register, get approved, and start creating on-demand delivery requests from your dashboard.",
    },
    {
      title: "How does VaMijo confirm a delivery actually happened?",
      content:
        "Every delivery uses two confirmation PINs — one to confirm your rider has picked up the package at your location, and one to confirm the recipient has received it. Both PINs are sent by SMS along with a live tracking link, and either party can retrieve their PIN by USSD if they don't have data at that moment.",
    },
    {
      title: "Can I track my deliveries?",
      content:
        "Yes. Every delivery request gets a tracking URL you can generate and share with your customer over social media or SMS, and your dashboard lists every delivery from your account with filters by date range and status.",
    },
    {
      title: "How do I get paid for completed deliveries?",
      content:
        "Activate your Fulfilment Wallet from Account Options and top it up. Once the recipient confirms a delivery with a valid Completion PIN, VaMijo automatically settles the trip fare from your wallet to the assigned driver — no manual transfers needed. You'll also get an alert whenever your available balance reaches or falls below GHS 50.",
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
      <section id="vendor-steps">
        <VendorSteps />
      </section>
      <section id="vendor-wallet">
        <VendorWallet />
      </section>
      <section id="vendor-get-started">
        <VendorGetStarted />
      </section>
      <section id="vendor-faqs">
        <Faqs faqs={faqs} />
      </section>
    </>
  );
};

export default VendorPage;
