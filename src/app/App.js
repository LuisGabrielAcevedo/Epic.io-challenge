import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "src/components";
import MainBarLayout from "./components/MainBarLayout/MainBarLayout";

const InventoryModule = React.lazy(() =>
  import("src/modules/InventoryModule/InventoryModule")
);
const HomeModule = React.lazy(() =>
  import("src/modules/HomeModule/HomeModule")
);
const StoreModule = React.lazy(() =>
  import("src/modules/StoreModule/StoreModule")
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
