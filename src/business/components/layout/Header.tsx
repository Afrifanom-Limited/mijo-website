import { useState } from "react";
import Logo from "../common/Logo";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";
import { navigateToSection, navigate, useLocation } from "../../../router";

const navItems = [
  { label: "VaMijo Fleet", path: "/business/fleet" },
  { label: "Vendor Portal", path: "/business/vendor" },
  { label: "Vendor API", path: "/business/developer" },
];

const darkHeroPaths = ["/business", "/business/fleet"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation();
  const isDarkHero = darkHeroPaths.includes(pathname);
  const handleScroll = (id: string) => {
    navigateToSection("/business", id);
    setOpen(false);
  };

  return (
    <header className="fixed left-0 w-full backdrop-blur-lg z-50 transition-all duration-300">
      <div className="max-w-8xl mx-auto px-4 lg:px-24 py-3 flex items-center justify-between">
        <div className="flex-1/5 flex gap-2">
          <Logo width={45} onClick={() => navigate("/")} />
          <span
            className={`w-px shrink-0 self-stretch rounded-lg ${
              isDarkHero ? "bg-white" : "bg-primary/30"
            }`}
          ></span>
          <p
            className={`text-8 md:text-[30px] my-auto cursor-pointer ${
              isDarkHero ? "text-white" : "text-primary"
            }`}
            onClick={() => navigate("/business")}
          >
            Business
          </p>
        </div>
        <div className="hidden md:flex md:flex-3/5 justify-center">
          <nav className="hidden md:flex bg-white rounded-full px-6 py-2">
            <ul className="flex items-center gap-6 text-gray-500 text-sm font-medium">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`cursor-pointer hover:text-primary ${
                    pathname === item.path ? "text-dark font-semibold" : ""
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex justify-end flex-1/5">
          <Button
            onClick={() => handleScroll("business-contact")}
            text="Contact Sales"
          />
        </div>
        <button
          className={`md:hidden ${isDarkHero ? "text-white" : "text-primary"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-500 text-sm font-medium">
            {navItems.map((item) => (
              <li
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className={`cursor-pointer hover:text-primary ${
                  pathname === item.path ? "text-dark font-semibold" : ""
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
