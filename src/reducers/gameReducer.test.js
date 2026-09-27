import { createRoundState, gameReducer, TURN_SECONDS } from "./gameReducer";

const initial = () => ({
  ...createRoundState(),
  player1: { name: "Player 1", choice: "x", score: 0 },
  player2: { name: "Player 2", choice: "o", score: 0 },
});
const move = (state, index) => gameReducer(state, { type: "MAKE_MOVE", index });
const play = (moves, state = initial()) => moves.reduce(move, state);
const tick = (state) => gameReducer(state, { type: "TICK", turnNumber: state.turnNumber });

test("names are trimmed, blank names use defaults, and restart keeps names", () => {
  const named = gameReducer(initial(), { type: "SET_PLAYER_NAMES", player1: "  Alex  ", player2: "   " });
  expect(named.player1.name).toBe("Alex");
  expect(named.player2.name).toBe("Player 2");
  const won = play([0, 3, 1, 4, 2], named);
  expect(won.roundWinner.name).toBe("Alex");
  const renamed = gameReducer(won, { type: "SET_PLAYER_NAMES", player1: "Sam", player2: "Jo" });
  expect(renamed.roundWinner.name).toBe("Sam");
  expect(renamed.player1.score).toBe(1);
  const restarted = gameReducer(renamed, { type: "RESTART_GAME" });
  expect(restarted.player1.name).toBe("Sam");
  expect(restarted.player2.name).toBe("Jo");
});

test("moves alternate without mutating the original board; occupied and invalid cells are rejected", () => {
  const start = initial();
  Object.freeze(start.board);
  const next = move(start, 0);
  expect(start.board).toEqual(Array(9).fill(null));
  expect(next.board[0]).toBe("x");
  expect(next.turn).toBe("o");
  expect(move(next, 0)).toBe(next);
  for (const index of [-1, 9, 1.5, undefined]) expect(move(next, index)).toBe(next);
  expect(move(next, 1).board[1]).toBe("o");
});

test.each([
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
])("detects the winning line %i %i %i", (a, b, c) => {
  const other = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter((i) => ![a, b, c].includes(i));
  const won = play([a, other[0], b, other[1], c]);
  expect(won.roundWinner.name).toBe("Player 1");
  expect(won.player1.score).toBe(1);
  expect(won.winningCombo).toEqual([a, b, c]);
  expect(move(won, other[2])).toBe(won);
  expect(tick(won)).toBe(won);
});

test("O wins and a ninth-move win takes priority over a draw", () => {
  expect(play([0, 3, 1, 4, 8, 5]).roundWinner.name).toBe("Player 2");
  const won = play([0, 1, 4, 2, 5, 3, 6, 7, 8]);
  expect(won.roundWinner.choice).toBe("x");
  expect(won.isDraw).toBe(false);
});

test("draw awards half a point each exactly once and stops play and time", () => {
  const draw = play([0, 1, 2, 4, 3, 5, 7, 6, 8]);
  expect(draw.isDraw).toBe(true);
  expect(draw.roundWinner).toBeNull();
  expect(draw.player1.score).toBe(0.5);
  expect(draw.player2.score).toBe(0.5);
  expect(move(draw, 0)).toBe(draw);
  expect(tick(draw)).toBe(draw);
});

test("timeout switches turn without changing the board or scores; moves reset the clock", () => {
  let state = initial();
  for (let i = 0; i < TURN_SECONDS - 1; i++) state = tick(state);
  expect(state.turn).toBe("x");
  expect(state.secondsLeft).toBe(1);
  state = tick(state);
  expect(state.turn).toBe("o");
  expect(state.board).toEqual(Array(9).fill(null));
  expect(state.player1.score).toBe(0);
  expect(state.secondsLeft).toBe(TURN_SECONDS);
  const next = move(tick(state), 0);
  expect(next.board[0]).toBe("o");
  expect(next.secondsLeft).toBe(TURN_SECONDS);
  expect(gameReducer(next, { type: "TICK", turnNumber: state.turnNumber })).toBe(next);
});

test("continue clears results and swaps symbols; restart resets both scores and symbols", () => {
  const won = play([0, 3, 1, 4, 2]);
  const next = gameReducer(won, { type: "RESET_ROUND" });
  expect(next.board).toEqual(Array(9).fill(null));
  expect(next.roundWinner).toBeNull();
  expect(next.winningCombo).toBeNull();
  expect(next.isDraw).toBe(false);
  expect(next.turn).toBe("x");
  expect(next.secondsLeft).toBe(TURN_SECONDS);
  expect(next.player1).toMatchObject({ choice: "o", score: 1 });
  const secondWin = play([0, 3, 1, 4, 2], next);
  expect(secondWin.roundWinner.name).toBe("Player 2");
  expect(secondWin.player2.score).toBe(1);
  const restart = gameReducer(secondWin, { type: "RESTART_GAME" });
  expect(restart.player1).toMatchObject({ choice: "x", score: 0 });
  expect(restart.player2).toMatchObject({ choice: "o", score: 0 });
  expect(restart.board).toEqual(Array(9).fill(null));
  expect(restart.roundWinner).toBeNull();
  expect(restart.secondsLeft).toBe(TURN_SECONDS);
});

