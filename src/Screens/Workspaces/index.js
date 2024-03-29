import React, { useState, useRef, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { CardContent, Button, CardActions } from "@mui/material";

import { DashBoardWrapper } from "./WorkspacesStyle";
import CardBoard from "../../CommonComponents/CardBoard";
import {
  getDashboardLists,
  addDashboardLists,
  addCardToList,
  deleteList,
  deleteCard,
} from "../../Network/WorkSpaceAPICalls";

const Workspaces = () => {
  const [cardBoards, setCardBoards] = useState([]);
  const [isAddList, setIsAddList] = useState(false);
  const [listName, setListName] = useState(undefined);
  const [cardName, setCardName] = useState(undefined);

  const boardRef = useRef();
  const inputBoxRef = useRef();

  const getListData = async () => {
    let res = await getDashboardLists();

    setCardBoards(res.data.lists);
  };

  const handleAddList = async () => {
    const list = {
      title: listName,
    };

    let res = await addDashboardLists(list);

    if (res.data.success) getListData();
    setIsAddList(false);
    setListName(undefined);
  };

  const handleAddCards = async (listId) => {
    let updatedCardBoards = JSON.parse(JSON.stringify(cardBoards));

    const card = {
      listId: listId,
      cardTitle: cardName,
    };

    let res = await addCardToList(card);
    if (res.data.success) getListData();

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

  const handleDeleteList = async (listId) => {
    let formData = {
      listId: listId,
    };

    let res = await deleteList(formData);
    if (res.data.success) getListData();
  };

  const handleDeleteCard = async (listId, cardId) => {
    let formData = {
      listId: listId,
      cardId: cardId,
    };
    // console.log(formData);
    let res = await deleteCard(formData);
    if (res.data.success) getListData();
  };

  useEffect(() => {
    let el2 = inputBoxRef.current;

    if (el2) el2.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [inputBoxRef.current]);

  useEffect(() => {
    getListData();
  }, []);

  return (
    <DashBoardWrapper>
      <div className="dashboard-main-container .full-width" ref={boardRef}>
        <div
          style={{
            overflowY: "hidden",
            overflowX: "auto",
            paddingInlineEnd: isAddList ? "20px" : "10px",
            display: "flex",
          }}>
          <div className="board-list" ref={boardRef} style={{ paddingBlockEnd: 2 }}>
            {cardBoards.map((list, index) => {
              return (
                <CardBoard
                  key={index}
                  list={list}
                  handleAddCards={(listId) => handleAddCards(listId)}
                  setCardName={(value) => setCardName(value)}
                  setIsAddCard={() => setIsAddCard(index)}
                  cardName={cardName}
                  handleDeleteList={(listId) => handleDeleteList(listId)}
                  handleDeleteCard={(listId, cardId) => handleDeleteCard(listId, cardId)}
                />
              );
            })}

            {isAddList ? (
              <div className="add-list" sx={{ width: 275 }} ref={inputBoxRef}>
                <CardContent className="">
                  <TextField
                    placeholder="Enter list title…"
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: 245, height: 22, m: -1 }}
                    onChange={(e) => setListName(e.currentTarget.value)}
                    value={listName ? listName : ""}
                  />
                </CardContent>
                <CardActions sx={{ alignItems: "center", ml: 0 }}>
                  <Button
                    disabled={!listName}
                    variant="contained"
                    onClick={() => {
                      handleAddList();
                    }}
                    sx={{ mr: 1, height: 25 }}>
                    Add list
                  </Button>

                  <CloseIcon onClick={() => setIsAddList(false)} />
                </CardActions>
              </div>
            ) : (
              <div className="add-list-btn-container" sx={{ width: 263 }}>
                <CardContent className="">
                  <Button
                    className="add-list-btn"
                    sx={{ width: 263, justifyContent: "flex-start", mt: -3, ml: -2, mr: -2 }}
                    onClick={() => {
                      setIsAddList(true);
                    }}>
                    <AddIcon />
                    Add another list
                  </Button>
                </CardContent>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashBoardWrapper>
  );
};

export default Workspaces;
