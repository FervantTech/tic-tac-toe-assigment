import { createContext, useState } from "react";
import { genConfig } from "react-nice-avatar";
export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "x",
      name: "Devon",
      score: 0,
      avatarConfig: genConfig({ bgColor: "#8437f9",faceColor: "#e6c7a5",sex: "man", hairStyle: "mohawk" })
    },
    player2: {
      choice: "o",
      name: "Jaunder",
      score: 0,
      avatarConfig: genConfig({bgColor:"#1518bb" ,faceColor: "#e6d0a9", sex: "man", hairStyle: "mohawk" })
    },
    turn: "x",
    roundWinner: "",
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
    });
  };
  const toggleChoice = (choice) => (choice === "x" ? "o" : "x");
  const SwitchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "x",
    }));
  };
  const updateScore = (winner) => {

    if(winner === 'draw'){
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        score: prevGame.player1.score + 0.5,
      },
      player2: {
        ...prevGame.player2,
        score: prevGame.player2.score + 0.5,
      },
      roundWinner: prevGame[winner],

    }));

    }
    else{
          setGame((prevGame) => ({
      ...prevGame,
      [winner]: {
        ...prevGame[winner],
        score: prevGame[winner].score + 1,
      },
      roundWinner: prevGame[winner],
    }));
    }

  };

  const roundComplete = (result) => {
    if (game.turn === game.player1.choice && result !== "draw") {
      updateScore("player1");
      console.log("player 1 wins");
    } else if (game.turn === game.player2.choice && result !== "draw") {
      console.log("player 2 wins");
      updateScore("player2");
    } else {
      updateScore("draw")
    }
    SwitchTurn();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        roundComplete,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
