import Tag from "../../../components/common/Tag";
import ContentLayout from "../../../components/layout/ContentLayout";
import vendor1 from "../../../../assets/vendor-1.png";
import vendor2 from "../../../../assets/vendor-2.png";
import vendor3 from "../../../../assets/vendor-3.png";
import Button from "../../../components/common/Button";
import { MoveUpRight } from "lucide-react";
import { navigate } from "../../../../router";

const VendorSection = () => {
  return (
    <ContentLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
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
        <div className="flex flex-col gap-4 lg:w-[70%]">
          <Tag color="yellow" text="Your delivery command center" />
          <p className="text-[30px] font-bold">
            Every order. Every rider. One place.
          </p>
          <p className="text-[18px]">
            Manage orders, dispatch deliveries, track riders, and monitor
            performance from a single, intuitive dashboard built for your
            business.
          </p>
          <div className="text-[16px] pt-4">
            Stay on top of your operations while VaMijo takes care of the
            delivery.
          </div>
          <div className="">
            <Button
              text="Explore VaMijo vendor portal"
              icon={<MoveUpRight size={16} />}
              onClick={() => {
                navigate("/business/vendor");
              }}
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default VendorSection;
