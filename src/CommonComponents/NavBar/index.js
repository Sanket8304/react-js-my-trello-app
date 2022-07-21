import React, { useState } from "react";
import Dashboard from "@mui/icons-material/Dashboard";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";

import { NavBarWrapper } from "./NavBarStyle";
import { StyledMenu } from "../../Constants/Helpers";
import { NAVBAR_DROPDOWN_BUTTONS } from "../../Constants/Consts";
import { URL_DASHBOARD } from "../../Constants/Paths";

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [btnName, setBtnName] = useState(undefined);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setBtnName(event.target.id);
    console.log(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavBarWrapper>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <div className="main-container flex f-v-center">
          <RouterLink to={URL_DASHBOARD} style={{ textDecoration: "none", color: "black" }}>
            <div className="navbar-title-container hover flex f-v-center">
              <Dashboard className="navbar-icon" />
              <p className="navbar-title">{"My Trello"}</p>
            </div>
          </RouterLink>

          {NAVBAR_DROPDOWN_BUTTONS.map((item) => (
            <div key={item.id} className="navbar-drpd-container">
              <div id={item.btnTitle} onClick={handleClick}>
                <Button
                  id={item.btnTitle}
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  // endIcon={<KeyboardArrowDownIcon id={item.btnTitle} />}
                  className="navbar-drpd-btn">
                  {item.btnTitle}
                </Button>
              </div>

              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={btnName === item.btnTitle ? open : false}
                onClose={handleClose}>
                {item &&
                  item[btnName] &&
                  item[btnName].map((option) => (
                    <RouterLink to={option.url} style={{ textDecoration: "none", color: "black" }}>
                      <MenuItem key={option.id} onClick={handleClose} disableRipple>
                        {option.icon}
                        {option.optionTitle}
                      </MenuItem>
                    </RouterLink>
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
