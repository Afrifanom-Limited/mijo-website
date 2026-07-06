import { useEffect, useState } from "react";

export const navigate = (path: string) => {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export const useLocation = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onChange = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  return pathname;
};

export const goToSection = (id: string) => {
  const scroll = () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (window.location.pathname === "/") {
    scroll();
    return;
  }

  navigate("/");
  let attempts = 0;
  const tryScroll = () => {
    if (document.getElementById(id)) {
      scroll();
    } else if (attempts++ < 20) {
      requestAnimationFrame(tryScroll);
    }
  };
  requestAnimationFrame(tryScroll);
};
