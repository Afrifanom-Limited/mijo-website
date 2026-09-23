import Reveal from "../../../components/common/Reveal";
import HeaderOne from "../../../components/common/HeaderOne";

const contactItems = [
  {
    label: "Email",
    value: "support@vamijogh.com",
    href: "mailto:support@vamijogh.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#0090bf"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+233 53 400 3375",
    href: "tel:+233534003375",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#0090bf"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-40 lg:py-[180px] space-y-12">
      <HeaderOne
        title="Contact Us"
        subtitle="Have a question or need support? Reach out to us through any of the channels below."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {contactItems.map((item) => (
          <Reveal key={item.label} direction="up" delay={100}>
            <a
              href={item.href}
              className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-primary-200/50 transition-transform transform hover:-translate-y-1 group "
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-500/20 text-primary-500 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-gray-800 font-semibold text-sm mt-0.5">
                  {item.value}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Contact;
