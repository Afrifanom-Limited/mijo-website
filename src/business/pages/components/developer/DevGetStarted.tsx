import ContentLayout from "../../../components/layout/ContentLayout";
import devStarted1 from "../../../../assets/dev-get-started.png";
import Button from "../../../components/common/Button";
import { MoveUpRight } from "lucide-react";
import { developerAppLink } from "../../../../utils";

const DevGetStarted = () => {
  return (
    <ContentLayout>
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#e6f4f9] h-[400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex flex-col lg:w-[80%] justify-center md:items-center p-6 lg:p-16 space-y-4">
            <p className="font-bold text-4xl">Ready to start building</p>
            <p className="md:text-center text-lg">
              Get your credentials, explore the API and start integrating VaMijo
              into your platform.
            </p>
            <div className=""></div>
            <Button
              text="View documentation"
              icon={<MoveUpRight size={16} />}
              textColor="w-fit text-white"
              onClick={() => {
                window.open(developerAppLink, "_blank", "noopener,noreferrer");
              }}
            />
          </div>
          <div className="relative hidden lg:block pt-12">
            <img
              src={devStarted1}
              className="h-[80%] absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default DevGetStarted;
