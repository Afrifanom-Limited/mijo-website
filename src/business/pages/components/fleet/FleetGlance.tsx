import { useState } from "react";
import { Sparkle } from "lucide-react";
import fleetDashboard from "../../../../assets/fleet-dashboard.png";
import vehicleProfiles from "../../../../assets/vehicle-profiles.png";
import fleetVisibility from "../../../../assets/fleet-visibility.png";
import ContentLayout from "../../../components/layout/ContentLayout";

const points = [
  {
    iconBg: "bg-[#e7f3fb]",
    iconColor: "text-[#0190bf]",
    title: "Live vehicle status",
    subtitle: "Know which vehicles are active, idle, offline, or unavailable.",
    image: fleetDashboard,
  },
  {
    iconBg: "bg-[#fdf0e4]",
    iconColor: "text-[#f89e48]",
    title: "Vehicle profiles",
    subtitle: "Access vehicle details, assignment, activity, and history.",
    image: vehicleProfiles,
  },
  {
    iconBg: "bg-[#e5f8ee]",
    iconColor: "text-[#22c55e]",
    title: "Fleet-wide visibility",
    subtitle: "Manage cars and motorbikes from a single dashboard.",
    image: fleetVisibility,
  },
];

const FleetGlance = () => {
  const [active, setActive] = useState(0);
  return (
    <ContentLayout style="bg-[#f3f8fb]">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <p className="text-[28px] lg:text-[40px] font-bold">
          Your entire fleet at a glance
        </p>
        <p className="text-gray-600">
          Get a clear view of every vehicle in your operation, from active trips
          and driver availability to vehicles that need attention.
        </p>
      </div>
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center">
          <img
            key={active}
            src={points[active].image}
            alt=""
            className="w-full max-w-[480px] h-auto opacity-100 starting:opacity-0 transition-opacity duration-300"
          />
        </div>
        <div className="flex flex-col gap-4">
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
      </div>
    </ContentLayout>
  );
};

export default FleetGlance;
