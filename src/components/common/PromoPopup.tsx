import { useEffect, useState } from "react";
import comingsoon from "../../assets/comingsoon.jpeg";

interface PromoPopupProps {
  onClose: () => void;
}

const PromoPopup = ({ onClose }: PromoPopupProps) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-105 transition-all duration-200 text-gray-600 hover:text-gray-900 cursor-pointer"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex items-center justify-center">
          <img
            src={comingsoon}
            alt="Mijo promo"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const SESSION_KEY = "promo_popup_shown";

const PromoPopupController = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasParams = window.location.search.length > 0;
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (!hasParams && !alreadyShown) {
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;
  return <PromoPopup onClose={() => setVisible(false)} />;
};

export default PromoPopupController;
