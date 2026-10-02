import { vendorAppLink } from "../../../../utils";
import focusImg from "../../.././../assets/vendor-focus.png";
import Button from "../../../components/common/Button";
import ContentLayout from "../../../components/layout/ContentLayout";

const VendorFocus = () => {
  return (
    <div className="flex bg-[#fde1c6]">
      <ContentLayout>
        <div className="flex">
          <div className="hidden lg:block lg:flex-1 bg-white rounded-l-xl">
            <img src={focusImg} className="rounded-l-xl" />
          </div>
          <div className="flex-1 bg-[#885728] text-white flex flex-col lg:justify-center rounded-xl px-8 py-16 lg:py-0 lg:px-0  lg:rounded-r-xl lg:rounded-l-none">
            <div className="lg:w-[80%] mx-auto space-y-6">
              <p className="font-bold text-[24px] lg:text-[36px]/10">
                Focus on your business. Let VaMijo handle the Delivery.
              </p>
              <p className="">
                Spend less time coordinating riders and more time serving your
                customers. VaMijo gives your business the delivery support it
                needs without having to build and manage your own delivery
                fleet.
              </p>
              <div className="">
                <Button
                  text="Start delivering with VaMijo"
                  onClick={() => {
                    window.open(vendorAppLink, "_blank", "noopener,noreferrer");
                  }}
                  bgColor="bg-primary"
                  textColor="flex justify-center text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default VendorFocus;
