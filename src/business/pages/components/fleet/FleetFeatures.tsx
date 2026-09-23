import { Car, Users, CalendarClock, ShieldCheck } from "lucide-react";
import ContentLayout from "../../../components/layout/ContentLayout";

const FleetFeatures = () => {
  const featuresArray = [
    {
      title: "Every Vehicle, One Account",
      subtitle:
        "Register and manage every vehicle in your fleet under a single VaMijo Fleet account.",
      icon: <Car size={28} />,
    },
    {
      title: "Delegate to Fleet Managers",
      subtitle:
        "Invite fleet managers and assign them permission levels to handle drivers, vehicles, pricing and reports.",
      icon: <Users size={28} />,
    },
    {
      title: "Rides & Rentals, One Fleet",
      subtitle:
        "Assign vehicles to ride categories or make them available for time-based rental bookings.",
      icon: <CalendarClock size={28} />,
    },
    {
      title: "Vetted Vehicles & Drivers",
      subtitle:
        "Every vehicle and driver added to your fleet is reviewed and approved by VaMijo before going live.",
      icon: <ShieldCheck size={28} />,
    },
  ];
  return (
    <ContentLayout>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="font-bold text-[43px]">
          Everything you need to run a fleet
        </p>
        <p className="text-lg">
          From onboarding to daily operations, manage your whole fleet from one
          VaMijo account.
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

export default FleetFeatures;
