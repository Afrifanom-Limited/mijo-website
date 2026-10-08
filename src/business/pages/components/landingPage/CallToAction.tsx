import ContentLayout from "../../../components/layout/ContentLayout";
import ctaImageLeft from "../../../../assets/cta-lt.png";
import ctaImageRight from "../../../../assets/cta-rt.png";
import Button from "../../../components/common/Button";
import { MoveRight } from "lucide-react";

const CallToAction = ({
  title,
  subtitle,
  buttonText,
  onClick,
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onClick: () => void;
}) => {
  return (
    <ContentLayout>
      <div className="bg-[#016688] rounded-3xl max-w-[1312px] h-[360px] mx-auto text-white relative">
        <div className="space-y-4 h-full xl:w-[60%] flex flex-col mx-auto justify-center items-center p-6 lg:p-0">
          <p className="text-2xl text-center lg:text-4xl">{title}</p>
          <p className="text-center">{subtitle}</p>
          <Button text={buttonText} icon={<MoveRight />} onClick={onClick} />
        </div>
        <img
          src={ctaImageLeft}
          alt=""
          className="absolute bottom-0 left-0 rounded-bl-3xl w-24 md:w-32 lg:w-48"
        />
        <img
          src={ctaImageRight}
          alt=""
          className="absolute bottom-0 right-0 rounded-br-3xl w-24 md:w-32 lg:w-52"
        />
      </div>
    </ContentLayout>
  );
};

export default CallToAction;
