import Reveal from "../../components/common/Reveal";
import handImage from "../../assets/hand.png";
import Button from "../../components/common/Button";
import { getAppStoreLink } from "../../utils";

const openAppStore = (variant: "rider" | "driver") => {
  window.open(getAppStoreLink(variant), "_blank", "noopener,noreferrer");
};

const HeroSection = () => {
  return (
    <div className="pt-[120px] bg-white">
      <div className="flex flex-col items-center text-center px-6 md:px-0 max-w-4xl mx-auto">
        <div className="block lg:hidden">
          <Reveal direction="down">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fadeIn">
              Ride, Deliver, Earn
              <br />
              All with <span className="text-primary">VaMijo</span>
            </h1>
          </Reveal>
          <p className="text-gray-700 text-lg md:text-xl animate-fadeIn delay-150">
            VaMijo is Ghana’s all-in-one mobility app for fast, reliable rides
            and smart deliveries. Whether you’re commuting, sending packages, or
            looking to earn, VaMijo puts convenience in your hands.
          </p>
        </div>
        <div className="hidden lg:block">
          <Reveal direction="down">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fadeIn">
              Ride, Deliver, Earn
              <br />
              All with <span className="text-primary">VaMijo</span>
            </h1>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <p className="text-gray-700 text-lg  animate-fadeIn delay-150">
              VaMijo is Ghana’s all-in-one mobility app for fast, reliable rides
              and smart deliveries.
              <br />
              Whether you’re commuting, sending packages, or looking to earn,
              VaMijo puts convenience in your hands.
            </p>
          </Reveal>
        </div>
        <Reveal direction="up" delay={300}>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              text="Ride with VaMijo"
              bgColor="bg-primary md:w-[200px]"
              textColor="text-white"
              onClick={() => openAppStore("rider")}
            />
            <Button
              text="Join as a Driver"
              bgColor="bg-secondary md:w-[200px]"
              onClick={() => openAppStore("driver")}
            />
          </div>
        </Reveal>
        <div className="hidden lg:block lg:pt-12">
          <img src={handImage} className="w-4/6 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
