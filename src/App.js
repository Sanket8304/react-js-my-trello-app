import React, { useState } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import NavBar from "./CommonComponents/NavBar";
import SideMenu from "./CommonComponents/SideMenu";
import { UtilityStyles } from "./Constants/Style";
import Navigation from "./Navigation";

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App .full-width">
      <div style={{ flex: 1 }}>
        <Router>
          <UtilityStyles />
          <NavBar />
          <Box sx={{ display: "flex" }}>
            <SideMenu open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

            <Box component="main" sx={{ flex: 1, width: "98vw", height: "100vw" }}>
              <div
                className="dashboard-main-container .full-width"
                style={{
                  left: open ? "230px" : "55px",
                }}>
                <Navigation />
              </div>
            </Box>
          </Box>
        </Router>
      </div>
    </div>
  );
}

export default App;
