import React, { useState } from "react";

import Navbar from "./components/Navbar.jsx";
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
    case "contact":
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar setRoute={setRoute} />
      <main className="overflow-x-hidden">{renderRoute()}</main>
    </div>
  );
}

// export default function App() {
//   const [route, setRoute] = useState("home");

//   const renderRoute = () => {
//         return <Home />;
//   };

//   return (
//     <div>
//       <main>{renderRoute()}</main>
//     </div>
//   );
// }