import ContentLayout from "../../../components/layout/ContentLayout";
import vendor3 from "../../../../assets/vendor-3.png";
import Button from "../../../components/common/Button";
import { MoveUpRight } from "lucide-react";
import { navigateToSection } from "../../../../router";

const VendorGetStarted = () => {
  return (
    <ContentLayout>
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#e6f4f9] h-[400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex flex-col lg:w-[80%] ml-auto lg:px-16 justify-center items-center md:items-start p-6  space-y-4">
            <p className="font-bold text-4xl">Ready to start delivering?</p>
            <p className="text-center md:text-left text-lg">
              Register your business, get approved, and start creating on-demand
              deliveries — no integration required.
            </p>
            <Button
              text="Get in touch"
              icon={<MoveUpRight size={16} />}
              textColor="w-fit text-white"
              onClick={() => navigateToSection("/business", "business-contact")}
            />
          </div>
          <div className="relative hidden lg:block pt-12">
            <img src={vendor3} className="h-[80%] absolute" />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default VendorGetStarted;
