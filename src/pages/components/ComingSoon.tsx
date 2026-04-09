import Reveal from "../../components/common/Reveal";
import HeaderOne from "../../components/common/HeaderOne";
import Button from "../../components/common/Button";

const ComingSoon = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = (id: string) => {
    scrollToSection(id);
  };
  return (
    <div className="mx-auto px-6 pt-[100px] lg:pt-[120px]">
      <HeaderOne
        title="Mijo Is Coming to Accra"
        subtitle="Built by Ghanaians, for Ghanaians — Mijo is a new ride-hailing app launching in Accra. Get fast, reliable rides and smart deliveries, all in one place."
      />

      {/* <p className="text-sm uppercase tracking-[0.25em] text-gray-400 text-center pt-6">
        Launching on{" "}
        <span className="text-primary font-semibold">1st May 2026</span>
      </p> */}

      <Reveal direction="up" delay={300}>
        <div className="max-w-xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">
              Launching 1st May 2026
            </span>
          </div>
          <p className="text-gray-600 font-medium">
            Experience a better way to ride and deliver in Accra.
          </p>
        </div>
      </Reveal>
      <Reveal direction="up" delay={300}>
        <div className="max-w-xl mx-auto text-center pt-6">
          <Button
            text="Get Started with Mijo"
            onClick={() => handleScroll("started")}
          />
        </div>
      </Reveal>
    </div>
  );
};

export default ComingSoon;
