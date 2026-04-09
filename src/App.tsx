import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import ComingSoonBanner from "./pages/components/ComingSoonBanner";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && <ComingSoonBanner onDismiss={() => setShowBanner(false)} />}
      <Header topOffset={showBanner ? 40 : 0} />
      <div className={`transition-all duration-300 ${showBanner ? "pt-10" : ""}`}>
        <LandingPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
