import { SocialMediaLinks } from "../../../utils";
import Logo from "../common/Logo";
import { navigate, navigateToSection } from "../../../router";

const Footer = () => {
  const year = new Date().getFullYear();
  const handleScroll = (id: string) => {
    navigateToSection("/business", id);
  };

  return (
    <footer className="">
      <div className="bg-[#E6F4F9]">
        <div className="max-w-8xl mx-auto px-4 lg:px-24">
          <div className="py-8 md:py-12 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] flex flex-col gap-4 lg:flex-row lg:gap-0 lg:items-center lg:justify-between">
            <div className="">
              <div>
                <Logo width={60} />
              </div>
            </div>

            <div className="">
              <ul className="space-y-2 text-sm flex gap-4">
                <li>
                  <a
                    className="cursor-pointer text-gray-600 transition hover:text-gray-900 hover:underline"
                    onClick={() => {
                      handleScroll("hero");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-600 transition hover:text-gray-900 hover:underline"
                    onClick={() => {
                      handleScroll("fleet-section");
                    }}
                  >
                    Fleet
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-600 transition hover:text-gray-900 hover:underline"
                    onClick={() => {
                      handleScroll("developer-section");
                    }}
                  >
                    Vendor API
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-600 transition hover:text-gray-900 hover:underline"
                    onClick={() => {
                      handleScroll("vendor-section");
                    }}
                  >
                    Vendor Portal
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center transition-transform transform hover:-translate-y-1  hover:text-primary"
                    href={SocialMediaLinks.TWITTER}
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
                    className="flex items-center justify-center transition-transform transform hover:-translate-y-1 hover:text-primary"
                    href={SocialMediaLinks.FACEBOOK}
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
                    className="flex items-center justify-center transition-transform transform hover:-translate-y-1 hover:text-primary"
                    href={SocialMediaLinks.INSTAGRAM}
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
                    className="flex items-center justify-center transition-transform transform hover:-translate-y-1 hover:text-primary"
                    href={SocialMediaLinks.TIKTOK}
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
                <li>
                  <a
                    className="flex items-center justify-center transition-transform transform hover:-translate-y-1 hover:text-primary"
                    href={SocialMediaLinks.TIKTOK}
                    target="_blank"
                    aria-label="TikTok"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12C0 8.083 0 12 0 12s0 3.917.502 5.814a2.997 2.997 0 0 0 2.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12C24 15.917 24 12 24 12s0-3.917-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <div className="mx-auto max-w-8xl px-4 lg:px-24">
            <div className="border-t border-black sm:px-6 py-4 flex flex-col lg:flex-row gap-2 lg:gap-8 justify-center">
              <span className="">
                &copy; {year} Powered by Afrifanom Limited - All rights reserved
              </span>
              <a
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/terms");
                }}
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/privacy");
                }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
