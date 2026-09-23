import Faqs from "../Faqs";

const DevFaqs = () => {
  const faqs = [
    {
      title:
        "What's the difference between the Vendor Portal and the Vendor API?",
      content:
        "The Vendor Portal is a web-based platform that allows registered businesses to create and manage on-demand delivery requests. The VaMijo Delivery API allows businesses to connect their websites, e-commerce platforms or other systems to VaMijo delivery services. This allows delivery requests and delivery information to flow between your platform and VaMijo.",
    },
    {
      title: "What do I need to sign up as a vendor?",
      content:
        "You'll need your Ghana Card ID number, a phone number, and the digital address of your shop or pickup location. A social media link and email are optional but help speed up approval. Once submitted, your profile goes through a short verification process before you're marked as an approved vendor.",
    },
    {
      title: "How does VaMijo confirm a delivery actually happened?",
      content:
        "Every delivery uses two confirmation PINs, one to confirm the rider has picked up the package at your location, and one to confirm the recipient has received it. Both PINs are sent by SMS along with a live tracking link, and either party can also retrieve their PIN by USSD if they don't have data at that moment.",
    },
    {
      title: "How does billing work on the Vendor API?",
      content:
        "The Delivery API runs on a pay-as-you-go wallet. You top up from any telco, and a small amount is deducted for each successfully completed delivery request  covering delivery costs plus the SMS confirmations sent along the way. Every transaction is logged against its project and can be exported as a report; wallet funds can be spent on deliveries but not withdrawn.",
    },
    {
      title: "Can I track my deliveries?",
      content:
        "Yes. Vendors using the Vendor Portal can view delivery statuses and generate tracking URLs that can be shared with customers. API users can also access delivery status and tracking information through the integration.",
    },
    {
      title:
        "Can I manage a whole fleet of vehicles, or is VaMijo just for single deliveries?",
      content:
        "Both. VaMijo Fleet gives you a live view of every vehicle you operate, on route, under maintenance, or offline  so you can assign drivers and monitor performance across your whole operation, not just one delivery at a time.",
    },
  ];
  return (
    <div>
      <Faqs faqs={faqs} />
    </div>
  );
};

export default DevFaqs;
