import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@arcgis/core/assets/esri/themes/light/main.css";
import * as urlUtils from "@arcgis/core/core/urlUtils.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./lib/i18n"
declare global {
  interface Window {
    env: any;
  }
}

window.env.esri.proxyRules.map((rule: any) =>
  urlUtils.addProxyRule({ ...rule })
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
