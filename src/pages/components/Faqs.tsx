import Accordion from "../../components/common/Accordion";
import HeaderOne from "../../components/common/HeaderOne";
import Reveal from "../../components/common/Reveal";

const Faqs = () => {
  const faqs = [
    {
      title: "About MIJO",
      questions: [
        {
          title: "Why MIJO?",
          content:
            "MIJO is a Ghanaian-owned, tech-enabled delivery service integrated into the GhanaPostGPS app. The name 'MIJO' comes from an Ewe phrase meaning 'let’s go'. The service allows individuals and businesses to send packages securely and efficiently using precise digital addresses.",
        },
        {
          title: "How do I download and install the MIJO app?",
          content:
            "MIJO is not a separate app. It is a feature within the updated GhanaPostGPS app. Existing users simply need to update the app. New users can download GhanaPostGPS from the Google Play Store or Apple App Store.",
        },
        {
          title: "How do I create an account?",
          content:
            "If you already have the GhanaPostGPS app, just update it. New users can download the app and register using their Ghana Card and a valid Ghanaian phone number.",
        },
        {
          title: "How can I contact MIJO Services?",
          content: (
            <p>
              <ul className="flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition hover:text-dark"
                    href="tel:+233534003375"
                    aria-label="Call phone"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.8 19.2c-1.2 0-2.4-.2-3.5-.6-.5-.2-1.1 0-1.4.4l-1.6 2c-2.9-1.4-5.3-3.8-6.7-6.7l2-1.6c.4-.3.5-.9.4-1.4-.4-1.1-.6-2.3-.6-3.5 0-.7-.6-1.3-1.3-1.3H7.5C6.8 6.5 6 7.3 6 8.3 6 17 15 26 23.7 26c1 0 1.8-.8 1.8-1.8v-2.3c0-.7-.6-1.3-1.3-1.3Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition hover:text-dark"
                    href="https://x.com/mijoghofficial?s=11&t=fDCnd4rreXB_uIJWAyJIqA"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition hover:text-dark"
                    href="https://www.facebook.com/share/1DPUc2WJux/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.5 10H21V6h-2.5C15.462 6 13 8.462 13 11.5V14H10v4h3v8h4v-8h3l1-4h-4v-2.5c0-.828.672-1.5 1.5-1.5z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition hover:text-dark"
                    href="https://www.instagram.com/mijo_on_ghanapostgps?igsh=dGpmNXNmdW1sMjlw"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 16 12.8a3.2 3.2 0 0 1 0 6.4ZM22 10.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"></path>
                      <path d="M24 8c-1.1-1.1-2.6-1.7-4.3-1.7H12.3C10.6 6.3 9.1 6.9 8 8c-1.1 1.1-1.7 2.6-1.7 4.3v7.4c0 1.7.6 3.2 1.7 4.3 1.1 1.1 2.6 1.7 4.3 1.7h7.4c1.7 0 3.2-.6 4.3-1.7 1.1-1.1 1.7-2.6 1.7-4.3v-7.4c0-1.7-.6-3.2-1.7-4.3Zm-.7 11.7c0 1.2-.4 2.2-1.2 3-.8.8-1.8 1.2-3 1.2h-7.4c-1.2 0-2.2-.4-3-1.2-.8-.8-1.2-1.8-1.2-3v-7.4c0-1.2.4-2.2 1.2-3 .8-.8 1.8-1.2 3-1.2h7.4c1.2 0 2.2.4 3 1.2.8.8 1.2 1.8 1.2 3v7.4Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition hover:text-dark"
                    href="https://www.tiktok.com/@mijo_on_ghanapostgps?_r=1&_t=ZS-95bzi9UC40a"
                    target="_blank"
                    aria-label="TikTok"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.5 6c.3 1.8 1.5 3.3 3.3 3.8v3.1c-1.3 0-2.6-.4-3.7-1.1v6.3c0 3.6-2.9 6.4-6.5 6.4S8 21.7 8 18.1s2.9-6.4 6.5-6.4c.4 0 .8 0 1.2.1v3.3c-.4-.1-.8-.2-1.2-.2-1.7 0-3.1 1.4-3.1 3.2s1.4 3.2 3.1 3.2 3.1-1.4 3.1-3.2V6h3.9Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </p>
          ),
        },
      ],
    },
    {
      title: "App and Features",
      questions: [
        {
          title: "How do I request a delivery?",
          content:
            "Open the GhanaPostGPS App, tap on 'MIJO Delivery', enter pickup and drop-off digital addresses, add a delivery note, and confirm your request.",
        },
        {
          title: "How are delivery fees calculated?",
          content:
            "Delivery fees are based on distance and partner tier (Express or Standard). The final fee is shown before confirmation.",
        },
        {
          title: "Can I cancel a delivery?",
          content:
            "Yes, you can cancel for free before dispatch. A cancellation fee may apply if a Mijo Partner is already en route.",
        },
        {
          title: "Can I change the destination after booking?",
          content: "Yes, you can modify the destination after booking.",
        },
        {
          title: "Can I schedule a delivery?",
          content:
            "Currently, MIJO supports only on-demand deliveries. Scheduled deliveries will be introduced soon.",
        },
      ],
    },
    {
      title: "Account and Data",
      questions: [
        {
          title: "How do I sign up for MIJO?",
          content:
            "Use the GhanaPostGPS app with your Ghana Card and a valid phone number.",
        },
        {
          title: "How do I update my profile?",
          content:
            "Go to the 'Account' section in the app to edit your details.",
        },
        {
          title: "Can I delete my account?",
          content: "Yes. Request deletion via the in-app support.",
        },
        {
          title: "What security features are in place?",
          content:
            "All Mijo Partners are vetted based on requested documents. Real-time tracking is available, and users can rate and give feedback on Mijo Partners in-app.",
        },
      ],
    },
    {
      title: "Payment and Pricing",
      questions: [
        {
          title: "What payment methods are accepted?",
          content:
            "MIJO Wallet, Mobile Money (MTN, Vodafone, AirtelTigo), and Cash.",
        },
        {
          title: "Why is my price higher than expected?",
          content:
            "Delays, distance changes, or traffic conditions may affect the final pricing.",
        },
        {
          title: "Issue with cancellation fee?",
          content:
            "You can report any issue via the in-app Help & Support section.",
        },
        {
          title: "How do I get a delivery receipt?",
          content:
            "Receipts are sent via email (if provided) or can be found in your delivery history.",
        },
      ],
    },
    {
      title: "Using MIJO",
      questions: [
        {
          title: "How do I contact the delivery partner?",
          content:
            "You can contact the delivery partner via in-app messaging or calling options after your request is matched.",
        },
        {
          title: "What if the delivery partner's vehicle is in poor condition?",
          content:
            "Report the issue using the rating and feedback feature or contact MIJO support.",
        },
        {
          title: "What safety features are in place?",
          content:
            "Mijo Partner and vehicle details are shared, and each delivery request includes a PIN code.",
        },
        {
          title: "How can I track my driver?",
          content:
            "Tracking starts once the Mijo Partner accepts your request.",
        },
        {
          title: "What if I cancel my delivery?",
          content:
            "There is no charge if cancelled before dispatch. A cancellation fee applies if the Mijo Partner is already en route.",
        },
        {
          title: "How do I rate my experience?",
          content:
            "After delivery, you can rate and provide feedback using the pop-up prompt.",
        },
        {
          title: "How do I check my delivery history?",
          content: "Go to 'Trip History' in the app.",
        },
        {
          title: "Can I request multiple stops?",
          content:
            "Yes, you can add multiple stops during the delivery request setup.",
        },
        {
          title: "How long will my driver wait?",
          content:
            "The standard wait time is three (3) minutes. Additional wait time may incur extra charges.",
        },
      ],
    },
    {
      title: "Partner / Driver",
      questions: [
        {
          title: "How do I become a MIJO Partner?",
          content:
            "Download the MIJO Partner App, register with valid documents, and begin delivering after approval.",
        },
        {
          title: "How does the Partner App work?",
          content:
            "Once verified, partners receive delivery requests via the app. Accept, pick up, deliver, and receive payment directly in your wallet or mobile money.",
        },
        {
          title: "What if I encounter a difficult customer?",
          content:
            "Use the in-app contact options or report the incident to MIJO support.",
        },
        {
          title: "How much do I pay to start working?",
          content:
            "After document verification, partners receive a one-day free trial. After the trial, a daily subscription fee of GHS 24 is required to continue accepting delivery requests.",
        },
        {
          title: "How many deliveries can I make in a day?",
          content:
            "Once the GHS 24 daily subscription is paid, partners can make unlimited deliveries for that day. The subscription expires at 12:00 midnight.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 py-[140px] lg:py-[180px]">
      <HeaderOne
        title="Frequently asked questions"
        subtitle="Clear, simple answers to help you get started."
      />
      <div className="space-y-4">
        {faqs.slice(0, 4).map((section, i) => (
          <Reveal direction="up" delay={i * 150}>
            <Accordion items={section.questions} title={section.title} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
