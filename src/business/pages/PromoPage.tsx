import playStore from "../../assets/play-store.png";
import appStore from "../../assets/app-store.png";
import ActionButton from "../../components/common/ActionButton";
import Reveal from "../../components/common/Reveal";
import { AppStoreLinks } from "../../utils";
import ContentLayout from "../components/layout/ContentLayout";

const bronyaSchedule = [
  {
    day: "Monday – Friday",
    morning: "6:00 AM – 8:30 AM",
    evening: "3:30 PM – 7:00 PM",
  },
  {
    day: "Saturday",
    morning: "7:00 AM – 9:00 AM",
    evening: "4:00 PM – 6:30 PM",
  },
  { day: "Sunday", morning: "6:30 AM – 10:00 AM", evening: null },
];

const hotZones = [
  { zone: "Zone 1", areas: ["Adentan", "Oyarifa", "Ashiyie"] },
  {
    zone: "Zone 2",
    areas: ["Old Barrier/Kokrobite Junction", "Weija", "Kasoa"],
  },
];

const campusZone = [
  "University of Ghana",
  "UPSA",
  "Methodist University",
  "Pentecost University",
  "Ghana Communication Technology University",
  "Accra Technical University",
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

const OfferLabel = ({ title }: { title: string }) => (
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
                VaMijo Promotions
              </span>
              <h1 className="mt-8 text-4xl font-black uppercase leading-[1.05] md:text-6xl">
                <span className="text-secondary">GHS 10 off</span> your rides,
                morning, noon &amp; night!
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
                Beat the rush, ride from our hot zones, or get home safely on
                weekend nights.{" "}
                <span className="font-bold text-white">
                  Three ways to save with VaMijo.
                </span>
              </p>
            </header>

            <TearLine />

            {/* Offer 1: Bronya */}
            <section
              id="bronya"
              className="relative scroll-mt-24 px-6 py-10 md:px-14"
            >
              <OfferLabel title="VaMijo Bronya" />
              <div className="mt-6 flex flex-col items-center gap-8 md:flex-row md:items-center">
                <Starburst>
                  <p className="text-xs font-bold uppercase">Save</p>
                  <p className="text-4xl font-black leading-none md:text-5xl">
                    GHS 10
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase leading-tight">
                    off eligible
                    <br />
                    trips
                  </p>
                </Starburst>

                <div className="w-full flex-1 text-center md:text-left">
                  <DateTag dates="Peak hours" />
                  <h2 className="mt-5 text-3xl font-black uppercase md:text-4xl">
                    Beat the rush for less!
                  </h2>
                  <p className="mt-2 text-white/85">
                    Enjoy GHS 10 off eligible trips during these peak periods:
                  </p>
                  <div className="mt-5 divide-y divide-white/15 text-left">
                    {bronyaSchedule.map((row) => (
                      <div
                        key={row.day}
                        className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4"
                      >
                        <p className="font-black uppercase tracking-wide">
                          {row.day}
                        </p>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                            Morning
                          </p>
                          <p className="font-extrabold">{row.morning}</p>
                        </div>
                        {row.evening && (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                              Evening
                            </p>
                            <p className="font-extrabold">{row.evening}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <TearLine />

            {/* Offer 2: Hot Zones */}
            <section
              id="hot-zones"
              className="relative scroll-mt-24 px-6 py-10 md:px-14"
            >
              <OfferLabel title="VaMijo Hot Zones" />
              <div className="mt-6 text-center">
                <p className="text-7xl font-black leading-none text-secondary drop-shadow-[0_4px_0_rgba(0,0,0,0.15)] md:text-9xl">
                  GHS 10 OFF
                </p>
                <p className="mt-3 text-xl font-extrabold uppercase md:text-2xl">
                  eligible trips within our hot zones
                </p>
                <div className="mt-4">
                  <DateTag dates="10:00 AM – 3:00 PM" />
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {hotZones.map((item) => (
                  <div
                    key={item.zone}
                    className="rounded-2xl border border-white/20 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                      {item.zone}
                    </p>
                    <p className="mt-1 font-extrabold">
                      {item.areas.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/20 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Campuses
                </p>
                <ul className="mt-2 grid gap-1 font-extrabold sm:grid-cols-2">
                  {campusZone.map((campus) => (
                    <li key={campus}>{campus}</li>
                  ))}
                </ul>
              </div>
            </section>

            <TearLine />

            {/* Offer 3: Takes You Home */}
            <section
              id="takes-you-home"
              className="relative scroll-mt-24 px-6 pb-12 pt-10 md:px-14"
            >
              <OfferLabel title="VaMijo Takes You Home" />
              <div className="mt-6 flex flex-col items-center gap-8 md:flex-row-reverse md:items-center">
                <Starburst>
                  <p className="text-xs font-bold uppercase">Save</p>
                  <p className="text-4xl font-black leading-none md:text-5xl">
                    GHS 10
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase leading-tight">
                    on weekend
                    <br />
                    nights
                  </p>
                </Starburst>

                <div className="flex-1 text-center md:text-left">
                  <DateTag dates="Weekend night promo" />
                  <h2 className="mt-5 text-3xl font-black uppercase md:text-4xl">
                    Get home safely for less!
                  </h2>
                  <p className="mt-2 text-white/85">
                    Helping you get home safely with GHS 10 off eligible trips.
                  </p>
                  <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-start">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                        Days
                      </p>
                      <p className="text-xl font-extrabold">Friday – Sunday</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                        Time
                      </p>
                      <p className="text-xl font-extrabold">
                        9:00 PM – 12:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Download */}
            <footer className="relative bg-white px-6 py-10 text-center text-gray-900 md:px-14">
              <p className="mx-auto max-w-2xl text-gray-600">
                Thank you for choosing VaMijo. Your support keeps us moving, and
                we're excited to keep serving you better.
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
