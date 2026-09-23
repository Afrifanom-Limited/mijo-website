import { useCallback, useEffect, useState } from "react";
import Reveal from "../../../components/common/Reveal";
import Button from "../../../components/common/Button";
import heroImage from "../../../../assets/hero.png";
import vendorIcon from "../../../../assets/vendor-icon.png";
import developerIcon from "../../../../assets/developer-icon.png";
import fleetIcon from "../../../../assets/fleet-icon.png";
import { ArrowUpRight } from "lucide-react";
import { navigateToSection } from "../../../../router";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}
interface Control {
  image: string;
  title: string;
}

const slides: Slide[] = [
  {
    image: heroImage,
    title: "Move your business forward",
    subtitle:
      "Power your deliveries with the vehicles, technology, and logistics infrastructure your business needs to grow.",
  },
  {
    image: heroImage,
    title: "Reliable rides, every time",
    subtitle:
      "Connect with trusted drivers and get where you need to go, quickly and safely.",
  },
  {
    image: heroImage,
    title: "Deliveries made simple",
    subtitle:
      "From packages to groceries, VaMijo gets it there fast and affordably.",
  },
];
const controls: Control[] = [
  {
    image: fleetIcon,
    title: "Fleet Management",
  },
  {
    image: developerIcon,
    title: "Vendor API",
  },
  {
    image: vendorIcon,
    title: "Vendor Portal",
  },
];

const SLIDE_DURATION_MS = 10000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const handleScroll = (id: string) => {
    navigateToSection("/business", id);
  };

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => goTo(current + 1), SLIDE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [current, goTo]);

  return (
    <div className="relative pt-[50px] min-h-[550px] md:min-h-[630px] overflow-hidden flex items-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={index !== current}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
          id="hero"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative w-full px-6 sm:px-12 md:px-20  max-w-6xl mx-auto">
        <Reveal direction="down" key={current}>
          <h1 className="text-[30px] md:text-[60px] text-white font-bold leading-tight animate-fadeIn">
            {slides[current].title}
          </h1>
          <p className="text-white text-[16px] md:text-[24px] pt-3.5 pb-2">
            {slides[current].subtitle}
          </p>
          <Button
            text="Contact Us"
            icon={<ArrowUpRight size={18} />}
            onClick={() => handleScroll("business-contact")}
          />
        </Reveal>
      </div>

      <div className="absolute bottom-6 inset-x-0 px-6 sm:px-12 md:px-20  max-w-6xl mx-auto z-10 flex gap-2">
        {controls.map((_, index) => (
          <div
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-[70px] lg:w-[200px] h-[60px] lg:h-[75px] transition-all cursor-pointer flex flex-col items-center justify-center ${
              index === current
                ? " bg-[#b0ddeb] border-b-8 border-[#003c50]"
                : " bg-white"
            }`}
          >
            <img src={_.image} className="w-6 h-6" />
            <p className="hidden lg:block  lg:text-[12px]">{_.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
