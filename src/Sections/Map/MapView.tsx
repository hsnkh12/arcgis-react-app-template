import { memo, useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Locate from "@arcgis/core/widgets/Locate";
import Search from "@arcgis/core/widgets/Search";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import LayerList from "@arcgis/core/widgets/LayerList";
import { useMapContext } from "../../Contexts/MapContext";
import { FullScreenLoading } from "../../Components/Loading/FullScreenLoading";
import { useToast } from "../../Contexts/ToastContext";

const MapViewSection = (props: any) => {
  const { map, view, mapLoading, loadMapErrors, mapViewRef } = useMapContext();
  

  return (
    <div>
      {mapLoading && <FullScreenLoading />}
      <div
        className="map-view-main col-span-5"
        ref={mapViewRef}
        style={{ height: "100vh", width: "100%" }}
      ></div>
    </div>
  );
};

export default memo(MapViewSection);
