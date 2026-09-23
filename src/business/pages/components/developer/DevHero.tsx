import developer1 from "../../../../assets/developer-1.png";
import { MoveUpRight } from "lucide-react";
import Button from "../../../components/common/Button";
import { developerAppLink } from "../../../../utils";

const DevHero = () => {
  return (
    <div
      className={`max-w-8xl mx-auto px-4 md:px-12 lg:px-24 py-28 md:pb-24  md:pt-36 lg:pb-8 xl:pt-[120px] xl:pb-20 bg-[#e6f4f9] gradientDiv`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4 items-center lg:items-start justify-center">
          <p className="text-center lg:text-left text-[30px] font-bold">
            Delivery infrastructure, built into your platform.
          </p>
          <p className="text-center lg:text-left text-[18px]">
            Connect your platform to VaMijo and give your customers seamless
            delivery, tracking, and fulfilment without building the logistics
            infrastructure yourself.
          </p>

          <div className="">
            <Button
              text="Get API access"
              icon={<MoveUpRight size={16} />}
              onClick={() => {
                window.open(developerAppLink, "_blank", "noopener,noreferrer");
              }}
            />
          </div>
        </div>{" "}
        <div className="hidden h-full lg:flex lg:flex-col items-center justify-center">
          <img src={developer1} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default DevHero;
