import { Truck, Locate, ClipboardClock, RefreshCw } from "lucide-react";
import ContentLayout from "../../../components/layout/ContentLayout";
import background from "../../../../assets/map.png";
import vendor from "../../../../assets/vendor-step.png";

const VendorSteps = () => {
  const stepsArray = [
    {
      icon: <Truck className="text-primary" size={35} />,
      title: "Delivery Management",
      subtitle:
        "Create and manage deliveries from one place. Add the details you need, request a rider, and keep every delivery moving smoothly.",
    },
    {
      icon: <Locate className="text-primary" size={35} />,
      title: "Live Tracking",
      subtitle:
        "Know where your rider is in real time. Follow every delivery from pickup to your customer’s doorstep without the guesswork.",
    },
    {
      icon: <ClipboardClock className="text-primary" size={35} />,
      title: "Delivery History",
      subtitle:
        "Keep a clear record of every delivery. Quickly review past orders, delivery details, statuses, and completed deliveries whenever you need them.",
    },
    {
      icon: <RefreshCw className="text-primary" size={35} />,
      title: "Status Updates",
      subtitle:
        "Stay informed at every stage of the delivery. Know when a rider is assigned, an order is picked up, in transit, or successfully delivered.",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <ContentLayout>
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl p-8 lg:p-16 lg:items-center">
          <div className="flex-1">
            <div className="lg:w-[80%]">
              <p className="font-bold text-[18px] lg:text-[36px]/10 pb-4">
                Everything you need to manage your deliveries
              </p>
              <div className="space-y-2">
                {stepsArray.map((step) => (
                  <div className="flex gap-4">
                    <div className="">{step.icon}</div>
                    <div className="">
                      <p className="font-bold text-xl pb-2">{step.title}</p>
                      <p>{step.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>{" "}
          </div>
          <div className="hidden xl:block">
            <img src={vendor} className="h-full" />
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default VendorSteps;
