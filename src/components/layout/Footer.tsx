import Logo from "../common/Logo";

const Footer = () => {
  const border = true;
  const year = new Date().getFullYear();
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
    <footer className="">
      <div className="bg-primary-200/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
              border
                ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
                : ""
            }`}
          >
            <div className="space-y-2 sm:col-span-12 lg:col-span-4">
              <div>
                <Logo width={60} />
              </div>
            </div>

            <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="#0"
                    onClick={() => handleScroll("features")}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="#0"
                    onClick={() => handleScroll("business")}
                  >
                    Business Customers
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="#0"
                    onClick={() => handleScroll("customers")}
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="#0"
                    onClick={() => handleScroll("partners")}
                  >
                    Partners
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="#0"
                    onClick={() => handleScroll("pricing")}
                  >
                    Pricing & Plans
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="#0"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="https://mijoride.ghanapostgps.com/info-driver/terms-and-conditions"
                    target="_blank"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 transition hover:text-gray-900"
                    href="https://mijoride.ghanapostgps.com/info-driver/privacy-policy/"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h3 className="text-sm font-medium">Social</h3>
              <ul className="flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition-transform transform hover:-translate-y-1  hover:text-dark"
                    href="https://x.com/mijoghofficial?s=11&t=fDCnd4rreXB_uIJWAyJIqA"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition-transform transform hover:-translate-y-1 hover:text-dark"
                    href="https://www.facebook.com/share/1DPUc2WJux/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.5 10H21V6h-2.5C15.462 6 13 8.462 13 11.5V14H10v4h3v8h4v-8h3l1-4h-4v-2.5c0-.828.672-1.5 1.5-1.5z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition-transform transform hover:-translate-y-1 hover:text-dark"
                    href="https://www.instagram.com/mijo_on_ghanapostgps?igsh=dGpmNXNmdW1sMjlw"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 11a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 16 12.8a3.2 3.2 0 0 1 0 6.4ZM22 10.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"></path>
                      <path d="M24 8c-1.1-1.1-2.6-1.7-4.3-1.7H12.3C10.6 6.3 9.1 6.9 8 8c-1.1 1.1-1.7 2.6-1.7 4.3v7.4c0 1.7.6 3.2 1.7 4.3 1.1 1.1 2.6 1.7 4.3 1.7h7.4c1.7 0 3.2-.6 4.3-1.7 1.1-1.1 1.7-2.6 1.7-4.3v-7.4c0-1.7-.6-3.2-1.7-4.3Zm-.7 11.7c0 1.2-.4 2.2-1.2 3-.8.8-1.8 1.2-3 1.2h-7.4c-1.2 0-2.2-.4-3-1.2-.8-.8-1.2-1.8-1.2-3v-7.4c0-1.2.4-2.2 1.2-3 .8-.8 1.8-1.2 3-1.2h7.4c1.2 0 2.2.4 3 1.2.8.8 1.2 1.8 1.2 3v7.4Z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-primary transition-transform transform hover:-translate-y-1 hover:text-dark"
                    href="https://www.tiktok.com/@mijo_on_ghanapostgps?_r=1&_t=ZS-95bzi9UC40a"
                    target="_blank"
                    aria-label="TikTok"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.5 6c.3 1.8 1.5 3.3 3.3 3.8v3.1c-1.3 0-2.6-.4-3.7-1.1v6.3c0 3.6-2.9 6.4-6.5 6.4S8 21.7 8 18.1s2.9-6.4 6.5-6.4c.4 0 .8 0 1.2.1v3.3c-.4-.1-.8-.2-1.2-.2-1.7 0-3.1 1.4-3.1 3.2s1.4 3.2 3.1 3.2 3.1-1.4 3.1-3.2V6h3.9Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
            <div className="text-sm text-white">
              &copy; {year} Powered by{" "}
              <span className="text-secondary font-bold">
                {" "}
                Afrifanom Limited
              </span>{" "}
              - All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
