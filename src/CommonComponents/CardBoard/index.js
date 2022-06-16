import React, { useRef } from "react";
import { Card, CardHeader, CardContent, Button, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

import { CardBoardWrapper } from "./CardBoardStyle";

const Workspaces = (props) => {
  const { list, handleAddCards, setCardName, setIsAddCard, cardName } = props;

  const inputRef = useRef();

  return (
    <CardBoardWrapper>
      <Card variant="outlined" className=".card-board" sx={{ width: 285, mr: 1, maxHeight: "95%" }}>
        <CardHeader className="card-header" title={list.title} />
        <div
          ref={inputRef}
          style={{
            overflowY: "auto",
            maxHeight: list.isAddCard ? "85vh" : "80vh",
            overflowX: "hidden",
            paddingBlockEnd: list.isAddCard ? 0 : 1,
          }}>
          {list.cardList.length > 0 && (
            <>
              {list.cardList.map((card) => (
                <CardContent sx={{ boxShadow: 3, borderRadius: 2, marginInline: 1 }}>{card.cardTitle}</CardContent>
              ))}
            </>
          )}

          {list.isAddCard && (
            <>
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
            </>
          )}
        </div>

        {list.isAddCard ? null : (
          <CardActions>
            <Button
              onClick={() => {
                setIsAddCard();
                inputRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
              }}
              sx={{ mr: 1, height: 25 }}>
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
