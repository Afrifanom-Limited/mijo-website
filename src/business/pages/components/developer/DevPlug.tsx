import ContentLayout from "../../../components/layout/ContentLayout";
import plug1 from "../../../../assets/plug-1.png";
import plug2 from "../../../../assets/plug-2.png";
import plug3 from "../../../../assets/plug-3.png";
import plug4 from "../../../../assets/plug-4.png";

const DevPlug = () => {
  const plugArray = [
    {
      title: "E-commerce",
      subtitle: "Automatically send customer orders for delivery.",
      image: plug1,
    },
    {
      title: "Marketplaces",
      subtitle: "Give sellers access to reliable fulfilment.",
      image: plug2,
    },
    {
      title: "Retail",
      subtitle: "Connect online orders with last-mile delivery.",
      image: plug3,
    },
    {
      title: "On-demand platforms",
      subtitle: "Build delivery directly into your customer journey.",
      image: plug4,
    },
  ];
  return (
    <ContentLayout>
      <p className="text-4xl text-center font-bold max-w-xl mx-auto">
        Plug delivery into the experience you already built
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-12 lg:hidden gap-4">
        <div
          className="relative flex items-center bg-cover bg-center bg-no-repeat p-6 rounded-xl h-48"
          style={{ backgroundImage: `url(${plugArray[0].image})` }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />
          <Text
            title={plugArray[0].title}
            subtitle={plugArray[0].subtitle}
            titleSize="text-xl"
            subtitleSize="text-sm"
          />
        </div>
        <div
          className="relative flex items-center bg-cover bg-center bg-no-repeat p-6 rounded-xl h-48"
          style={{ backgroundImage: `url(${plugArray[1].image})` }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
          <Text
            title={plugArray[1].title}
            subtitle={plugArray[1].subtitle}
            titleSize="text-xl"
            subtitleSize="text-sm"
          />
        </div>
        <div
          className="relative flex items-center bg-cover bg-center bg-no-repeat p-6 rounded-xl h-48"
          style={{ backgroundImage: `url(${plugArray[2].image})` }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
          <Text
            title={plugArray[2].title}
            subtitle={plugArray[2].subtitle}
            titleSize="text-xl"
            subtitleSize="text-sm"
          />
        </div>
        <div
          className="relative flex items-center bg-cover bg-center bg-no-repeat p-6 rounded-xl h-48"
          style={{ backgroundImage: `url(${plugArray[3].image})` }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-xl" />
          <Text
            title={plugArray[3].title}
            subtitle={plugArray[3].subtitle}
            titleSize="text-xl"
            subtitleSize="text-sm"
          />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-4 pt-16 h-[500px]">
        <div
          className="relative flex items-center bg-cover bg-center bg-no-repeat p-6 rounded-2xl"
          style={{ backgroundImage: `url(${plugArray[0].image})` }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-2xl" />
          <Text title={plugArray[0].title} subtitle={plugArray[0].subtitle} />
        </div>
        <div className="h-full flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4  inset-0 h-[50%]">
            <div
              className="relative flex items-center bg-cover bg-center bg-no-repeat p-4 rounded-xl"
              style={{ backgroundImage: `url(${plugArray[1].image})` }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-xl" />
              <Text
                title={plugArray[1].title}
                subtitle={plugArray[1].subtitle}
                titleSize="text-xl"
                subtitleSize="text-sm"
              />
            </div>
            <div
              className="relative flex items-center bg-cover bg-center bg-no-repeat p-4 rounded-xl"
              style={{ backgroundImage: `url(${plugArray[2].image})` }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-xl" />
              <Text
                title={plugArray[2].title}
                subtitle={plugArray[2].subtitle}
                titleSize="text-xl"
                subtitleSize="text-sm"
              />
            </div>
          </div>
          <div
            className="relative flex items-center h-[50%] bg-cover bg-center bg-no-repeat p-4 rounded-xl"
            style={{ backgroundImage: `url(${plugArray[3].image})` }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-xl" />
            <Text title={plugArray[3].title} subtitle={plugArray[3].subtitle} />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
export default DevPlug;

const Text = ({
  title,
  subtitle,
  titleSize,
  subtitleSize = "pt-4",
}: {
  title: string;
  subtitle: string;
  titleSize?: string;
  subtitleSize?: string;
}) => {
  return (
    <div className="text-white z-10">
      <div className={`font-bold text-4xl ${titleSize}`}>{title}</div>
      <p className={`${subtitleSize}`}>{subtitle}</p>
    </div>
  );
};
