import fleet1 from "../../../../assets/fleet-1.png";
import fleet2 from "../../../../assets/fleet-2.png";
import { MoveUpRight } from "lucide-react";
import Button from "../../../components/common/Button";
import { navigateToSection } from "../../../../router";

const FleetHero = () => {
  const handleScroll = (id: string) => {
    navigateToSection("/business/fleet", id);
  };
  return (
    <div className="px-4 md:px-12 lg:px-24 py-20 md:pb-24 md:pt-36 lg:pb-24 xl:py-[120px] bg-[#e6f4f9] gradientDiv">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center gap-4 h-full">
          <p className="text-[30px] font-bold">
            Put your entire fleet to work on VaMijo.
          </p>
          <p className="text-[18px]">
            Register your vehicles, delegate to fleet managers, and assign
            drivers and vehicles to rides or time-based rentals — all from one
            VaMijo Fleet account.
          </p>

          <div className="">
            <Button
              text="Get started"
              icon={<MoveUpRight size={16} />}
              onClick={() => {
                handleScroll("fleet-contact");
              }}
            />
          </div>
        </div>
        <div className="hidden lg:block relative">
          <img
            src={fleet1}
            alt=""
            className="absolute -top-18 -right-10 z-10"
          />
          <img src={fleet2} alt="" className="absolute -top-5 left-0" />
        </div>
      </div>
    </div>
  );
};

export default FleetHero;
