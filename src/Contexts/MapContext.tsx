import { createContext, useContext, useEffect, useRef, useState } from "react";
import useMap from "../Hooks/useMap";
import { IMapContext } from "../types/interfaces";
import { useToast } from "./ToastContext";

const MapContext = createContext<IMapContext | null>(null);

const MapContextProvider = ({ children }: { children: any }) => {
  const mapViewRef = useRef<HTMLDivElement>(null);
  const { map, view, mapLoading, loadMapErrors } = useMap({
    baseLayers: window.env.esri.map.baseLayers,
    operationalLayers: window.env.esri.map.operationalLayers,
    viewProps: window.env.esri.map.viewProps,
    mapViewRef,
  });

  const { addToast } = useToast();
  useEffect(() => {
    if (loadMapErrors.length === 0) return;
    loadMapErrors.forEach((error) => {
      console.log(error)
      addToast("error", error);
    });
  }, [loadMapErrors]);

  return (
    <MapContext.Provider
      value={{ map, view, mapLoading, loadMapErrors, mapViewRef }}
    >
      {children}
    </MapContext.Provider>
  );
};

const useMapContext = () => {
  let context = useContext(MapContext);

  if (!context) throw new Error("MapContext was used outside of its Provider");

  return context;
};

export { useMapContext, MapContextProvider };
