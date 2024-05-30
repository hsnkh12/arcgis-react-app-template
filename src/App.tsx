import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomeScreen from "./Screens/Home/HomeScreen";
import MapScreen from "./Screens/Map/MapScreen";
import { MapContextProvider } from "./Contexts/MapContext";
import { ToastProvider } from "./Contexts/ToastContext";
import { ColorThemeProvider } from "./Contexts/ColorThemeContext";

function App() {
  return (
    <div className="App">
      <ColorThemeProvider>
        <ToastProvider>
          <BrowserRouter basename={window.env.host.virtualPath}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="map"
                element={
                  <MapContextProvider>
                    <MapScreen />
                  </MapContextProvider>
                }
              />
              <Route
                path="*"
                element={
                  <div>
                    <h1>Not Found</h1>
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </ColorThemeProvider>
    </div>
  );
}

export default App;
