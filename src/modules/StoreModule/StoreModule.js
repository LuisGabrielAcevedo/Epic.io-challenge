import React from "react";
import { Route, Routes } from "react-router-dom";

const StorePage = React.lazy(() => import("./pages/StorePage/StorePage"));

const StoreModule = () => {
  return (
    <Routes>
      <Route path="/" element={<StorePage />} />
    </Routes>
  );
};

export default StoreModule;
