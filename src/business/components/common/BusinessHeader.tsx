import Reveal from "./Reveal";

const BusinessHeader = ({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => {
  return (
    <div className={` max-w-3xl ${centered ? "text-center mx-auto" : ""}`}>
      <div className="block lg:hidden">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="text-gray-500 pt-4 font-light">{subtitle}</p>
      </div>
      <div className="hidden lg:block">
        <Reveal direction="down">
          <h2 className="lg:text-[60px]/14 font-bold ">{title}</h2>
        </Reveal>
        <Reveal direction="left" delay={150}>
          <p className="text-[#64748a] pt-4 font-light text-[24px]">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default BusinessHeader;
