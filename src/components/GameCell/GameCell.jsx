import React, { useContext } from "react";
import { CellStyle } from "./GameCellStyled";
import { GameContext } from "../../contexts/GameContext";
import {checkForWinner} from '../../utils/GameUtils/index';

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
    updateBoard(index); 
     checkForWinner(game.board)
        
    // if(result) {

    // }

  }

  return (
    <CellStyle
      onClick={(cellClickHandler) => {
        
      }}
    >
      {cellItem}
    </CellStyle>
  );
}

export default GameCell;
