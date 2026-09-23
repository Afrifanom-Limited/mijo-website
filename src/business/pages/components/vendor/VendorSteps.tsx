import { UserPlus, PackageCheck, Wallet } from "lucide-react";
import StepsCard from "../../../components/common/StepsCard";
import ArrowConnector from "../../../components/common/ArrowConnector";
import ContentLayout from "../../../components/layout/ContentLayout";

const VendorSteps = () => {
  const stepsArray = [
    {
      icon: <UserPlus />,
      title: "Register & get approved",
      subtitle:
        "Sign up with your Ghana Card ID, phone number and your shop's digital address. VaMijo reviews and approves your account.",
      count: 1,
      color: "bg-[#0190bf]",
    },
    {
      icon: <PackageCheck />,
      title: "Create & confirm deliveries",
      subtitle:
        "Request a delivery with pickup and drop-off details, share the tracking link, and confirm pickup and completion with a PIN.",
      count: 2,
      color: "bg-[#f89e48]",
    },
    {
      icon: <Wallet />,
      title: "Get settled automatically",
      subtitle:
        "Once the recipient confirms with their Completion PIN, the trip fare is settled straight from your Fulfilment Wallet.",
      count: 3,
      color: "bg-[#12141d]",
    },
  ];
  return (
    <ContentLayout style="bg-[#e6f4f9]">
      <div className="flex flex-col">
        <p className="font-bold text-5xl text-center">
          Register. Request. Get paid.
        </p>
        <div className="text-lg text-center pt-4">
          Everything you need to run deliveries for your business, from one
          <br /> self-service portal.
        </div>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-center text-center pt-12">
          <StepsCard c={stepsArray[0]} />
          <ArrowConnector
            className="hidden lg:block shrink-0"
            color="#0190bf"
          />
          <StepsCard c={stepsArray[1]} />
          <ArrowConnector
            className="hidden lg:block shrink-0"
            color="#f89e48"
          />
          <StepsCard c={stepsArray[2]} />
        </div>
      </div>
    </ContentLayout>
  );
};

export default VendorSteps;
