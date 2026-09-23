import { CalendarClock, MapPinned, Fuel } from "lucide-react";
import Tag from "../../../components/common/Tag";
import ContentLayout from "../../../components/layout/ContentLayout";

const FleetRental = () => {
  const points = [
    {
      icon: <CalendarClock size={20} />,
      title: "Self-drive, chauffeured, or both",
      subtitle:
        "Offer a vehicle as self-drive, chauffeured, or both, and set your rate by the hour, half-day, day or week.",
    },
    {
      icon: <MapPinned size={20} />,
      title: "Set your own coverage area",
      subtitle:
        "Choose the regions each rental vehicle operates in, with an out-of-region surcharge for trips outside it.",
    },
    {
      icon: <Fuel size={20} />,
      title: "Fuel-inclusive or fuel-exclusive",
      subtitle:
        "Configure fuel treatment, a refundable self-drive deposit, and late-return charges before it goes live.",
    },
  ];
  return (
    <ContentLayout>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col gap-4 lg:w-[90%]">
          <Tag color="yellow" text="VaMijo Rental" />
          <p className="text-[30px] font-bold">
            Turn idle vehicles into rental income
          </p>
          <p className="text-[18px]">
            Any eligible vehicle in your fleet can also be listed under VaMijo
            Rental — a dedicated, time-based booking category with its own
            pricing and availability rules. Every rental configuration is
            reviewed by VaMijo before it's shown to customers.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {points.map((p, i) => (
            <div
              key={i}
              className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-5"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#b0ddeb] text-primary flex items-center justify-center">
                {p.icon}
              </div>
              <div>
                <p className="font-bold">{p.title}</p>
                <p className="text-gray-600 text-sm pt-1">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
};

export default FleetRental;
