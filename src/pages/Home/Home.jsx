import React, { useState } from "react";

import { Title, Subtitle, Container } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../contexts/GameContext";
import { PlayerForm, NameFields, NameField } from "./Home.styled";

function Home() {
  const navigate = useNavigate();
  const { game, updatePlayerNames } = useGame();
  const [player1Name, setPlayer1Name] = useState(game.player1.name);
  const [player2Name, setPlayer2Name] = useState(game.player2.name);

  const playHandler = (event) => {
    event.preventDefault();
    updatePlayerNames(player1Name, player2Name);
    navigate("/game-on");
  };
  return (
    <div>
      <Container $columnBased>
        <Title>Tic Tac Toe</Title>
        <Subtitle>Play with your friends, higher score wins!</Subtitle>
        <PlayerForm onSubmit={playHandler}>
          <NameFields>
            <NameField>
              Player 1
              <input value={player1Name} onChange={(event) => setPlayer1Name(event.target.value)}
                maxLength={20} placeholder="Player 1" autoComplete="off" />
            </NameField>
            <NameField>
              Player 2
              <input value={player2Name} onChange={(event) => setPlayer2Name(event.target.value)}
                maxLength={20} placeholder="Player 2" autoComplete="off" />
            </NameField>
          </NameFields>
          <Button type="submit">
            {game.hasStarted ? "Resume Game" : "Play Now"}
          </Button>
        </PlayerForm>
      </Container>
    </div>
  );
}

export default Home;
