import vendor1 from "../../../../assets/vendor-1.png";
import vendor2 from "../../../../assets/vendor-2.png";
import vendor3 from "../../../../assets/vendor-3.png";
import { MoveUpRight } from "lucide-react";
import Button from "../../../components/common/Button";
import { vendorAppLink } from "../../../../utils";

const VendorHero = () => {
  return (
    <div
      className={`px-4 md:px-12 lg:px-24 py-20 md:pb-24 md:pt-36 lg:pb-12 xl:py-[120px] bg-[#e6f4f9] gradientDiv`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center gap-4">
          <p className="text-[30px] font-bold">
            Manage deliveries without writing a line of code.
          </p>
          <p className="text-[18px]">
            The VaMijo Vendor Portal gives your business a self-service way to
            create, track, and confirm on-demand deliveries. No integration and
            no developers required.
          </p>

          <div className="">
            <Button
              text="Get started"
              icon={<MoveUpRight size={16} />}
              onClick={() => {
                window.open(vendorAppLink, "_blank", "noopener,noreferrer");
              }}
            />
          </div>
        </div>
        <div className="hidden lg:block relative">
          <img
            src={vendor1}
            alt=""
            className="absolute bottom-5 -right-10 z-10 w-[70%]"
          />
          <img
            src={vendor2}
            alt=""
            className="absolute bottom-12 -left-10 w-[50%]"
          />
          <img src={vendor3} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default VendorHero;
