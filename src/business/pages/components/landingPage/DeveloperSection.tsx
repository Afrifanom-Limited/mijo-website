import ContentLayout from "../../../components/layout/ContentLayout";
import developer1 from "../../../../assets/developer-1.png";
import { MoveUpRight } from "lucide-react";
import Button from "../../../components/common/Button";
import Tag from "../../../components/common/Tag";
import { navigate } from "../../../../router";

const DeveloperSection = () => {
  return (
    <ContentLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4 lg:w-[70%] lg:ml-auto">
          <Tag color="blue" text="Built for developers" />
          <p className="text-[30px] font-bold">
            Delivery infrastructure, built into your platform.
          </p>
          <p className="text-[18px]">
            Connect your platform to VaMijo and give your customers seamless
            access to reliable delivery, tracking, and fulfilment.
          </p>
          <div className="text-[16px] pt-4">
            Everything you need to move orders from checkout to doorstep.
          </div>
          <div className="">
            <Button
              text="Integrate with VaMijo delivery API"
              icon={<MoveUpRight size={16} />}
              onClick={() => {
                navigate("/business/developer");
              }}
            />
          </div>
        </div>{" "}
        <div className="hidden lg:block relative">
          <img src={developer1} alt="" className="" />
        </div>
      </div>
    </ContentLayout>
  );
};

export default DeveloperSection;
