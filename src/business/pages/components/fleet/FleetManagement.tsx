import { useState } from "react";
import { Sparkle } from "lucide-react";
import fleetManagement from "../../../../assets/fleet-management.png";
import vehicleManagement from "../../../../assets/vehicle-management.png";
import smartAssignments from "../../../../assets/smart-assignments.png";
import ContentLayout from "../../../components/layout/ContentLayout";

const points = [
  {
    iconBg: "bg-[#e7f3fb]",
    iconColor: "text-[#0190bf]",
    title: "Driver Management",
    subtitle:
      "Manage rider and driver profiles, availability, assignments, and activity.",
    image: fleetManagement,
  },
  {
    iconBg: "bg-[#fdf0e4]",
    iconColor: "text-[#f89e48]",
    title: "Vehicle Management",
    subtitle: "Keep vehicle information, status, documentation, and history.",
    image: vehicleManagement,
  },
  {
    iconBg: "bg-[#e5f8ee]",
    iconColor: "text-[#22c55e]",
    title: "Smart Assignments",
    subtitle:
      "Match drivers and riders to vehicles and keep your operation organized as your fleet grows.",
    image: smartAssignments,
  },
];

const FleetManagement = () => {
  const [active, setActive] = useState(0);
  return (
    <ContentLayout>
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <p className="text-[28px] lg:text-[40px] font-bold">
          The right driver. The right vehicle, every time.
        </p>
        <p className="text-gray-600">
          Keep driver and vehicle information organized, assign vehicles with
          ease, and know who is operating what at any moment.
        </p>
      </div>
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-4 order-2 lg:order-1">
          {points.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`flex gap-4 items-start p-4 rounded-2xl cursor-pointer transition-shadow duration-200 ${
                active === i ? "bg-white shadow-lg" : ""
              }`}
            >
              <span
                className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${p.iconBg} ${p.iconColor}`}
              >
                <Sparkle size={18} fill="currentColor" />
              </span>
              <div>
                <p className="font-bold">{p.title}</p>
                <p className="text-gray-500 text-sm pt-1">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <img
            key={active}
            src={points[active].image}
            alt=""
            className="w-full max-w-[480px] h-auto opacity-100 starting:opacity-0 transition-opacity duration-300"
          />
        </div>
      </div>
    </ContentLayout>
  );
};

export default FleetManagement;
