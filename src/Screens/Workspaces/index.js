import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { CardContent, Button, CardActions } from "@mui/material";

import { DashBoardWrapper } from "./WorkspacesStyle";
import CardBoard from "../../CommonComponents/CardBoard";

const Workspaces = () => {
  const [cardBoards, setCardBoards] = useState([]);
  const [isAddList, setIsAddList] = useState(false);
  const [listName, setListName] = useState(undefined);
  const [cardName, setCardName] = useState(undefined);

  const handleAddList = () => {
    const list = {
      title: listName,
      isAddCard: false,
      cardList: [],
    };

    setCardBoards([...cardBoards, list]);
    setIsAddList(false);
    setListName(undefined);
  };

  const handleAddCards = (index) => {
    let updatedCardBoards = JSON.parse(JSON.stringify(cardBoards));

    const card = {
      cardTitle: cardName,
    };

    updatedCardBoards.map((item, idx) => {
      if (idx === index) {
        item.cardList = [...item.cardList, card];
        item.isAddCard = false;
        return item;
      } else {
        return item;
      }
    });

    setCardBoards(updatedCardBoards);
    setCardName(undefined);
  };

  const setIsAddCard = (index) => {
    let updatedCardBoards = JSON.parse(JSON.stringify(cardBoards));

    updatedCardBoards.map((item, idx) => {
      if (idx === index) {
        item.isAddCard = !item.isAddCard;
        return item;
      } else {
        return item;
      }
    });

    setCardBoards(updatedCardBoards);
  };

  return (
    <DashBoardWrapper>
      <div className="dashboard-main-container">
        {cardBoards ? (
          <>
            {cardBoards.map((list, index) => {
              return (
                <CardBoard
                  key={index}
                  list={list}
                  handleAddCards={() => handleAddCards(index)}
                  setCardName={(value) => setCardName(value)}
                  setIsAddCard={() => setIsAddCard(index)}
                  cardName={cardName}
                />
              );
            })}
          </>
        ) : null}

        {isAddList ? (
          <div className="add-list" sx={{ width: 275 }}>
            <CardContent className="">
              <TextField
                placeholder="Enter list title…"
                id="outlined-size-small"
                size="small"
                sx={{ width: 243, height: 22 }}
                onChange={(e) => setListName(e.currentTarget.value)}
              />
            </CardContent>
            <CardActions sx={{ alignItems: "center", ml: 1 }}>
              <Button
                disabled={!listName}
                variant="contained"
                onClick={() => handleAddList()}
                sx={{ mr: 1, height: 25 }}>
                Add list
              </Button>

              <CloseIcon onClick={() => setIsAddList(false)} />
            </CardActions>
          </div>
        ) : (
          <Button
            className="add-list-btn"
            sx={{ width: 275, justifyContent: "flex-start" }}
            onClick={() => setIsAddList(true)}>
            <AddIcon />
            Add another list
          </Button>
        )}
      </div>
    </DashBoardWrapper>
  );
};

export default Workspaces;
