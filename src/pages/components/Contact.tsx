import Reveal from "../../components/common/Reveal";
import HeaderOne from "../../components/common/HeaderOne";

const contactItems = [
  {
    label: "Email",
    value: "support@drive.ghanapostgps.com",
    href: "mailto:support@drive.ghanapostgps.com",
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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DPUc2WJux/",
    icon: (
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mijo_on_ghanapostgps?igsh=dGpmNXNmdW1sMjlw",
    icon: (
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/mijoghofficial?s=11&t=fDCnd4rreXB_uIJWAyJIqA",
    icon: (
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mijo_on_ghanapostgps?_r=1&_t=ZS-95bzi9UC40a",
    icon: (
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 lg:py-[100px] space-y-12">
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

      <Reveal direction="up" delay={150}>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Follow Us
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-primary">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-primary-200/50 hover:text-primary-500 text-primary-500 transition-transform transform hover:-translate-y-1  text-sm font-medium"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
