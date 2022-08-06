import React, { useRef, useEffect, useState } from "react";
import { Card, CardHeader, CardContent, Button, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { CardBoardWrapper } from "./CardBoardStyle";
import CardModal from "../CardModal";

const Workspaces = (props) => {
  const { list, handleAddCards, setCardName, setIsAddCard, cardName } = props;

  const inputRef = useRef();
  const cardListRef = useRef();

  const [isEditList, setIsEditList] = useState(false);
  const [isEditCard, setIsEditCard] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(undefined);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let el2 = inputRef.current;

    if (el2) el2.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [inputRef.current]);

  useEffect(() => {
    let crdRef = cardListRef.current;
    if (!list.isAddCard) {
      if (crdRef) crdRef.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, [list.isAddCard]);

  return (
    <CardBoardWrapper>
      <Card variant="outlined" className="card-board" sx={{ width: 285, mr: 1, maxHeight: "95%" }}>
        <CardHeader
          className="card-header"
          title={list.title}
          action={<MoreHorizIcon onClick={() => setIsEditList(true)} />}
        />

        {isEditList ? (
          <div className="edit-manu">
            <div className="manu-item" onClick={() => setIsEditList(false)}>
              <DeleteForeverIcon />
              <p className="manu-text">Delete List</p>
            </div>
          </div>
        ) : null}

        <div
          className="card-list"
          ref={cardListRef}
          style={{
            overflowY: "auto",
            maxHeight: list.isAddCard ? "80vh" : "75vh",
            overflowX: "hidden",
            paddingBlockEnd: list.isAddCard ? 0 : 1,
          }}>
          {list.cardList.length > 0 && (
            <div className="card-list" ref={cardListRef} style={{ paddingBlockEnd: 2 }}>
              {list.cardList.map((card, index) => (
                <Card
                  className=""
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    marginInline: 1,
                    mb: 1,
                    mt: index === 0 ? 1 : 0,
                  }}>
                  <CardHeader
                    title={card.cardTitle}
                    action={
                      <MoreHorizIcon
                        onClick={() => {
                          setSelectedCardId(card.cardId);
                          setIsEditCard(true);
                        }}
                      />
                    }
                  />
                  {isEditCard && selectedCardId === card.cardId ? (
                    <div className="card-edit-manu">
                      <div className="manu-item" onClick={() => setIsEditCard(false)}>
                        <DeleteForeverIcon />
                        <p className="manu-text">Delete Card</p>
                      </div>
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          )}

          {list.isAddCard && (
            <div className="" ref={inputRef}>
              <CardContent className="">
                <TextField
                  placeholder="Enter a title for this card…"
                  id="outlined-size-small"
                  size="small"
                  sx={{ width: 243, height: 22 }}
                  onChange={(e) => setCardName(e.currentTarget.value)}
                />
              </CardContent>

              <CardActions>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (cardName) handleAddCards();
                  }}
                  sx={{ mr: 1, height: 25, ml: 1 }}>
                  Add Card
                </Button>

                <CloseIcon onClick={() => setIsAddCard()} />
              </CardActions>
            </div>
          )}
        </div>

        {list.isAddCard ? null : (
          <CardActions>
            <Button onClick={() => setIsAddCard()} sx={{ mr: 1, height: 25 }}>
              <AddIcon />
              Add Card
            </Button>
          </CardActions>
        )}
      </Card>

      <CardModal />
    </CardBoardWrapper>
  );
};

export default Workspaces;
