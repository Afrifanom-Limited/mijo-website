import Button from "../../../components/common/Button";
import { MoveRight } from "lucide-react";
import ContentLayout from "../../../components/layout/ContentLayout";

const Questions = () => {
  return (
    <ContentLayout>
      <div className="">
        <div className="bg-[#f1f5f9] rounded-2xl p-8 max-w-4xl mx-auto flex flex-col gap-6 lg:flex-row items-center">
          <div className="flex-1">
            <p className="text-2xl font-semibold">Still have questions?</p>
            <p className="text-[#2E2E27]">
              Can’t find the answer you’re looking for? Please get in touch with
              our team.
            </p>
          </div>
          <div className="w-fit">
            <Button text="Get in touch" icon={<MoveRight />} />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Questions;
