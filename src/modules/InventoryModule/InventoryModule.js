import React from "react";
import { Route, Routes } from "react-router-dom";

const CameraListPage = React.lazy(() =>
  import("./pages/CameraListPage/CameraListPage")
);
const CameraTypeListPage = React.lazy(() =>
  import("./pages/CameraTypeListPage/CameraTypeListPage")
);
const InventoryPage = React.lazy(() =>
  import("./pages/InventoryPage/InventoryPage")
);

const InventoryModule = () => {
  return (
    <Routes>
      <Route path="/" element={<InventoryPage />} />
      <Route path="/cameras" element={<CameraListPage />} />
      <Route path="/camera-types" element={<CameraTypeListPage />} />
    </Routes>
  );
};

export default InventoryModule;
