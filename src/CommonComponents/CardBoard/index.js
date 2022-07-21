import React, { useRef, useEffect } from "react";
import { Card, CardHeader, CardContent, Button, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

import { CardBoardWrapper } from "./CardBoardStyle";

const Workspaces = (props) => {
  const { list, handleAddCards, setCardName, setIsAddCard, cardName } = props;

  const inputRef = useRef();
  const cardListRef = useRef();

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
      <Card variant="outlined" className=".card-board" sx={{ width: 285, mr: 1, maxHeight: "95%" }}>
        <CardHeader className="card-header" title={list.title} />
        <div
          className="card-list"
          ref={cardListRef}
          style={{
            overflowY: "scroll",
            maxHeight: list.isAddCard ? "80vh" : "70vh",
            overflowX: "hidden",
            paddingBlockEnd: list.isAddCard ? 0 : 1,
          }}>
          {list.cardList.length > 0 && (
            <div className="card-list" ref={cardListRef} style={{ paddingBlockEnd: 2 }}>
              {list.cardList.map((card, index) => (
                <CardContent sx={{ boxShadow: 3, borderRadius: 2, marginInline: 1, mb: 1, mt: index === 0 ? 1 : 0 }}>
                  {card.cardTitle}
                </CardContent>
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
                  Add list
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
    </CardBoardWrapper>
  );
};

export default Workspaces;
