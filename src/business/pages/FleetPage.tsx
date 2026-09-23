import FleetHero from "./components/fleet/FleetHero";
import FleetFeatures from "./components/fleet/FleetFeatures";
import FleetSteps from "./components/fleet/FleetSteps";
import FleetRental from "./components/fleet/FleetRental";
import FleetGetStarted from "./components/fleet/FleetGetStarted";
import Faqs from "./components/Faqs";
import FleetContact from "./components/fleet/FleetContact";

const FleetPage = () => {
  const faqs = [
    {
      title: "What do I need to register a fleet account?",
      content:
        "You'll need your registered business name, business registration number, Tax Identification Number, primary contact details, physical and digital address, and your business registration documents. VaMijo reviews every submission before your fleet account is approved and your dashboard is activated.",
    },
    {
      title: "Can I bring on a team to help manage my fleet?",
      content:
        "Yes. As the fleet owner, you can invite fleet manager accounts and assign each one a permission level so the right people handle drivers, vehicles, pricing and reports.",
    },
    {
      title: "Do all my vehicles and drivers need to be approved?",
      content:
        "Yes. Every vehicle you add is reviewed and approved by VaMijo before it can be activated for ride or rental requests, and every fleet driver must be approved by VaMijo before operating a fleet vehicle.",
    },
    {
      title: "Can the same vehicle be used for both rides and rentals?",
      content:
        "A vehicle can be configured for ride categories, VaMijo Rental, or both but it can't run an active chauffeured trip and be available for self-drive rental at the same time. Each vehicle is only ever assigned to one active driver or renter at a time.",
    },
    {
      title: "How does rental pricing work?",
      content:
        "As a fleet manager, you configure each rental vehicle's area of operation, service type (self-drive, chauffeured, or both), pricing model, duration and base rate, plus fuel treatment, chauffeur charges, and any deposit or surcharges. VaMijo reviews the configuration before the vehicle becomes visible to customers.",
    },
  ];
  return (
    <>
      <section id="fleet-hero">
        <FleetHero />
      </section>
      <section id="fleet-features">
        <FleetFeatures />
      </section>
      <section id="fleet-steps">
        <FleetSteps />
      </section>
      <section id="fleet-rental">
        <FleetRental />
      </section>
      <section id="fleet-get-started">
        <FleetGetStarted />
      </section>
      <section id="fleet-faqs">
        <Faqs faqs={faqs} />
      </section>
      <section id="fleet-contact">
        <FleetContact />
      </section>
    </>
  );
};

export default FleetPage;
