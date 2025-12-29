import BISFM from "@/components/pages/service-pages/bisfm/bisfm";
import React from "react";
import { Route } from "react-router-dom";

const BISFMPagesRoutes = () => {
  return (
    <>
      <Route
        path="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
        element={<BISFM />}
      />
    </>
  );
};

export default BISFMPagesRoutes;
