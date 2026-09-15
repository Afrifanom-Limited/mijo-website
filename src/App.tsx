import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// import ComingSoonBanner from "./pages/components/ComingSoonBanner";
// import PromoPopupController from "./components/common/PromoPopup";
import { useLocation, scrollToHashOnLoad } from "./router";

function App() {
  // const [showBanner, setShowBanner] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!scrollToHashOnLoad()) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* {showBanner && (
        <ComingSoonBanner onDismiss={() => setShowBanner(false)} />
      )} */}
      {/* <Header topOffset={showBanner ? 40 : 0} /> */}
      <Header topOffset={0} />
      {/* <PromoPopupController /> */}
      <div
        // className={`transition-all duration-300 ${showBanner ? "pt-10" : ""}`}
        className={`transition-all duration-300`}
        id="top"
      >
        {pathname === "/terms" ? (
          <TermsOfService />
        ) : pathname === "/privacy" ? (
          <PrivacyPolicy />
        ) : (
          <LandingPage />
        )}
        <Footer />
      </div>
      <button
        onClick={() => scrollToSection("top")}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none cursor-pointer ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
