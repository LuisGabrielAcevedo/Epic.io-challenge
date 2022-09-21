import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Loading, MainBarLayout } from "./components";

const InventoryModule = React.lazy(() =>
  import("./modules/InventoryModule/InventoryModule")
);
const HomeModule = React.lazy(() => import("./modules/HomeModule/HomeModule"));
const StoreModule = React.lazy(() =>
  import("./modules/StoreModule/StoreModule")
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <MainBarLayout>
          <Routes>
            <Route path="/home" element={<HomeModule />} />
            <Route path="/inventory/*" element={<InventoryModule />} />
            <Route path="/store/*" element={<StoreModule />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </MainBarLayout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
