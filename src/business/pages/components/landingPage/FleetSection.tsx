import { MoveUpRight } from "lucide-react";
import Button from "../../../components/common/Button";
import Tag from "../../../components/common/Tag";
import ContentLayout from "../../../components/layout/ContentLayout";
import fleet1 from "../../../../assets/fleet-1.png";
import fleet2 from "../../../../assets/fleet-2.png";
import { navigate } from "../../../../router";

const FleetSection = () => {
  return (
    <ContentLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="hidden lg:block relative">
          <img
            src={fleet1}
            alt=""
            className="absolute -top-10 -right-10 z-10"
          />
          <img src={fleet2} alt="" className="absolute" />
        </div>
        <div className="flex flex-col gap-4 lg:w-[70%]">
          <Tag color="yellow" text="Built for fleet operations" />
          <p className="text-[30px] font-bold">
            Your entire fleet, under control
          </p>
          <p className="text-[18px]">
            Manage vehicles, drivers, trips, and fleet performance from one
            powerful platform built for modern delivery operations.
          </p>
          <div className="text-[16px] pt-4">
            Manage vehicles, drivers, trips, and fleet performance from one
            powerful platform built for modern delivery operations.
          </div>
          <div className="">
            <Button
              text="Explore VaMijo fleet management"
              onClick={() => {
                navigate("/business/fleet");
              }}
              icon={<MoveUpRight size={16} />}
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default FleetSection;
