import React, { useState } from "react";
import Box from "@mui/material/Box";

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
    <div className="App">
      <div style={{ flex: 1 }}>
        <UtilityStyles />
        <NavBar />
        <Box sx={{ display: "flex" }}>
          <SideMenu open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

          <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: 1 }}>
            <Navigation />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;
