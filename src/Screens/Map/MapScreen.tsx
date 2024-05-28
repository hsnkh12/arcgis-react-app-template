import { useEffect, useState } from "react";
import MapViewSection from "../../Sections/Map/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import MapView from "@arcgis/core/views/MapView";
import { useToast } from "../../Contexts/ToastContext";

const MapScreen = () => {
  return (
    <div>
      <MapViewSection  />
    </div>
  );
};

export default MapScreen;
