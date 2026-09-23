import { Smartphone, PackagePlus, Link2, ShieldCheck } from "lucide-react";
import ContentLayout from "../../../components/layout/ContentLayout";

const VendorFeatures = () => {
  const featuresArray = [
    {
      title: "No Integration Needed",
      subtitle:
        "Register your business and start creating deliveries from a simple web portal — no code required.",
      icon: <Smartphone size={28} />,
    },
    {
      title: "On-Demand Requests",
      subtitle:
        "Create a delivery with pickup and drop-off details whenever you need one.",
      icon: <PackagePlus size={28} />,
    },
    {
      title: "Shareable Tracking",
      subtitle:
        "Every delivery gets a tracking URL you can share with your customer by SMS or social media.",
      icon: <Link2 size={28} />,
    },
    {
      title: "PIN-Verified Delivery",
      subtitle:
        "A Pickup PIN and a Completion PIN confirm every delivery, from your shop to your customer's door.",
      icon: <ShieldCheck size={28} />,
    },
  ];
  return (
    <ContentLayout>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="font-bold text-[43px]">
          Everything you need to manage deliveries
        </p>
        <p className="text-lg">
          No developers, no setup. Just register your business and start moving
          orders.
        </p>
      </div>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuresArray.map((f, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center"
          >
            <div className="text-primary pb-6">{f.icon}</div>
            <p className="font-bold py-2">{f.title}</p>
            <p className="text-gray-600 text-center">{f.subtitle}</p>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
};

export default VendorFeatures;
