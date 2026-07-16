import React, { useContext } from "react";
import { CellStyle } from "./GameCellStyled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils/index";
import { ReactComponent as IconX } from "../../assets/svgs/x.svg";
import { ReactComponent as IconXOutline } from "../../assets/svgs/x-outlined.svg";
import { ReactComponent as IconO } from "../../assets/svgs/o.svg";
import { ReactComponent as IconOOutline } from "../../assets/svgs/o-outlined.svg";
import { ModalContext } from "../../contexts/ModalContext";
import { RoundOverModal } from "../Modal/RoundOverModal/RoundOverModal";

function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const {handleModal} = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
     const result = checkForWinner(game.board)
    if(result){
      roundComplete(result);
      handleModal(<RoundOverModal />)
    }
    
    if (cellItem === "x") {
      return (
        <CellStyle>
          <IconX />
        </CellStyle>
      );
    } else if (cellItem === "o") {
      return (
        <CellStyle>
          <IconO />
        </CellStyle>
      );
    }
  };

  <CellStyle></CellStyle>;

 return (
  <CellStyle onClick={cellClickHandler}>
    {cellItem === "x" ? (
      <IconX />
    ) : cellItem === "o" ? (
      <IconO />
    ) : game.turn === "x" ? (
      <IconXOutline  className="outlineIcon"/>
    ) : (
      <IconOOutline  className="outlineIcon"/>
    )}
  </CellStyle>
);
}

export default GameCell;
