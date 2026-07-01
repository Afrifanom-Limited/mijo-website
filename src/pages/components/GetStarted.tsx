import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import ActionButton from "../../components/common/ActionButton";
import HeaderOne from "../../components/common/HeaderOne";
import Reveal from "../../components/common/Reveal";
import { AppStoreLinks } from "../../utils";

const GetStarted = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6 py-40 lg:py-[180px]">
      <HeaderOne
        title="Get Started with VaMijo"
        subtitle="Built by Ghanaians, for Ghanaians.
Download the VaMijo App, tap on VaMijo and experience rides and delivery, the VaMijo way.
"
      />
      <Reveal direction="down" delay={200}>
        <div className="flex justify-center gap-8">
          <ActionButton
            image={appStore}
            text="App Store"
            link={AppStoreLinks.APPLE}
          />
          <ActionButton
            image={playStore}
            text="Play store"
            link={AppStoreLinks.GOOGLE}
          />
        </div>
      </Reveal>
    </div>
  );
};

export default GetStarted;
