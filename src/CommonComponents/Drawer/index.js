import React from "react";
import { NavBarWrapper } from "./DrawerStyle";
import Dashboard from "@mui/icons-material/Dashboard";

const Drawer = () => {
  return (
    <NavBarWrapper>
      <div className="main-container flex">
        <Dashboard className="navbar-icon" />
        <p className="navbar-title">{"My Trello"}</p>
      </div>
    </NavBarWrapper>
  );
};

export default Drawer;
