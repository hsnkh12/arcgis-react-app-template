window.env = {
  esri: {
    proxyRules: [
      {
        urlPrefix: "https://gis.openware.com.kw/server11",
        proxyUrl: "http://localhost/proxy/proxy.ashx",
      },
      {
        urlPrefix: "https://gis.openware.com.kw/stgserver",
        proxyUrl: "http://localhost/proxy/proxy.ashx",
      },
      {
        urlPrefix: "https://gis.openware.com.kw/server",
        proxyUrl: "http://localhost/proxy/proxy.ashx",
      },
      {
        urlPrefix: "https://dev.openware.com.kw/server",
        proxyUrl: "http://localhost/proxy/proxy.ashx",
      },
    ],
    map: {
      baseLayers: [
        {
          id: "base-layer-topo-vector",
          title: "Topo Vector Layer",
          type: "VECTOR-TILE",
          url: "https://www.arcgis.com/sharing/rest/content/items/8a2cba3b0ebf4140b7c0dc5ee149549a/resources/styles/root.json",
        },
        {
          id: "knpc-base-layer-satellite-map",
          title: "KNPC Satellite Map",
          type: "MAP-IMAGE",
          url: "https://dev.openware.com.kw/server/rest/services/KNPCVIDS/SatelliteMap/MapServer",
        },
      ],
      operationalLayers: [
        // {
        //   id: "knpc-maa-map",
        //   title: "KNPC MAA Map",
        //   type: "MAP-IMAGE",
        //   url: "https://dev.openware.com.kw/server/rest/services/KNPCVIDS/MAA/MapServer",
        // },
        {
          id: "knpc-maab-map",
          title: "KNPC MAAB Map",
          type: "MAP-IMAGE",
          url: "https://dev.openware.com.kw/server/rest/services/KNPCVIDS/MAAB/MapServer",
        },
      ],
      tools: [],
      viewProps: {
        scale: 10000,
        center: [48.1325593, 29.048436],
        constraints: {
          maxScale: 4513,
          rotationEnabled: true,
        },
      },
    },
  },
};
