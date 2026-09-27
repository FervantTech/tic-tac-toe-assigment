import { createContext, useContext, useReducer } from "react";
import { genConfig } from "react-nice-avatar";
import { gameReducer, createRoundState } from "../reducers/gameReducer";

export const GameContext = createContext({});

const createInitialGame = () => ({
  ...createRoundState(),
  player1: {
    choice: "x",
    name: "Player 1",
    score: 0,
    avatarConfig: genConfig(),
  },
  player2: {
    choice: "o",
    name: "Player 2",
    score: 0,
    avatarConfig: genConfig(),
  },

});

export const GameContextProvider = ({ children }) => {
  const [game, dispatch] = useReducer(gameReducer, undefined, createInitialGame);

  const updateBoard = (index) => {
    dispatch({ type: "MAKE_MOVE", index });
  };

  const resetBoard = () => {
    dispatch({ type: "RESET_ROUND" });
  };

  const restartGame = () => {
    dispatch({ type: "RESTART_GAME" });
  };

  const updatePlayerNames = (player1, player2) => {
    dispatch({ type: "SET_PLAYER_NAMES", player1, player2 });
  };

  return (
    <GameContext.Provider
      value={{ game, dispatch, updateBoard, resetBoard, restartGame, updatePlayerNames }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
