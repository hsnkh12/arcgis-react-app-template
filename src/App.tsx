import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomeScreen from "./Screens/Home/HomeScreen";
import MapScreen from "./Screens/Map/MapScreen";
import { MapContextProvider } from "./Contexts/MapContext";
import { ToastProvider } from "./Contexts/ToastContext";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <BrowserRouter>
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
    </div>
  );
}

export default App;
