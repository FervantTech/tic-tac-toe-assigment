import React, { useContext, useEffect } from "react";
import { GameBoardStyle, GameLayout, BoardSection, GameStatus, TimerText } from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { useGame } from "../../contexts/GameContext";
import Player from "../../components/Player/Player";
import { ModalContext } from "../../contexts/ModalContext";
import { RoundOverModal } from "../../components/Modal/RoundOverModal/RoundOverModal";

function Game() {
  const { game, dispatch, updateBoard } = useGame();
  const { handleModal } = useContext(ModalContext);
  const roundOver = Boolean(game.roundWinner || game.isDraw);

  useEffect(() => {
    dispatch({ type: "START_GAME" });
  }, [dispatch]);

  useEffect(() => {
    if (roundOver) return;
    const timer = setInterval(() => {
      dispatch({ type: "TICK", turnNumber: game.turnNumber });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch, game.turnNumber, roundOver]);

  useEffect(() => {
    if (!roundOver) return;
    const modalTimer = setTimeout(() => {
      handleModal(<RoundOverModal />);
    }, 2000);
    return () => clearTimeout(modalTimer);
  }, [roundOver, game.roundWinner, handleModal]);

  let status = `Next Player: ${game.turn.toUpperCase()}`;

  if (game.roundWinner) {
    status = `Winner: ${game.roundWinner.choice.toUpperCase()} (${game.roundWinner.name})`;
  } else if (game.isDraw) {
    status = "Draw!";
  }

  return (
    <GameLayout>
      <Player
        player={game.player1}
        isPlayerActive={!roundOver && game.player1.choice === game.turn}
      />
      <BoardSection>
        <GameStatus role="status">{status}</GameStatus>
        <TimerText role="timer" $urgent={!roundOver && game.secondsLeft <= 3}>
          {roundOver ? "Round complete" : `Time left: ${game.secondsLeft}s`}
        </TimerText>
        <p>10 seconds per turn. When time runs out, the turn switches.</p>
        <GameBoardStyle aria-label="Tic tac toe board">
          {game.board.map((item, index) => (
            <GameCell
              key={index}
              cellItem={item}
              index={index}
              isWinningCell={game.winningCombo?.includes(index)}
              turn={game.turn}
              disabled={item !== null || roundOver}
              onMove={updateBoard}
            />
          ))}
        </GameBoardStyle>
      </BoardSection>
      <Player
        player={game.player2}
        isPlayerActive={!roundOver && game.player2.choice === game.turn}
      />
    </GameLayout>
  );
}

export default Game;
