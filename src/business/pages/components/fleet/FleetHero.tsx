import fleetHero from "../../../../assets/fleet-hero.png";
import Button from "../../../components/common/Button";
import { navigateToSection } from "../../../../router";

const FleetHero = () => {
  return (
    <div
      className="bg-primary bg-cover bg-left md:bg-center flex items-center min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[560px]"
      style={{ backgroundImage: `url(${fleetHero})` }}
    >
      <div className="max-w-6xl w-full mx-auto px-4 md:px-12 lg:px-24 pt-28 pb-22 md:pb-24 lg:pb-8 xl:pt-[120px] xl:pb-20">
        <div className="flex flex-col justify-center gap-4 max-w-md">
          <p className="text-white text-[30px] lg:text-[44px]/12 font-bold leading-tight">
            Know your fleet.
            <br />
            Run it better.
          </p>
          <p className="text-white/80 text-[16px] lg:text-[18px] w-[80%] sm:w-[70%] md:w-[90%] lg:w-full">
            Manage vehicles, drivers, trips, and daily operations from one
            connected platform. Track your fleet in real time and keep every
            ride and delivery moving.
          </p>
          <div>
            <Button
              text="Talk to our team"
              bgColor="bg-primary-200"
              onClick={() =>
                navigateToSection("/business/fleet", "fleet-contact")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetHero;
