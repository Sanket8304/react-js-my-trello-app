import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// COMPONENTS
import DashBoard from "../Screens/DashBoard";
import Workspaces from "../Screens/Workspaces";

import { URL_DASHBOARD, URL_WORKSPACES } from "../Constants/Paths";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={URL_DASHBOARD} element={<DashBoard />} />
        <Route path={URL_WORKSPACES} element={<Workspaces />} />
        <Route path="*" element={<Navigate replace to={URL_DASHBOARD} />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
