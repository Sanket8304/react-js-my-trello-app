import styled from "styled-components";

export const NavBarWrapper = styled.div`
  .main-container {
    padding: 10px;
    background-color: #375adb;
    height: 50px;

    .navbar-title-container {
      flex: 1;
    }

    .navbar-title {
      color: #ffff;
      font-weight: 700;
      font-size: 23px;
      padding: 5px;
      border-radius: 3px;
    }
    .navbar-title:hover {
      background-color: #118ff0;
    }

    .navbar-icon {
      color: #fff;
      margin-right: 10px;
    }

    .navbar-drpd-container {
      margin-left: 5px;
    }

    .navbar-drpd-btn {
      height: 30px;
      background-color: transparent;
      font-size: 12px;
    }
    Button:hover {
      background-color: #118ff0;
    }
  }
`;
