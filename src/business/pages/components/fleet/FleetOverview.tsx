import fleetVehicle from "../../../../assets/fleet-vehicle.png";
import fleetRider from "../../../../assets/fleet-rider.png";
import ContentLayout from "../../../components/layout/ContentLayout";

const FleetOverview = () => {
  return (
    <ContentLayout>
      <p className="text-center text-[28px] lg:text-[40px] font-bold max-w-2xl mx-auto leading-tight">
        Everything happening on the road,
        <br />
        in one place.
      </p>
      <div className="pt-16 md:space-y-24 space-y-10">
        <div className="bg-[#e6f4f9] rounded-2xl flex flex-col md:flex-row md:items-end gap-6 pt-6 md:pt-0 pb-6 md:pb-10 pl-6 md:pl-10 pr-6 md:pr-10">
          <div className="md:w-[40%] shrink-0 text-center md:text-left md:pb-6">
            <p className="text-2xl font-bold pb-2">Vehicles</p>
            <p className="text-gray-600">
              Keep every car and motorbike organized, monitored, and accounted
              for.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={fleetVehicle}
              alt=""
              className="w-full max-w-[280px] md:max-w-[340px] md:-mt-14"
            />
          </div>
        </div>
        <div className="bg-[#fde1c6] rounded-2xl flex flex-col md:flex-row-reverse md:items-end gap-6 pt-6 md:pt-0 pb-6 md:pb-10 pl-6 md:pl-10 pr-6 md:pr-10">
          <div className="md:w-[44%] shrink-0 text-center md:text-left md:pb-6">
            <p className="text-2xl font-bold pb-2">Drivers &amp; riders</p>
            <p className="text-gray-600">
              Manage driver profiles, assignments, activity and availability
              from one place.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src={fleetRider}
              alt=""
              className="w-full max-w-[200px] md:max-w-60 md:-mt-14"
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default FleetOverview;
