import HeaderOne from "../../components/common/HeaderOne";
// import Reveal from "../../components/common/Reveal";

const MijoPartnerPricing = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = (id: string) => {
    scrollToSection(id);
  };
  const pricingData = [
    {
      tier: "Daily",
      price: "GHS 24",
      description:
        "Full access for 24 hours. Perfect for short-term or one-time use.",
    },
    {
      tier: "Weekly",
      price: "GHS 150",
      description:
        "Unlimited access for 7 days. Ideal if you need flexibility without a long commitment.",
      savings: "Save GHS 18",
    },
    {
      tier: "Monthly",
      price: "GHS 600",
      description: "Best value. Enjoy uninterrupted access for a full month.",
      savings: "Save GHS 120",
    },
  ];

  return (
    <div className="max-w-[800px] mx-auto space-y-8 p-6 lg:p-0 py-40 lg:py-[180px]">
      <HeaderOne title="One-off Commission Free Payments " subtitle="" />
      <div className="block lg:hidden space-y-4">
        {pricingData.map((p, index) => (
          <PricingCard
            tier={p.tier}
            key={index}
            price={p.price}
            description={p.description}
            handleScroll={() => handleScroll("partners")}
            savings={p.savings}
          />
        ))}
      </div>
      <div className="hidden lg:block space-y-8">
        <div className="grid grid-cols-3 gap-8">
          {pricingData.map((p, index) => (
            <PricingCard
              tier={p.tier}
              key={index}
              price={p.price}
              description={p.description}
              handleScroll={() => handleScroll("partners")}
              savings={p.savings}
            />
            // </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MijoPartnerPricing;

const PricingCard = ({
  tier,
  price,
  description,
  handleScroll,
  savings,
}: {
  tier?: string;
  price?: string;
  description?: string;
  handleScroll?: any;
  savings?: string;
}) => {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-md border border-gray-200 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-3 hover:shadow-xl hover:border-blue-500/40 hover:bg-gray-900 h-full">
      <div className="">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-white">
          {tier}
        </h3>

        <p className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-white">
          {price}
        </p>
        {savings ? (
          <div className="inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700 group-hover:bg-green-500/20 group-hover:text-green-300 transition">
            {savings}
          </div>
        ) : (
          <div className="inline-block mb-4 px-3 py-1 text-sm font-semibold rounded-full bg-transparent text-transparent">
            {savings}
          </div>
        )}

        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
          {description}
        </p>
      </div>

      <button
        className="w-full bg-secondary text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:bg-primary group-hover:-translate-y-1 shadow-sm cursor-pointer"
        onClick={handleScroll}
      >
        Get Started
      </button>
    </div>
  );
};
