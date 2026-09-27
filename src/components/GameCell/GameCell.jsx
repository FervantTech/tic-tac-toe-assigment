import React from "react";
import { CellStyle } from "./GameCellStyled";
import { ReactComponent as IconX } from "../../assets/svgs/x.svg";
import { ReactComponent as IconXOutline } from "../../assets/svgs/x-outlined.svg";
import { ReactComponent as IconO } from "../../assets/svgs/o.svg";
import { ReactComponent as IconOOutline } from "../../assets/svgs/o-outlined.svg";

function GameCell({ cellItem, index, isWinningCell, turn, disabled, onMove }) {

  const cellClickHandler = () => {
    onMove(index);
  };

  return (
    <CellStyle
      $isWinningCell={isWinningCell ?? false}
      disabled={disabled}
      aria-label={`Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}: ${cellItem ? cellItem.toUpperCase() : "empty"}`}
      onClick={cellClickHandler}
    >
      {cellItem === "x" ? (
        <IconX />
      ) : cellItem === "o" ? (
        <IconO />
      ) : disabled ? null : turn === "x" ? (
        <IconXOutline className="outlineIcon" />
      ) : (
        <IconOOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
}

export default GameCell;
