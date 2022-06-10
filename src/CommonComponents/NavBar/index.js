import React, { useState } from "react";
import Dashboard from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import AppBar from "@mui/material/AppBar";

import { NavBarWrapper } from "./NavBarStyle";
import { StyledMenu } from "../../Constants/Helpers";
import { NAVBAR_DROPDOWN_BUTTONS } from "../../Constants/Consts";

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavBarWrapper>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <div className="main-container flex f-v-center">
          <div className="navbar-title-container hover flex f-v-center">
            <Dashboard className="navbar-icon" />
            <p className="navbar-title">{"My Trello"}</p>
          </div>

          {NAVBAR_DROPDOWN_BUTTONS.map((item) => (
            <div className="navbar-drpd-container">
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className="navbar-drpd-btn">
                {item.btnTitle}
              </Button>

              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {item.drpOptions.map((option) => (
                  <MenuItem onClick={handleClose} disableRipple>
                    {option.icon}

                    {option.optionTitle}
                  </MenuItem>
                ))}
              </StyledMenu>
            </div>
          ))}
        </div>
      </AppBar>
    </NavBarWrapper>
  );
};

export default NavBar;
