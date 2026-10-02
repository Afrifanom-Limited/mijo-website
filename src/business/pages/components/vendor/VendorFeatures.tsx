import { Package, MapPin, Headset } from "lucide-react";
import ContentLayout from "../../../components/layout/ContentLayout";
import Button from "../../../components/common/Button";
import { vendorAppLink } from "../../../../utils";

const VendorFeatures = () => {
  const featuresArray = [
    {
      title: "Send Orders for Delivery",
      subtitle:
        "Turn your ready-to-go customer orders into deliveries with VaMijo, quickly and effortlessly.",
      icon: <Package size={28} />,
    },
    {
      title: "Track Every Delivery",
      subtitle:
        "Follow your rider from pickup to your customer's doorstep and stay updated along the way.",
      icon: <MapPin size={28} />,
    },
    {
      title: "Keep Customers in the Loop",
      subtitle:
        "Share delivery updates with your customers so they always know where their order is.",
      icon: <Headset size={28} />,
    },
  ];
  return (
    <ContentLayout style="space-y-12">
      <div className="mx-auto space-y-4">
        <div className="grid grig-cols-1 md:grid-cols-2 gap-6">
          <div className="lg:max-w-[75%]">
            <p className="text-3xl lg:text-4xl text-center md:text-left">
              <span className="font-bold">
                Serve Your Customers. Deliver Every Order.{" "}
              </span>
              <span className="font-medium italic">Grow With VaMijo</span>
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <p className="text-center md:text-left">
              From order details to doorstep delivery, manage your customers'
              deliveries and track every order with VaMijo's Vendor Portal.
            </p>
            <div className="">
              <Button
                text="Get started"
                onClick={() => {
                  window.open(vendorAppLink, "_blank", "noopener,noreferrer");
                }}
                bgColor="bg-primary"
                textColor="flex justify-center text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#e6f4f9] p-8 lg:p-12 rounded-2xl">
        {featuresArray.map((f, index) => (
          <div key={index} className="bg-white shadow rounded-2xl p-6">
            <div className="text-white h-16 w-16 rounded-full bg-primary flex justify-center items-center">
              {f.icon}
            </div>
            <p className="font-bold py-2">{f.title}</p>
            <p className="text-gray-600">{f.subtitle}</p>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
};

export default VendorFeatures;
