import ContentLayout from "../../../components/layout/ContentLayout";
import fleet2 from "../../../../assets/fleet-2.png";
import Button from "../../../components/common/Button";
import { MoveUpRight } from "lucide-react";
import { navigateToSection } from "../../../../router";

const FleetGetStarted = () => {
  return (
    <ContentLayout>
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#e6f4f9] h-[400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex flex-col lg:w-[80%] ml-auto lg:px-16 justify-center items-center md:items-start p-6  space-y-4">
            <p className="text-center md:text-left font-bold text-4xl">
              Ready to put your fleet to work?
            </p>
            <p className="text-center md:text-left text-lg">
              Register your fleet, add your vehicles and team, and start
              receiving ride and rental requests.
            </p>
            <Button
              text="Talk to us"
              icon={<MoveUpRight size={16} />}
              textColor="w-fit text-white"
              onClick={() =>
                navigateToSection("/business/fleet", "fleet-contact")
              }
            />
          </div>
          <div className="relative hidden lg:block pt-12">
            <img src={fleet2} className="h-[80%] absolute" />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default FleetGetStarted;
