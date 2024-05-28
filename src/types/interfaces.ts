import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

interface ILayer {
  id: string;
  title: string;
  url: string;
  type: string;
}

interface IUseMapProps {
  baseLayers: ILayer[];
  operationalLayers: ILayer[];
  viewProps: any;
  mapViewRef: any;
}

interface IMapContext {
  map: Map | null;
  view: MapView | null;
  mapLoading: boolean;
  loadMapErrors: any;
  mapViewRef: any;
}

export type { IUseMapProps, ILayer, IMapContext };
