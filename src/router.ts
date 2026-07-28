import { useEffect, useState } from "react";

export const navigate = (path: string) => {
  const samePath = window.location.pathname === path;
  if (samePath && !window.location.hash) return;

  window.history.pushState({}, "", path);

  if (samePath) {
    // Pathname didn't change (only the hash did), so useLocation's popstate
    // listener won't trigger a re-render/scroll — handle it here instead.
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
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

const waitForElementAndScroll = (id: string, behavior: ScrollBehavior = "smooth") => {
  let attempts = 0;
  const tryScroll = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior });
    } else if (attempts++ < 20) {
      requestAnimationFrame(tryScroll);
    }
  };
  requestAnimationFrame(tryScroll);
};

export const goToSection = (id: string) => {
  navigateToSection("/", id);
};

export const navigateToSection = (path: string, id: string) => {
  const updateHash = () => {
    window.history.replaceState({}, "", `${path}#${id}`);
  };

  if (window.location.pathname === path) {
    waitForElementAndScroll(id);
    updateHash();
    return;
  }

  navigate(path);
  updateHash();
  waitForElementAndScroll(id);
};

// Scrolls to the section named in the URL hash (e.g. /#partners) on initial load.
// Returns true if a hash was present, so callers can fall back to scrolling to top otherwise.
export const scrollToHashOnLoad = () => {
  const id = window.location.hash.slice(1);
  if (!id) return false;
  waitForElementAndScroll(id, "auto");
  return true;
};
