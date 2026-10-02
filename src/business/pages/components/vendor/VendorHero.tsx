import { MoveUpRight } from "lucide-react";
import Button from "../../../components/common/Button";
import { vendorAppLink } from "../../../../utils";
import BusinessHeader from "../../../components/common/BusinessHeader";
import heroImg from "../../../../assets/vendor-hero.png";
import { navigateToSection } from "../../../../router";

const VendorHero = () => {
  return (
    <div
      className={`px-4 md:px-12 lg:px-24 py-20 md:pb-24 md:pt-36 lg:pb-12 xl:py-[120px] bg-[#e6f4f9] space-y-6`}
    >
      <BusinessHeader
        title=" Every order. Every delivery, One place."
        subtitle="Get your customers' orders from your business to their doorstep with fast, reliable delivery managed through one simple portal."
      />
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <Button
          text="Talk to Sales"
          onClick={() => {
            navigateToSection("/business/vendor", "vendor-sales");
          }}
          textColor="w-[260px] md:w-fit  flex justify-center text-white"
        />
        <Button
          text="Log in to vendor portal"
          icon={<MoveUpRight size={16} />}
          onClick={() => {
            window.open(vendorAppLink, "_blank", "noopener,noreferrer");
          }}
          bgColor="bg-secondary"
          textColor="w-[260px] flex justify-center text-white"
        />
      </div>
      <img src={heroImg} className="mx-auto max-w-[80%] lg:max-w-[700px]" />
    </div>
  );
};

export default VendorHero;
