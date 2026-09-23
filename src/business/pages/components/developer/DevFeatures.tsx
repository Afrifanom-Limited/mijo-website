import ContentLayout from "../../../components/layout/ContentLayout";
import features1 from "../../../../assets/features-1.png";
import features2 from "../../../../assets/features-2.png";
import features3 from "../../../../assets/features-3.png";
import features4 from "../../../../assets/features-4.png";
import FeaturesCard from "../../../components/common/FeaturesCard";

const DevFeatures = () => {
  const featuresArray = [
    {
      title: "Easy Integration",
      subtitle: "Connect to Vamijo with simple, well documented APIs.",
      icon: features1,
    },
    {
      title: "Real-time Tracking",
      subtitle:
        "Get live delivery updates and keep your customers in the loop.",
      icon: features2,
    },
    {
      title: "Flexible Delivery",
      subtitle: "Create, manage and customize deliveries to fit your workflow.",
      icon: features3,
    },
    {
      title: "Built to Scale",
      subtitle:
        "Support growing order volumes with a reliable delivery network.",
      icon: features4,
    },
  ];
  return (
    <ContentLayout>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="font-bold text-[43px]">
          Everything you need to power delivery in your platform
        </p>
        <p className="text-lg">
          Simple, reliable and built to scale - so you can focus on your
          business while we handle the logistics
        </p>
      </div>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuresArray.map((f, index) => (
          <FeaturesCard f={f} key={index} />
        ))}
      </div>
    </ContentLayout>
  );
};

export default DevFeatures;
