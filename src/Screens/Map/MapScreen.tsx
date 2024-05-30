import { useEffect, useState } from "react";
import MapViewSection from "../../Sections/Map/MapView";
import AppFloatingPanel from "../../Components/Panel/AppFloatingPanel";
import AppBottomNavigation from "../../Components/Navigation/AppBottomNavigation";
import ScreenPanel from "../../Components/ScreenPanel/ScreenPanel";
import AppBottomSheet from "../../Components/Navigation/AppBottomSheet";
import Navbar from "../../Components/Navbar/Navbar";
import { useTranslation } from "react-i18next";

const MapScreen = () => {
  const { t } = useTranslation();
  const panelScreens = [
    {
      label: t("panel@dashboard"),
      value: "dashboard",
      icon: (
        <svg
          className="w-5 h-5 mb-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
      ),
      component: `Dashboard screen`,
    },
    {
      label: t("panel@profile"),
      value: "profile",
      icon: (
        <svg
          className="w-5 h-5 mb-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      ),
      component: `Profile screen`,
    },
    {
      label: t("panel@settings"),
      value: "settings",
      icon: (
        <svg
          className="w-5 h-5 mb-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
          />
        </svg>
      ),
      component: `Settings screen`,
    },
  ];

  const [currentScreen, setCurrentScreen] = useState("dashboard");

  return (
    <div>
      <Navbar />
      {/* IF SCREEN IS BIG  */}
      {window.innerWidth > 600 && (
        <AppFloatingPanel>
          <ScreenPanel currentScreen={currentScreen} screens={panelScreens} />
          <AppBottomNavigation
            screens={panelScreens}
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
          />
        </AppFloatingPanel>
      )}

      <MapViewSection />
      {/* IF SCREEN IS SMALL */}
      {window.innerWidth <= 600 && (
        <AppBottomSheet>
          <ScreenPanel currentScreen={currentScreen} screens={panelScreens} />
          <AppBottomNavigation
            screens={panelScreens}
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
          />
        </AppBottomSheet>
      )}
    </div>
  );
};

export default MapScreen;
