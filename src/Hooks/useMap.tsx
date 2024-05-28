import { useEffect, useState, useCallback } from "react";
import { IUseMapProps } from "../types/interfaces";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { createLayer } from "../helpers/mapHelpers";
import Basemap from "@arcgis/core/Basemap";
import Layer from "@arcgis/core/layers/Layer";

const useMap = (props: IUseMapProps) => {
  const { baseLayers, operationalLayers, viewProps, mapViewRef } = props;
  const [map, setMap] = useState<Map | null>(null);
  const [view, setView] = useState<MapView | null>(null);
  const [mapLoading, setMapLoading] = useState(true);
  const [loadMapErrors, setLoadMapErrors] = useState<string[]>([]);

  const handleErrors = useCallback((message: string, error: any) => {
    console.error(message, error);
    setLoadMapErrors((prevErrors) => {
      const uniqueErrors = new Set([...prevErrors, message]);
      return Array.from(uniqueErrors);
    });
  }, []);

  const loadLayers = useCallback(
    async (layersConfig: any[], errorMessage: string) => {
      const layers = layersConfig.map(createLayer);
      try {
        await Promise.all(layers.map((layer) => layer?.load()));
        return layers as Layer[];
      } catch (error) {
        handleErrors(errorMessage, error);
        throw error;
      }
    },
    []
  );

  const initBasemap = useCallback((_baseLayers: Layer[]) => {
    return new Basemap({
      baseLayers: _baseLayers,
    });
  }, []);

  const initMap = useCallback(
    (_basemap: Basemap, _operationalLayers: Layer[]) => {
      const mapInstance = new Map({
        basemap: _basemap,
        layers: _operationalLayers,
      });
      setMap(mapInstance);
      return mapInstance;
    },
    []
  );

  const initMapView = useCallback(
    async (_map: Map) => {
      const viewInstance = new MapView({
        map: _map,
        ...viewProps,
        container: mapViewRef.current,
      });

      await viewInstance.when();
      setView(viewInstance);
    },
    [mapViewRef, viewProps]
  );

  const init = useCallback(async () => {
    setMapLoading(true);
    if (!mapViewRef.current) return;

    try {
      const _baseLayers = await loadLayers(
        baseLayers,
        "Failed to load base layers"
      );
      const _operationalLayers = await loadLayers(
        operationalLayers,
        "Failed to load operational layers"
      );
      const _basemap = initBasemap(_baseLayers);
      const _map = await initMap(_basemap, _operationalLayers);
      await initMapView(_map);
    } catch (error) {
      handleErrors("Failed to load map", error);
    } finally {
      setMapLoading(false);
    }
  }, [
    baseLayers,
    operationalLayers,
    loadLayers,
    initBasemap,
    initMap,
    initMapView,
    handleErrors,
    mapViewRef,
  ]);

  useEffect(() => {
    init();

    return () => {
      view?.destroy();
    };
  }, []);

  return { map, view, mapLoading, loadMapErrors };
};

export default useMap;
