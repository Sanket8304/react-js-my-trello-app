import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  .dashboard-main-container {
    display: flex;
    padding: 25px;
    background-color: #80c8f2;
    height: 100vh;
    position: absolute;
    width: 100vw;
    top: 50px;
  }

  .add-list {
    height: 95px;
    border-radius: 5px;
    background-color: white;
  }

  .add-list-btn {
    height: 30px;
    color: white;
    background-color: rgba(252, 252, 252, 0.1);
  }
  .add-list-btn:hover {
    background-color: rgba(252, 252, 252, 0.2);
  }
`;
