import React, { useState } from "react";

import Home from "./pages/home/Home.jsx";
import AboutPage from "./pages/about_page/about_page.jsx";
import DonationPage from "./pages/donation_page/donation_page.jsx";
import ImpactPage from "./pages/impact_page/impact_page.jsx";

export default function App() {
  const [route, setRoute] = useState("home");

  const renderRoute = () => {
    switch (route) {
      case "home":
        return <Home />;
      case "about":
        return <AboutPage />;
      case "donation":
        return <DonationPage />;
      case "impact":
        return <ImpactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header style={{ padding: 12, borderBottom: "1px solid #eee" }}>
        <nav style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setRoute("home")}>Home</button>
          <button onClick={() => setRoute("about")}>About</button>
          <button onClick={() => setRoute("donation")}>Donation</button>
          <button onClick={() => setRoute("impact")}>Impact</button>
        </nav>
      </header>
      <main style={{ padding: 16 }}>{renderRoute()}</main>
    </div>
  );
}
