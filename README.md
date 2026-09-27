# Tic Tac Toe

Two players. Ten seconds. Three in a row.

A personalised React tic tac toe project built from a Zaio lesson, with a black-and-blue theme, player names and timed turns.

## Features

- Two players on one device, with Player 1 and Player 2 as default names.
- Random avatars generated when the app loads.
- A ten-second turn timer. Running out of time switches the turn without placing a mark.
- Row, column and diagonal wins, draw detection and blocked invalid moves.
- One point for a win, or half a point each for a draw.
- Continue starts another round, keeps scores and swaps X/O assignments.
- Restart clears the board and scores, keeps player names and returns to the home page.
- Responsive layouts, light/dark mode and optional music controls.

## Run locally

```sh
npm install
npm start
```

## Checks

```sh
npm test -- --watchAll=false --runInBand
npm run build
```

## State management

`src/contexts/GameContext.js` shares game state through Context and the `useGame` hook.
`src/reducers/gameReducer.js` handles `SET_PLAYER_NAMES`, `MAKE_MOVE`, `TICK`, `RESET_ROUND` and `RESTART_GAME`.
The game page runs the timer while a round is active. The reducer updates the board, result, scores and current player.

## Credits and development

The original app was built by following a Zaio lesson. Restart and scoring were originally implemented by me without AI. AI later assisted with reducer integration, gameplay fixes, the timer, responsive styling and personalisation.

Avatars use `react-nice-avatar`. The existing music playlist is retained. Game sound effects have been removed.

## Submission checklist

- [ ] Publish the latest code to GitHub.
- [ ] Deploy to Netlify or Vercel and verify direct links and refreshes work.
- [ ] Add the live site link here.
- [ ] Record a Loom under four minutes with face cam, a win and draw, the manual features, reducer explanation and timer demo.
- [ ] Add the Loom link here.
