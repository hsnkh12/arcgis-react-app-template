import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Locate from "@arcgis/core/widgets/Locate";
import Search from "@arcgis/core/widgets/Search";
import CustomWidget from "../../Components/Widgets/CustomWidget";
import ReactDOM from "react-dom";

const MapViewSection = (props: any) => {
  const { mapView, setMapView } = props;
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initMap = () => {
    if (!mapRef.current) return;

    const webMap = new Map({
      basemap: "topo-vector",
    });

    const viewInfo = {
      container: mapRef.current,
      map: webMap,
      center: [39, 34],
      zoom: 5,
    };

    const view = new MapView(viewInfo);

    const locateWidget = new Locate({
      view,
      goToOverride: (view, options) => {
        options.target.scale = 1500;
        return view.goTo(options.target);
      },
    });
    const search = new Search({
      view,
    });

    const customWidgetElement = document.createElement("div");
    ReactDOM.render(<CustomWidget mapView={view} />, customWidgetElement);

    view.ui.add(customWidgetElement, "top-right");
    view.ui.add(locateWidget, "top-left");
    view.ui.add(search, "top-right");
    setMapView(view);
  };

  useEffect(() => {
    initMap();

    return () => {
      mapView && mapView.destroy();
    };
  }, []);

  return (
    <div
      className="mapDiv col-span-5"
      ref={mapRef}
      style={{ height: "100vh", width: "100%" }}
    ></div>
  );
};

export default MapViewSection;
