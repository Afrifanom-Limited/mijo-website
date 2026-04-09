import { useState, useEffect } from "react";
import { X } from "lucide-react";

const LAUNCH_DATE = new Date("2026-05-01T00:00:00");

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const ComingSoonBanner = ({ onDismiss }: { onDismiss: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-60 bg-primary text-white text-sm flex items-center justify-center h-10 px-4 gap-4">
      {timeLeft ? (
        <>
          <span className="hidden sm:inline font-medium">
            Mijo is launching in:
          </span>
          <span className="font-mono font-semibold tracking-wide text-secondary">
            {timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m{" "}
            {pad(timeLeft.seconds)}s
          </span>
          <span className="hidden sm:inline text-white/70">
            — Be the first to ride.
          </span>
        </>
      ) : (
        <>
          <span className="text-secondary font-bold">🎉 We're Live!</span>
          <span className="hidden sm:inline text-white/80">
            Mijo is now available — download the app today.
          </span>
        </>
      )}

      <button
        onClick={onDismiss}
        className="absolute right-4 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Dismiss banner"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default ComingSoonBanner;
