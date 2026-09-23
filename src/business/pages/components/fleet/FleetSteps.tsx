import { Building2, Users, Rocket } from "lucide-react";
import StepsCard from "../../../components/common/StepsCard";
import ArrowConnector from "../../../components/common/ArrowConnector";
import ContentLayout from "../../../components/layout/ContentLayout";

const FleetSteps = () => {
  const stepsArray = [
    {
      icon: <Building2 />,
      title: "Register your fleet",
      subtitle:
        "Submit your business registration, TIN, contact and digital address for VaMijo to review and approve.",
      count: 1,
      color: "bg-[#0190bf]",
    },
    {
      icon: <Users />,
      title: "Add vehicles & managers",
      subtitle:
        "Onboard your vehicles and drivers, then delegate day-to-day operations to fleet manager accounts.",
      count: 2,
      color: "bg-[#f89e48]",
    },
    {
      icon: <Rocket />,
      title: "Go live",
      subtitle:
        "Approved vehicles start receiving ride and rental requests, all tracked under your fleet account.",
      count: 3,
      color: "bg-[#12141d]",
    },
  ];
  return (
    <ContentLayout style="bg-[#e6f4f9]">
      <div className="flex flex-col">
        <p className="font-bold text-5xl text-center">
          Register. Onboard. Operate.
        </p>
        <div className="text-lg text-center pt-4">
          From approval to your first ride, everything runs under one fleet
          <br /> account.
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

export default FleetSteps;
