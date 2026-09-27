import { checkForWinner } from "../utils/GameUtils";

export const TURN_SECONDS = 10;

export const createRoundState = () => ({
  board: Array(9).fill(null),
  turn: "x",
  roundWinner: null,
  isDraw: false,
  winningCombo: null,
  secondsLeft: TURN_SECONDS,
  turnNumber: 0,
  hasStarted: false,
});

const otherChoice = (choice) => (choice === "x" ? "o" : "x");

export function gameReducer(state, action) {
  switch (action.type) {
    case "START_GAME":
      return state.hasStarted ? state : { ...state, hasStarted: true };
    case "SET_PLAYER_NAMES": {
      const player1Name = action.player1.trim().slice(0, 20) || "Player 1";
      const player2Name = action.player2.trim().slice(0, 20) || "Player 2";

      return {
        ...state,
        player1: { ...state.player1, name: player1Name },
        player2: { ...state.player2, name: player2Name },
        roundWinner: state.roundWinner ? {
          ...state.roundWinner,
          name: state.roundWinner.choice === state.player1.choice
            ? player1Name : player2Name,
        } : null,
      };
    }
    case "MAKE_MOVE": {
      const { index } = action;
      if (
        !Number.isInteger(index) || index < 0 || index > 8 ||
        state.board[index] !== null || state.roundWinner || state.isDraw
      ) {
        return state;
      }

      const board = [...state.board];
      board[index] = state.turn;
      const result = checkForWinner(board);
      if (result === "draw") {
        return {
          ...state,
          board,
          isDraw: true,
          player1: { ...state.player1, score: state.player1.score + 0.5 },
          player2: { ...state.player2, score: state.player2.score + 0.5 },
        };
      }
      if (result) {
        const winner = state.player1.choice === state.turn ? "player1" : "player2";
        return {
          ...state,
          board,
          winningCombo: result,
          roundWinner: state[winner],
          [winner]: { ...state[winner], score: state[winner].score + 1 },
        };
      }
      return {
        ...state,
        board,
        turn: otherChoice(state.turn),
        secondsLeft: TURN_SECONDS,
        turnNumber: state.turnNumber + 1,
      };
    }
    case "TICK": {
      // Ignore a timer callback belonging to an earlier turn.
      if (state.roundWinner || state.isDraw || action.turnNumber !== state.turnNumber) {
        return state;
      }
      if (state.secondsLeft > 1) {
        return {
          ...state,
          secondsLeft: state.secondsLeft - 1,
        };
      }
      return {
        ...state,
        turn: otherChoice(state.turn),
        secondsLeft: TURN_SECONDS,
        turnNumber: state.turnNumber + 1,
      };
    }
    case "RESET_ROUND":
      return {
        ...state,
        ...createRoundState(),
        hasStarted: true,
        turnNumber: state.turnNumber + 1,
        player1: { ...state.player1, choice: otherChoice(state.player1.choice) },
        player2: { ...state.player2, choice: otherChoice(state.player2.choice) },
      };
    case "RESTART_GAME":
      return {
        ...state,
        ...createRoundState(),
        turnNumber: state.turnNumber + 1,
        player1: { ...state.player1, choice: "x", score: 0 },
        player2: { ...state.player2, choice: "o", score: 0 },
      };
    default:
      return state;
  }
}

