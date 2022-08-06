import styled from "styled-components";

export const CardBoardWrapper = styled.div`
  .card-board {
    background-color: #ebecf0;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
  }

  .card-header {
    padding: 9px 11px 0px 11px;
    margin-right: inherit;
  }

  .edit-manu {
    position: absolute;
    min-width: 100px;
    background: white;
    border-radius: 3px;
    margin-left: 252px;
    margin-top: 22px;
    z-index: 1;
    box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  }

  .card-edit-manu {
    position: absolute;
    min-width: 100px;
    background: white;
    border-radius: 3px;
    margin-left: 237px;
    margin-top: -36px;
    z-index: 1;
    box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  }

  .manu-item {
    display: flex;
    align-items: center;
    padding-inline: 15px;
  }

  .manu-text {
    margin-left: 10px;
  }

  .card-list {
    ::-webkit-scrollbar {
      height: 10px;
      width: 0px;
    }

    ::-webkit-scrollbar-thumb:vertical {
      background: rgb(184, 182, 182);
      border-radius: 10px;
    }
  }

  .card-title {
    margin-bottom: 0;
  }
`;
