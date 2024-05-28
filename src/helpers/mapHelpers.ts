import { LAYER_TYPES } from "../constants/layerTypes";
import { ILayer } from "../types/interfaces";
import TileLayer from "@arcgis/core/layers/TileLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

const createLayer = (layer: ILayer) => {
  switch (layer.type.toUpperCase()) {
    case LAYER_TYPES.TILE:
      return new TileLayer({
        id: layer.id,
        url: layer.url,
        title: layer.title,
      });
    case LAYER_TYPES.VECTOR_TILE:
      return new VectorTileLayer({
        id: layer.id,
        url: layer.url,
        title: layer.title,
      });
    case LAYER_TYPES.MAP_IMAGE:
      return new MapImageLayer({
        id: layer.id,
        url: layer.url,
        title: layer.title,
      });
    default:
      break;
  }
};

export { createLayer };
