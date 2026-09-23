import { useState } from "react";
import Logo from "../common/Logo";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";
import { navigateToSection, navigate } from "../../../router";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleScroll = (id: string) => {
    navigateToSection("/business", id);
    setOpen(false);
  };

  return (
    <header className="fixed left-0 w-full backdrop-blur-lg z-50 transition-all duration-300">
      <div className="max-w-8xl mx-auto px-4 lg:px-24 py-3 flex items-center justify-between">
        {/* <div className="max-w-8xl mx-auto px-4 lg:px-24 py-3 flex items-center justify-between bg-red-500 sm:bg-yellow-500 md:bg-black-500 lg:bg-green-500 xl:bg-purple-500"> */}
        <div className="flex-1/5 flex gap-2">
          <Logo width={45} onClick={() => navigate("/")} />
          <span className="bg-white w-px shrink-0 self-stretch rounded-lg"></span>
          <p
            className="text-primary text-8 md:text-[30px] my-auto cursor-pointer"
            onClick={() => navigate("/business")}
          >
            Business
          </p>
        </div>
        <div className="hidden md:flex md:flex-3/5 justify-center">
          <nav className="hidden md:flex bg-white rounded-full px-6 py-2">
            <ul className="flex items-center gap-6 text-gray-700 text-sm font-medium">
              <li
                onClick={() => navigate("/business/fleet")}
                className="cursor-pointer hover:text-primary"
              >
                VaMijo Fleet
              </li>
              <li
                onClick={() => navigate("/business/developer")}
                className="cursor-pointer hover:text-primary"
              >
                Vendor API
              </li>
              <li
                onClick={() => navigate("/business/vendor")}
                className="cursor-pointer hover:text-primary"
              >
                Vendor Portal
              </li>
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
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700 text-sm font-medium">
            <li
              onClick={() => {
                navigate("/business/fleet");
                setOpen(false);
              }}
              className="cursor-pointer hover:text-primary"
            >
              VaMijo Fleet
            </li>
            <li
              onClick={() => {
                navigate("/business/developer");
                setOpen(false);
              }}
              className="cursor-pointer hover:text-primary"
            >
              Vendor API
            </li>
            <li
              onClick={() => {
                navigate("/business/vendor");
                setOpen(false);
              }}
              className="cursor-pointer hover:text-primary"
            >
              Vendor Portal
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
