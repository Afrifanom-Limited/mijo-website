import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import ActionButton from "../../components/common/ActionButton";
import Reveal from "../../components/common/Reveal";
import { AppStoreLinks } from "../../utils";
import ContentLayout from "../components/layout/ContentLayout";
import zones from "../../assets/zones.png";

const rushPeriods = [
  { label: "Morning", time: "5:00 AM – 10:00 AM" },
  { label: "Evening", time: "3:00 PM – 7:00 PM" },
];

const offPeakAreas = [
  "Lapaz",
  "Kwashieman",
  "Awoshie",
  "Mallam",
  "Dansoman",
  "Laterbiokorshie",
  "Mamprobi",
  "Ministries",
  "Ridge",
  "Osu",
  "Spintex",
];

// Points for a 16-spike starburst in a 100x100 viewBox.
const burstPoints = Array.from({ length: 32 }, (_, i) => {
  const radius = i % 2 === 0 ? 50 : 42;
  const angle = (Math.PI * 2 * i) / 32;
  return `${50 + radius * Math.cos(angle)},${50 + radius * Math.sin(angle)}`;
}).join(" ");

const Starburst = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex h-44 w-44 shrink-0 items-center justify-center md:h-52 md:w-52">
    <svg
      className="absolute inset-0 h-full w-full animate-[spin_40s_linear_infinite] text-secondary"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <polygon points={burstPoints} fill="currentColor" />
    </svg>
    <div className="relative -rotate-6 text-center text-gray-900">
      {children}
    </div>
  </div>
);

const TearLine = () => (
  <div className="relative my-2 flex items-center" aria-hidden="true">
    <span className="absolute -left-4 h-8 w-8 rounded-full bg-white md:-left-5 md:h-10 md:w-10" />
    <div className="mx-6 w-full border-t-2 border-dashed border-white/40" />
    <span className="absolute -right-4 h-8 w-8 rounded-full bg-white md:-right-5 md:h-10 md:w-10" />
  </div>
);

const OfferLabel = ({ title }: { number: string; title: string }) => (
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-white">
    {title}
  </p>
);

const DateTag = ({ dates }: { dates: string }) => (
  <span className="inline-block -rotate-2 bg-secondary px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-md">
    {dates}
  </span>
);

const PromoPage = () => {
  return (
    <div className="bg-primary/50 pt-20">
      <ContentLayout>
        <Reveal direction="up">
          <article className="relative mx-auto max-w-4xl overflow-hidden rounded-4xl bg-linear-to-br from-primary-500 via-[#007aa3] to-[#005a78] text-white shadow-2xl">
            {/* Decorative background shapes */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-16 top-1/3 h-40 w-40 rounded-full bg-secondary/15"
              aria-hidden="true"
            />

            {/* Headline */}
            <header className="relative px-6 pb-10 pt-12 text-center md:px-14 md:pt-16">
              <span className="inline-block rotate-3 rounded-sm bg-white px-5 py-2 text-sm font-extrabold uppercase tracking-[0.2em] text-primary shadow-lg">
                It's Customer Service Month
              </span>
              <h1 className="mt-8 text-4xl font-black uppercase leading-[1.05] md:text-6xl">
                VaMijo has something{" "}
                <span className="text-secondary">exciting</span> for you!
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
                We're celebrating you with amazing deals to make your rides and
                deliveries more affordable. Because at VaMijo,{" "}
                <span className="font-bold text-white">
                  you deserve more for choosing us!
                </span>
              </p>
            </header>

            <TearLine />

            {/* Offer 1: Rush period */}
            <section className="relative px-6 py-10 md:px-14">
              <OfferLabel number="01" title="VaMijo Rush Period Promo" />
              <div className="mt-6 flex flex-col items-center gap-8 md:flex-row md:items-center">
                <Starburst>
                  <p className="text-xs font-bold uppercase">Just</p>
                  <p className="text-4xl font-black leading-none md:text-5xl">
                    GHS 15
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase leading-tight">
                    on fares up
                    <br />
                    to GHS 100*
                  </p>
                </Starburst>

                <div className="flex-1 text-center md:text-left">
                  <DateTag dates="21st October – 1st November" />
                  <h2 className="mt-5 text-3xl font-black uppercase md:text-4xl">
                    Beat the rush for less!
                  </h2>
                  <p className="mt-2 text-white/85">
                    Get where you need to be for less during peak hours. Rides
                    and deliveries within Greater Accra.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-start">
                    {rushPeriods.map((period) => (
                      <div key={period.label}>
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                          {period.label}
                        </p>
                        <p className="text-xl font-extrabold">{period.time}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm italic text-white/70">
                    * For fares above GHS 100, simply pay the fare minus GHS 15.
                  </p>
                </div>
              </div>
            </section>

            <TearLine />

            {/* Offer 2: 50% off outside rush hours */}
            <section className="relative px-6 pb-12 pt-10 md:px-14">
              <OfferLabel number="02" title="Vamijo off peak" />
              <div className="mt-6 text-center">
                <p className="mb-2 inline-block -rotate-6 text-2xl font-black uppercase italic tracking-wide text-white md:text-3xl">
                  up to
                </p>
                <p className="text-7xl font-black leading-none text-secondary drop-shadow-[0_4px_0_rgba(0,0,0,0.15)] md:text-9xl">
                  50% OFF
                </p>
                <p className="mt-3 text-xl font-extrabold uppercase md:text-2xl">
                  your rides outside the VaMijo Rush Periods
                </p>
                <div className="mt-4">
                  <DateTag dates="21st October – 15th November" />
                </div>
              </div>

              <p className="mt-8 text-center text-sm font-bold uppercase tracking-widest text-white/80">
                In these selected areas
              </p>
              <img
                src={zones}
                alt="Map of promo areas across Accra"
                className="mx-auto mt-4 w-full max-w-2xl rounded-2xl ring-1 ring-white/20"
              />
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {offPeakAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-white/30 px-3 py-1 text-sm font-semibold"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </section>

            {/* Thank you + download */}
            <footer className="relative bg-white px-6 py-10 text-center text-gray-900 md:px-14">
              <p className="mx-auto max-w-2xl text-gray-600">
                This Customer Service Month, we're saying a{" "}
                <span className="font-black text-secondary">BIG THANK YOU</span>{" "}
                for choosing VaMijo. Your support keeps us moving, and we're
                excited to keep serving you better.
              </p>
              <h2 className="mt-5 text-xl font-black uppercase text-primary md:text-2xl">
                Download VaMijo, book your next ride, and enjoy the savings!
              </h2>
              <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-8">
                <ActionButton
                  textColor="w-fit"
                  image={appStore}
                  text="App Store"
                  link={AppStoreLinks.APPLE}
                />
                <ActionButton
                  textColor="w-fit"
                  image={playStore}
                  text="Play store"
                  link={AppStoreLinks.GOOGLE}
                />
              </div>
            </footer>
          </article>
        </Reveal>
      </ContentLayout>
    </div>
  );
};

export default PromoPage;
