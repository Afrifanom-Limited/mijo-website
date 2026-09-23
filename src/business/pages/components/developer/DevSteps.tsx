import { Cable, RefreshCcw, Send } from "lucide-react";
import StepsCard from "../../../components/common/StepsCard";
import ArrowConnector from "../../../components/common/ArrowConnector";
import ContentLayout from "../../../components/layout/ContentLayout";

const DevSteps = () => {
  const stepsArray = [
    {
      icon: <Cable />,
      title: "Integrate with VaMijo",
      subtitle:
        "Connect your website, app, or platform to the VaMijo API using simple, developer-friendly endpoints.",
      count: 1,
      color: "bg-[#0190bf]",
    },
    {
      icon: <Send />,
      title: "Send delivery requests",
      subtitle:
        "Create deliveries directly from your platform with pickup, drop-off, order, and customer details.",
      count: 2,
      color: "bg-[#f89e48]",
    },
    {
      icon: <RefreshCcw />,
      title: "Stay in the loop",
      subtitle:
        "Receive real-time delivery updates and tracking information as every order moves from pickup to doorstep.",
      count: 3,
      color: "bg-[#12141d]",
    },
  ];
  return (
    <ContentLayout style="bg-[#e6f4f9]">
      <div className="flex flex-col bg-">
        <p className="font-bold text-5xl text-center">
          Connect. Deliver. Track.
        </p>
        <div className="text-lg text-center pt-4">
          Connect your platform to VaMijo and make delivery a seamless
          <br /> part of your customer experience.
        </div>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-center text-center pt-12">
          <StepsCard c={stepsArray[0]} />
          <ArrowConnector
            className="hidden lg:block shrink-0 "
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

export default DevSteps;
